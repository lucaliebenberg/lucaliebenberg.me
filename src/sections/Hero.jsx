import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";

import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import Headphones from "../components/Headphones.jsx";
import Saxophone from "../components/Saxophone.jsx" 

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isLarge = useMediaQuery({ minWidth: 1020 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Luca <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Curious developer on a journey
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 23]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, 0, 0]}
              />
            </HeroCamera>
            <group>
              <Saxophone
                position={sizes.saxophone}
                scale={0.28}
                rotation={[0.7, 1, -0.4]}
              />
              <Headphones
                position={sizes.headPhones}
                scale={0.5}
                rotation={[0.5, 1, -0.4]}
              />
            </group>
            <ambientLight intensity={2} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's connect!"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
