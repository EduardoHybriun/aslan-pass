import { Box } from "@chakra-ui/react";
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
                name="name" // Adicione o nome aqui
            />
            <Box w={'100%'} display={'flex'} flexDirection={"row"} gap={'10px'}>
                <Box w={'50%'} flexDirection={"column"}>
                    <InputField
                        label="E-mail"
                        type="email"
                        placeholder="E-mail"
                        icon={<Mail color="#F7C921" size={25} />}
                        value={formValues.email}
                        onChange={handleChange}
                        name="email" // Adicione o nome aqui
                    />
                    <InputField
                        label="CPF"
                        type="text"
                        placeholder="CPF"
                        icon={<UserSquare2 color="#F7C921" size={25} />}
                        value={formValues.cpf}
                        onChange={handleChange}
                        name="cpf" // Adicione o nome aqui
                    />
                    <InputField
                        label="Senha"
                        type="password"
                        placeholder="Senha"
                        icon={<Lock color="#F7C921" size={25} />}
                        value={formValues.password}
                        onChange={handleChange}
                        name="password" // Adicione o nome aqui
                    />
                </Box>
                <Box w={'50%'} flexDirection={"column"}>
                    <InputField
                        label="Confirmar E-mail"
                        type="email"
                        placeholder="E-mail"
                        icon={<Mail color="#F7C921" size={25} />}
                        value={formValues.confirmEmail}
                        onChange={handleChange}
                        name="confirmEmail" // Adicione o nome aqui
                    />
                    <InputField
                        label="Celular"
                        type="number"
                        placeholder="Celular"
                        icon={<Smartphone color="#F7C921" size={25} />}
                        value={formValues.phone}
                        onChange={handleChange}
                        name="phone" // Adicione o nome aqui
                    />
                    <InputField
                        label="Confirmar Senha"
                        type="password"
                        placeholder="Senha"
                        icon={<Lock color="#F7C921" size={25} />}
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword" // Adicione o nome aqui
                    />
                </Box>
            </Box>
        </Box>
    );
}
