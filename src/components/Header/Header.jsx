import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  );
};

// Puedes pasar props por default

// Header.defaultProps = {
//   title: 'Perrito Piloto',
// };

//PROPTYPES --> No spermite hacer el código más robusto //

// Si ponemos ésto, en teoría tenemos que pasar una cadena como título. SI pasamos un número, snos saldrá un mensaje en la consola avisando de ésto //

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
