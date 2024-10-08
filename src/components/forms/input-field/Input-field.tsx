import { ReactNode } from "react";
import { FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    icon: ReactNode;
    value: string; // Adicione a propriedade value
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adicione a propriedade onChange
    name: string; // Adicione a propriedade name
}

export function InputField({ label, type, placeholder, icon, value, onChange, name }: InputFieldProps) {
  return (
    <>
      <FormLabel fontSize={'14px'} mb={"-2px"}>{label} *</FormLabel>
      <InputGroup 
        mt={'0.5em'} 
        mb={'0.5em'} 
        bg={'#F9FAFB'} 
        border={'1px solid #E4E7EB'} 
        borderRadius={'10px'} 
        _focusWithin={{ border: '2px solid #1A56DB' }}
      >
        <InputLeftElement pointerEvents='none'>
          {icon}
        </InputLeftElement>
        <Input 
          type={type} 
          placeholder={placeholder} 
          border={'none'} 
          _focus={{ bg: '#FFFFFF', boxShadow: 'none' }} 
          value={value} // Vincule o valor aqui
          onChange={onChange} // Vincule a função de mudança aqui
          name={name} // Vincule o nome aqui
          required
        />
      </InputGroup>
    </>
  );
}
