import './index.scss';

const Navbar = ({ items }: NavbarProps) => {
  const navbarItems = items.map((itemConfig) => {
    let className = itemConfig.active ? 'item active' : 'item';
    return (
      <li className={ className } key={ itemConfig.label } onClick={ itemConfig.action }>
        { itemConfig.label }
      </li>
    )
  })

  return (
    <div className='navbar'>
      <ul className='items'>{ navbarItems }</ul>
    </div>
  );
};

export default Navbar;