import Image from "next/image"
const AboutBanner = ()=>{
    return(
        <section className="flex flex-col md:flex-row flex-wrap items-center justify-between bg-black mt-5 p-20 md:pr-72 md:pl-96 bg-[url('/images/bannerimg.png')] bg-cover bg-no-repeat bg-center border-t-4 border-t-[#3ae51d]">
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold ">About <span className="text-[#3ae51d]">US</span></h1></div>
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 relative">
            <Image
            src="/images/bannerimage.jpg"
            alt="bannerimage"
            fill
            className="object-contain"
            />
            </div>
        </section>

    );
};

export default AboutBanner;