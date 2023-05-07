import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
`;

export const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>Page not found</Text>
    </Wrapper>
  )
}