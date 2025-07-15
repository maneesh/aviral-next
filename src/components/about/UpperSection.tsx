'use client'
import Image from "next/image";

type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

interface UpperSectionProps {
  upperSectionData: ContentItem[];
}
const UpperSection:React.FC<UpperSectionProps> = ({upperSectionData})=>{
      
   // console.log(upperSectionData)
    const whoWeAre = upperSectionData?.[0]?.data
    const lorem1 = upperSectionData?.[1]?.data
    const lorem2 = upperSectionData?.[2]?.data
    const lorem3 = upperSectionData?.[3]?.data
    const lorem4 = upperSectionData?.[4]?.data
    const lorem5 = upperSectionData?.[5]?.data
    const lorem6 = upperSectionData?.[6]?.data
    const lorem7 = upperSectionData?.[7]?.data

    const Mission = upperSectionData?.[8]?.data
    const tick = upperSectionData?.[9]?.data
    const lorem8 = upperSectionData?.[10]?.data
    const lorem9 = upperSectionData?.[11]?.data
    const lorem10 = upperSectionData?.[13]?.data
    const lorem11 = upperSectionData?.[14]?.data
    const lorem12 = upperSectionData?.[16]?.data


    return(
        <section className="flex flex-col md:flex-row items-center justify-center py-10 md:space-x-20 bg-black text-white text-center md:text-start">
            <div>
                <h1 className="pb-5">{whoWeAre}</h1>
                <p>{lorem1} <br />
                {lorem2}<br />
                {lorem3} <br />
                {lorem4} <br />
                {lorem5}</p>
                <h1 className="pt-5">{lorem6}</h1>
                <h1>{lorem7}</h1>
            </div>
            <div>
                <h1 className="pb-5">{Mission} </h1>
                <ul >
                <li className="flex items-start gap-2">
                {tick && (
                 <Image
                  src={tick}
                  alt="tick"
                  width={16}
                  height={16}
                 />
                )}
                 
                {lorem8} <br />
                {lorem9}
                </li>
                <li className="flex items-start gap-2 py-5">
                {tick && (
                <Image
                  src={tick}
                  alt="tick"
                  width={16}
                  height={16}
                 />
                )}
                
                <p>{lorem10} <br />
                {lorem11}</p>
                </li>
                <li className="flex items-start gap-2">
               {tick && (
                <Image
                  src={tick}
                  alt="tick"
                  width={16}
                  height={16}
                 />
                )}
                <p>{lorem12}</p>
                </li>
                </ul>
                
            </div>
        </section>

    );
};

export default UpperSection;