import './SideNav.css'


function SideNav({onChangeMenu, categories}){

    const convertMenuToJSX = ({title, count, id}) => {
        return (
        <li key={id}>
         <NavItem title={title} count={count} onClick={() => onChangeMenu(title)} /> 
        </li>
        )
    }

    const navItems = categories.map(convertMenuToJSX)

    return (
        <nav>
            <ul className='nav-menu'>
                { navItems }
            </ul>
        </nav>
    )
}


// Nav item WITH destructuring
const NavItem = ({ title, count, onClick }) => {
    return (
        <div onClick={onClick} className="nav-item">
            <p className='nav-item-primary'>{title}</p>
            <p className='nav-item-secondary'>{count}</p>
        </div>
    )
}

export default SideNav;