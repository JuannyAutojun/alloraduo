import { motion, useInView, useMotionValue, useSpring, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span" | "article";
};

export function Reveal({ children, className, delay = 0, y = 16, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "", prefix = "", duration = 1.6 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = `${prefix}${to}${suffix}`;
      return;
    }
    mv.set(to);
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
    });
    return unsub;
  }, [inView, to, prefix, suffix, mv, spring, reduce]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}