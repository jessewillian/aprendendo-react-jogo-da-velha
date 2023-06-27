import './App.css';

import Header from './components/Header/Header';
import Hashtag from './components/Hashtag/Hashtag';
import Checkbox from './objects/Checkbox/Checkbox';

export default function App() {
  return (
    <main className="app">
      <Header/>
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos"/>
    </main>
  );
}