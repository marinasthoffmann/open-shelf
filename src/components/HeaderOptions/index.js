import './style.css';

const optionsString = ['CATEGORIES', 'FAVORITES', 'MY SHELF'];

function HeaderOptions () {
    return (
        <ul className='options'>
          { optionsString.map( (text) => (
            <li className='option'><p>{text}</p></li>
          ) ) }
        </ul>
    )
};

export default HeaderOptions;