import styled from 'styled-components';

const optionsString = ['CATEGORIES', 'FAVORITES', 'MY SHELF'];
  
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
            <OptionItem><p>{text}</p></OptionItem>
          ) ) }
        </OptionsList>
    )
};

export default HeaderOptions;