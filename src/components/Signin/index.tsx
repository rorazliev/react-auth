import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Content,
  ErrorMessage,
  Field,
  FieldContent,
  Form,
  Label,
  Input,
  PasswordButton,
  SubmitButton,
  Or,
  LinkToSignup,
} from './style';
import { EyeIcon, EyeOffIcon } from '../Icons';
import { Dispatch, useSelector } from '../../redux/store';
import { resetError, signin } from '../../redux/authReducer';

const Signin: React.FC = (): ReactElement => {
  // Identifier related state
  const [identifier, setIdentifier] = useState('');
  const [identifierOnFocus, setIdentifierOnFocus] = useState(false);

  // Password related state
  const [password, setPassword] = useState('');
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);

  // Error marker
  const error = useSelector((state) => state.auth.error);

  const dispatch: Dispatch = useDispatch();

  // Prevents default behavior and submits the form
  const handleFormOnSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    dispatch(signin(identifier, password));
  };

  // Resets the error marker
  useEffect(() => () => {
    if (error !== null) {
      dispatch(resetError());
    }
  });

  // Render
  return (
    <>
      <Helmet>
        <title>Signin • React Authentication</title>
      </Helmet>
      <Container>
        <Content>
          <Box>
            <Form onSubmit={handleFormOnSubmit}>
              {
              error
                ? <ErrorMessage>{error}</ErrorMessage>
                : null
            }
              <Field focused={identifierOnFocus}>
                <FieldContent>
                  <Label filled={identifier.length !== 0}>
                    Username or Email
                  </Label>
                  <Input
                    filled={identifier.length !== 0}
                    value={identifier}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>,
                    ) => setIdentifier(event.target.value)}
                    onFocus={() => setIdentifierOnFocus(true)}
                    onBlur={() => setIdentifierOnFocus(false)}
                  />
                </FieldContent>
              </Field>
              <Field focused={passwordOnFocus}>
                <FieldContent>
                  <Label filled={password.length !== 0}>
                    Password
                  </Label>
                  <Input
                    type={passwordIsShown ? 'text' : 'password'}
                    filled={password.length !== 0}
                    value={password}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>,
                    ) => setPassword(event.target.value)}
                    onFocus={() => setPasswordOnFocus(true)}
                    onBlur={() => setPasswordOnFocus(false)}
                  />
                  <PasswordButton
                    type="button"
                    onClick={() => setPasswordIsShown(!passwordIsShown)}
                  >
                    {passwordIsShown ? <EyeOffIcon /> : <EyeIcon />}
                  </PasswordButton>
                </FieldContent>
              </Field>
              <SubmitButton type="submit">Sign In</SubmitButton>
              <Or>or</Or>
              <LinkToSignup to="/signup">Create New Account</LinkToSignup>
            </Form>
          </Box>
        </Content>
      </Container>
    </>
  );
};

export default Signin as React.FC;
