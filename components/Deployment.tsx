import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Check, Monitor, Users, Headphones, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Deployment: React.FC = () => {
  return (
    <SectionWrapper id="deployment" className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        <div>
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Deployment & Support</h2>
          
          <div className="space-y-8">
            {[
              { icon: Monitor, title: "Works with existing systems", desc: "No new hardware required. Integrates seamlessly with your existing fleet setups and court databases." },
              { icon: Users, title: "Pilot onboarding", desc: "We handle the full configuration and provide comprehensive training materials for your agency." },
              { icon: Headphones, title: "Dedicated Support", desc: "24/7 access to our technical team for on-site and remote assistance." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-5">
                <div className="bg-slate-800 p-3 rounded-lg h-fit border border-slate-700">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-base leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Checklist Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl">
           <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
             <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold">Implementation Roadmap</h3>
             <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-900/50">4 Weeks Avg.</span>
           </div>
           
           <ul className="space-y-0">
              {['Agency Configuration', 'Court Data Sync', 'Officer Training', 'Go Live'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="group flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-colors border-l-2 border-transparent hover:border-blue-500"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                  >
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <Check className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                      </div>
                      <span className="font-medium text-slate-200">{item}</span>
                      <ChevronRight className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.li>
              ))}
           </ul>
           
           <div className="mt-8 pt-6 border-t border-slate-700 text-center">
             <p className="text-sm text-slate-400">Ready to start? <a href="#cta" className="text-blue-400 hover:text-blue-300 font-medium">Request access →</a></p>
           </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Deployment;