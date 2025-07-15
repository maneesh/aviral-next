import Navbar from "../home/Navbar";

type ContentItem = {
    type:'text'|'image';
    data:string;
}
interface BannerSectionProp{
    bannerSectionData:ContentItem[]
}

const ContactBanner:React.FC<BannerSectionProp> = ({bannerSectionData}) => {

    console.log(bannerSectionData);
    const bannnerImage = bannerSectionData?.[0]?.data

  return (
    <section style={{backgroundImage:`url(${bannnerImage})`}} className="relative bg-black text-white  bg-cover bg-no-repeat bg-center border-t-4 h-[400px]">
      {/* Top Black & Green Borders */}
      <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />
      <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

      {/* Main Content */}
      <div className="relative z-40 flex flex-col items-center justify-center text-center h-full px-4 pt-[53px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          {bannerSectionData?.[1]?.data} <span className="text-[#3ae51d]">{bannerSectionData?.[2]?.data}</span>
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2">
          {bannerSectionData?.[3]?.data}
        </h3>

        {/* Navbar Below */}
        <div className="mt-6">
          <Navbar />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
