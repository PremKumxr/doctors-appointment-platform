'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import ClerkProvider with SSR disabled
const ClerkProvider = dynamic(() => import('@clerk/nextjs').then(mod => mod.ClerkProvider), {
  ssr: false,
});

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  // Ensure this runs only in browser
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}