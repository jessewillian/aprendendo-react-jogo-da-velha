import './player.css';
import playerX from '../../img/player-x.png';
import playerCircle from '../../img/player-circle.png';

export default function Player() {
    return (
        <button className='player'>
            <img src={playerX} alt="Jogador X" />
        </button>
    );
}