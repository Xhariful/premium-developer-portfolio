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
      className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-background overflow-hidden"
    >
      {/* শুধু বর্ডার লাইনে রকেটের মতো রিং বা কালার ঘোরার ইফেক্ট */}
      <div className="absolute -inset-[500%] opacity-50 pointer-events-none flex items-center justify-center animate-border-spin">
        <div className="w-[300%] h-[300%] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* বর্ডারের ভেতরের মূল ব্যাকগ্রাউন্ড ও বর্ডার শেপ */}
      <div className="absolute inset-[1px] rounded-2xl bg-background z-0" />
      <div className="absolute inset-0 rounded-2xl border border-border/60 pointer-events-none z-10" />

      {/* কার্ডের আসল কন্টেন্ট */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="flex items-baseline gap-1">
          <motion.span className="font-display text-4xl md:text-5xl font-bold tabular-nums">{rounded}</motion.span>
          <span className="font-display text-3xl md:text-4xl text-primary font-bold">{suffix}</span>
        </div>
        <span className="mt-2 text-[18px] font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
      </div>
    </motion.div>
  );
}