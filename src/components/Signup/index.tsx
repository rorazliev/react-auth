import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Content,
  ErrorMessage,
  Field,
  FieldContent,
  Form,
  Label,
  LinkToSignin,
  Input,
  PasswordButton,
  SubmitButton,
} from './style';
import { EyeIcon, EyeOffIcon } from '../Icons';
import { Dispatch, useSelector } from '../../redux/store';
import { resetError, signup } from '../../redux/authReducer';

const Signup: React.FC = (): ReactElement => {
  // Email related state
  const [email, setEmail] = useState('');
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);

  // Username related state
  const [username, setUsername] = useState('');
  const [usernameOnFocus, setUsernameOnFocus] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(true);

  // Password related state
  const [password, setPassword] = useState('');
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordIsShown, setPasswordIsShown] = useState(false);

  // Error marker
  const error = useSelector((state) => state.auth.error);

  const dispatch: Dispatch = useDispatch();

  // Prevents default behavior and submits the form
  const handleFormOnSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    dispatch(signup(email, username, password));
  };

  // Validates email and blurs focus
  const handleEmailOnBlur = (): void => {
    /* eslint-disable max-len */
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length > 0) {
      setEmailIsValid(re.test(email.toLowerCase()));
    }
    setEmailOnFocus(false);
  };

  // Validates username and blurs focus
  const handleUsernameOnBlur = (): void => {
    const re = /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/;
    if (username.length > 0) {
      setUsernameIsValid(re.test(username));
    }
    setUsernameOnFocus(false);
  };

  // Validates password and blurs focus
  const handlePasswordOnBlur = (): void => {
    if (password.length > 0) {
      setPasswordIsValid(true);
    }
    setPasswordOnFocus(false);
  };

  // Reset error marker
  useEffect(() => () => {
    if (error !== null) {
      dispatch(resetError());
    }
  });

  // Render
  return (
    <>
      <Helmet>
        <title>Signup • React Authentication</title>
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
              <Field focused={emailOnFocus} valid={emailIsValid}>
                <FieldContent>
                  <Label filled={email.length !== 0}>
                    Email
                  </Label>
                  <Input
                    filled={email.length !== 0}
                    value={email}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>,
                    ) => setEmail(event.target.value)}
                    onFocus={() => setEmailOnFocus(true)}
                    onBlur={handleEmailOnBlur}
                  />
                </FieldContent>
              </Field>
              <Field focused={usernameOnFocus} valid={usernameIsValid}>
                <FieldContent>
                  <Label filled={username.length !== 0}>
                    Username
                  </Label>
                  <Input
                    filled={username.length !== 0}
                    value={username}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>,
                    ) => setUsername(event.target.value)}
                    onFocus={() => setUsernameOnFocus(true)}
                    onBlur={(handleUsernameOnBlur)}
                  />
                </FieldContent>
              </Field>
              <Field focused={passwordOnFocus} valid={passwordIsValid}>
                <FieldContent>
                  <Label filled={password.length !== 0}>
                    Password
                  </Label>
                  <Input
                    filled={password.length !== 0}
                    value={password}
                    type={passwordIsShown ? 'text' : 'password'}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>,
                    ) => setPassword(event.target.value)}
                    onFocus={() => setPasswordOnFocus(true)}
                    onBlur={handlePasswordOnBlur}
                  />
                  <PasswordButton
                    type="button"
                    onClick={() => setPasswordIsShown(!passwordIsShown)}
                  >
                    {passwordIsShown ? <EyeOffIcon /> : <EyeIcon />}
                  </PasswordButton>
                </FieldContent>
              </Field>
              {
              emailIsValid && email.length !== 0
              && usernameIsValid && username.length !== 0
              && passwordIsValid && password.length !== 0
                ? <SubmitButton type="submit">Sign Up</SubmitButton>
                : <SubmitButton type="submit" disabled>Sign Up</SubmitButton>
            }
            </Form>
            <LinkToSignin>
              Have an account?
              {' '}
              <Link to="/signin">Sign Up</Link>
            </LinkToSignin>
          </Box>
        </Content>
      </Container>
    </>
  );
};

export default Signup as React.FC;
