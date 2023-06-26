import "./label.css";

export default function Label({ htmlFor, content }) {
  return (
    <label htmlFor={ htmlFor } className="label">{ content }</label>
  )
}