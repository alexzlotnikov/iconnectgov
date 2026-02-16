import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Lock, Cloud, Shield } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <SectionWrapper id="security" className="bg-slate-50">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Security</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm border border-slate-100">
            <Shield className="w-8 h-8 text-slate-700 mb-3" />
            <h3 className="font-semibold text-slate-900">CJIS-aligned approach</h3>
            <p className="text-sm text-slate-500 mt-1">Built with strict adherence to justice information standards.</p>
        </div>
        <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm border border-slate-100">
            <Cloud className="w-8 h-8 text-slate-700 mb-3" />
            <h3 className="font-semibold text-slate-900">Government cloud hosting</h3>
            <p className="text-sm text-slate-500 mt-1">Reliable, compliant infrastructure.</p>
        </div>
        <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm border border-slate-100">
            <Lock className="w-8 h-8 text-slate-700 mb-3" />
            <h3 className="font-semibold text-slate-900">Secure payment providers</h3>
            <p className="text-sm text-slate-500 mt-1">Financial data never touches agency servers.</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Security;