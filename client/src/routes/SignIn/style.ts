import styled from '@theme/styled';

export const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > .visitor-type {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 2.5rem;

    & > .am-segment {
      width: 10rem;
      margin-bottom: 0.8rem;
    }
  }

  & > .am-button {
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0.8rem;
  }

  & .am-button.signup-button {
    border: 1px solid ${({ theme }) => theme.BORDER};
  }

  & > .login-state {
    width: 100%;
    margin-bottom: 0.8rem;

    & .am-checkbox {
      margin-right: 0.4rem;
      width: 16px;
      height: 16px;
    }

    & .am-checkbox-inner {
      border-radius: 0;
      width: 16px;
      height: 16px;
    }

    & .am-checkbox-inner:after {
      top: 0;
      right: 4px;
      width: 5px;
      height: 9px;
    }
  }

  & input {
    margin-bottom: 0.8rem;
  }
`;