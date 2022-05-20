import { useState } from "react";

interface Props {
    name: string
}

export const HellowWorld: React.FC<Props> = ({name='Lucho'}:Props) => {
    const [txt, setTxt] = useState<{fullName: string | null}>({fullName:''});
  return <div>{name}</div>;
};

interface FormProps<T> {
    values: T;
    children: (values: T)=> JSX.Element
}

export const Form =  <T extends {}>({values, children}: FormProps<T>)=>{
    return children(values)
}

export const TsComponent: React.FC = () => {
  return <div>
      <Form<{first:number}>
      values={{first:3}}
      >
        {(values)=><div>{values.first}</div>}
      </Form>
  </div>;
};
