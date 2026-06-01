"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";
import { Calendar, Phone, MessageSquare, X } from "lucide-react";

const BotpressChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const patchBotpressLauncher = () => {
      document.querySelectorAll<HTMLImageElement>("img.bpFabImage").forEach((image) => {
        image.alt = "";
        image.setAttribute("aria-hidden", "true");
      });

      document.querySelectorAll<HTMLElement>(".bpFabWrapper, #fab-root").forEach((element) => {
        element.setAttribute("aria-hidden", "true");
      });
    };

    patchBotpressLauncher();

    const observer = new MutationObserver(patchBotpressLauncher);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const toggleBotpress = () => {
    // @ts-ignore - Botpress window object
    if (window.botpress) {
      window.botpress.toggle();
      setIsOpen(false);
    }
  };

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Hide the inaccessible default launcher. We provide our own accessible control.
          // @ts-ignore
          window.botpress.on("ready", () => {
            window.botpress.hideDefaultButton();
            document.querySelectorAll<HTMLImageElement>("img.bpFabImage").forEach((image) => {
              image.alt = "";
              image.setAttribute("aria-hidden", "true");
            });
          });
        }}
      />
      <Script
        src="https://files.bpcontent.cloud/2026/03/02/20/20260302204353-GACZFV2P.js"
        strategy="afterInteractive"
      />

      <style jsx>{`
        .pulse-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: #EF571B; /* Secondary Color */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 0 0 0 rgba(239, 87, 27, 0.7);
          animation: pulse 2s infinite;
          border: 0;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 87, 27, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(239, 87, 27, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 87, 27, 0); }
        }

        .menu-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          background: #FAF3E1; /* Accent Color */
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          width: 240px;
          overflow: hidden;
          display: ${isOpen ? 'block' : 'none'};
          z-index: 10000;
          border: 1px solid rgba(239, 87, 27, 0.2);
        }

        .menu-item {
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          background: transparent;
          border: 0;
          text-decoration: none;
          color: #333;
          transition: all 0.2s;
          cursor: pointer;
          border-bottom: 1px solid rgba(239, 87, 27, 0.1);
          font-size: 14px;
          font-weight: 500;
          font-family: inherit;
          text-align: left;
        }

        .menu-item:hover { 
          background: #EF571B; 
          color: white;
        }
        
        .menu-item:last-child { border-bottom: none; }
      `}</style>

      {/* Custom Pulse Button */}
      <button
        type="button"
        className="pulse-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="chat-contact-menu"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? <X color="white" /> : <MessageSquare color="white" />}
      </button>

      {/* Selection Menu */}
      <div className="menu-container" id="chat-contact-menu">
        <a 
          href="https://cal.com/antrosys" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="menu-item"
        >
          <Calendar size={18} />
          <span>Book a meeting</span>
        </a>
        
        <a href="tel:+1234567890" className="menu-item">
          <Phone size={18} />
          <span>Live call agent</span>
        </a>

        <button type="button" className="menu-item" onClick={toggleBotpress}>
          <MessageSquare size={18} />
          <span>Chat with AI bot</span>
        </button>
      </div>
    </>
  );
};

export default BotpressChat;
