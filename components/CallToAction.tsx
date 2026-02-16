import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <SectionWrapper id="cta" className="bg-white text-center py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-20 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden isolate">
        
        {/* Warp Speed Background */}
        <div className="absolute inset-0 -z-10">
            {/* Stars */}
            <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] animate-pulse opacity-20"></div>
            <div className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full top-[80%] left-[10%] animate-pulse opacity-30 delay-700"></div>
            <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[80%] animate-pulse opacity-20 delay-300"></div>
            <div className="absolute w-1 h-1 bg-indigo-200 rounded-full top-[50%] left-[50%] animate-pulse opacity-20 delay-500"></div>

            {/* Gradient Mesh */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px] opacity-30 -translate-y-1/2 translate-x-1/3 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[140px] opacity-30 translate-y-1/2 -translate-x-1/3 animate-blob animation-delay-2000"></div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              Ready to Transform Justice <br className="hidden md:block"/> in Your Jurisdiction?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto font-medium">
              Join 25+ agencies ready for deployment. Be among the first to modernize warrant resolution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" className="px-10 py-4 text-base w-full sm:w-auto font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 border border-blue-400/20">
                    Join the Waitlist
                </Button>
                <Button variant="outline" className="px-10 py-4 text-base w-full sm:w-auto bg-white/5 backdrop-blur-sm border-slate-600 text-white hover:bg-white/10 hover:border-slate-400">
                    Contact Sales
                </Button>
            </div>
            
            <p className="mt-8 text-sm text-slate-400 font-medium">
                No credit card required. Zero cost implementation for agencies.
            </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default CallToAction;