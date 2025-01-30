import { useEffect, useRef } from 'react';

interface Movement {
  setSteps: (steps: number | ((prev: number) => number)) => void;
  threshold: number;
  debounceTime: number;
}

export const useCharacterMove = ({ setSteps, threshold, debounceTime }: Movement) => {
  const lastStepTime = useRef<number>(0);
  const lastAcceleration = useRef<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.acceleration;
      if (acceleration) {
        const currentTime = Date.now();
        const deltaZ = Math.abs((acceleration.z ?? 0) - lastAcceleration.current.z);

        if (deltaZ > threshold && currentTime - lastStepTime.current > debounceTime) {
          setSteps((prev) => prev + 3);
          lastStepTime.current = currentTime;
        }

        lastAcceleration.current = {
          x: acceleration.x ?? lastAcceleration.current.x,
          y: acceleration.y ?? lastAcceleration.current.y,
          z: acceleration.z ?? lastAcceleration.current.z,
        };
      }
    };

    window.addEventListener('devicemotion', handleMotion);

    return () => {
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, [setSteps, threshold, debounceTime]);

  return null;
};
