import { useEffect } from "react";
import Head from "next/head";
import sdk from "@farcaster/frame-sdk";

const Home = () => {
  useEffect(() => {
    // وقتی فریم آماده شد
    sdk.actions.ready();
  }, []);

  const openLink = () => {
    // باز کردن لینک خارجی داخل Farcaster
    sdk.actions.openUrl({ url: "https://example.com" });
  };

  return (
    <>
      <Head>
        {/* Frame Meta Tags برای Farcaster */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://far-flwy.vercel.app/image.png" />
        <meta property="fc:frame:button:1" content="Open Flwy" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://far-flwy.vercel.app" />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Hello Farcaster 🚀</h1>
        <p>This is your Farcaster Frame!</p>
        <button
          onClick={openLink}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6c5ce7",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Open External Link
        </button>
      </main>
    </>
  );
};

export default Home;