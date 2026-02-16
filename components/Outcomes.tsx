import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Clock, UserX, RefreshCw, ShieldCheck } from 'lucide-react';

const outcomes = [
  {
    label: "Less time off patrol",
    sub: "Faster resolution",
    icon: Clock,
  },
  {
    label: "Fewer custodial arrests",
    sub: "For fine-only warrants",
    icon: UserX,
  },
  {
    label: "Cleaner court updates",
    sub: "Status synced instantly",
    icon: RefreshCw,
  },
  {
    label: "Better roadside safety",
    sub: "Less escalation",
    icon: ShieldCheck,
  },
];

const Outcomes: React.FC = () => {
  return (
    <SectionWrapper className="bg-white border-y border-slate-100">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900">What changes</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomes.map((item, idx) => (
          <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-100 transition-colors">
            <item.icon className="w-8 h-8 text-blue-600 mb-4 opacity-80" />
            <h3 className="font-semibold text-slate-900 text-lg mb-1">{item.label}</h3>
            <p className="text-slate-500 text-sm">{item.sub}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Outcomes;