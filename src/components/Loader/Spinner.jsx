import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { WrapSpinner } from './Loader.styled';

export default function Spinner() {
  return (
    <WrapSpinner>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#407bff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ top: '10px', marginLeft: '20px' }}
        wrapperClass=""
      />
    </WrapSpinner>
  );
}
