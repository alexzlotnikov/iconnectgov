import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Shield, Building2, Landmark, Users, Home, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const audiences = [
  {
    title: "Law Enforcement Officers",
    desc: "Stay safer with vehicle-based resolution. Spend 2 minutes instead of 2-3 hours per warrant. Get back on patrol faster with less paperwork.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200"
  },
  {
    title: "Police & Sheriff Agencies",
    desc: "Zero implementation cost. Keep officers on patrol longer. Reduce arrest processing time and resources. Access real-time analytics.",
    icon: Building2,
    color: "bg-indigo-50 text-indigo-600",
    border: "hover:border-indigo-200"
  },
  {
    title: "Courts & Municipalities",
    desc: "Collect outstanding warrants efficiently. Automated payment processing reduces administrative burden. Better compliance rates.",
    icon: Landmark,
    color: "bg-slate-100 text-slate-600",
    border: "hover:border-slate-300"
  },
  {
    title: "Citizens",
    desc: "Resolve warrants immediately without arrest. No towing or impound fees. Pay conveniently via smartphone. Avoid unnecessary jail time.",
    icon: Users,
    color: "bg-amber-50 text-amber-600",
    border: "hover:border-amber-200"
  },
  {
    title: "Communities",
    desc: "Fairer justice system with dignified resolution. Reduced jail overcrowding. Better police-community relations through respectful interactions.",
    icon: Home,
    color: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200"
  },
  {
    title: "Taxpayers",
    desc: "Lower costs for arrest processing. Better use of law enforcement resources. More efficient court operations. Improved municipal revenue collection.",
    icon: Lightbulb,
    color: "bg-violet-50 text-violet-600",
    border: "hover:border-violet-200"
  },
];

const WhoItHelps: React.FC = () => {
  return (
    <SectionWrapper id="who-it-helps" className="bg-slate-50 border-t border-slate-200">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Who It Helps</h2>
        <p className="text-xl text-blue-600 font-bold">Built to Help Everyone</p>
        <p className="text-lg text-slate-600 mt-6 leading-relaxed font-medium">
          i.WRN creates better outcomes for officers, agencies, courts, and citizens alike—aligning incentives for a safer community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map((card, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 ${card.border}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-6`}>
              <card.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium flex-grow">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhoItHelps;