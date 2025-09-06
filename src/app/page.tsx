"use client";
import { Button, NavSection } from "./Components";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className=" relative items-center justify-center w-full text-PureWhite-100">
        <div className="w-full h-full z-20 lg:px-30 absolute flex items-center justify-center lg:justify-start">
          {/* Content */}
          <div className="text-center md:w-1/2 lg:ml-0 lg:items-start lg:gap-2 lg:text-left lg:w-fit w-full flex flex-col items-center md:gap-y-3 justify-center">
            <h2 className="font-thin tracking-[0.5em] md:tracking-[0.5em] text-xs md:text-lg lg:text-sm lg:tracking-[0.5em] uppercase mb-4">
              New product
            </h2>

            <h1 className="text-2xl md:text-6xl lg:text-5xl font-bold tracking-wide mb-4">
              XX99 MARK II <br /> HEADPHONES
            </h1>

            <p className="text-[11px] md:text-sm lg:text-base lg:text-left lg:w-2/4 md:text-center w-4/5 leading-5 font-extralight mb-6">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Button
              text="SEE PRODUCT"
              className="text-sm md:text-base md:w-1/2 md:py-4 lg:w-37 lg:text-sm"
              link="headphones"
            />
          </div>
        </div>

        {/* Background Image */}
        <picture className="w-full z-10">
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home/desktop/image-hero.jpg"
            sizes="10vw"
          />
          <source
            media="(min-width: 640px)"
            srcSet="/assets/home/tablet/image-header.jpg"
            sizes="100vw"
          />
          <img
            src="/assets/home/mobile/image-header.jpg"
            alt="Speaker"
            className="object-cover w-full h-full"
          />
        </picture>
      </section>

      <div className="min-h-screen lg:p-30 my-7 md:my-0 relative flex flex-col bg-WhiteSmoke-100">
        <div className="m-4 md:p-7 lg:p-0 lg:m-0">
          <NavSection />

          <section className="bg-BurntSienna-100 lg:mt-25 md:w-full md:py-10 lg:pl-23 lg:pr-15 lg:py-0 lg:pt-18 rounded-lg flex relative flex-col lg:flex-row lg:justify-between gap-7 md:gap-15  items-center h-auto overflow-hidden">
            {/* Background pattern with speaker image positioned in the center */}
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              alt="pattern-circles"
              height={400}
              width={400}
              className="object-cover border-4 absolute left-1/2 -translate-x-1/2 lg:-translate-x-12/10 lg:translate-y-3/10 -translate-y-1/7 md:-translate-y-1/5 scale-125 lg:scale-240 md:scale-220 z-0"
            />

            {/* Speaker image centered within the circles */}
            <div className="mt-10 relative h-48 w-1/3 lg:-mb-4 md:w-1/4 lg:w-1/3 lg:h-100">
              <Image
                src="/assets/home/mobile/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                fill
                loading="lazy"
              />
            </div>

            {/* Text content */}
            <div className="text-center px-4 md:w-1/2 lg:w-7/13 md:px-0 md:flex md:flex-col md:items-center lg:items-start md:gap-4 text-white">
              <h2 className="text-2xl lg:text-left font-bold mb-2 lg:text-4xl md:text-5xl">
                ZX9
                <br />
                SPEAKER
              </h2>
              <div className="text-xs text-center lg:text-left lg:w-full lg:text-base font-light mb-5 md:text-center leading-5  mx-auto md:text-base md:leading-6">
                <p>Upgrade to premium speakers that are</p>
                <p>
                  phenomenally built to deliver truly
                  <span className="hidden lg:pl-1 lg:inline">remarkable</span>
                </p>
                <p>
                  <span className="lg:hidden">remarkable</span> sound.
                </p>
              </div>
              {/* Button */}
              <Button
                text="SEE PRODUCT"
                className="md:font-bold md:py-4 md:w-1/2 mb-13 md:px-5 tracking-[1em]"
                variant="secondary"
              />
            </div>
          </section>

          <section className="flex flex-col space-y-4 my-5 lg:my-8 h-64 md:h-85 relative w-full ">
            <picture className="w-full h-full rounded-lg">
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
                sizes="100vw"
              />
              <source
                media="(min-width: 640px)"
                srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
                sizes="100vw"
              />
              <img
                src="/assets/home/mobile/image-speaker-zx7.jpg"
                alt="Speaker"
                className="object-cover w-full h-full rounded-lg"
                sizes="100vw"
              />
            </picture>

            <div className="z-10 inset-0 flex flex-col px-5 md:px-15 space-y-5 md:space-y-7 lg:space-y-9 lg:px-22 justify-center absolute">
              <h1 className="text-2xl font-semibold md:text-3xl tracking-wide">
                ZX7 SPEAKER
              </h1>
              <Button
                text="SEE PRODUCT"
                variant="new"
                className="w-3/5 md:w-44 md:text-sm md:py-4"
              />
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 lg:space-x-8">
              <picture className="w-full md:w-1/2 md:h-85 h-32 rounded-lg">
                <source
                  media="(min-width: 1024px)"
                  srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
                  sizes="100vw"
                />
                <source
                  media="(min-width: 640px)"
                  srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
                  sizes="100vw"
                />
                <img
                  src="/assets/home/mobile/image-earphones-yx1.jpg"
                  alt="earphones"
                  className="object-cover w-full h-full rounded-lg"
                  sizes="100vw"
                />
              </picture>

              <div className="h-32 md:h-85 md:w-1/2 bg-OffWhite-100 flex flex-col space-y-5 md:space-y-7 lg:space-y-9 lg:px-22 justify-center px-6 md:px-10 rounded-lg">
                <h1 className="text-xl md:text-3xl text-PureBlack-100 font-semibold tracking-wide">
                  YX1 EARPHONES
                </h1>
                <Button
                  text="SEE PRODUCT"
                  variant="new"
                  className="w-3/5 md:w-44 md:text-sm md:py-4"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
