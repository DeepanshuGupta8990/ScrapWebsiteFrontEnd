import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

export default function SearchButton({url,setUrl}) {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  async function getData(){
    if(loading){
      toast.error("Please wait for response");
    }
    else if(url === ""){
        toast.error("Please enter url first");
    } else {
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/scrape`, { url });
            console.log(data);
            if(data){
                toast.success("Data fetched successfully");
                navigate(`/overview/${data._id}`)
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("An error occurred while fetching data");
        } finally {
            setLoading(false);
        }
    }
}

  return (
    <StyledButton onClick={getData}>
    {loading ? <CircularProgress size={20} color="success"/> : 'Fetch & Save Details'}
    </StyledButton>
  );
}


const StyledButton = styled.button`
  width: 167px;
  height: 37px;
  padding: 10px 15px;
  gap: 8px;
  border-radius: 5px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: center;
  background:  #EDE5FF;
  color: #6C2BD9;
  border: none; 
  cursor: pointer;
  transition: 0.4s ease;
  &:active{
    transform: scale(0.9);
  }

  @media (max-width: 650px) {
    width: 80vw;
  }
`;
