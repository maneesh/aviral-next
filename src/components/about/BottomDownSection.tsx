import Image from "next/image";
const BottomDownSection = ()=>{
    return(
        <section className="bg-black text-white flex items-center justify-center relative pt-10 pb-36 ">
             <Image
                    src="/images/aboutglowleft.png"
                    alt="glow image"
                    width={100}
                    height={100} 
                    className=" absolute left-0 -translate-y-5 hidden lg:block"/>
            <div className="flex flex-col md:flex-row md:gap-56 items-center">
               
                <div className="px-10 py-5 md:ml-40">
                    <Image
                    src="/images/robotimage.jpg"
                    alt="robot"
                    width={125}
                    height={125} />
                </div>
                <div className="text-center md:text-left pb-10 md:pb-0">
                    <h1 className="text-[#3ae51d] py-5 ">Tech + Heart </h1>
                    <p className="text-sm">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="text-sm">Lorem ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <p className="text-sm">when an unknown printer took a galley of type and scrambled it to make a type  </p>
                    <p className="text-sm">specimen book. it has survived not only five centuries, but also t </p>
                </div>
            </div>
        </section>
    );
};
export default BottomDownSection;