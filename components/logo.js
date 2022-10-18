import Link from "next/link";
import { Text, useColorModeValue, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IoRocket } from "react-icons/io5";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 17px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover svg {
    transform: translate(3px, -3px);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Icon as={IoRocket} />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={2}
          >
            Ikako Dzvelaia
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
