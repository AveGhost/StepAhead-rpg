interface Acceleration {
    x: number | null;
    y: number | null;
    z: number | null;
};

export interface Steps {
    steps: number;
    setSteps: (step: number) => void;
}

let lastAcceleration: Acceleration = { x: 0, y: 0, z: 0 };
const threshold = 1.8;
const debounceTime = 600;
let lastStepTime = 0;

export const characterMove = ({ steps, setSteps }: Steps): void => {
  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', (event: DeviceMotionEvent) => {
      const acceleration = event.acceleration;

      if (acceleration) {
        const currentTime = Date.now();
        const deltaZ = Math.abs((acceleration.z ?? 0) - (lastAcceleration.z ?? 0));

        if (deltaZ > threshold && currentTime - lastStepTime > debounceTime) {
          setSteps(steps + 1);
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

