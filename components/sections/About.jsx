import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Everest Ukweh! a graduate of the Federal University of
        Technology, Owerri where I studied Environmental Technology, But I
        ventured into programming as a result of my passion and convictions for
        it. I&apos;m currently working at{" "}
        <Link href="https://www.elacademy.org.ng/" isExternal>
          El-Academy
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>
          Tutor & Software Developer (Intern)
        </strong>{" "}
        where I have taught many client/students how to program. Prior to that, I
        was at{" "}
        <Link href="https://www.rechargeandgetpaid.com" isExternal>
          Recharge And Get Paid
        </Link>{" "}
        &{"  "}
        <Link href="https://walker.ng/" isExternal>
          Walker.ng
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>
          Wallet Funding Officer and Software Developer respectively
        </strong>
        .
      </Text>
      <Text>
        I enjoy creating scalable & elegant web/mobile applications that have a
        real world impact. I&apos;m always learning new technologies
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpeg"
      alt="Ukweh Chimaizu Everest"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://www.linkedin.com/in/everest-ukweh-354a1740/");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
