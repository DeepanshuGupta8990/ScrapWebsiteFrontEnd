import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import CompanyDetails from '../components/CompanyDetails';
import ScreenShotComp from '../components/ScreenShotComp';
import ImageWithRetry from '../components/ImageComponent';

export default function OverView() {
  const { dynamicId } = useParams();
  const [scrapData, setScrapData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/getData/${dynamicId}`);
        console.log(data.data, 'sadasdasd');
        setScrapData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, [dynamicId]);

  return (
    <>
    {scrapData && (
      <>
    <HeaderComp>
       <ImageWithRetry url={scrapData.url} imageUrl={scrapData.logo} logo={false}/>
     

      <CompleteInfoDiv>
      <NamePtag>{scrapData.name}</NamePtag>
      <InfoDiv style={{color:'#64748B'}}>
       <DescriptionDiv>
        <Heading>
         <InfoOutlinedIcon/>
         <DescriptionPtag>Description</DescriptionPtag>
        </Heading>
        <Ptag>{scrapData.description}</Ptag>
       </DescriptionDiv>
       <SeperateLine/>
       <ContactInfoDiv>
         <MobileInfoDiv>
            <Heading>
             <LocalPhoneIcon/>
             <ContactPtag>Phone</ContactPtag>
            </Heading>
            <Ptag style={{textAlign:'center'}}>{scrapData.phone}</Ptag>
          </MobileInfoDiv>
           <EmailInfoDiv>
            <Heading>
             <MailIcon/>
             <ContactPtag>Email</ContactPtag>
            </Heading>
            <Ptag style={{textAlign:'center'}}>{scrapData.email}</Ptag>
          </EmailInfoDiv>
       </ContactInfoDiv>
      </InfoDiv>
      </CompleteInfoDiv>
      </HeaderComp>
      <MiddleComp>
      <CompanyDetails scrapData={scrapData}/>
      <ScreenShotComp scrapData={scrapData}/>
      </MiddleComp>
      </>
    )}
    </>
  );
}



export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 118px;
  gap: 50px;
  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }

`
const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const MobileInfoDiv = styled.div`

`
const EmailInfoDiv = styled.div`

`
const SeperateLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ECECEC;
`
export const HeaderComp = styled.div`
 display: flex;
 flex-direction: row;
 gap: 40px;
 padding: 20px;
 border: 1px solid #ECECEC;
 background-color: white;
 margin: 5px;
 border-radius: 5px;
`
export const Ptag = styled.p`
  padding: 0px;
  margin: 0px;
  color: black;
`
const CompleteInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescriptionPtag = styled(Ptag)`
  color: #64748B;
`
const ContactPtag = styled(Ptag)`
  color: #64748B;
`
const NamePtag = styled(Ptag)`
  color: #374151;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 38.4px;
  text-align: left;

`

const MiddleComp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }
`