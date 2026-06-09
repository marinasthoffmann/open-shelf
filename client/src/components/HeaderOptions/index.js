import { Link } from 'react-router-dom';
import styled from 'styled-components';

const optionsString = ['CATEGORIES', 'FAVORITES', 'SHELF'];
  
const OptionsList = styled.ul`
  display: flex;
`;

const OptionItem = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

function HeaderOptions () {
    return (
        <OptionsList>
          { optionsString.map( (text) => (
            <Link to={`/${text.toLowerCase()}`}><OptionItem><p>{text}</p></OptionItem></Link>
          ) ) }
        </OptionsList>
    )
};

export default HeaderOptions;