import React from 'react';
import styled, { keyframes } from 'styled-components';

const path = require('path');

const logo = path.join(__dirname, 'Yedam.jpg');
const spin = keyframes`
from
{
  transform :rotate(0deg);
}
to{
  transform:rotate(360deg);
}`;

const Image = styled.img`
  animation: ${spin} 4s infinite linear;
  line-height: 45px;
  height: 100px;
  width: 100px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Spinner = () => <Image src="../client/src/js/Yedam.jpg" alt="loading indicator" />;

export default Spinner;
