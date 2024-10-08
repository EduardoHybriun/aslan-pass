import { ReactNode } from "react";
import { FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    icon: ReactNode;
}

export function InputField({ label, type, placeholder, icon }: InputFieldProps) {
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
          ml={'1.5em'} 
          border={'none'} 
          _focus={{ bg: '#FFFFFF', boxShadow: 'none' }} 
        />
      </InputGroup>
    </>
  );
}
