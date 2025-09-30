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
        <meta
          name="fc:miniapp"
          content='{"version":"1","imageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","button":{"title":"🚀 Open Flwy","action":{"type":"launch_miniapp","url":"https://far-flwy.vercel.app","splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","splashBackgroundColor":"#eeccff"}}}'
        />
        <meta
          name="fc:frame"
          content='{"version":"1","imageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","button":{"title":"🚀 Open Flwy","action":{"type":"launch_frame","url":"https://far-flwy.vercel.app","splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","splashBackgroundColor":"#eeccff"}}}'
        />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Flwy 🚀</h1>
        <p>Your MiniApp is running inside Farcaster.</p>
      </main>
    </>
  );
}