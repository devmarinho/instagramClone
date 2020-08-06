import React from 'react';

import { ContainerMain,Container } from './styles';
import Feed from '../Feed';
const Layouts: React.FC = () => {
  return (
 
    <ContainerMain>
        <Container>
        <Feed/>
        </Container>

    </ContainerMain>
  );
}

export default Layouts;