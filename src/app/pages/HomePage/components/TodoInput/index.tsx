import styled from 'styled-components';
import React from 'react';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%auto;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

// export default를 적어야 다른파일에서 import로 불러오기 가능
export default function TodoInput({
  setTodoList,
}: {
  setTodoList: (todo: ITodoItem) => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <>
      <Box>
        <Input
          placeholder="할일을 입력"
          value={content}
          onChange={e => setContent(e.target.value)}
          onKeyPress={e => {
            if (content === '') return;
            if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
            setTodoList({
              id: '0',
              content: content,
              completed: false,
              editing: false,
            });
            setContent('');
          }}
        />
      </Box>
    </>
  );
}
