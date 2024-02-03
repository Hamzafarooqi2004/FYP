import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  padding: 5px 20px;
`;

const ProfileName = styled.h2`
 color:#000000;
  margin: 0;
  font-weight: 500;
  font-size: 18px;
`;

const ProfileCategory = styled.span`
  color: #919191;
  font-size: 15px;
`;

const BioText = styled.span`
color:#000000;  
display: block;
  margin-top: 3px;
`;

const BioLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  color: #3d83b6;
  margin-top: 3px;
`;

function About() {
  return (
    <AboutWrapper>
      <ProfileName>Muhammad Waqas</ProfileName>
      <ProfileCategory>Pakistan</ProfileCategory>
      <BioText>📒Member Since 2024</BioText>
    </AboutWrapper>
  );
}
export default About;
