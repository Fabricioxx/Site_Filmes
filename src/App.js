import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Movie from './components/Movie';
import Footer from './components/Footer';

// função que retorna o que será exibido na tela (App é o componente principal)
function App() {
  return (

    <Router>
    
       {/* <Router> - para poder adicionar os componentes, precisa do impot para usar essa tag  */}
       {/* componetes que serão exibidos na tela  */}
      <Header/>
      <Title/>
      <Movie/>
      <Footer/>
      
    

    </Router>
  );
}

export default App;
