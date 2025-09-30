// pages/index.js
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const IMAGE_URL = "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg";
const APP_URL = "https://far-flwy.vercel.app";
const APP_NAME = "Flwy";

// Dynamic import برای SDK با تنظیمات صحیح Next.js
const loadSDK = () => {
  if (typeof window !== 'undefined') {
    return import("@farcaster/frame-sdk");
  }
  return Promise.resolve(null);
};

export default function Home() {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const sdkModule = await loadSDK();
        
        if (sdkModule?.default?.actions?.ready) {
          await sdkModule.default.actions.ready();
          setSdkLoaded(true);
          console.log("Farcaster SDK initialized");
        }
      } catch (error) {
        // فقط در حالت توسعه لاگ کنید
        if (process.env.NODE_ENV === 'development') {
          console.log("Farcaster SDK not available:", error.message);
        }
      }
    };

    initializeSDK();
  }, []);

  // داده‌های یکسان برای frame و miniapp
  const frameData = {
    version: "1",
    image: IMAGE_URL,
    imageUrl: IMAGE_URL,
    button: {
      title: "🚀 Open Flwy",
      action: {
        type: "launch_frame",
        name: APP_NAME,
        url: APP_URL,
        splashImageUrl: IMAGE_URL,
        splashBackgroundColor: "#eeccff"
      }
    }
  };

  const miniappData = {
    version: "1",
    image: IMAGE_URL,
    imageUrl: IMAGE_URL,
    button: {
      title: "🚀 Open Flwy", 
      action: {
        type: "launch_miniapp",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Flwy MiniApp" />
        <meta property="og:description" content="Open Flwy MiniApp" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flwy MiniApp" />
        <meta name="twitter:description" content="Open Flwy MiniApp" />
        <meta name="twitter:image" content={IMAGE_URL} />

        {/* Farcaster Frame */}
        <meta name="fc:frame" content={JSON.stringify(frameData)} />
        
        {/* Farcaster Miniapp */}
        <meta name="fc:miniapp" content={JSON.stringify(miniappData)} />
      </Head>

      <main style={{ 
        textAlign: "center", 
        padding: "48px",
        fontFamily: "system-ui, sans-serif"
      }}>
        <h1 style={{ color: "#8a2be2", marginBottom: "16px" }}>
          Welcome to Flwy 🚀
        </h1>
        <p style={{ marginBottom: "24px", fontSize: "18px" }}>
          This is the Flwy MiniApp test page.
        </p>
        
        {/* وضعیت SDK */}
        <div style={{ 
          marginBottom: "20px",
          padding: "12px",
          backgroundColor: sdkLoaded ? "#e6ffed" : "#fff3cd",
          border: `1px solid ${sdkLoaded ? "#a3d9a5" : "#ffeaa7"}`,
          borderRadius: "8px",
          display: "inline-block"
        }}>
          {sdkLoaded ? "✅ SDK Connected" : "⚠️ Not in Warpcast"}
        </div>

        {/* لینک fallback */}
        <div>
          <a 
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#8a2be2",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#6a1bb2"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#8a2be2"}
          >
            🚀 Open Flwy App
          </a>
        </div>
      </main>
    </>
  );
}