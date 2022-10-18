import { Container, Box, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align="center">
        hi there, i&apos;m full-stack developer from Tbilisi.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            Ikako Dzvelaia
          </Heading>

          <p>Digital Wizard, working as software engineer for Noxtton.</p>
        </Box>
      </Box>
    </Container>
  );
}
