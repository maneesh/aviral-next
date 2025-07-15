'use client';

import Image from "next/image";



interface BottomDownSectionProp{
    bottomDownData: any[];
}

const BottomDownSection:React.FC<BottomDownSectionProp> = ({bottomDownData})=>{

    // useEffect(() => {
    //     console.log("BottomDownData:", bottomDownData);
    //   }, [bottomDownData]);

        console.log("this is bottom down data",bottomDownData);

    const glowImage = bottomDownData?.[0]?.data
    const robot = bottomDownData?.[1]?.data
        
    return(
        <section className="bg-black text-white flex items-center justify-center relative pt-10 pb-36 ">
            {glowImage && (
                 <Image
                    src={glowImage}
                    alt="glow image"
                    width={100}
                    height={100} 
                    className=" absolute left-0 -translate-y-5 hidden lg:block"/>
            )}
            
            <div className="flex flex-col md:flex-row md:gap-56 items-center">
               
                <div className="px-10 py-5 md:ml-40">
                    {robot && (
                    <Image
                    src={robot}
                    alt="robot"
                    width={125}
                    height={125} />
                    )}
                    
                </div>
                <div className="text-center md:text-left pb-10 md:pb-0">
                    <h1 className="text-[#3ae51d] py-5 ">{bottomDownData?.[2]?.data} </h1>
                    <p className="text-sm">{bottomDownData?.[3]?.data}</p>
                    <p className="text-sm">{bottomDownData?.[4]?.data}</p>
                    <p className="text-sm">{bottomDownData?.[5]?.data} </p>
                    <p className="text-sm">{bottomDownData?.[6]?.data} </p>
                </div>
            </div>
        </section>
    );
};
export default BottomDownSection;