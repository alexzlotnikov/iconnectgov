import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, ShieldCheck, Database } from 'lucide-react';

const stats = [
  { label: "Minutes to Clear", value: "2", icon: Clock, suffix: "Min" },
  { label: "Cost to Agencies", value: "0", icon: DollarSign, prefix: "$", suffix: "" },
  { label: "Officer Safety", value: "✓", icon: ShieldCheck, suffix: "" },
  { label: "Courts Connecting", value: "2,800", icon: Database, suffix: "+" },
];

const Stats: React.FC = () => {
  return (
    <div className="bg-slate-900 py-16 border-t border-slate-800 relative overflow-hidden group">
      {/* 1. Radar Scan Effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-scan"></div>
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>

      {/* 2. Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-slate-800/50">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center group/item"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover/item:bg-slate-750 group-hover/item:border-blue-500/40 group-hover/item:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                <stat.icon className="w-6 h-6 text-blue-400 group-hover/item:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight flex items-baseline justify-center gap-0.5">
                 {stat.prefix && <span className="text-2xl text-slate-400">{stat.prefix}</span>}
                 {stat.value}
                 {stat.suffix && <span className="text-2xl text-blue-400">{stat.suffix}</span>}
              </div>
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest group-hover/item:text-slate-300 transition-colors">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;