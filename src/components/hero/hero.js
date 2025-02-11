import Image from "next/image"
import InteoAwards from "./awards";

const InteoPageHeroContent =()=>{
    return(
        <section className="">
            <Image src={"/images/hero-image-desktop.png"} alt="apartment" width={1600} height={1600} />
            <InteoAwards />
        </section>
    )
};

export default InteoPageHeroContent