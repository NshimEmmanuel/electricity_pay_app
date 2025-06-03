import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

// Helper to render accessible emoji
const emojiSpan = (emoji, label) => (
  <span role="img" aria-label={label}>{emoji}</span>
);

const features = [
  {
    icon: "💳",
    label: "multiple payment options",
    title: "Multiple Payment Options",
    desc: "Pay with credit cards, debit cards, mobile wallets, or bank transfers. Choose what works best for you."
  },
  {
    icon: "⚡",
    label: "instant processing",
    title: "Instant Processing",
    desc: "Bills are processed instantly with immediate confirmation. No more waiting or uncertainty about payment status."
  },
  {
    icon: "🔒",
    label: "bank-level security",
    title: "Bank-Level Security",
    desc: "Your data and payments are protected with advanced encryption and security protocols."
  },
  {
    icon: "📱",
    label: "smart reminders",
    title: "Smart Reminders",
    desc: "Never miss a payment with customizable reminders and automatic bill alerts."
  },
  {
    icon: "📊",
    label: "payment history",
    title: "Payment History",
    desc: "Track all your payments with detailed history and downloadable receipts."
  },
  {
    icon: "🎯",
    label: "quick bill scanner",
    title: "Quick Bill Scanner",
    desc: "Scan your electricity bill with your camera for instant bill details and quick payment."
  }
];

const benefits = [
  {
    icon: "💰",
    label: "save money",
    title: "Save Money",
    desc: "Avoid late fees and enjoy special cashback offers on timely payments."
  },
  {
    icon: "⏰",
    label: "save time",
    title: "Save Time",
    desc: "No more standing in long queues or visiting payment centers."
  },
  {
    icon: "🌱",
    label: "go paperless",
    title: "Go Paperless",
    desc: "Digital receipts and statements help reduce paper waste."
  },
  {
    icon: "🎁",
    label: "rewards program",
    title: "Rewards Program",
    desc: "Earn points with every payment and redeem exciting rewards."
  },
  {
    icon: "📞",
    label: "24/7 support",
    title: "24/7 Support",
    desc: "Round-the-clock customer support for any payment issues."
  },
  {
    icon: "🔄",
    label: "auto-pay option",
    title: "Auto-Pay Option",
    desc: "Set up automatic payments and never worry about due dates."
  }
];

const steps = [
  {
    num: 1,
    title: "Download & Register",
    desc: "Download the PowerPay app and create your account in under 2 minutes."
  },
  {
    num: 2,
    title: "Add Your Bills",
    desc: "Scan your electricity bill or enter details manually to add it to your account."
  },
  {
    num: 3,
    title: "Choose Payment Method",
    desc: "Select from multiple secure payment options that suit your preference."
  },
  {
    num: 4,
    title: "Pay & Confirm",
    desc: "Complete your payment with a single tap and receive instant confirmation."
  }
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/"
  }
];

const supportLinks = [
  {
    name: "Help Center",
    url: "https://yourdomain.com/help"
  },
  {
    name: "Contact Us",
    url: "https://yourdomain.com/contact"
  },
  {
    name: "Privacy Policy",
    url: "https://yourdomain.com/privacy"
  },
  {
    name: "Terms of Service",
    url: "https://yourdomain.com/terms"
  }
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-root">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-logo">
          {emojiSpan("⚡", "lightning")} PowerPay
        </div>
        <nav className="landing-nav">
          <ul className="landing-nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="container landing-hero-inner">
          <div className="landing-hero-content">
            <h1>Pay Your Electricity Bills Instantly</h1>
            <p>
              Fast, secure, and hassle-free electricity bill payments at your fingertips.<br />
              Never miss a payment again!
            </p>
            <button
              className="landing-green-btn"
              onClick={() => navigate("/signup")}
            >
              Get Started / Sign Up
            </button>
          </div>
          <div className="landing-hero-image">
            <img
              src="https://public.youware.com/users-website-assets/prod/8b51d662-7352-4b90-8e79-86c11f147d32/g10bb245740ef3fec970f2e851727de9593bcdadae5e0c67213a2fe51e97c2e3d01694a6aea16c447b2c401f68f912741641426fac341fd33fe802c65781969cb_640.jpg"
              alt="App Mockup"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="landing-section landing-features">
        <div className="container">
          <h2 className="landing-section-title">Why Choose PowerPay?</h2>
          <div className="landing-features-grid">
            {features.map((f, i) => (
              <div key={i} className="landing-feature-card">
                <div className="landing-feature-icon">
                  {emojiSpan(f.icon, f.label)}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="landing-section landing-how">
        <div className="container">
          <h2 className="landing-section-title">How It Works</h2>
          <div className="landing-steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="landing-step-card">
                <div className="landing-step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="landing-section landing-benefits">
        <div className="container">
          <h2 className="landing-section-title" style={{ color: "#fff" }}>Benefits of PowerPay</h2>
          <div className="landing-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="landing-benefit-card">
                <div className="landing-benefit-icon">
                  {emojiSpan(b.icon, b.label)}
                </div>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="download" className="landing-section landing-cta">
        <div className="container">
          <h2>Ready to Simplify Your Bill Payments?</h2>
          <p>Join millions of users who trust PowerPay for their electricity bill payments</p>
          <button className="landing-green-btn" onClick={() => navigate("/signup")}>
            Get Started Today
          </button>
          <div className="landing-app-badges">
            <a
              href="https://apps.apple.com/"
              className="landing-app-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://public.youware.com/users-website-assets/prod/8b51d662-7352-4b90-8e79-86c11f147d32/g01c9688552a85dac1acac28f54ffdaeb9d2c59b7fd8717331bd65ed5ed1bbecc80ad667763d4bdd2fcdd7421a041901ca779e55f770e19fb2a178d173ad97ba3_640.jpg" alt="App Store"/>
            </a>
            <a
              href="https://play.google.com/"
              className="landing-app-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://public.youware.com/users-website-assets/prod/8b51d662-7352-4b90-8e79-86c11f147d32/gf76902c9970c45447e5c0b0043658e31238c2d26a7c6875791d51c72d709d3fc2cfb9dde3454b7b621f3973f34869d2e522f0c9f3a301f53f752547931678afd_640.png" alt="Google Play"/>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container landing-footer-content">
          <div>
            <h3>PowerPay</h3>
            <p>Making electricity bill payments simple, fast, and secure for everyone.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="landing-footer-bottom">
          &copy; 2024 PowerPay. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;