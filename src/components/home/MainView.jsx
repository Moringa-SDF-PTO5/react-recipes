import './MainView.css';

function MainView(){
    return (
        <>
            <MainAppBar />

            <section>
                Images go here
            </section>  
        </>
    )
}

const MainAppBar = () => {
    return (
        <div className="main-app-bar">
            <div className="app-bar-item">
                <span>Search Icon</span>
                <input className="search-input" type="text" placeholder="Search for recipe" />
            </div>
            <button className="app-bar-item">
                <span>plus icon</span>
                <p>New recipe</p>
            </button>
        </div>
    )
}

export default MainView;