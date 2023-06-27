import Label from "../Label/Label"
import Input from "../Input/Input";

// eslint-disable-next-line react/prop-types
export default function Checkbox({ id = "", value = "", content = "" }) {
  return ( 
    <>
        <Input id={ id } value={ value } type="checkbox" content={ content }/>
        <Label htmlFor={ id } content={ content }/>
    </>
  )
}