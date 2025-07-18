'use client';
import Image from 'next/image';

interface HowItWorksItem {
  type: 'text' | 'image';
  data: string;
  name: string;
}

interface PathtoaiProps {
  pathtoai: HowItWorksItem[];
}

const Pathtoai = ({ pathtoai }: PathtoaiProps) => {
  const leftDesignImage = pathtoai?.[0]?.data;
  const title = pathtoai?.[1]?.data;
  const arrow = pathtoai?.[2]?.data;
  const masteryPathData = pathtoai?.slice(3);

  return (
    <section className='bg-black text-white relative'>
      {/* Glow image background */}
      {leftDesignImage && (
        <Image
          src={leftDesignImage}
          alt='glow image'
          width={180}
          height={100}
          className='absolute left-0 translate-y-5 hidden lg:block'
        />
      )}

      {title && (
        <h1 className='text-[#3ae51d] text-center py-10 md:py-20 text-sm md:text-3xl lg:text-5xl'>
          {title}
        </h1>
      )}

      <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-10 px-4'>
        {masteryPathData &&
          masteryPathData.map((item, index) => {
            const parts = item?.name?.split('||') || [];
            const [title1, title2, desc1, desc2, desc3] = parts;

            return item?.data && item?.name ? (
              <div
                key={index}
                className='flex flex-col md:flex-row items-center justify-center'
              >
                <div className='flex flex-col items-center text-center relative'>
                  {/* Icon Image */}
                  <Image src={item.data} alt='icon' width={80} height={80} />

                  {/* Title */}
                  {(title1 || title2) && (
                    <p className='text-[#3ae51d] font-semibold text-xl pt-5'>
                      {title1} <br />
                      {title2}
                    </p>
                  )}

                  {/* Description */}
                  {(desc1 || desc2 || desc3) && (
                    <p className='text-[10px] text-gray-300 mt-1 leading-relaxed'>
                      {desc1 && <>{desc1} <br /></>}
                      {desc2 && <>{desc2} <br /></>}
                      {desc3 && <>{desc3}</>}
                    </p>
                  )}
                </div>

                {/* Arrow (except last card) */}
                {index !== masteryPathData.length - 1 && arrow && (
                  <Image
                    src={arrow}
                    alt='arrow icon'
                    width={80}
                    height={80}
                    className='-translate-y-20 hidden md:block'
                  />
                )}
              </div>
            ) : null;
          })}
      </div>
    </section>
  );
};

export default Pathtoai;
