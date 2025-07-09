import Image from "next/image";

const MentorSection = ()=>{
    return(
       <section className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-10">
        <div className="flex flex-col md:flex-row items-center justify-center py-10 gap-x-36">
            <div className="">
            <h1 className="text-[#3ae51d] sm:2xl md:4xl lg:text-5xl ">Meet Your AI Mentor</h1>
            <p className="pt-5 sm:l md:xl lg:text-2xl">Create advanced projects under <br />guidance by the top 1% Gain </p>
            <Image 
            src ="/images/msgicon.jpg"
            alt="message icon "
            width={150}
            height={150}
            className="md: translate-x-36 translate-y-11 hidden md:block"
            />
            </div>
           
            <div>
                <div className="bg-[#edece8] text-black w-max p-5 rounded-md mt-5 md:mt-0"><p>Create advanced projects<br /> under guidance by the <br />top 1% Gain</p>
                </div>
                <div className="bg-[#edece8] text-black mt-5 w-max p-5 rounded-md md:-translate-x-10">
                    <p>Create advanced <br />projects under <br />guidance by the <br />top 1% Gain</p>
                </div>
            </div>
        </div>
        <Image
         src="/images/aboutglowright.png"
         alt="glow image"
         width={200} 
         height={200}
         className="absolute right-0 hidden lg:block translate-y"
                             />
       </section>
    
    );
};

export default MentorSection;