"use client";

import { Box, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { InputGroupField } from "./input-group-field/input-group-field";
import { Switches } from "../switches/switches";
import { CheckBox } from "../check-box/check-box";
import { ButtonRegister } from "../button-register/button-register";

export function Forms() {
    const [isChecked, setIsChecked] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirmEmail: "",
        phone: "",
        confirmPassword: ""
    });

    const toast = useToast(); // Para mostrar avisos

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;

        if (type === "checkbox") {
            setIsChecked(checked);
        } else {
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };

    // Função para verificar se todos os campos estão preenchidos
    const handleSubmit = () => {
        const emptyFields = Object.entries(formValues).filter(([_, value]) => !value);

        if (emptyFields.length > 0 || !isChecked) {
            toast({
                title: "Erro de registro.",
                description: emptyFields.length > 0
                    ? "Por favor, preencha todos os campos obrigatórios."
                    : "Você deve concordar com os Termos de Uso e Política de Privacidade.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else {
            // Aqui você pode prosseguir com o registro, como fazer uma chamada de API
            console.log("Todos os campos estão preenchidos:", formValues);
            toast({
                title: "Sucesso!",
                description: "Seus dados foram enviados com sucesso!",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box w={{ base: '75%', lg: "100%" }} flexDirection={'column'}>
            <InputGroupField formValues={formValues} handleChange={handleChange} /> {/* Passando handleChange */}
            <Switches />
            <CheckBox handleChange={handleChange} isChecked={isChecked} /> {/* Passando props necessárias */}
            <ButtonRegister handleSubmit={handleSubmit} /> {/* Passando a função handleSubmit */}
        </Box>
    );
}
