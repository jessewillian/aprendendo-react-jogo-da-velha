import "./label.css";

// eslint-disable-next-line react/prop-types
export default function Label({ htmlFor, content }) {
  return (
    <label htmlFor={ htmlFor } className="label">{ content }</label>
  )
}