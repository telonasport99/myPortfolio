import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects'},
  { number: 6, text: 'Github Followers', },
  { number: 1, text: 'Github Stars', }
];

const Acomplishments = () => (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
            <Box key={index}>
              <BoxNum>{`${card.number}+`}</BoxNum>
              <BoxText>{card.text}</BoxText>
            </Box>
        ))}
      </Boxes>
      <SectionDivider/>
    </Section>
);

export default Acomplishments;