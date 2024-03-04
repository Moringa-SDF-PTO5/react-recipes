import { useState } from 'react';
import './MainView.css';

function MainView(props){

    const [count, setCount] = useState(0)
    const [search, setSearch] = useState("")

    function updateState(){
        const square = count * count;
        const doubleSquare = square * 2;
        const final = Math.random() * 10 + doubleSquare
        setCount(final)
    }

    function updatingSearch(value){
        setSearch(value)
    }


    return (
        <>
            <MainAppBar 
                count={count} 
                updateCount={updateState} 
                searchTerm={search}
                onUpdateSearch={updatingSearch}
                 />

            <section>
                <h2>This is a child header</h2>
                <iframe style={{width: 200, height: 200}} src="https://www.youtube.com/embed/4k6Xgjqkad4"></iframe>
            </section>  
        </>
    )
}

const MainAppBar = ({ count, updateCount, searchTerm, onUpdateSearch }) => {
    return (
        <div className="main-app-bar">
            <div className="app-bar-item">
                <span>Search Icon</span>
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="Search for recipe"
                    value={searchTerm}
                    onChange={(e) => { 
                        const newValue = e.target.value
                        onUpdateSearch(newValue)
                     }}
                />
                <p>{count}</p>
                <button onClick={updateCount}>Click Me</button>
            </div>
            <button className="app-bar-item">
                <span>plus icon</span>
                <p>New recipe</p>
            </button>
        </div>
    )
}

export default MainView;