import Image from "next/image";

type ContentItem = {
    type:'text'|'image';
    data:string;
}
interface InfoProp{
    info:ContentItem[]
}


const ContactInformation:React.FC<InfoProp> = ({info})=>{
    const glowImage = info?.[0]?.data
    const locationImage = info?.[2]?.data
    const emailtag = info?.[4]?.data
    const contactimage = info?.[6]?.data
    const robot  = info?.[8]?.data

    //console.log("ingormation ",info);
    
    return(
        <section className="bg-black text-white flex flex-col md:flex-row items-center justify-center md:gap-28">
            {glowImage && (
            <Image
            src={glowImage}
            alt="glow image"
            width={200}
            height={100} 
            className=" absolute left-0 -translate-y-5 hidden lg:block"/>
            )}
           
            <div>
                <h1 className="text-[#3ae51d] py-5">{info?.[1]?.data}</h1>
                <ul>
                    <li className="flex items-start gap-2">
                    {locationImage && (
                    <Image
                    src={locationImage}
                    alt="location"
                    width={26}
                    height={34}
                    />
                    )}
                    
                    <p>{info?.[3]?.data}</p>
                    </li>

                    <li className="flex items-start gap-2 py-5">
                    {emailtag && (
                    <Image
                    src={emailtag}
                    alt="email"
                    width={26}
                    height={34}
                    />
                    )}
                    
                    <p>{info?.[5]?.data}</p>
                    </li>
                    
                    <li className="flex items-start gap-2 ">
                    {contactimage && (
                    <Image
                    src={contactimage}
                    alt="tick"
                    width={26}
                    height={34}
                    />
                    )}
                   
                    <p>{info?.[7]?.data}</p>
                    </li>
                
                </ul>
            </div>
            <div className="py-5 md:py-0">
            {robot && (
            <Image
            src={robot}
            alt="robot"
            width={225}
            height={225} />
            )}
               
            </div>

        </section>
    );
};

export default ContactInformation;