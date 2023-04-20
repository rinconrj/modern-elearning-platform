import { Option, Select } from "@material-tailwind/react";
import { FC, useState } from "react";

interface ICustomSelect {
  className: string
  label: string
  options:{label:string, value:string}[]
}

const CustomSelect: FC<ICustomSelect> = ({label, className, options})=> {
  const [temp,setTemp] = useState();
  const handleChange=(e:any)=>{
  setTemp(e);
}
return (
  <div className={className}>
    <Select onChange={handleChange} label={label} >
      <Option value="A">Material Tailwind HTML</Option>
      <Option value="B">Material Tailwind React</Option>
      <Option value="C">Material Tailwind Vue</Option>
      <Option value="D">Material Tailwind Angular</Option>
      <Option value="E">Material Tailwind Svelte</Option>
    </Select>
  </div>
);
}

export default CustomSelect