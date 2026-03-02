"use client";

import Script from "next/script";
import React from "react";

const BotpressChat: React.FC = () => {
  return (
    <>
      {/* Main Botpress Injector Script */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="afterInteractive"
      />

      {/* Your Specific Bot Configuration Script */}
      <Script
        src="https://files.bpcontent.cloud/2026/03/02/20/20260302204353-GACZFV2P.js"
        strategy="afterInteractive"
        defer
      />
    </>
  );
};

export default BotpressChat;