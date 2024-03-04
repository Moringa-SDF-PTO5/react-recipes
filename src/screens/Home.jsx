import SideNav from "../components/home/SideNav";
import MainView from "../components/home/MainView";

function Home(){
    return(
    <div className='app'>
        <aside className='side-nav'>
          <SideNav />
        </aside>
  
        <main className='main'>
          <MainView />
        </main>
    </div>
    )
}


export default Home