import './input.css';

// eslint-disable-next-line react/prop-types
export default function Input({ id = "", value = "", type = "text" }) {
  return (
      <input className="input" id={ id } type={ type } value={ value } />
  )
}