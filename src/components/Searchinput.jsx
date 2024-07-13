import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; 
import styled from 'styled-components';

export default function SearchInput({url,setUrl}) {
  return (
    <div>
      <StyledTextField
        id="outlined-basic"
        variant="outlined"
       placeholder="Enter the Url"
       value={url}
       onChange={(e)=>{setUrl(e.target.value)}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton style={{ background: '#F9FaFb' }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

const StyledTextField = styled(TextField)`
  width: 404px;

  .MuiOutlinedInput-root {
    background-color: #F9FaFb;
  }

  input {
    padding: 12px 16px; 
    height: 20px; 
    background-color: #F9FaFb; 
  }
`;
