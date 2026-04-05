"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId;

    const updateCursorPosition = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.35;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      rafId = requestAnimationFrame(updateCursorPosition);
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onHover = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], input, textarea, select, label',
      );
      hoverRef.current = !!target;
      cursor.classList.toggle("hover", hoverRef.current);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onHover);
    window.addEventListener("mouseout", onHover);
    rafId = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onHover);
      window.removeEventListener("mouseout", onHover);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden />;
}




