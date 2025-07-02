


import Image from "next/image";

const BottomUpSection = ()=>{
    return (
        <section className="flex items-center justify-center p-10 bg-black text-white">
            <div className="flex flex-col md:flex-row md:space-x-20">
                <div>
                    <h1 className="py-5 ml-5">What Sets <span className="text-[#3ae51d]">Us Apart</span> </h1>
                    <ul>
                        <li className="flex items-start gap-2">
                            <Image
                            src="/images/tick.jpg"
                            alt="tick"
                            width={16}
                            height={16}
                             />
                            <span>Lorem ipsum is simply dummy text of the printing and <br />
                            Lorem ipsum has been the industry's.</span>
                        </li>
                        <li className="py-5 flex items-start gap-2">
                            <Image
                            src="/images/tick.jpg"
                            alt="tick"
                            width={16}
                            height={16}
                             />
                            <p>when an unknown printer took a galley of type and scrambled <br />
                               specimen book. It has survived.</p>
                        </li>
                        <li className="pb-5 flex items-start gap-2">
                            <Image
                            src="/images/tick.jpg"
                            alt="tick"
                            width={16}
                            height={16}
                             />
                            <p>1960s with the release of Letraset sheets containing Lorem</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <Image
                            src="/images/tick.jpg"
                            alt="tick"
                            width={16}
                            height={16}
                             />
                        <p>when an unknown printer took a galley of type and scrambled <br />
                               specimen book. It has survived.</p>
                        </li>
                    </ul>
                </div>
                <div className="py-5 md:py-0">
                    <Image
                     src="/images/okimage.jpg"
                     alt="okimage"
                     width={300} 
                     height={300} />
                </div>
            </div>
        </section>

     );
};

export default BottomUpSection;