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
      <Text style={{ textAlign: "center" }}>
        Have over 4 years of experience. A graduate of the Federal University of
        Technology where he studied Environmental Technology, He ventured into
        software programming as a result of owns passion and convictions.
        Currently, He is working at Amabills Technology, as a{" "}
        <strong style={{ color: secondary }}>Backend Software Engineer</strong>,{" "}
        Prior to that, He was at{" "}
        <Link href="https://www.elacademy.org.ng/" isExternal>
          El-Academy
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>
          programing Tutor and Software Developer (Intern)
        </strong>{" "}
        where he taught many clients/students programming. Other experiences
        include working at{" "}
        <Link href="https://www.rechargeandgetpaid.com" isExternal>
          Recharge And Get Paid
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>Wallet Funding Officer</strong> and
        at{" "}
        <Link href="https://walker.ng/" isExternal>
          Walker.ng
        </Link>{" "}
        as <strong style={{ color: secondary }}>Software Engineer</strong>.{" "}
        Strong skills are in{" "}
        <strong style={{ color: secondary }}>Python</strong>,{" "}
        <strong style={{ color: secondary }}>Php</strong>,{" "}
        <strong style={{ color: secondary }}>Laravel</strong>,{" "}
        <strong style={{ color: secondary }}>React</strong>,{" "}
        <strong style={{ color: secondary }}>Graphql</strong>,{" "}
        <strong style={{ color: secondary }}>Excel</strong>,{" "}
        <strong style={{ color: secondary }}>JavaScript</strong>,{" "}
        <strong style={{ color: secondary }}>Node.js</strong>,{" "}
        <strong style={{ color: secondary }}>MongoDB</strong>,{" "}
        <strong style={{ color: secondary }}>Html</strong>,{" "}
        <strong style={{ color: secondary }}>Express.js</strong>,{" "}
        <strong style={{ color: secondary }}>Nest.js</strong>,{" "}
        <strong style={{ color: secondary }}>MySQL</strong>,{" "}
        <strong style={{ color: secondary }}>Laravel</strong>,{" "}
        <strong style={{ color: secondary }}>Css</strong>,{" "}
        <strong style={{ color: secondary }}>Django</strong>, etc.
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
