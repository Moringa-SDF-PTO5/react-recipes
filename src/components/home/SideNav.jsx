import './SideNav.css'

// nav menu items
const menuItems = [
    { id: 1, title: "Breakfast", count: 4 },
    { id: 2, title: "Dessert", count: 9 },
    { id: 3, title: "Meat and poultry", count: 7 },
    { id: 4, title: "Pasta and pizza", count: 20 },
    { id: 5, title: "Salads", count: 3 },
    { id: 6, title: "Snacks", count: 12 },
    { id: 7, title: "Soups", count: 8 },
    { id: 8, title: "Breakfast", count: 4 },
];


function SideNav(){

    const convertMenuToJSX = ({title, count, id}, index) => {
        const key = crypto.randomUUID()
        return (
        <li key={key}>
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