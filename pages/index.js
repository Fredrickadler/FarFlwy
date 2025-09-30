import Head from "next/head";
import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <>
      <Head>
        <title>Flwy MiniApp</title>

        {/* MiniApp embed */}
        <meta
          name="fc:miniapp"
          content='{"version":"1","imageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","buttons":[{"title":"🚀 Open Flwy","action":{"type":"launch_miniapp","url":"https://far-flwy.vercel.app","splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","splashBackgroundColor":"#eeccff"}}]}'
        />

        {/* Backward compatibility */}
        <meta
          name="fc:frame"
          content='{"version":"1","imageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","buttons":[{"title":"🚀 Open Flwy","action":{"type":"launch_frame","url":"https://far-flwy.vercel.app","splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","splashBackgroundColor":"#eeccff"}}]}'
        />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Flwy 🚀</h1>
        <p>Your Farcaster MiniApp is live with an Open button.</p>
        <button
          onClick={() =>
            sdk.actions.openUrl({ url: "https://example.com" })
          }
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            background: "#6c5ce7",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Test External Link
        </button>
      </main>
    </>
  );
}