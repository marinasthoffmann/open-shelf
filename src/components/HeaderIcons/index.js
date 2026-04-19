import './style.css';
import perfil from '../../images/profile.svg';
import bag from '../../images/bag.svg';

const icons = [perfil, bag];

function HeaderIcons() {
    return(
        <ul className='icons'>
          { icons.map( (icon) => (
            <li className='icon'><img src={icon} alt={icon}></img></li>
          ) ) }
        </ul>
    )
};

export default HeaderIcons;