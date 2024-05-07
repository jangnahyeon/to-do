import styled from 'styled-components';

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
export default function TodoInput() {
  return (
    <>
      <Box>
        <Input placeholder="할일을 입력" />
      </Box>
    </>
  );
}
