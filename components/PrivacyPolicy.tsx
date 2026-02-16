import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const PrivacyPolicy: React.FC = () => {
  return (
    <SectionWrapper className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to iConnectGov ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or join our waitlist and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p>
              Currently, we only collect data necessary to manage our waitlist and communicate with interested parties. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Contact Information:</strong> Email address, name, and agency/organization name when provided voluntarily via our sign-up forms.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website (e.g., page views, time spent) to help us improve the user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To manage your position on our waitlist.</li>
              <li>To notify you when i.WRN is available in your jurisdiction.</li>
              <li>To send you updates regarding product features, security improvements, or company news.</li>
              <li>To respond to your inquiries or support requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@iconnectgov.com" className="text-blue-600 hover:underline">privacy@iconnectgov.com</a>
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PrivacyPolicy;