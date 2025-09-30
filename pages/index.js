// pages/index.js
import Head from "next/head";

export default function Home() {
  const miniapp = {
    version: "1",
    imageUrl:
      "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
    button: {
      title: "🚀 Open Flwy",
      action: {
        type: "launch_miniapp",
        name: "Flwy",
        url: "https://far-flwy.vercel.app",
        splashImageUrl:
          "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
        splashBackgroundColor: "#eeccff"
      }
    }
  };

  // JSON را اینجا stringify می‌کنیم (تک خطی و امن برای JSX)
  const miniappJson = JSON.stringify(miniapp);

  return (
    <>
      <Head>
        <title>Flwy Frame</title>
        <meta name="description" content="Flwy MiniApp Frame" />

        {/* OpenGraph */}
        <meta property="og:title" content="Flwy Frame" />
        <meta property="og:description" content="Testing Farcaster Frame" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg"
        />

        {/* MiniApp embed — استفاده از متغیر stringify شده */}
        <meta name="fc:miniapp" content={miniappJson} />
        {/*Backward compatibility */}
        <meta name="fc:frame" content={miniappJson} />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Flwy Frame Ready ✅</h1>
        <p>If you share this URL in Farcaster it should render the mini app card.</p>
      </main>
    </>
  );
}