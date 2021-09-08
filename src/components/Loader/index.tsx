import React, { ReactElement } from 'react';
import { Container, Spinner } from './style';

const Loader: React.FC = (): ReactElement => (
  <Container>
    <Spinner />
  </Container>
);

export default Loader;
