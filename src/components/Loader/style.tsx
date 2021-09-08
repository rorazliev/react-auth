import styled, { keyframes } from 'styled-components';
import colors from '../../assets/styles/colors';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background-color: var(${colors.primary});
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Spinner = styled.div`
  animation: ${spin} 1s linear infinite;
  border: 5px solid transparent;
  border-top: 5px solid #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
