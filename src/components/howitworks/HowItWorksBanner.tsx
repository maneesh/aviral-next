import Image from "next/image";
const HowItWorksBanner = ()=>{
    return(
        <section className="flex flex-col md:flex-row flex-wrap items-center justify-between bg-black mt-5 p-20 md:pr-72 md:pl-96 bg-[url('/images/bannerimg.png')] bg-cover bg-no-repeat bg-center border-t-4 ">
            <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />
            <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />
            <div >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold ">How It Works at <br /> aviral<span className="text-[#3ae51d]">ai</span></h1>
                <p className="text-white py-5">Create advanced projects under guidence by the top 1% Gain <br />technologies through hands Secure your desired</p>
                </div>
                
        
            {/* <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 relative"> */}
            <div>
            <Image
            src="/images/brainimage.png"
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