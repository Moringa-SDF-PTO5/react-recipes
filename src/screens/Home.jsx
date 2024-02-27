import SideNav from "../components/home/SideNav";
import MainView from "../components/home/MainView";

function Home(){
    return(
    <div className='app'>
        <aside className='side-nav'>
          <SideNav />
        </aside>
  
        <main className='main'>
          <MainView>
            <h2>This is a child header</h2>
            <iframe style={{width: 200, height: 200}} src="https://www.youtube.com/embed/4k6Xgjqkad4"></iframe>
          </MainView>
        </main>
    </div>
    )
}


export default Home