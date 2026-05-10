import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const LogoImg = styled.img`
  width: 150px;
  height: auto;
  margin-right: -40px;
`;

function Logo() {
    return (
        <LogoContainer>
          <LogoImg src={logo} alt='logo' />
          <p><strong>Open</strong>Shelf</p>
        </LogoContainer>
    )
};

export default Logo;