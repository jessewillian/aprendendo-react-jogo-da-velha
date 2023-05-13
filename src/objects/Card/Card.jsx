import Player from '../Player/Player';
import './card.css';

export default function Card() {
    return (
        <article className="card">
            <Player player="x"/>
        </article>
    );
}