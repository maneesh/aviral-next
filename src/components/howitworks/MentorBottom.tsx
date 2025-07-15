"use client"
import Image from "next/image";
interface MentorItem {
  type: 'text' | 'image';
  data: string;
}

interface MentorBottomProps {
  mentorBottom: MentorItem[];
}
const MentorBottom = ({mentorBottom}:MentorBottomProps)=>{
  
    const mentorBottomIconImg = mentorBottom?.[2]?.data;
    const mentorRoboImg = mentorBottom?.[1]?.data;
    
    return(
     <section className="bg-black">
        <div className="flex flex-col md:flex-row text-white items-center justify-center space-x-5 text-center">
            <div>
                <h1 >{mentorBottom?.[0]?.data}</h1>
                <div>
                <Image
                src={mentorBottomIconImg}
                alt="All Icon"
                width={600}
                height={50} 
                className="px-10 md:px-0 py-5"/>
                </div>
            </div>
            <div>
                <Image
                src={mentorRoboImg}
                alt="robot"
                width={300}
                height={250}
                className="translate-x-14 -translate-y-28 hidden md:block" />
            </div>
        </div>
     </section>
    );
};

export default MentorBottom;