import Image from "next/image";



const GetInTouchSection = ()=>{
    return(
      <section className="text-white bg-black flex items-center justify-center flex-col py-20 text-center">
        <h1 className="text-4xl">Get In Touch</h1>
        <h4>Create advanced projects under guidence by top 1% Gain  </h4>
        <div className="pt-10">
            <div className="flex flex-col md:flex-row">
                <div>
                <input
                 type="text"
                 value="Name"
                 placeholder="Name"
                 className="bg-black border-[#3ae51d] rounded-md" />
                </div>
                <div className="pt-5 md:pt-0">
                <input 
                type="email"
                value="Email"
                placeholder="Email"
                className="bg-black border-[#3ae51d] md:ml-5 rounded-md " />
                </div>
                
                
            </div>
            <div className="py-5">
                <input 
                type="text"
                value="Subject"
                placeholder="Subject"
                className="bg-black border-[#3ae51d] rounded-md w-full " />
            </div>
            <div className="">
                <input 
                type="text"
                value="Message"
                placeholder="Message"
                className="bg-black border-2 border-[#3ae51d] rounded-md w-full h-32 " />
            </div>
        </div>
        <button className="px-8 py-3 bg-[#3ae51d] text-black font-bold my-5 rounded-sm">SEND MASSAGE</button>
         <Image
         src="/images/aboutglowright.png"
         alt="glow image"
         width={200} 
         height={200}
         className="absolute right-0 hidden lg:block translate-y-24"
                     />
      </section>
    );
};

export default GetInTouchSection;