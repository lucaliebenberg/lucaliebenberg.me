import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";
import { myHobbies } from "../constants/index.js";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("lucaliebenberg.me");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const hobbies = myHobbies;

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid5.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Luca Liebenberg</p>
              <p className="grid-subtext">
              I have honed my expertise frontend development, creating dynamic, interactive, and responsive websites - whilst constantly learning how to build robust backend applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialise in Frontend technologies, such as JavaScript - ReactJS and NextJS, whilst also being proficient in Backend technologies, such as Django for robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 28,
                    lng: 77,
                    text: "Cape Town, South Africa",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Frontend Developer who loves Backend
              </p>
              <p className="grid-subtext">
                I&apos;m based in Cape Town, South Africa and currently work for Trinity IoT, as a Frontend Developer.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Problem Solving</p>
              <p className="grid-subtext">
                I love learning new things on a daily basis, whether that is data structures & algorithms, networking, frontend system design or backend architecture.
                Understanding how things work end to end fascinates me. I'm a big fan of problem solving and digging into the unknown.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">

            <div>
              <p className="grid-headtext">My Socials</p>
              <p className="grid-subtext">
              Socials where we can connect and some of my daily hobbies.
              </p>
              {/* TODO: socials block here */}
              <div className="flex items-center gap-3 mt-2">
              {hobbies.map((item, index) => (
                <a key={index} href={item.href} target="_blank">
                  <div  className="hobby-logo">
                    <img src={item.path} alt={item.name} />
                  </div>
                </a>
          
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  liebenbergluca@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
