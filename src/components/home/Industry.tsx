import React from 'react';

import ChooseUs from './ChooseUs';
import IndustryExpert from './IndustryExpert';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
}

interface Props {
  data: ContentItem[];
  chooseUsData: ContentItem[];
}

const Industry: React.FC<Props> = ({ data, chooseUsData }) => {
  // Parse IndustryExpert
  const industryImages = data.filter(item => item.type === 'image').map(item => item.data);
  const industryBg = industryImages[0] || '';
  const industryRobot = industryImages.find(url => url.includes('robot-left-side')) || '';

  const industryTexts = data.filter(item => item.type === 'text').map(item => item.data);
  const industryTitle = industryTexts[0] || '';
  const industryPoints = industryTexts.slice(1);
  const industryGlow = industryImages.find(url => url.includes('glow')) || '';


  // Parse ChooseUs
  const chooseUsImages = chooseUsData.filter(item => item.type === 'image').map(item => item.data);
  const chooseUsBg = chooseUsImages[0] || '';
  const chooseUsRobot = chooseUsImages.find(url => url.includes('secondRobot.png')) || '';

  const chooseUsTexts = chooseUsData.filter(item => item.type === 'text').map(item => item.data);
  const chooseUsTitle = chooseUsTexts[0] || '';
  const chooseUsPoints = chooseUsTexts.slice(1);

  const chooseUsGlow = chooseUsImages.find(url => url.includes('glow')) || '';


  return (
    <>
      <IndustryExpert
        title={industryTitle}
        points={industryPoints}
        background={industryBg}
        robotImage={industryRobot}
        glowImage={industryGlow}
      />
      <ChooseUs
        title={chooseUsTitle}
        points={chooseUsPoints}
        background={chooseUsBg}
        glowImage={chooseUsGlow}
        robotImage={chooseUsRobot}
      />
    </>
  );
};

export default Industry;
