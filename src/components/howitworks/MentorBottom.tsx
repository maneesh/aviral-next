import Image from "next/image";

const MentorBottom = ()=>{
    return(
     <section className="bg-black">
        <div className="flex flex-col md:flex-row text-white items-center justify-center space-x-5 text-center">
            <div>
                <h1 >Powered by the Best in AI & EdTech</h1>
                <div>
                <Image
                src="/images/allicon.jpg"
                alt="All Icon"
                width={600}
                height={50} 
                className="px-10 md:px-0 py-5"/>
                </div>
            </div>
            <div>
                <Image
                src="/images/HIWrobot.png"
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