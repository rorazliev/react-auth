import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/authReducer';
import { Dispatch, useSelector } from '../../redux/store';
import {
  Container, Content, Heading, Message, SignoutButton,
} from './style';

const Dashboard: React.FC = (): ReactElement => {
  const username = useSelector((state) => state.auth.username);

  const dispatch: Dispatch = useDispatch();

  // Log the user out
  const handleOnSignout = (): void => {
    dispatch(signout());
  };

  return (
    <>
      <Helmet>
        <title>Dashboard • React Authentication</title>
      </Helmet>
      <Container>
        <Content>
          <Heading>
            Hello,
            {' '}
            @
            {username}
            !
          </Heading>
          <Message>
            You have successfully signed in.
            {' '}
            If you are a developer, who is looking for how to
            {' '}
            implement authnetication in React, here you are! You are welcome to
            {' '}
            use the source code of this project as you wish.
            It absolutely is ready for production.
            {' '}
            But do not trust guys on the internet! Double check it first!
            {' '}
            If you have any question, find me on
            {' '}
            <a
              href="https://linkedin.com/in/rorazliev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </Message>
          <SignoutButton
            type="button"
            onClick={handleOnSignout}
          >
            Cheers!
          </SignoutButton>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard as React.FC;
