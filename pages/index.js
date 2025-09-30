import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flwy Frame</title>
        <meta name="description" content="Flwy MiniApp Frame" />

        {/* MiniApp embed */}
        <meta
          name="fc:miniapp"
          content='{
            "version":"1",
            "imageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
            "button":{
              "title":"🚀 Open Flwy",
              "action":{
                "type":"launch_miniapp",
                "name":"Flwy",
                "url":"https://far-flwy.vercel.app",
                "splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
                "splashBackgroundColor":"#eeccff"
              }
            }
          }'
        />

        {/* Backward compatibility */}
        <meta
          name="fc:frame"
          content='{
            "version":"1",
            "imageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
            "button":{
              "title":"🚀 Open Flwy",
              "action":{
                "type":"launch_frame",
                "name":"Flwy",
                "url":"https://far-flwy.vercel.app",
                "splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
                "splashBackgroundColor":"#eeccff"
              }
            }
          }'
        />
      </Head>

      <main>
        <h1>Flwy Frame Ready ✅</h1>
      </main>
    </>
  );
}