import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWithRetry = ({ url, imageUrl,logo }) => {
  const [src, setSrc] = useState(imageUrl);
  const [attempted, setAttempted] = useState(false);

  const handleError = () => {
    if (!attempted && !imageUrl.startsWith(url)) {
      setSrc(url + imageUrl);
      setAttempted(true);
    }
  };

  return (
    <>
    {
        logo ? <Logo src={src} alt="Image" onError={handleError} /> : 
        <ScrapImage src={src} alt="Image" onError={handleError} />
    }
    </>
  );
};

export default ImageWithRetry;

const Logo = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;

const ScrapImage = styled.img`
  width: 152px;
  height: 152px;
`;