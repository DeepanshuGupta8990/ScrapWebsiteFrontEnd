import React from 'react';
import styled from 'styled-components';
import { DescriptionPtag, Heading } from '../pages/OverView';
import PublicIcon from '@mui/icons-material/Public';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function CompanyDetails({ scrapData }) {
  return (
    <>
      {
        scrapData &&
        (
          <InfoDiv>
            <HeadingPtag>Company Details</HeadingPtag>

            <div>
            <Heading>
              <PublicIcon style={{color:'#64748B'}}/>
              <Ptag>Website</Ptag>
            </Heading>
            <LinkPtag href={scrapData.url} target="_blank">{scrapData.url}</LinkPtag>
            </div>

            <div>
            <Heading>
              <InfoOutlinedIcon style={{color:'#64748B'}}/>
              <DescriptionPtag>Description</DescriptionPtag>
            </Heading>
            <NewPtag>{scrapData.description}</NewPtag>
            </div>

            <div>
            <Heading>
              <LocationOnIcon style={{color:'#64748B'}}/>
              <DescriptionPtag>Email</DescriptionPtag>
            </Heading>
            <NewPtag>{scrapData.email}</NewPtag>
            </div>

           <div>
           <Heading>
              <FacebookOutlinedIcon style={{color:'#64748B'}}/>
              <DescriptionPtag>Facebook</DescriptionPtag>
            </Heading>
            <LinkPtag href={scrapData.facebook} target="_blank">{scrapData.facebook}</LinkPtag>
           </div>

            <div>
            <Heading>
              <img src='/instagram.svg' style={{ width: '20px' }} />
              <DescriptionPtag>Instagram</DescriptionPtag>
            </Heading>
            <LinkPtag href={scrapData.instagram} target="_blank">{scrapData.instagram}</LinkPtag>
            </div>

           <div>
           <Heading>
              <img src='/twitter.svg' style={{ width: '20px', paddingLeft: '5px' }} />
              <DescriptionPtag>Twitter</DescriptionPtag>
            </Heading>
            <LinkPtag href={scrapData.twitter} target="_blank">{scrapData.twitter}</LinkPtag>
           </div>

            <div>
            <Heading>
              <img src='/linkedin.svg' style={{ width: '20px', paddingLeft: '5px' }} />
              <DescriptionPtag>Linkedin</DescriptionPtag>
            </Heading>
            <LinkPtag href={scrapData.linkedin} target="_blank">{scrapData.linkedin}</LinkPtag>
            </div>

           <div>
           <Heading>
              <LocationOnOutlinedIcon style={{color:'#64748B'}}/>
              <DescriptionPtag>Address</DescriptionPtag>
            </Heading>
            <NewPtag>{scrapData.address}</NewPtag>
           </div>
          </InfoDiv>
        )
      }
    </>
  );
}

const Ptag = styled.p`
  padding: 0px;
  margin: 0px;
  color: black;
`

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 40%;
  max-width: 40%;
  background-color: white;
  border-radius: 5px;
  margin: 5px;
  padding: 30px;
  gap: 20px;
  @media (max-width: 650px) {
    min-width: 90%;
    max-width: 90%;
  }
`;

const NewPtag = styled(Ptag)`
  padding-left: 2px;
`;
const HeadingPtag = styled(Ptag)`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  color: black;

`;
const ColouredPtag = styled(Ptag)`
 color: #64748B;
`;

const LinkPtag = styled.a`
  padding-left: 2px;
  color: #6C2BD9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
