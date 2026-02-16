import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Search, Smartphone, CheckCircle2, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Real-Time Warrant Check",
    desc: "Officer scans driver's ID. i.WRN instantly searches connected court databases and displays any active fine-only warrants with amounts owed.",
    icon: Search
  },
  {
    title: "Secure QR Code Payment",
    desc: "Officer prints a secure QR code. Driver scans it with their smartphone and pays using Apple Pay, card, or can apply for a payment plan.",
    icon: Smartphone
  },
  {
    title: "Instant Clearance",
    desc: "Payment processes immediately. Warrant is cleared in the court system in real-time. Everyone is back on their way in minutes.",
    icon: CheckCircle2
  },
  {
    title: "Built for Law Enforcement",
    desc: "FBI-CJIS compliant security. Runs on Azure GovCloud. Payment data handled by certified processors—never stored in police systems.",
    icon: Lock
  }
];

const HowItWorks: React.FC = () => {
  return (
    <SectionWrapper id="how-it-works" className="bg-slate-50 border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                    From traffic stop to cleared warrant in 2 minutes. Simple, secure, and seamless for everyone involved.
                </h2>
                <div className="hidden lg:block">
                     <a href="#cta" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                        Get Started <ChevronRight className="w-5 h-5 ml-1" />
                     </a>
                </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="shrink-0">
                    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                        <feature.icon className="w-7 h-7 text-white" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;