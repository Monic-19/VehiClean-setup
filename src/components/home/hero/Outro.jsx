import React from 'react';
import Link from 'next/link';
import { usePageNavigation } from '../../../hooks/usePageNavigation';

const Outro = () => {
  const { handleNavClick } = usePageNavigation();

  return (
    <section className="outro">
      <div className="h-full w-full p-3 sm:p-4 md:p-4 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-16 lg:gap-32 ">
        <div className="md:h-full h-1/2 lg:h-full w-full lg:w-1/2 p-3 sm:p-4 md:p-3 ">
          <h4 className="uppercase text-left text-lg sm:text-xl md:text-xl font-bold mb-4">
            Why Choose Us ?
          </h4>

          <div className="h-48 sm:h-56 md:h-64 lg:h-2/3 w-full my-3 sm:my-4 md:my-4">
            <img
              src="/carwash1.avif"
              alt="VehiClean-image"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-left text-sm sm:text-base md:text-base md:leading-relaxed">
            VEHICLEAN provides professional car cleaning services at your
            doorstep whenever you want, so you can spend your time doing the
            things you love.
          </p>
        </div>

        <div className="md:h-full h-1/2  w-full lg:w-1/2 p-3 sm:p-4 md:p-3 flex flex-col items-start lg:items-end md:mt-0 mt-[3vh]">
          <div className="h-[80%] sm:h-56 md:h-64 lg:h-[90%] w-full lg:w-[90%] mt-4 sm:mt-6 md:mt-6 lg:mt-6 mb-3 sm:mb-4 order-2 lg:order-1">
            <img
              src="/carwash2.avif"
              alt="carwash-image"
              className="h-full w-full object-cover"
            />
          </div>
          <h4 className="uppercase md:text-left text-center  lg:text-right text-lg sm:text-xl md:text-xl font-bold md:underline underline-offset-4 sm:underline-offset-6 md:underline-offset-6 hover:no-underline duration-300 cursor-pointer order-1 lg:order-2 mb-3 lg:mb-0 ">
            <Link href={'/bundles'} onClick={handleNavClick('/bundles')}>
              Want more value ? Explore our bundles page!
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Outro;
