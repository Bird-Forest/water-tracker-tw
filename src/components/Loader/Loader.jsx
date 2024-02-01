import React from 'react';
import { StyledLoader } from './Loader.styled';

const Loader = ({text}) => {
  return (
        <StyledLoader>
          <div className='tile01'>
          <div className='mask'>Water</div>
        </div>
        </StyledLoader>
  )
}

export default Loader;