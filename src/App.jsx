import './App.css';

import Header from './components/Header/Header';
import Hashtag from './components/Hashtag/Hashtag';
import Input from './objects/Input/Input';

export default function App() {
  return (
    <main className="app">
      <Header/>
      <Hashtag />
      <Input value={ "Show" } id={ "show" } content={ "Mostrar eventos" }/>
    </main>
  );
}