import Label from '../Label/Label';
import './input.css';

export default function Input({ id, value, content }) {
  return (
    <>
        <input id={ id } type="checkbox" value={ value } />
        <Label htmlFor={ id } content={ content }/>
    </>
  )
}