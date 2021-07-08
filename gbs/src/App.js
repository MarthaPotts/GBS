// import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import Header from '../src/components/Header/Header'; 
import SearchForm from '../src/components/SearchForm';
import Input from '../src/components/SearchForm/Input';
import SearchBtn from './components/SearchForm/SearchBtn';  

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <SearchForm />
      <Input />
      <SearchBtn />
      
    </div>
  );
}

export default App;
