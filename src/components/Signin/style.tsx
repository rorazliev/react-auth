import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Box = styled.div`
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
`;

export const Container = styled.div`
  background-color: rgb(${colors.primary});
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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-radius: 8px;
  max-width: 350px;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: rgb(${colors.danger});
  margin: 4px 0 19px 0;
  text-align: center;
`;

export const Field = styled.div<{focused: boolean}>`
  transition: border-color 0.15s ease-in-out;
  border: 1px solid transparent;
  border-color: rgb(${(props) => (
    props.focused ? colors.primary : colors.gray
  )});
  margin-bottom: 12px;
  border-radius: 6px;
  width: 100%;
`;

export const FieldContent = styled.div`
  position: relative;
  display: flex;
  cursor: text;
  height: 52px;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label<{filled: boolean}>`
  ${(props) => (
    props.filled ? 'transform: scale(0.83333) translateY(-12px);' : ''
  )};
  color: rgb(${colors.secondary});
  transition: all 0.1s linear;
  text-overflow: ellipsis;
  transform-origin: left;
  pointer-events: none;
  position: absolute;
  line-height: 55px;
  font-size: 14px;
  left: 12px;
  top: 0;
`;

export const Input = styled.input<{filled: boolean}>`
  background-color: transparent;
  text-overflow: ellipsis;
  padding: 9px 0 7px 12px;
  outline: transparent;
  font-size: 14px;
  border: 0;
  flex: 1;

  ${(props) => (props.filled ? `
    padding: 20px 0 0 12px !important;
  ` : '')}
`;

export const PasswordButton = styled.button`
    transition: color 0.15s ease-in-out;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 52px;
    width: 50px;

    &:hover {
      color: rgb(${colors.primary});
    }
`;

export const SubmitButton = styled.button`
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

export const Or = styled.div`
  text-align: center;
  line-height: 52px;
  font-weight: 600;
  height: 52px;
  width: 100%;
`;

export const LinkToSignup = styled(Link)`
  background-color: rgb(${colors.success});
  transition: all 0.15s ease-in-out;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  height: 52px;
  width: 100%;
  color: #fff;

  &:hover {
    background-color: rgb(${colors.successDark});
    color: #fff;
  }
`;
