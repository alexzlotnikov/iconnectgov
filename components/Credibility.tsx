import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const Credibility: React.FC = () => {
  return (
    <SectionWrapper className="bg-white border-b border-slate-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Current readiness</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 rounded text-center">
            <span className="block text-3xl font-bold text-slate-900 mb-1">100+</span>
            <span className="text-slate-600 text-sm font-medium">Demos completed</span>
        </div>
        
        <div className="p-6 bg-slate-50 rounded text-center">
            <span className="block text-3xl font-bold text-slate-900 mb-1">25</span>
            <span className="text-slate-600 text-sm font-medium">Agencies in pipeline</span>
        </div>

        <div className="p-6 bg-slate-50 rounded text-center flex flex-col justify-center items-center">
            <span className="text-slate-600 text-sm font-medium mb-2">Strategic Partner</span>
            <div className="font-bold text-slate-800 text-lg flex items-center gap-2">
                {/* Placeholder Logo */}
                <div className="w-6 h-6 bg-slate-800 rounded-sm"></div>
                Peacemaker Technologies
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Credibility;