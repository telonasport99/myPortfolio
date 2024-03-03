import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id={'tech'}>
  <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Certainly! Here’s a concise list of the technologies i have worked with: React,
      Redux, JavaScript, TypeScript, HTML/CSS, Material UI, Zustand, Rest API, TDD, Axios, Git.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={'3em'}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={'3em'}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={'3em'}/>
        <ListContainer>
          <ListTitle>UI-UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
