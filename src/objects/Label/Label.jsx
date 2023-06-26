import "./label.css";

export default function Label({ content }) {
  return (
    <label htmlFor="" className="label">{ content }</label>
  )
}