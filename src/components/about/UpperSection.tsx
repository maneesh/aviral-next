
const UpperSection = ()=>{
    return(
        <section className="flex flex-col md:flex-row items-center justify-center py-10 md:space-x-20 bg-black text-white text-center md:text-start">
            <div>
                <h1 className="pb-5">Who We Are</h1>
                <p>Lorem ipsum is simply dummy text of the printing and <br />
                Lorem ipsum has been the industry's standard dummy text, <br />
                when an unknown printer took a galley of type and scrambled <br />
                specimen book. It has survived not only five centuries, but also <br />
                electronic typesetting,remaining</p>
                <h1 className="pt-5">Training by the top 1% </h1>
                <h1>impact for the real world</h1>
            </div>
            <div>
                <h1 className="pb-5">Our Mission </h1>
                <ul className="list-inside list-disc">
                    <li>Lorem ipsum is simply dummy text of the printing and <br />
                    Lorem ipsum has been the industry's.</li>
                <li><p>when an unknown printer took a galley of type and scrambled <br />
                specimen book. It has survived.</p></li>
                <li><p>1960s with the release of Letraset sheets containing Lorem</p></li>
                </ul>
                
            </div>
        </section>

    );
};

export default UpperSection;