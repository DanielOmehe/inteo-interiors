"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import InteoAwards from "./awards";

const InteoPageHeroContent =()=>{

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      if (window.innerWidth < 450) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, []);
    return(
        <section className="md:w-screen">
            <Image src={isMobile ? "/images/hero-image-mobile.png" :"/images/hero-image-desktop.png"} alt="apartment" width={isMobile ? 450 :1600} height={1600} />
            <InteoAwards />
        </section>
    )
};

export default InteoPageHeroContent