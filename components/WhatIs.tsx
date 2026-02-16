import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Link, Zap, Laptop } from 'lucide-react';

const features = [
  {
    title: "Connecting 2,800+ Courts",
    desc: "Connecting warrant data across Texas jurisdictions into one real-time system accessible from any patrol vehicle.",
    icon: Link,
    color: "bg-blue-600",
    gradient: "from-blue-50 to-white"
  },
  {
    title: "2 Min Resolution Time",
    desc: "Officers can identify and clear eligible fine-only warrants in just 2 minutes via secure QR code payment.",
    icon: Zap,
    color: "bg-indigo-600",
    gradient: "from-indigo-50 to-white"
  },
  {
    title: "$0 Hardware Cost",
    desc: "Hardware-agnostic software runs on existing patrol vehicle laptops. No costly equipment replacements needed.",
    icon: Laptop,
    color: "bg-slate-800",
    gradient: "from-slate-100 to-white"
  }
];

const WhatIs: React.FC = () => {
  return (
    <SectionWrapper id="what-is" className="bg-white relative">
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Shape 1 - Top Right */}
            <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-slate-50 border border-slate-100 rounded-3xl transform rotate-12 opacity-50"
                animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Shape 2 - Middle Left */}
            <motion.div 
                className="absolute top-1/2 left-[-50px] w-40 h-40 bg-blue-50/50 border border-blue-100 rounded-full opacity-60"
                animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
             {/* Shape 3 - Bottom Right */}
            <motion.div 
                className="absolute bottom-0 right-[10%] w-32 h-32 bg-indigo-50/50 rounded-2xl transform rotate-45"
                animate={{ rotate: [45, 90, 45] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
        </div>

      <div className="text-center mb-20 max-w-3xl mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
        >
            <span className="py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">Infrastructure</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">What is i.WRN?</h2>
        <p className="text-2xl text-blue-600 font-bold mb-6">The Warrant Resolution Network</p>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          i.WRN is digital infrastructure that connects thousands of isolated court databases directly to patrol vehicles, enabling secure, instant warrant resolution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className={`relative p-8 rounded-3xl border border-slate-100 bg-gradient-to-b ${feature.gradient} hover:shadow-xl hover:border-slate-200 transition-all duration-300 group overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/60 transition-colors"></div>
            
            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-slate-900/5 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatIs;