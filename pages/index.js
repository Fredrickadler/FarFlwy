// pages/index.js
import { useEffect } from "react";
import Head from "next/head";

const IMAGE_URL = "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg";
const APP_URL = "https://far-flwy.vercel.app";
const APP_NAME = "Flwy";

export default function Home() {
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        // داینامیک ایمپورت برای جلوگیری از خطا در مرورگر
        const sdk = await import("@farcaster/frame-sdk");
        
        // بررسی کامل وجود SDK و قابلیت‌های آن
        if (sdk?.default?.actions?.ready) {
          await sdk.default.actions.ready();
          console.log("Farcaster SDK initialized");
        }
      } catch (error) {
        // فقط در حالت توسعه لاگ کنید
        if (process.env.NODE_ENV === 'development') {
          console.log("Farcaster SDK not available (not in Warpcast)");
        }
      }
    };

    initializeSDK();
  }, []);

  // یکسان‌سازی داده‌های miniapp و frame
  const appData = {
    version: "1",
    image: IMAGE_URL,
    imageUrl: IMAGE_URL,
    button: {
      title: "🚀 Open Flwy",
      action: {
        type: "launch_frame", // یا "launch_miniapp" بسته به نیاز
        name: APP_NAME,
        url: APP_URL,
        splashImageUrl: IMAGE_URL,
        splashBackgroundColor: "#eeccff"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Flwy MiniApp</title>
        <meta name="description" content="Flwy MiniApp" />

        {/* Open Graph preview */}
        <meta property="og:title" content="Flwy MiniApp" />
        <meta property="og:description" content="Open Flwy MiniApp" />
        <meta property="og:image" content={IMAGE_URL} />

        {/* Farcaster embeds */}
        <meta name="fc:frame" content={JSON.stringify(appData)} />
        {/* اگر miniapp نیاز جداگانه دارید: */}
        <meta name="fc:miniapp" content={JSON.stringify({
          ...appData,
          button: {
            ...appData.button,
            action: {
              ...appData.button.action,
              type: "launch_miniapp"
            }
          }
        })} />
      </Head>

      <main style={{ textAlign: "center", padding: "48px" }}>
        <h1>Welcome to Flwy 🚀</h1>
        <p>This is the Flwy MiniApp test page.</p>
        
        {/* لینک fallback برای محیط‌های غیر-Warpcast */}
        <a 
          href={APP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#8a2be2",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Open Flwy App
        </a>
      </main>
    </>
  );
}