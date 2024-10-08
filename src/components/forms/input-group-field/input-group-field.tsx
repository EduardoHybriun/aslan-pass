import { Box } from "@chakra-ui/react";
import { InputField } from "../input-field/Input-field";
import { Mail, User2, UserSquare2, Lock, Smartphone } from "lucide-react";

export function InputGroupField() {
  return (
    <Box w={'100%'} display={'flex'} flexDirection={"column"} gap={'10px'}>
      <InputField label="Nome" type="text" placeholder="Nome" icon={<User2 color="#F7C921" size={25} />} />
      <Box w={'100%'} display={'flex'} flexDirection={"row"} gap={'10px'}>
        <Box w={'50%'} flexDirection={"column"}>
            <InputField label="E-mail" type="email" placeholder="E-mail" icon={<Mail color="#F7C921" size={25} />} />
            <InputField label="CPF" type="text" placeholder="CPF" icon={<UserSquare2 color="#F7C921" size={25} />} />
            <InputField label="Senha" type="password" placeholder="Senha" icon={<Lock color="#F7C921" size={25} />} />
        </Box>
        <Box w={'50%'} flexDirection={"column"}>
            <InputField label="Confirmar E-mail" type="email" placeholder="E-mail" icon={<Mail color="#F7C921" size={25} />} />
            <InputField label="Celular" type="number" placeholder="Celular" icon={<Smartphone color="#F7C921" size={25} />} />
            <InputField label="Confirmar Senha" type="password" placeholder="Senha" icon={<Lock color="#F7C921" size={25} />} />
        </Box>
      </Box>
    </Box>
  );
}
