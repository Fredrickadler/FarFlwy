 // pages/index.js
import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  useEffect(() => {
    try {
      if (sdk && sdk.actions && typeof sdk.actions.ready === "function") {
        sdk.actions.ready();
      }
    } catch (err) {
      console.error("sdk.actions.ready error:", err);
    }
  }, []);

  return (
    <main style={{ textAlign: "center", padding: "48px" }}>
      <h1>Welcome to Flwy 🚀</h1>
      <p>This is the Flwy MiniApp test page.</p>
    </main>
  );
}