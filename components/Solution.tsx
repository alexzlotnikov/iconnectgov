import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Database, ArrowRightLeft, MonitorSmartphone, ShieldCheck } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <SectionWrapper id="solution" className="bg-white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">How it works</h2>
        <p className="text-xl text-slate-600 font-normal leading-relaxed">
          iConnectGov acts as a <span className="text-slate-900 font-semibold">neutral bridge</span> between courts and patrol vehicles, enabling secure, real-time data exchange without new hardware.
        </p>
      </div>

      {/* Diagram Section */}
      <div className="relative max-w-5xl mx-auto mb-20 py-12 px-4">
        
        {/* Connection Track */}
        <div className="absolute top-1/2 left-4 right-4 h-3 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-blue-100/50"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
             />
        </div>

        {/* Animated Data Particles */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-12 overflow-visible pointer-events-none">
             {[0, 1, 2].map((i) => (
                 <motion.div 
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-0"
                    animate={{ 
                        left: ["0%", "100%"],
                        opacity: [0, 1, 0] 
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 1,
                        ease: "easeInOut" 
                    }}
                 />
             ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Left Node */}
            <div className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white rounded-2xl border-2 border-slate-100 shadow-sm flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-md transition-all">
                    <Database className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">Courts</h3>
                    <p className="text-sm text-slate-500">Warrant Data Source</p>
                </div>
            </div>

            {/* Middle Node */}
            <div className="flex flex-col items-center gap-4 -mt-6 md:mt-0">
                <div className="w-28 h-28 bg-blue-600 rounded-2xl shadow-xl shadow-blue-900/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <ArrowRightLeft className="w-12 h-12 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-blue-900 text-lg">iConnectGov Bridge</h3>
                    <p className="text-sm text-blue-600 font-medium">Real-time Translation</p>
                </div>
            </div>

            {/* Right Node */}
            <div className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white rounded-2xl border-2 border-slate-100 shadow-sm flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-md transition-all">
                    <MonitorSmartphone className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">Patrol Laptop / ECA</h3>
                    <p className="text-sm text-slate-500">Existing Hardware</p>
                </div>
            </div>
        </div>
      </div>

      {/* Feature Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
            { text: "Runs on existing fleet computers", sub: "No new hardware required" },
            { text: "Uses secure payment providers", sub: "Data never touches agency servers" },
            { text: "Updates warrant status in real time", sub: "Instant clearance" }
        ].map((item, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
            >
                <div className="mt-1">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                    <p className="font-bold text-slate-900">{item.text}</p>
                    <p className="text-sm text-slate-500 mt-1">{item.sub}</p>
                </div>
            </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Solution;