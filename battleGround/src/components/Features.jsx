import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Layout, Share2, BarChart3, Target, ShieldCheck } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: <MousePointer2 size={20} color="var(--primary)" />,
      title: "Drag-and-Drop",
      description: "Match with opponents effortlessly and arrange your battlegrounds without writing a single line of code."
    },
    {
      icon: <Layout size={20} color="var(--primary)" />,
      title: "Battle Templates",
      description: "Choose from pre-built arenas and logic sets that can be customized to fit your training needs."
    },
    {
      icon: <Share2 size={20} color="var(--primary)" />,
      title: "Third-Party Sync",
      description: "Connect your profile to Github, LinkedIn, or other platforms to showcase your logic prowess."
    }
  ];

  const serviceFeatures = [
    {
      title: "Customization options",
      description: "While the pre-designed battles offer a great starting point, the arena also allows you to customize the difficulty, time limits, and topics."
    },
    {
      title: "SEO optimization",
      description: "The platform tracks your public profile rankings, helping your logic scores rank higher in our global developer search results."
    },
    {
      title: "Advanced Analytics",
      description: "The arena provides basic analytics features such as win/loss tracking and conversion speed, so you can measure your growth."
    }
  ];

  return (
    <section id="features" style={{ padding: '10rem 0', background: 'transparent' }}>
      <div className="container">
        {/* Top Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '10rem'
        }}>
          {mainFeatures.map((f, i) => (
            <div key={i} className="glass" style={{ padding: '2.5rem', textAlign: 'left' }}>
              <div style={{ 
                width: '40px', height: '40px', 
                border: '1px solid var(--primary)', 
                borderRadius: '8px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                background: 'rgba(16, 185, 129, 0.05)'
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Service Features Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', fontWeight: 600 }}>Main Service Features</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {serviceFeatures.map((sf, i) => (
                <div key={i}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                    {sf.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                    {sf.description}
                  </p>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ marginTop: '3rem' }}>Try it for free</button>
          </div>

          <div style={{ position: 'relative' }}>
             {/* Secondary Mockup / Feature Image */}
             <div className="glass" style={{ 
               padding: '0.5rem', 
               transform: 'rotate(2deg)',
               boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
             }}>
               <div style={{ background: '#0a0f1e', borderRadius: '0.75rem', height: '450px', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></div>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                    </div>
                  </div>
                  <div style={{ height: '20px', width: '60%', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem', borderRadius: '4px' }}></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[1,2,3,4].map(j => (
                      <div key={j} style={{ height: '100px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}></div>
                    ))}
                  </div>
               </div>
             </div>
             {/* Green Glow */}
             <div style={{
               position: 'absolute',
               top: '20%',
               right: '-10%',
               width: '200px',
               height: '200px',
               background: 'var(--primary)',
               filter: 'blur(100px)',
               opacity: 0.1,
               zIndex: -1
             }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;