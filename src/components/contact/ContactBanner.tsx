import Navbar from "../home/Navbar";

type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

interface BannerSectionProp {
  bannerSectionData: ContentItem[];
}

const ContactBanner: React.FC<BannerSectionProp> = ({ bannerSectionData }) => {
  const bannerImage = bannerSectionData?.[0]?.data;

  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="relative bg-black text-white bg-cover bg-no-repeat bg-center border-t-4 h-[400px]"
    >
      {/* Top Borders */}
      <div className="absolute top-0 left-0 w-full h-[50px] bg-black z-20" />
      <div className="absolute top-[50px] left-0 w-full h-[3px] bg-green-500 z-30" />

      {/* Main Centered Content */}
      <div className="relative z-40 flex flex-col md:flex-row justify-center items-center md:items-start h-full px-4 pt-[53px] text-center md:text-left">
        {/* Left Side: Navbar */}
        <div className="flex-1 flex justify-center w-full md:w-auto md:justify-center">
          <Navbar />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1 mt-4 md:mt-[65px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            {bannerSectionData?.[1]?.data}{' '}
            <span className="text-[#3ae51d]">{bannerSectionData?.[2]?.data}</span>
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2">
            {bannerSectionData?.[3]?.data}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
