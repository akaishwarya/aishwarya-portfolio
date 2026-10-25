import React, { useEffect, useRef, useState } from "react";

/**
 * Fades + slides its children into view EVERY time they scroll on screen
 * (scroll down, scroll back up, scroll down again - it animates each time).
 *   direction: "up" (default) | "left" | "right" | "zoom"
 *   delay:     milliseconds to wait (use it to stagger a list)
 *   as:        which HTML tag to render (default "div")
 */
function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    // Show: when the element comes into view.
    const showObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Reset: only once it is well outside the screen (the extra margin stops
    // the animation from flickering when you stop scrolling near the edge).
    const hideObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setVisible(false);
      },
      { threshold: 0, rootMargin: "160px 0px 160px 0px" }
    );

    showObserver.observe(node);
    hideObserver.observe(node);

    return () => {
      showObserver.disconnect();
      hideObserver.disconnect();
    };
  }, []);

  const classes = [
    "reveal",
    `reveal--${direction}`,
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
