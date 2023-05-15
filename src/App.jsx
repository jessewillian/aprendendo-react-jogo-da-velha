import Header from './components/Header/Header';
import Card from './objects/Card/Card';
import Player from './objects/Player/Player';

export default function App() {
  return (
    <>
      <Header/>
      <Card>
        <Player player="x" />
        <Player player="o" />
        <Player player="x" />

        <Player player="o" />
        <Player player="x" />
        <Player player="o" />
        
        <Player player="x" />
        <Player player="o" />
        <Player player="x" />
      </Card>
    </>
  );
}