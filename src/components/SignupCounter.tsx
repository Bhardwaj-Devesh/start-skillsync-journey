import React, { useEffect, useState } from 'react';
import { useSignupCounter } from '@/hooks/useSignupCounter';
import { Users } from 'lucide-react';

const SignupCounter = () => {
  const { count, isLoading, refetch } = useSignupCounter();
  const [displayCount, setDisplayCount] = useState(count);

  useEffect(() => {
    // Update the display count whenever the actual count changes
    setDisplayCount(count);
  }, [count]);

  useEffect(() => {
    // Set up polling every 5 seconds
    const intervalId = setInterval(() => {
      refetch();
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <div className="flex items-center justify-center space-x-2 text-gray-600 mt-6">
      <Users className="h-5 w-5 text-purple-600" />
      <span className="text-lg">
        {isLoading ? (
          <span className="animate-pulse text-gray-500">Loading...</span>
        ) : (
          <>
            <span className="font-bold text-purple-700">{displayCount.toLocaleString()}</span>
            {' people joined the waitlist. Don’t miss your spot!'}
          </>
        )}
      </span>
    </div>
  );
};

export default SignupCounter;
