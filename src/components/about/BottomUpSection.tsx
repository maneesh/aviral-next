'use client';
import Image from "next/image";
import React from "react";

type ContentItem = {
    type:'text'| 'image';
    data:string;
}
interface BottomUpSectionProp{
    bottomUpData:ContentItem[];
}
const BottomUpSection:React.FC<BottomUpSectionProp> = ({bottomUpData})=>{

    //console.log(bottomUpData)
        
      const tick = bottomUpData?.[2]?.data
      const okimage = bottomUpData?.[13]?.data

    return (
        <section className="flex items-center justify-center p-10 bg-black text-white">
            <div className="flex flex-col md:flex-row md:space-x-20">
                <div>
                    <h1 className="py-5 ml-5">{bottomUpData?.[0]?.data} <span className="text-[#3ae51d]">{bottomUpData?.[1]?.data}</span> </h1>
                    <ul>
                        <li className="flex items-start gap-2">
                        {tick && (
                            <Image
                            src={tick}
                            alt="tick"
                            width={16}
                            height={16}
                             />
                        )}
                            
                            <span>{bottomUpData?.[3]?.data} <br />
                            {bottomUpData?.[4]?.data}</span>
                        </li>
                        <li className="py-5 flex items-start gap-2">
                           {tick && (
                            <Image
                            src={tick}
                            alt="tick"
                            width={16}
                            height={16}
                             />
                        )}
                            <p>{bottomUpData?.[6]?.data} <br />
                               {bottomUpData?.[7]?.data}</p>
                        </li>
                        <li className="pb-5 flex items-start gap-2">
                          {tick && (
                            <Image
                            src={tick}
                            alt="tick"
                            width={16}
                            height={16}
                             />
                        )}
                            <p>{bottomUpData?.[9]?.data}</p>
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
                        <p>{bottomUpData?.[11]?.data} <br />
                               {bottomUpData?.[12]?.data}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-5 md:py-0">
                    {okimage && (
                    <Image
                     src={okimage}
                     alt="okimage"
                     width={300} 
                     height={300} />
                    )}
                    
                </div>
            </div>
        </section>

     );
};

export default BottomUpSection;