import './App.css';

import Header from './components/Header/Header';
import Hashtag from './components/Hashtag/Hashtag';
import Label from './objects/Label/Label';

export default function App() {
  return (
    <main className="app">
      <Header/>
      <Hashtag />
      <Label content={ "Mostrar eventos" }/>
    </main>
  );
}