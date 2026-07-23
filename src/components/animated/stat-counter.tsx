/**
 * StatCounter — animated number counter that triggers when in viewport.
 */
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, { duration: 1.8, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, value, motionVal]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="flex items-baseline gap-1">
        <motion.span className="font-display text-4xl md:text-5xl font-bold tabular-nums">{rounded}</motion.span>
        <span className="font-display text-3xl md:text-4xl text-primary font-bold">{suffix}</span>
      </div>
      <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
    </motion.div>
  );
}
