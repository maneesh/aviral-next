"use client"
import Image from "next/image";

interface HowItWorksItem {
  type: 'text' | 'image';  
  data: string;          
}

interface HowItWorksBannerProps {
  howItWorks: HowItWorksItem[];
}

const HowItWorksBanner = ({ howItWorks }: HowItWorksBannerProps) => {
  const howWorkBackground = howItWorks?.[0]?.data || [];
  const howWorkBrainLogo = howItWorks?.[6]?.data || [];
    
    return(
        <section style={{ backgroundImage: `url(${howWorkBackground})` }}
 className="flex flex-col md:flex-row flex-wrap items-center justify-between bg-black mt-5 p-20 md:pr-72 md:pl-96 bg-cover bg-no-repeat bg-center border-t-4 border-t-[#3ae51d]">
            <div >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold ">{howItWorks?.[1]?.data} <br /> {howItWorks?.[2]?.data}<span className="text-[#3ae51d]">{howItWorks?.[3]?.data}</span></h1>
                <p className="text-white py-5">{howItWorks?.[4]?.data}<br />{howItWorks?.[5]?.data}</p>
            </div>                
            <div>
            <Image
            src={howWorkBrainLogo}
            alt="bannerimage"
            width={300}
            height={200}
            className="object-contain"
            />
            </div>
        </section>

    );
};

export default HowItWorksBanner;