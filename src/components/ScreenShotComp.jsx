import React from 'react'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import styled from 'styled-components';
import { Heading } from '../pages/OverView';

export default function ScreenShotComp({scrapData}) {
  return (
   <>
   {
    scrapData && 
    (
        <ScreenShotCont>
        <Heading>
          <CameraAltOutlinedIcon style={{color:'#64748B'}}/>
          <Ptag>Screenshot of Webpage</Ptag>
        </Heading>
        <img style={{width:"95%"}} src={`${process.env.REACT_APP_API_URL}${scrapData.screenshot}`} alt="" />
      </ScreenShotCont>
    )
   }
   </>
  )
}

export const Ptag = styled.p`
  padding: 0px;
  margin: 0px;
  color: black;
`

const ScreenShotCont = styled.div`
    max-width: 58%;
    background-color: white;
    border-radius: 5px;
    padding: 30px;
    margin: 5px;
`