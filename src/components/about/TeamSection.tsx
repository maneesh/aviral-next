import Image from "next/image";
const TeamSection = ()=>{
      return(
        <section className="flex items-center justify-center flex-col p-10 bg-black text-white relative">
            <h1 className="text-[#3ae51d] md:p-10 py-10">MEET OUR TEAM </h1>
            <div className="flex flex-col md:flex-row md:space-x-24 ">
                <div className="py-5 md:py-0">
                    <Image
                    src="/images/meetOurTeam1.jpg"
                    alt="team"
                    width={100} 
                    height={100}/>
                    <h5 className="text-[#3ae51d] font-bold">Lorem Ipsum</h5>
                    <h6 className=" text-[9px]">Lorem Ipsum is simply</h6>
                </div>
                <div >
                    <Image
                    src="/images/meetOurTeam2.jpg"
                    alt="team"
                    width={100} 
                    height={100} />
                    <h5 className="text-[#3ae51d] font-bold">Lorem Ipsum</h5>
                    <h6 className=" text-[9px]">Lorem Ipsum is simply</h6>
                </div>
                <div className="pt-5 md:pt-0" >
                    <Image
                    src="/images/meetOurTeam3.jpg"
                    alt="team"
                    width={100} 
                    height={100}
                     />
                     <h5 className="text-[#3ae51d] font-bold">Lorem Ipsum</h5>
                    <h6 className=" text-[9px]">Lorem Ipsum is simply</h6>
                </div>
                
            </div>
            <Image
             src="/images/aboutglowright.png"
             alt="glow image"
             width={200} 
             height={200}
             className="absolute right-0 hidden lg:block"
             />
            
        </section>
      );
};

export default TeamSection;