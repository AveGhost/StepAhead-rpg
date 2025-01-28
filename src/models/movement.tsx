export interface Acceleration {
  x: number | null
  y: number | null
  z: number | null
}

export interface Steps {
    steps: number;
    setSteps: (step: number) => void;
    lastAcceleration?: Acceleration;
    threshold?: number;
    debounceTime?: number;
    lastStepTime?: number;
}

export const characterMove = ({ steps, setSteps, lastAcceleration, threshold, debounceTime, lastStepTime }: Steps): void => {
  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', (event: DeviceMotionEvent) => {
      const acceleration = event.acceleration;
      if (acceleration) {
        const currentTime = Date.now();
        const deltaZ = Math.abs((acceleration.z ?? 0) - (lastAcceleration?.z ?? 0));
        if (deltaZ > threshold! && currentTime - lastStepTime! > debounceTime!) {
          setSteps(steps + 3);
          lastStepTime = currentTime;
        }

        lastAcceleration = {
          x: acceleration.x,
          y: acceleration.y,
          z: acceleration.z,
        };
      }
    });
  }
}

