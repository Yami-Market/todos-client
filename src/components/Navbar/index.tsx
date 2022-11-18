import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem'
      }}
    >
      <Link to='/home'>Home</Link>
      &nbsp;
      <Link to='/todos'>Todos</Link>
    </nav>
  );
};

export default Navbar;
