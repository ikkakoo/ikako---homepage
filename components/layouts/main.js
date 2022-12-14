import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "../navbar";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <title>Ikako Dzvelaia - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW='container.md' pt={16}>
                {children}
            </Container>
        </Box>
    )
}

export default Main