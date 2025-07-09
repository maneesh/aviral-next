import Image from "next/image";

const ContactInformation = ()=>{
    return(
        <section className="bg-black text-white flex flex-col md:flex-row items-center justify-center md:gap-28">
            <Image
            src="/images/aboutglowleft.png"
            alt="glow image"
            width={200}
            height={100} 
            className=" absolute left-0 -translate-y-5 hidden lg:block"/>
            <div>
                <h1 className="text-[#3ae51d] py-5">Contact Information </h1>
                <ul>
                    <li className="flex items-start gap-2">
                    <Image
                    src="/images/contactlocation.jpg"
                    alt="location"
                    width={26}
                    height={34}
                    />
                    <p>123 anywhere st.city 1233</p>
                    </li>

                    <li className="flex items-start gap-2 py-5">
                    <Image
                    src="/images/emailtag.jpg"
                    alt="email"
                    width={26}
                    height={34}
                    />
                    <p>info.@aviralai.com</p>
                    </li>
                    
                    <li className="flex items-start gap-2 ">
                    <Image
                    src="/images/contactimage.jpg"
                    alt="tick"
                    width={26}
                    height={34}
                    />
                    <p>123 456 7890</p>
                    </li>
                
                </ul>
            </div>
            <div className="py-5 md:py-0">
                <Image
                src="/images/robotContact.jpg"
                alt="robot"
                width={225}
                height={225} />
            </div>

        </section>
    );
};

export default ContactInformation;