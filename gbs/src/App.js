// import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import Header from '../src/components/Header/Header'; 
import SearchForm from '../src/components/SearchForm';
import Input from '../src/components/SearchForm/Input';
import SearchBtn from './components/SearchForm/SearchBtn'; 
import DisplayResult from './components/SearchResult/DisplayResult';
import ListItem from './components/SearchResult/ListItem';
import ViewBtn from './components/ViewBtn/ViewBtn';
import SaveBtn from './components/SaveBtn/SaveBtn';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <SearchForm />
      <Input />
      <SearchBtn />
      <DisplayResult />
      <ListItem />
      <ViewBtn />
      <SaveBtn />
      
      
    </div>
  );
}

export default App;
