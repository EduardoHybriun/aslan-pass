import { ChakraProvider } from "@chakra-ui/react"
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Define os pesos que deseja usar
  variable: "--font-roboto", // Variável CSS para utilizar a fonte
});

export const metadata: Metadata = {
  title: "Aslan Pass",
  description: "App Aslan Pass",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.variable}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
