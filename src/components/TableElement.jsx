import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {Checkbox } from '@mui/material';
import ImageWithRetry from './ImageComponent';

export default function TableElement({ data, deleteArray, setDeleteArray }) {
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setDeleteArray((prev) => [...prev, data._id]);
        } else {
            setDeleteArray((prev) => prev.filter((id) => id !== data._id));
        }
    };

    return (
        <>
            {data && (
                <TableRow key={data._id}>
                    <TableCell>
                        <Checkbox
                            type="checkbox" 
                            onChange={handleCheckboxChange} 
                            checked={deleteArray.includes(data._id)} 
                        />
                    </TableCell>
                    <LogoTableCell logo onClick={() => { navigate(`/overview/${data._id}`) }}>
                        {/* <Logo src={data.logo} alt={data.name} /> */}
                        <ImageWithRetry url={data.url} imageUrl={data.logo} logo={true}/>
                        {data.name}
                    </LogoTableCell>
                    <TableCell>
                        {data.facebook === 'N/A' && data.linkedin === 'N/A' && data.instagram === 'N/A' && data.twitter === 'N/A' ? (
                            'N/A'
                        ) : (
                            <SocialTagsDiv>
                                {data.facebook && (
                                    <SocialLink href={data.facebook} target="_blank" rel="noopener noreferrer">
                                        <FacebookOutlinedIcon fontSize='10' style={{ color: '#64748B' }} />
                                    </SocialLink>
                                )}
                                {data.twitter && (
                                    <SocialLink href={data.twitter} target="_blank" rel="noopener noreferrer">
                                        <SocialIcon src='/twitter.svg' />
                                    </SocialLink>
                                )}
                                {data.linkedin && (
                                    <SocialLink href={data.linkedin} target="_blank" rel="noopener noreferrer">
                                        <SocialIcon src='/linkedin.svg' />
                                    </SocialLink>
                                )}
                                {data.instagram && (
                                    <SocialLink href={data.instagram} target="_blank" rel="noopener noreferrer">
                                        <SocialIcon src='/instagram.svg' />
                                    </SocialLink>
                                )}
                            </SocialTagsDiv>
                        )}
                    </TableCell>
                    <TableCell>{data.description}</TableCell>
                    <TableCell>{data.address}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                </TableRow>
            )}
        </>
    );
}

const TableRow = styled.tr`
    background-color: white; /* Optional: Add a background color */
`;

const TableCell = styled.td`
    padding: 8px;
    border-left: none;
    border-right: none;
`;

const LogoTableCell = styled(TableCell)`
    cursor: pointer;
    color: ${({ logo }) => (logo ? '#6C2BD9' : 'inherit')}; 
    &:hover {
        text-decoration: underline;
    }
`;


const SocialTagsDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
`;

const SocialLink = styled.a`
    display: inline-block;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`;

const SocialIcon = styled.img`
    width: 15px;
`;

