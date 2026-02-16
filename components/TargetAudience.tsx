import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Shield, Gavel, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "Law Enforcement",
    desc: "Patrol workflow integration for safer, faster stops.",
    icon: Shield,
  },
  {
    title: "Courts",
    desc: "Seamless data synchronization and resolution updates.",
    icon: Gavel,
  },
  {
    title: "Processing Partners",
    desc: "Secure, compliant payment handling integration.",
    icon: Server,
  },
];

const TargetAudience: React.FC = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Built for</h2>
        <div className="h-1 w-12 bg-blue-600 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="group p-6 rounded-lg border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex p-3 rounded-lg bg-white border border-slate-200 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
              <card.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
            <p className="text-slate-600 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TargetAudience;