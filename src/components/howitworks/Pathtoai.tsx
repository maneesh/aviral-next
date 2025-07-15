'use client';
import Image from 'next/image';

interface HowItWorksItem {
  type: 'text' | 'image';
  data: string;
}

interface PathtoaiProps {
  pathtoai: HowItWorksItem[];
}
const Pathtoai = ({ pathtoai }: PathtoaiProps) => {
//   console.log(pathtoai);

  return (
    <section className='bg-black text-white '>
      <Image
        src='/images/aboutglowleft.png'
        alt='glow image'
        width={180}
        height={100}
        className=' absolute left-0 translate-y-5 hidden lg:block'
      />
      <h1 className='text-[#3ae51d] text-center py-10 md:py-20 text-sm md:text-3xl lg:text-5xl'>
        Your Path to Mastery in AI
      </h1>
      <div className='flex flex-col md:flex-row items-center justify-center '>
        <div className='flex items-center flex-col text-center'>
          <Image
            src='/images/signupimage.jpg'
            alt='signup image'
            width={80}
            height={80}
          />
          <p className='text-[#3ae51d] font-semibold text-xl pt-5'>
            Sign Up & <br />
            Profile Creation
          </p>
          <p className='text-[10px]'>
            Create advanced projects <br />
            under guidence by the <br />
            top 1% Gain
          </p>
        </div>

        <Image
          src='/images/arrowicon.jpg'
          alt='arrow icon '
          width={80}
          height={80}
          className='-translate-y-20 hidden md:block'
        />

        <div className='flex items-center flex-col text-center py-10 md:py-0'>
          <Image
            src='/images/chooseicon.jpg'
            alt='choose icon'
            width={80}
            height={80}
          />
          <p className='text-[#3ae51d] font-semibold text-xl pt-5'>
            {' '}
            Choose <br />
            Your Track
          </p>
          <p className='text-[10px]'>
            Create advanced projects <br />
            under guidence by the <br />
            top 1% Gain
          </p>
        </div>

        <Image
          src='/images/arrowicon.jpg'
          alt='arrow icon'
          width={80}
          height={80}
          className='-translate-y-20 hidden md:block'
        />

        <div className='flex items-center flex-col text-center'>
          <Image
            src='/images/liveicon.jpg'
            alt='live icon'
            width={80}
            height={80}
          />
          <p className='text-[#3ae51d] font-semibold text-xl pt-5'>
            {' '}
            Live & Hands-on <br />
            Training{' '}
          </p>
          <p className='text-[10px]'>
            Create advanced projects <br />
            under guidence by the <br />
            top 1% Gain
          </p>
        </div>

        <Image
          src='/images/arrowicon.jpg'
          alt='arrow icon'
          width={80}
          height={80}
          className='-translate-y-20 hidden md:block'
        />

        <div className='flex items-center flex-col text-center py-10 md:py-0'>
          <Image
            src='/images/smarticon.jpg'
            alt='smart icon'
            width={80}
            height={80}
          />
          <p className='text-[#3ae51d] font-semibold text-xl pt-5'>
            Smart Progress <br />
            Tracking{' '}
          </p>
          <p className='text-[10px]'>
            Create advanced projects <br />
            under guidence by the <br />
            top 1% Gain
          </p>
        </div>

        <Image
          src='/images/arrowicon.jpg'
          alt='arrow icon'
          width={80}
          height={80}
          className='-translate-y-20 hidden md:block'
        />

        <div className='flex items-center flex-col text-center'>
          <Image
            src='/images/geticon.jpg'
            alt='get icon'
            width={80}
            height={80}
          />
          <p className='text-[#3ae51d] font-semibold text-xl pt-5'>
            Get Placed <br />
            with Confidence{' '}
          </p>
          <p className='text-[10px]'>
            Create advanced projects <br />
            under guidence by the <br />
            top 1% Gain
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pathtoai;
