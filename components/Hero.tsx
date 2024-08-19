"use client";

import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-black">
      <motion.div 
        className="hero-map"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        >
          <Image 
            src="/eal_pin.svg"
            alt="camp"
            width={50}
            height={50}
          />
        </motion.div>
        <motion.h1 
          className="bold-52 lg:bold-88 text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        >
          E.A.L Genius Construction Services LLC
        </motion.h1>
        <motion.p 
          className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
        >
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </motion.p>

        <motion.div 
          className="flex flex-col w-full gap-3 sm:flex-row my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        >
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
