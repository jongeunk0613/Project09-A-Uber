import React, { FC, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import styled from '@theme/styled';
import useChange from '@hooks/useChange';

import PageFrame from '@components/PageFrame';
import HeaderWithBack from '@/components/HeaderWithBack';
import UserToggle, { ToggleFocus, FOCUS_USER } from '@components/UserToggle';

import CommonSignup from './CommonSignup';
import NextSignup from './NextSingup';

const StyledSignup = styled(PageFrame)`
  height: calc(100% - 3rem);

  & .signup-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;

    & h1 {
      font-size: 2.2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.PRIMARY};
    }
  }
`;

const Signup: FC = () => {
  const history = useHistory();
  const [isNext, setIsNext] = useState(false);
  const [signupTarget, setSignupTarget] = useState<ToggleFocus>(FOCUS_USER);
  const [name, , onChangeName] = useChange('');
  const [email, , onChangeEmail] = useChange('');
  const [password, , onChangePassword] = useChange('');
  const [passwordRe, , onChangePasswordRe] = useChange('');
  const [phone, , onChangePhone] = useChange('');

  const onClickToggleHandler = useCallback(
    (target: ToggleFocus) => {
      if (target === signupTarget) {
        return;
      }
      setSignupTarget(target);
    },
    [signupTarget],
  );

  const onClickNextHandler = useCallback(() => {
    setIsNext(true);
  }, []);

  const onClickBackHandler = useCallback(() => {
    if (isNext) {
      setIsNext(false);
      return;
    }
    history.push('/signin');
  }, [isNext]);

  return (
    <>
      <HeaderWithBack onClick={onClickBackHandler} />
      <StyledSignup>
        <div className="signup-header">
          <h1>회원가입</h1>
          <UserToggle focus={signupTarget} onClick={isNext ? () => null : onClickToggleHandler} />
        </div>
        {isNext ? (
          <NextSignup nextForm={signupTarget} />
        ) : (
          <CommonSignup
            name={name}
            email={email}
            password={password}
            passwordRe={passwordRe}
            phone={phone}
            onChangeName={onChangeName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onChangePasswordRe={onChangePasswordRe}
            onChangePhone={onChangePhone}
            onClickNextHandler={onClickNextHandler}
          />
        )}
      </StyledSignup>
    </>
  );
};

export default Signup;
