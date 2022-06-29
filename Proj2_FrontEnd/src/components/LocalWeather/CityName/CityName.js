import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 2rem;
  color: #fff;
  &::after {
    content: " ↑ ";
    display: block;
    margin-top: 0.5rem;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    width: 50%;
    transform: translateX(50%);
    opacity: 0.7;
  }
`;
const CityName = ({ name666: myCity }) => {
  return <Wrapper>{myCity}</Wrapper>;
};

export default CityName;
