// src/components/forms/Forms.js
import { Box } from "@chakra-ui/react";
import { InputGroupField } from "./input-group-field/input-group-field";
import { Switches } from "../switches/switches";
import { CheckBox } from "../check-box/check-box";
import { ButtonRegister } from "../button-register/button-register";

export function Forms() {
  return (
    <Box w="75%" flexDirection={'column'}>
      <InputGroupField />
      <Switches />
      <CheckBox />
      <ButtonRegister />
    </Box>
  );
}
