import './SideNav.css'

// nav menu items
const menuItems = [
    { title: "Breakfast", count: 4 },
    { title: "Dessert", count: 9 },
    { title: "Meat and poultry", count: 7 },
    { title: "Pasta and pizza", count: 20 },
    { title: "Salads", count: 3 },
    { title: "Snacks", count: 12 },
    { title: "Soups", count: 8 },
    { title: "Other", count: 4 },
];


function SideNav(){

    const convertMenuToJSX = ({title, count}) => {
        return (
        <li>
         <NavItem title={title} count={count} /> 
        </li>
        )
    }

    const navItems = menuItems.map(convertMenuToJSX)

    return (
        <nav>
            <ul className='nav-menu'>
                { navItems }
                {/* <li>
                    <NavItem title="Breakfast" count="4"  />
                </li>
                <li>
                    <NavItem title="Dessert" count="9" />
                </li>
                <li>
                    <NavItem title="Meat and poultry" count="7" />
                </li> */}
            </ul>
        </nav>
    )
}


// Nav item without destructuring
// const NavItem = (props) => {
//     return (
//         <div className="nav-item">
//             <p className='nav-item-primary'>{props.title}</p>
//             <p className='nav-item-secondary'>{props.count}</p>
//         </div>
//     )
// }

// Nav item WITH destructuring
const NavItem = ({ title, count }) => {
    return (
        <div className="nav-item">
            <p className='nav-item-primary'>{title}</p>
            <p className='nav-item-secondary'>{count}</p>
        </div>
    )
}

export default SideNav;