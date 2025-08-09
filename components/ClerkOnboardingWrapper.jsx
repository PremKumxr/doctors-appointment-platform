'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClerkOnboardingWrapper() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
    if (isLoaded && isSignedIn) {
      // Optionally redirect based on user role later
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return null;
}