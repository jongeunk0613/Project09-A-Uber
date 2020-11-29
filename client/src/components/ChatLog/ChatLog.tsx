import React, { FC } from 'react';

import styled from '@theme/styled';

interface Props {
  writer: string;
  content: string;
  createdAt: string;
  type: string;
}

interface Type {
  type: string;
}

const StyledChatLogWrapper = styled.div<Type>`
  display: flex;
  justify-content: ${({ type }) => (type === 'me' ? 'flex-end' : 'flex-start')};
  padding: 0.5rem;

  & > .chat-content {
    padding: 0.6rem 1rem;
    background-color: ${({ theme, type }) => (type === 'me' ? theme.PRIMARY : theme.BORDER)};
    color: ${({ theme }) => theme.LIGHT};
    border-radius: 0.4rem;
  }
`;

const ChatLog: FC<Props> = ({ content, createdAt, writer, type }) => {
  return (
    <StyledChatLogWrapper type={type}>
      <span className="chat-content">{content}</span>
    </StyledChatLogWrapper>
  );
};

export default ChatLog;