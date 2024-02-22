import './App.css';

function App() {

  return (
    <div className='app'>

      <aside className='side-nav'>
        <nav>
          <ul>
            <li style={{ textAlign: 'center', backgroundColor: 'red' }} >Recipes</li>
            <li>Calendar</li>
            <li>Shopping Cart</li>
          </ul>
        </nav>
      </aside>

      <main className='main'>
        <div>title section</div>
        <section>
          Images go here
        </section>
      </main>
    </div>
  )
}

export default App
