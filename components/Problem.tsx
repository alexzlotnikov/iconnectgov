import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { AlertCircle, FileX, Clock, Link2Off } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  return (
    <SectionWrapper className="bg-slate-50 relative border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">What breaks today</h2>
            <div className="h-1.5 w-16 bg-red-500 rounded-full"></div>
          </div>
          
          <ul className="space-y-6">
            {[
                { icon: AlertCircle, text: "Out-of-jurisdiction warrants aren’t visible during stops." },
                { icon: Link2Off, text: "Court systems aren’t connected, so data doesn’t travel." },
                { icon: Clock, text: "Legacy workflows increase time on the roadside." }
            ].map((item, i) => (
                 <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                 >
                    <div className="p-2 bg-red-50 rounded-lg shrink-0">
                        <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-slate-700 text-lg font-medium">{item.text}</span>
                </motion.li>
            ))}
          </ul>
        </div>

        {/* Visual: The Disconnected State */}
        <div className="relative h-72 w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex items-center justify-between overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-slate-50/50 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center">
                    <div className="w-16 h-2 bg-slate-100 rounded mb-2"></div>
                    <div className="w-10 h-2 bg-slate-100 rounded"></div>
                </div>
                <span className="text-sm font-bold text-slate-400">Court Database</span>
            </div>

            {/* The Break */}
            <div className="relative z-10 flex-1 h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Link2Off className="w-8 h-8 text-red-400" />
                    <span className="text-xs font-semibold text-red-400 bg-red-50 px-2 py-1 rounded">No Connection</span>
                </div>
                {/* Dashed Line Background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
                    <line x1="0" y1="50%" x2="40%" y2="50%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
                    <line x1="60%" y1="50%" x2="100%" y2="50%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full"></div>
                </div>
                <span className="text-sm font-bold text-slate-400">Patrol Officer</span>
            </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Problem;