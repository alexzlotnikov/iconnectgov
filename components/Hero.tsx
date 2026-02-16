import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import Button from './ui/Button';
import ParticleNetwork from './ui/ParticleNetwork';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-slate-50 min-h-[90vh] flex flex-col justify-center">
      {/* 1. Dynamic Background Layer */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-slate-50">
        {/* Grid Pattern */}
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute right-[-5%] top-[20%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px]"
        />
      </div>

      {/* 2. Particle Network Layer */}
      <ParticleNetwork opacity={0.6} lineColor="100, 116, 139" dotColor="37, 99, 235" />

      {/* 3. Content Layer */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm text-slate-700 text-xs font-bold uppercase tracking-widest mb-8 hover:border-blue-300 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Launching Soon in Texas
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8"
        >
          Clear Warrants in <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2 Minutes.</span> <span className="text-slate-400 font-medium">Not 2 Hours.</span>
        </motion.h1>
        
        {/* Subhead */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto font-medium"
        >
          Real-time warrant resolution software that transforms traffic stops—improving officer safety, reducing unnecessary arrests, and modernizing court collections.
        </motion.p>

        {/* Feature Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl border border-white/50 shadow-lg shadow-blue-900/5 mb-10 max-w-lg w-full mx-auto flex items-center gap-3 ring-1 ring-slate-100"
        >
          <div className="bg-blue-100 p-2 rounded-lg shrink-0">
             <Shield className="w-5 h-5 text-blue-700" />
          </div>
          <p className="text-sm text-slate-600 text-left leading-snug">
            <span className="text-slate-900 font-bold block">Hardware-agnostic Middleware</span>
            Connecting 2,800+ court databases directly to patrol vehicles.
          </p>
        </motion.div>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
            Join the Waitlist
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 text-base flex items-center justify-center gap-2 group bg-white/60 backdrop-blur-md border-white/60 hover:bg-white">
            See How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;