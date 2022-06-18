import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 0 48px;
`
const Title = styled.div`
  margin-bottom:0.75rem;
  font-size: 1.5rem;
`

const Section = ({title123: Title111, children}) => {
  return ( 
  <Wrapper>
    <Title>{Title111}</Title>
    {children}
  </Wrapper> 
  );
}
export default Section;