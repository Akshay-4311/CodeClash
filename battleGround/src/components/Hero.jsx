import React from "react";
import { motion } from "framer-motion";
import { Sword, Layout, Code, Zap, Shield, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <header style={{ position: "relative", pt: "2rem" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "var(--primary)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sword color="#000" size={20} />
          </div>
          <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            CodeClash
          </span>
        </div>

        <div
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="nav-links"
        >
          <a
            href="#product"
            style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
          >
            Product
          </a>
          <a
            href="#features"
            style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
          >
            Features
          </a>
          <a
            href="#downloads"
            style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
          >
            Downloads
          </a>
          <a
            href="#pricing"
            style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
          >
            Pricing
          </a>
          <a
            href="#faq"
            style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
          >
            FAQ
          </a>
        </div>

        <button
          className="btn-outline"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}
        >
          Sign In
        </button>
      </nav>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "6rem",
          paddingBottom: "4rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              fontWeight: 600,
            }}
          >
            Master logic battles <br />
            without breaking your flow
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.2rem",
              maxWidth: "800px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.6,
            }}
          >
            Introducing the future of competitive learning – a real-time arena
            for developers! Say goodbye to boring quizzes and endless
            documentation. Start your journey today.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "4rem",
            }}
          >
            <button className="btn-primary">Start building</button>
            <button className="btn-outline">Try our tool</button>
          </div>
        </motion.div>

        {/* Logo Cloud - Monochromatic as in image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "3rem",
            opacity: 0.5,
            filter: "grayscale(1)",
            marginBottom: "5rem",
          }}
        >
          {[
            "DISCORD",
            "VALVE",
            "SPOTIFY",
            "AIRBNB",
            "BLIZZARD",
            "ARTSTATION",
          ].map((brand) => (
            <span
              key={brand}
              style={{
                fontWeight: "bold",
                letterSpacing: "2px",
                fontSize: "0.8rem",
              }}
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Product Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ width: "100%", maxWidth: "1000px", position: "relative" }}
        >
          <div
            className="glass"
            style={{
              padding: "1rem",
              background:
                "linear-gradient(rgba(16, 185, 129, 0.1), rgba(0,0,0,0.4))",
              boxShadow:
                "0 20px 80px rgba(0,0,0,0.8), 0 0 40px rgba(16, 185, 129, 0.05)",
            }}
          >
            <div
              style={{
                background: "#0a0f1e",
                borderRadius: "0.75rem",
                height: "500px",
                overflow: "hidden",
                display: "flex",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Sidebar Mock */}
              <div
                style={{
                  width: "200px",
                  borderRight: "1px solid rgba(255,255,255,0.05)",
                  padding: "1.5rem",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: "60%",
                    background: "rgba(255,255,255,0.1)",
                    marginBottom: "1.5rem",
                    borderRadius: "4px",
                  }}
                ></div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    style={{
                      height: "6px",
                      width: "80%",
                      background: "rgba(255,255,255,0.05)",
                      marginBottom: "1rem",
                      borderRadius: "4px",
                    }}
                  ></div>
                ))}
              </div>
              {/* Main Content Mock */}
              <div style={{ flex: 1, padding: "3rem", textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "var(--primary)",
                    marginBottom: "1rem",
                    border: "1px dashed var(--primary)",
                    padding: "1rem",
                    display: "inline-block",
                  }}
                >
                  Logic challenge: Recursion
                </div>
                <div
                  style={{
                    height: "12px",
                    width: "40%",
                    background: "rgba(255,255,255,0.05)",
                    marginBottom: "1rem",
                    borderRadius: "6px",
                  }}
                ></div>
                <div
                  style={{
                    height: "12px",
                    width: "70%",
                    background: "rgba(255,255,255,0.05)",
                    marginBottom: "2rem",
                    borderRadius: "6px",
                  }}
                ></div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div
                    className="glass"
                    style={{
                      height: "120px",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  ></div>
                  <div
                    className="glass"
                    style={{
                      height: "120px",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Depth/Glow under mockup */}
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "10%",
              right: "10%",
              height: "100px",
              background: "var(--primary)",
              filter: "blur(100px)",
              opacity: 0.1,
              zIndex: -1,
            }}
          ></div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
