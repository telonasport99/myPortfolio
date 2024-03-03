import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
   <SectionTitle main center>
       Welcome to <br/>
       My personal Portfolio
   </SectionTitle>
   <SectionText>
       Front-end developer with 1+ years of experience creating SPAs using TypeScript, React and Redux.
   </SectionText>
   <Button onClick={()=>window.location = 'https://google.com'}>Lern More</Button>
  </LeftSection>
 </Section>
);

export default Hero;