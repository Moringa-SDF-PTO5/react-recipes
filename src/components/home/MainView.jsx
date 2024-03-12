import { useState } from 'react';
import './MainView.css';
import FoodItemCard from './FoodItemCard';

function MainView({foodItems, category, isActiveCategory, toggleIsActiveCategory}){

    const foodItemsUi = foodItems.map((item) => {
        return (
        <FoodItemCard 
            mealName={item.name} 
            thumbnail={item.thumbnail}
            mealId={item.id}
            category={category}
            key={item.id}
        />)
    });

    const [count, setCount] = useState(0)
    const [search, setSearch] = useState("")
    const [isSearch, setIsSearch] = useState(!isActiveCategory);

    function updateState(){
        const square = count * count;
        const doubleSquare = square * 2;
        const final = Math.random() * 10 + doubleSquare
        setCount(final)
    }

    function updatingSearch(value){
        setSearch(value)
    }

    function onSearchStarted(){
        // submit the search
        toggleIsActiveCategory();
        setIsSearch(true);
    }


    return (
        <>
            <MainAppBar 
                count={count} 
                updateCount={updateState} 
                searchTerm={search}
                onUpdateSearch={updatingSearch}
                onSearchStarted={onSearchStarted}
                 />

            <section>
                {isSearch && <h2>Results for '{search}'</h2>} 
                <div className='food-items'>
                    {foodItemsUi}
                </div>
            </section>  
        </>
    )
}

const MainAppBar = ({searchTerm, onUpdateSearch, onSearchStarted }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSearchStarted();
    }

    return (
        <div className="main-app-bar">
            <div className="app-bar-item">
                <span className='material-symbols-outlined'>search</span>
                <form onSubmit={handleFormSubmit}>
                    <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Search for recipe.."
                        value={searchTerm}
                        onChange={(e) => { 
                            const newValue = e.target.value
                            onUpdateSearch(newValue)
                        }}
                    />
                </form>    
            </div>
            <button className="transparent-btn">
                <div className='app-bar-item'>
                    <span class="material-symbols-outlined">add_circle</span>
                    <span style={{marginLeft: 7}}>New recipe</span>
                </div>
                
            </button>
        </div>
    )
}

export default MainView;