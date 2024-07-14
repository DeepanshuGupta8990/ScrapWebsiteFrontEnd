import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableElement from '../components/TableElement';
import styled from 'styled-components';
import { Button, Checkbox } from '@mui/material';
import { toast } from 'react-toastify';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(1);
  const [deleteArray, setDeleteArray] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [check,setCheck] = useState(false);
  const [state,setState] = useState(1);
  const [loading,setLoading] = useState(true);

  const downloadCSV = async () => {
    window.open('https://downloadcsv.onrender.com/downloadCSV', '_blank');
  };

  async function deleteScrapData() {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/deleteData`, { data: { ids: deleteArray } });
    console.log(response);
    if (response.status === 200) {
      toast.success("Deleted successfully");
      if(dataArray.length === deleteArray.length && page === totalPages){
        setPage(page-1);
      }
      const newdataArray = dataArray.filter(item => !deleteArray.includes(item._id));
      setDataArray(newdataArray);
      setDeleteArray([]);
      setState(state+1);
      setCheck(false);
    } else {
      toast.error("Some error occurred");
    }
  }

  function handleCheckboxChange(){
    if(!check){
      let array = [];
      dataArray.forEach((element)=>{
        array.push(element._id);
      })
      setCheck(true);
      setDeleteArray(array);
    }else{
      setCheck(false);
      setDeleteArray([]);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/getAllData?page=${page}&limit=4`);
        console.log("data is calling")
        setLoading(false);
        setDataArray(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, [page,state]);

  return (
    <>
      <HomeMainCont>
        <DeleteSection>
          <div>{deleteArray.length} selected</div>
          <Button variant="outlined" color="primary" onClick={deleteScrapData} disabled={deleteArray.length === 0}>
            Delete
          </Button>
          <Button variant="outlined" color="primary" onClick={downloadCSV}>
            CSV
          </Button>
        </DeleteSection>
     <TableDiv>
     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #f9fafb', padding: '8px', color: "#6B7280" }}>
              <Checkbox
                            type="checkbox" 
                            onChange={handleCheckboxChange} 
                            checked={check} 
                        />
              </th>
              <th style={{ border: '1px solid #f9fafb', padding: '8px', color: "#6B7280" }}>Company</th>
              <th style={{ border: '1px solid #f9fafb', padding: '8px', color: "#6B7280" }}>Social PROFILES</th>
              <th style={{ border: '1px solid #f9fafb', padding: '8px', color: "#6B7280" }}>Description</th>
              <th style={{ border: '1px solid #f9fafb', padding: '8px', color: "#6B7280" }}>Address</th>
              <th style={{ border: '1px solid #f9fafb', padding: '8px', color: "#6B7280" }}>Email</th>
              <th style={{ border: '1px solid #f9fafb', padding: '8px', color: "#6B7280" }}>Phone</th>
            </tr>
          </thead>
        {
          !loading && (
            <tbody>
            {dataArray.map((element) => (
              <TableElement key={element._id} data={element} deleteArray={deleteArray} setDeleteArray={setDeleteArray} />
            ))}
          </tbody>
          )
        }
        </table>
     </TableDiv>
        {
          loading && <LoaderBox>
          <CircularProgress/>
            </LoaderBox>
        }
        <Pagination 
          count={totalPages} 
          page={page} 
          variant="outlined"
          shape="rounded" 
          onChange={(event, value) => setPage(value)} 
          color="primary" 
          style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
        />
          {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
      </HomeMainCont>
    </>
  );
}

const HomeMainCont = styled.div`
  background-color: #f9fafb;
  border-radius: 5px;
  margin: 5px;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    width: 110%;
  }
`;

const TableDiv = styled.div`
  overflow: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`

const DeleteSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 30px;
`;

const LoaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`