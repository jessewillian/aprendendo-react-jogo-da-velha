import './hashtag.css';
import Card from '../../objects/Card/Card';
import Player from '../../objects/Player/Player';

export default function Hashtag() {
    return (
        <Card>
            <ul className='hashtag'>
                <li className="item"><Player player="x" /></li>
                <li className="item"><Player player="o" /></li>
                <li className="item"><Player player="x" /></li>
                
                <li className="item"><Player player="o" /></li>
                <li className="item"><Player player="x" /></li>
                <li className="item"><Player player="o" /></li>
                
                <li className="item"><Player player="x" /></li>
                <li className="item"><Player player="o" /></li>
                <li className="item"><Player player="x" /></li>
            </ul>
      </Card>
    );
}