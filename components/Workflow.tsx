import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Scan, QrCode, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Scan & Alert",
    desc: "Officer scans ID during traffic stop. System shows active warrants with amounts.",
    icon: Scan,
  },
  {
    id: 2,
    title: "QR Code Generation",
    desc: "Officer prints secure QR code. Driver scans with their smartphone to access payment portal.",
    icon: QrCode,
  },
  {
    id: 3,
    title: "Payment & Resolution",
    desc: "Driver pays via mobile. Warrant clears instantly. No arrest, no jail, everyone continues safely.",
    icon: CheckCircle2,
  },
];

const Workflow: React.FC = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Streamlined from start to finish.</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Animated Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0">
            <motion.div 
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, idx) => (
            <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center group"
            >
                <div className="w-24 h-24 bg-white rounded-2xl border-2 border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-blue-500 group-hover:shadow-blue-500/20 group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <div className="inline-block bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest shadow-md">
                    Step 0{step.id}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Workflow;