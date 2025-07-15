"use client"
import Image from "next/image";
interface MentorSectionItem {
  type: 'text' | 'image';
  data: string;
}

interface MentorSectionProps {
  mentorSection: MentorSectionItem[];
}
const MentorSection = ({mentorSection}:MentorSectionProps)=>{
    const mentorMsgImg = mentorSection?.[3]?.data;
    const mentorRightBgImg = mentorSection?.[11]?.data;
    
    return(
       <section className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-10">
        <div className="flex flex-col md:flex-row items-center justify-center py-10 gap-x-36">
            <div className="">
            <h1 className="text-[#3ae51d] sm:2xl md:4xl lg:text-5xl ">{mentorSection?.[0]?.data}</h1>
            <p className="pt-5 sm:l md:xl lg:text-2xl">{mentorSection?.[1]?.data} <br />{mentorSection?.[2]?.data}</p>
            <Image 
            src ={mentorMsgImg}
            alt="message icon "
            width={150}
            height={150}
            className="md: translate-x-36 translate-y-11 hidden md:block"
            />
            </div>
           
            <div>
                <div className="bg-[#edece8] text-black w-max p-5 rounded-md mt-5 md:mt-0"><p>{mentorSection?.[4]?.data}<br />{mentorSection?.[5]?.data}<br />{mentorSection?.[6]?.data}</p>
                </div>
                <div className="bg-[#edece8] text-black mt-5 w-max p-5 rounded-md md:-translate-x-10">
                    <p>{mentorSection?.[7]?.data}<br />{mentorSection?.[8]?.data} <br />{mentorSection?.[9]?.data}<br />{mentorSection?.[10]?.data}</p>
                </div>
            </div>
        </div>
        <Image
         src={mentorRightBgImg}
         alt="glow image"
         width={200} 
         height={200}
         className="absolute right-0 hidden lg:block translate-y"
                             />
       </section>
    
    );
};

export default MentorSection;