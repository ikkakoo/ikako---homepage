import NextLink from "next/link";
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragraph from "../components/paragraph";

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        mb={6}
        p={3}
        align="center"
      >
        hi there, i&apos;m full-stack developer from Tbilisi.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            Ikako Dzvelaia
          </Heading>

          <p>Digital Wizard, working as software engineer for Noxtton.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ikako.jpeg"
            alt="Profile Pic"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h4" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          After about 4 years of working in Finance, I finally discovered my
          true passion.
        </Paragraph>
        <Paragraph>
          I never lacked motivation, dedication and love for my job as a
          financial analyst, but still I could feel that something wasn&apos;t
          quite right. Despite this, I never stopped acquiring new tools and
          skills to further deepen my knowledge and improve my productivity,
          which led me to learn my first programming language - Python. Upon
          successfully completing the course I became more and more interested
          into programming and in no time I found myself learning various tools
          for software development including (HTML, CSS and Javascript) .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
}
