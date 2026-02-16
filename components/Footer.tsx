import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-2">
                <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-extrabold tracking-tighter">
                        <span className="text-blue-600">i</span>
                        <span className="text-slate-900">Connect</span>
                        <span className="text-blue-600">Gov</span>
                    </span>
                </a>
                <p className="text-slate-500 leading-relaxed max-w-md">
                    Modernizing justice through real-time warrant resolution. Building digital infrastructure to connect isolated courts and law enforcement, improving officer safety and community fairness.
                </p>
            </div>

            {/* Links */}
            <div>
                <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                <ul className="space-y-3">
                    <li>
                      <button onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('what-is')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                        What is i.WRN
                      </button>
                    </li>
                    <li>
                      <button onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                        How It Works
                      </button>
                    </li>
                    <li>
                      <button onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('who-it-helps')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                        Who It Helps
                      </button>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-3">
                    <li><a href="mailto:info@iconnectgov.com" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
                    <li>
                      <button onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('cta')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                        Waitlist
                      </button>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} iConnectGov. All rights reserved.
            </div>

            <div className="flex gap-6">
                <button onClick={(e) => handleNavClick(e, 'privacy')} className="text-sm text-slate-500 hover:text-blue-600 transition-colors text-left">
                    Privacy Policy
                </button>
                <button onClick={(e) => handleNavClick(e, 'terms')} className="text-sm text-slate-500 hover:text-blue-600 transition-colors text-left">
                    Terms of Service
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;