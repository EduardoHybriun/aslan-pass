import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { InputField } from "../input-field/Input-field";
import { Mail, User2, UserSquare2, Lock, Smartphone } from "lucide-react";

interface InputGroupFieldProps {
  formValues: {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmEmail: string;
    phone: string;
    confirmPassword: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputGroupField({ formValues, handleChange }: InputGroupFieldProps) {
  return (
    <Box w={'100%'} display={'flex'} flexDirection={"column"} gap={'10px'}>
      <InputField
        label="Nome"
        type="text"
        placeholder="Nome"
        icon={<User2 color="#F7C921" size={25} />}
        value={formValues.name}
        onChange={handleChange}
        name="name"
      />
      <Flex w={'100%'} flexDirection={"row"} gap={'10px'}>
        <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }} w='100%'>
          <InputField
            label="E-mail"
            type="email"
            placeholder="E-mail"
            icon={<Mail color="#F7C921" size={25} />}
            value={formValues.confirmEmail}
            onChange={handleChange}
            name="email"
          />
          <InputField
            label="Confirmar E-mail"
            type="email"
            placeholder="E-mail"
            icon={<Mail color="#F7C921" size={25} />}
            value={formValues.confirmEmail}
            onChange={handleChange}
            name="confirmEmail"
          />
          <InputField
            label="CPF"
            type="text"
            placeholder="CPF"
            icon={<Smartphone color="#F7C921" size={25} />}
            value={formValues.phone}
            onChange={handleChange}
            name="cpf"
          />
          <InputField
            label="Celular"
            type="number"
            placeholder="Celular"
            icon={<Smartphone color="#F7C921" size={25} />}
            value={formValues.phone}
            onChange={handleChange}
            name="phone"
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="Senha"
            icon={<Smartphone color="#F7C921" size={25} />}
            value={formValues.phone}
            onChange={handleChange}
            name="password"
          />
          <InputField
            label="Confirmar Senha"
            type="password"
            placeholder="Senha"
            icon={<Lock color="#F7C921" size={25} />}
            value={formValues.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
