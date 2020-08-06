import React from 'react';

 import { Container} from './styles';
import Posts from '../Posts';

const Feed: React.FC = () => {
  return (
      <Container>
          
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
          
      </Container>
  )
}

export default Feed;