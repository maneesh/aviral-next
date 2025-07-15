'use client';
import Image from "next/image";
import { useEffect,useState } from "react";

type ContentItem = {
    type:'text'|'image';
    data:string;
}
interface GetInTouchProp{
    getInTouchData:ContentItem[]
}

const GetInTouchSection:React.FC<GetInTouchProp> = ({getInTouchData})=>{

    const glowImage = getInTouchData?.[7]?.data

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
    setName(getInTouchData?.[2]?.data || "");
    setEmail(getInTouchData?.[3]?.data || "");
    setSubject(getInTouchData?.[4]?.data || "");
    setMessage(getInTouchData?.[5]?.data || "");
  }, [getInTouchData]);

         //console.log("getin touch ",getInTouchData);
         

    return(
      <section className="text-white bg-black flex items-center justify-center flex-col py-20 text-center">
        <h1 className="text-4xl">{getInTouchData?.[0]?.data}</h1>
        <h4>{getInTouchData?.[1]?.data}  </h4>
        <div className="pt-10">
            <div className="flex flex-col md:flex-row">
                <div>
                <input
                 type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="Name"
                 className="bg-black border-[#3ae51d] rounded-md" />
                </div>
                <div className="pt-5 md:pt-0">
                <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-black border-[#3ae51d] md:ml-5 rounded-md " />
                </div>
            </div>
            <div className="py-5">
                <input 
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="bg-black border-[#3ae51d] rounded-md w-full " />
            </div>
            <div className="">
                <input 
                type="text"
                value={message}
                onChange={(e)=> setMessage(e.target.value)} 
                placeholder="Message"
                className="bg-black border-2 border-[#3ae51d] rounded-md w-full h-32 " />
            </div>
        </div>
        <button className="px-8 py-3 bg-[#3ae51d] text-black font-bold my-5 rounded-sm">{getInTouchData?.[6]?.data}</button>
        {glowImage && (
        <Image
         src={glowImage}
         alt="glow image"
         width={200} 
         height={200}
         className="absolute right-0 hidden lg:block translate-y-24"
                     />
        )}
         
      </section>
    );
};

export default GetInTouchSection;