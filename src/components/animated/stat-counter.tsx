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
      className="relative flex flex-col items-center justify-center p-[3px] rounded-2xl bg-[#1e293b] overflow-hidden"
    >
      {/* ১. নিখুঁত ও সুষম রোটেশন লেয়ার */}
      <div className="absolute inset-[-50%] overflow-hidden pointer-events-none flex items-center justify-center">
        <div 
          className="w-[300px] h-[300px]"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #8F5EF0 0deg, #4E86FC 180deg, transparent 270deg, transparent 360deg)',
            animation: 'rotateBorder 4s linear infinite',
          }}
        />
      </div>

      {/* ২. গ্লোয়িং বা ব্লার ইফেক্ট */}
      <div className="absolute inset-[-50%] overflow-hidden pointer-events-none flex items-center justify-center opacity-70 blur-[12px] z-0">
        <div 
          className="w-[300px] h-[300px]"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #8F5EF0 0deg, #4E86FC 180deg, transparent 270deg, transparent 360deg)',
            animation: 'rotateBorder 4s linear infinite',
          }}
        />
      </div>

      {/* ৩. মূল কন্টেন্ট বডি */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6 rounded-[13px] bg-[#1e293b]">
        <div className="flex items-baseline gap-1">
          <motion.span className="font-display text-4xl md:text-5xl font-bold tabular-nums text-white">{rounded}</motion.span>
          <span className="font-display text-3xl md:text-4xl text-[#8F5EF0] font-bold">{suffix}</span>
        </div>
        <span className="mt-2 text-[18px] font-mono uppercase tracking-widest text-slate-400">{label}</span>
      </div>

      {/* ৪. পারফেক্ট রোটেশন কিফ্রেম */}
      <style>{`
        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
}