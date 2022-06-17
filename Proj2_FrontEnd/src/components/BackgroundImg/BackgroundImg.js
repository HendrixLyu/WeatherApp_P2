import styled from 'styled-components';

const BackgroundImg = styled.div`
  background-image: url(${({src}) => src}); //传参格式
  background-position:center;
  background-size:cover;
`

export default BackgroundImg;