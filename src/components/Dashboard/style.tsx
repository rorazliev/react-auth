import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
max-width: 350px;
width: 100%;
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Message = styled.div`
  line-height: 1.5;
  margin: 1rem 0;
`;

export const SignoutButton = styled.button`
  background-color: rgb(${colors.primary});
  transition: all .15s ease-in-out;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  height: 54px;
  width: 100%;
  color: #fff;

  &:hover {
    background-color: rgb(${colors.primaryDark});
  }
`;
