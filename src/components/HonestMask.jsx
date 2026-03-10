import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate, useTransform } from 'framer-motion';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <CursorContext.Provider value={{ cursorX, cursorY, mouseX, mouseY, isHovering, setIsHovering }}>
            {children}
            <CustomCursor />
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);

const CustomCursor = () => {
    const { cursorX, cursorY, isHovering } = useCursor();

    return (
        <motion.div
            style={{
                left: cursorX,
                top: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            className="fixed pointer-events-none z-[9999] flex items-center justify-center"
            animate={{
                width: isHovering ? 300 : 12,
                height: isHovering ? 300 : 12,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        >
            <div className="w-full h-full rounded-full bg-accent" />
        </motion.div>
    );
};

export const DualText = ({ professional, honest }) => {
    const { setIsHovering, cursorX, cursorY, mouseX, mouseY } = useCursor();
    const [isLocalHover, setIsLocalHover] = useState(false);
    const containerRef = useRef(null);
    const rectRef = useRef({ left: 0, top: 0, right: 0, bottom: 0 });
    const hoverRef = useRef(false);
    hoverRef.current = isLocalHover;

    // Store rect in a ref (no re-render) for high-frequency scroll checks
    const updateRect = () => {
        if (containerRef.current) {
            const r = containerRef.current.getBoundingClientRect();
            rectRef.current = { left: r.left, top: r.top, right: r.right, bottom: r.bottom };

            const mx = mouseX.get();
            const my = mouseY.get();
            const inside = mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom;

            if (hoverRef.current && !inside) {
                setIsHovering(false);
                setIsLocalHover(false);
            } else if (!hoverRef.current && inside) {
                setIsHovering(true);
                setIsLocalHover(true);
            }
        }
    };

    useEffect(() => {
        // Small delay to let splash / animations finish before first measurement
        const t = setTimeout(updateRect, 100);
        window.addEventListener('resize', updateRect);
        document.addEventListener('scroll', updateRect, true);
        return () => {
            clearTimeout(t);
            window.removeEventListener('resize', updateRect);
            document.removeEventListener('scroll', updateRect, true);
        };
    }, []);

    // Derive mask position from the live ref value (no state lag)
    const relativeX = useTransform(cursorX, x => x - rectRef.current.left);
    const relativeY = useTransform(cursorY, y => y - rectRef.current.top);
    const maskImage = useMotionTemplate`radial-gradient(150px circle at ${relativeX}px ${relativeY}px, black 100%, transparent 100%)`;

    return (
        <span
            className="relative inline-grid group"
            onMouseEnter={() => {
                if (containerRef.current) {
                    const r = containerRef.current.getBoundingClientRect();
                    rectRef.current = { left: r.left, top: r.top, right: r.right, bottom: r.bottom };
                }
                setIsHovering(true);
                setIsLocalHover(true);
            }}
            onMouseLeave={() => { setIsHovering(false); setIsLocalHover(false); }}
            ref={containerRef}
            style={{ cursor: 'none' }}
        >
            {/* Professional Text – always fully visible */}
            <span className="[grid-area:1/1] whitespace-nowrap text-inherit flex items-center justify-center pointer-events-none">
                {professional}
            </span>

            {/* Honest Text – masked to reveal only inside the cursor circle */}
            <motion.span
                className="[grid-area:1/1] pointer-events-none text-background font-black whitespace-nowrap flex items-center justify-center z-[10000]"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                    opacity: isLocalHover ? 1 : 0,
                }}
            >
                {honest}
            </motion.span>
        </span>
    );
};
