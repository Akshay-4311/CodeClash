import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Zap, Shield, Sword, Camera, Send, Play, Terminal } from 'lucide-react';

const Community = () => {
  const premiumFeatures = [
    {
      icon: <Users size={20} color="var(--primary)" />,
      title: "Extended collaboration",
      description: "Easily create and deploy battles in a timely and secure manner using our robust set of tools."
    },
    {
      icon: <Settings size={20} color="var(--primary)" />,
      title: "Flexible Settings",
      description: "Effortlessly increase the scope of your profile, with performance in alignment with your needs."
    },
    {
      icon: <Zap size={20} color="var(--primary)" />,
      title: "Real-Time Assistance",
      description: "From implementation support to in-the-moment troubleshooting, we're here to help."
    },
    {
      icon: <Shield size={20} color="var(--primary)" />,
      title: "Advanced Security",
      description: "Launch confidently with our secure platform and dependable hosting infrastructure."
    }
  ];

  return (
    <section id="community" style={{ padding: '8rem 0', background: 'transparent' }}>
      <div className="container">
        {/* Premium Features Grid */}
        <div style={{ marginBottom: '10rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 600 }}>CodeClash Premium</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px' }}>
            Our premium subscriptions empower your teams to collaboratively create, launch, and handle battles at a large scale.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {premiumFeatures.map((pf, i) => (
              <div key={i} className="glass" style={{ padding: '2.5rem', background: 'rgba(15, 23, 42, 0.4)' }}>
                <div style={{ marginBottom: '1.5rem' }}>{pf.icon}</div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 600 }}>{pf.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{pf.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem' }}>
            Unleash your logic <br />
            with our battle tool
          </h2>
          <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Get started now</button>
        </div>

        {/* Footer */}
        <footer style={{ paddingTop: '5rem', borderTop: '1px solid var(--glass-border)' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr', 
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sword color="#000" size={14} />
                </div>
                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>CodeClash</span>
              </div>
            </div>
            
            <div>
              <h5 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Explore</h5>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>Product</li>
                <li>Features</li>
                <li>Downloads</li>
                <li>Templates</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h5 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Company</h5>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>About</li>
                <li>Press</li>
                <li>Merch Store</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>

            <div>
              <h5 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Get Help</h5>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>Support</li>
                <li>Status</li>
                <li>Wishlist</li>
                <li>Knowledge Base</li>
                <li>Forum</li>
                <li>Discord</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', color: 'var(--text-muted)' }}>
            <Camera size={20} />
            <Send size={20} />
            <Play size={20} />
            <Terminal size={20} />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Community;