"use client";

import Particles from './Particles';

export function ParticlesBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
    </div>
  );
}
