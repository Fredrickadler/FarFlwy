import { useEffect } from 'react';
import sdk from '@farcaster/frame-sdk';

const Home = () => {
  useEffect(() => {
    // وقتی فریم شما آماده شد، این خط به Farcaster میگه که فریم آماده است.
    sdk.actions.ready();
  }, []);

  const openLink = () => {
    // این خط یک لینک خارجی رو در Farcaster باز می‌کنه
    sdk.actions.openUrl({ url: "https://example.com" });
  };

  return (
    <div>
      <button onClick={openLink}>Open External Link</button>
    </div>
  );
};

export default Home;