import { Box, Container, Button, Stack, Text, Image, Checkbox, background } from "@chakra-ui/react";

import { Forms } from "@/components/forms/forms";

import logo from "../../../assets/logo.webp"

export function PageLogin() {
  return (
    <Container
      display="flex"
      maxW="100vw"
      h="100vh"
      m={0}
      p={0}
      fontFamily="var(--font-roboto)"
      overflow={{ base: "auto", md: "hidden" }}
    >
      {/* Box Amarelo */}
      <Box
        bg="#F7C921"
        w="50%"
        h="100%"
        display={{ base: 'none', lg: 'flex' }}
        justifyContent={'center'}
        alignItems={"center"}
        flexDirection={'column'}
        pl={'4em'}
        pr={'3em'}
        position={"relative"}
      >
        <Box>
          <Text
            fontSize={'4xl'}
            fontWeight={'extrabold'}
            color={'#FFFFFF'}
          >
            Aslan Pass
          </Text>
          <Text color={'#FFFFFF'} fontSize={'16px'} mb={'1em'}>
            Faça login e confira nossos benefícios e novidades.
          </Text>
          <Stack direction='row' spacing={4} align='center'>
            <Button
              bg={'#FFFFFF'}
              color={'#000000'}
              fontWeight={'medium'}
              textAlign={'center'}
              px={2}
              mt={2}
              py={2}
              mb={2}
              rounded={"xl"}
              variant='outline'>
              Fazer Login
            </Button>
          </Stack>
        </Box>
        {/* --------- circle 1 ------------ */}
        <Box
          bg={'none'}
          border={'3px solid #FFFFFF'}
          w={'20%'}
          h={'35%'}
          position={"fixed"}
          top={"-4.8em"}
          right={{ base: '40%', lg: '46%' }}
          borderRadius={'50%'}
          opacity={'30%'}
        />
        {/* --------- circle 2 ------------ */}
        <Box
          bg={'none'}
          border={'3px solid #FFFFFF'}
          w={'20%'}
          h={'35%'}
          position={"fixed"}
          top={"-8.8em"}
          right={{ base: '50%', lg: '50%' }}
          borderRadius={'50%'}
          opacity={'30%'}
        />
        {/* --------- circle 3 ------------ */}
        <Box
          bg={'none'}
          border={'3px solid #FFFFFF'}
          w={'20%'}
          h={'35%'}
          position={"fixed"}
          bottom={'-6em'}
          left={{ base: '50%', lg: '-8%' }}
          borderRadius={'50%'}
          opacity={'30%'}
        />
        {/* --------- circle 3 ------------ */}
        <Box
          bg={'none'}
          border={'3px solid #FFFFFF'}
          w={'20%'}
          h={'35%'}
          position={"fixed"}
          bottom={'-8em'}
          left={{ base: '50%', lg: '-4%' }}
          borderRadius={'50%'}
          opacity={'30%'}
        />
      </Box>

      {/* Box Branco */}
      <Box
        bg="#FFFFFF"
        w={{ base: '100%', lg: "50%" }}
        h="100%"
        display={'flex'}
        alignItems={"center"}
        flexDirection={'column'}
        pl={{ base: '0.2em', lg: '6em' }}
        pr={{ base: '0.2em', lg: '6em' }}
        mb={'2em'}
        mt={'2em'}
      >
        <Image src={logo.src} alt="logo" w={180} />

        <Box w="75%" mt={'1em'}>
          <Text
            fontSize={'2xl'}
            fontWeight={'extrabold'}
            color={'#000000'}
          >
            Cadastre-se
          </Text>
          <Text color={'#000000'} fontSize={'16px'} mb={'1em'}>
            Preencha todos os campos.
          </Text>
        </Box>

        <Forms />

      </Box>
    </Container>
  );
}

