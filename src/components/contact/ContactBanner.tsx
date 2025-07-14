import Image from "next/image";

const ContactBanner = ()=>{
    return(
     <section className="flex flex-col md:flex-row flex-wrap items-center justify-center text-white bg-black mt-5 p-20 md:pr-72 md:pl-96 bg-[url('/images/bannerimg.png')] bg-cover bg-no-repeat bg-center border-t-4 ">
        <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />
            <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />
                 <div className="text-center  mb-6 md:mb-0">
                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold ">aviral <span className="text-[#3ae51d]">ai</span></h1>
                     <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:5xl">CONTACT US</h3>
                     </div>
                 
             </section>
    );
};

export default ContactBanner;