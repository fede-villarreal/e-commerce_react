import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Welcome"/>
      </main>
    </body>
  );
}

export default App;
