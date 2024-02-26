import './SideNav.css'

function SideNav(){
    return (
        <nav>
            <ul className='nav-menu'>
                <li>
                    <NavItem/>
                </li>
                <li>
                    <NavItem/>
                </li>
                <li>
                    <NavItem/>
                </li>
            </ul>
        </nav>
    )
}


const NavItem = () => {
    return (
        <div className="nav-item">
            <p className='nav-item-primary'>Breakfast</p>
            <p className='nav-item-secondary'>4</p>
        </div>
    )
}


export default SideNav;