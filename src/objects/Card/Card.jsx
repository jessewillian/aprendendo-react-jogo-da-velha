import './card.css';

export default function Card({children}) {
    return (
        <article className="card">
            {children}
        </article>
    );
}