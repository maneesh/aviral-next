'use client'
import Image from "next/image";

type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

interface TeamSectionProps {
  teamData: ContentItem[];
}


const TeamSection: React.FC<TeamSectionProps> = ({ teamData }) => {
  //  useEffect(() => {
  //     console.log("TeamData:", teamData);
  //   }, [teamData]);

  const MeetTeam = teamData?.[0]?.data
  const girl = teamData?.[1]?.data
  const boy = teamData?.[3]?.data
  const glowImage = teamData?.[7]?.data


  return (
    <section className="flex items-center justify-center flex-col p-10 bg-black text-white relative">
      <h1 className="text-[#3ae51d] md:p-10 py-10">{MeetTeam} </h1>
      <div className="flex flex-col md:flex-row md:space-x-24 ">
        <div className="py-5 md:py-0">
          {girl && (
            <Image
              src={girl}
              alt="team"
              width={100}
              height={100} />
          )}

          <h5 className="text-[#3ae51d] font-bold">{(teamData?.[1] as any).name}</h5>
          <h6 className=" text-[9px]">{teamData?.[2]?.data}</h6>
        </div>
        <div >
          {boy && (
            <Image
              src={boy}
              alt="team"
              width={100}
              height={100} />
          )}

          <h5 className="text-[#3ae51d] font-bold">{(teamData?.[3] as any).name}</h5>
          <h6 className=" text-[9px]">{teamData?.[4]?.data}</h6>
        </div>
        <div className="pt-5 md:pt-0" >
          {girl && (
            <Image
              src={girl}
              alt="team"
              width={100}
              height={100} />
          )}
          <h5 className="text-[#3ae51d] font-bold">{(teamData?.[5] as any).name}</h5>
          <h6 className=" text-[9px]">{teamData?.[6]?.data}</h6>
        </div>

      </div>
      {glowImage && (
        <Image
          src={glowImage}
          alt="glow image"
          width={200}
          height={200}
          className="absolute right-0 hidden lg:block"
        />
      )}


    </section>
  );
};

export default TeamSection;