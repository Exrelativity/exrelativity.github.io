import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";

import projects from "../data/projects";
import { colors } from "../theme";
import LinkIconBar from "./LinkIconBar";
import Tech from "./Tech";

const Card = ({ name, subtitle, description, links }) => {
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

  return (
    <Box
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      shadow="lg"
      mt={0}
      m="auto"
      mb={3}
      textAlign="start"
      style={{
        width: "auto",
        height: "auto",
        maxHeight: "450px",
        minHeight: "350px",
        maxWidth: "85%",
        minWidth: "75%",
      }}
    >
      <Heading as="h1" size="lg" m={2} p={2} pt={6}>
        {name}
      </Heading>
      <Text hidden={!subtitle} size="sm" as="strong" m={2} p={2} pb={6}>
        {subtitle}
      </Text>
      <Text m={2} p={2} pb={6}>
        {description}
      </Text>
      <LinkIconBar links={links} float="right" mt={0} mr={4} mb={4} />
    </Box>
  );
};

const ProjectContent = ({
  alternate,
  name,
  subtitle,
  description,
  pic,
  tech,
  links,
}) => {
  if (alternate) {
    return (
      <div style={{ display: "flex", flexDirection: "column", zIndex: "0" }}>
        <Card
          name={name}
          subtitle={subtitle}
          description={description}
          links={links}
        />
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "75%",
            margin: "auto",
          }}
        >
          <Tech tech={tech} />
        </div>
      </div>
    );
  }
  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      style={{
        borderRadius: "10px",
        width: "auto",
        height: "auto",
        maxHeight: "450px",
        maxWidth: "85%",
        minWidth: "45%",
        paddingTop: "5px",
        zIndex: "0",
        margin: "auto",
        padding: "auto",
      }}
      src={pic}
      alt={`${name} picture`}
      // className="image"
      onClick={() => {
        window.open(links[0].url);
      }}
    />
  );
};

const Project = ({ index, shouldAlternate, ...props }) => (
  <Fade>
    <Grid
      container
      style={{
        flexDirection: "row",
        display: "flex",
        height: "auto",
        zIndex: "0",
        justifyContent: "center",
        overflow: "auto",
        paddingBottom: "10px",
        margin: "auto",
        // margin: "10px",
        marginBottom: "10%",
        // paddingBottom: "10px",
      }}
    >
      <Grid item xs={12} sm={6}>
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 0 : false}
          {...props}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 1 : true}
          {...props}
        />
      </Grid>
    </Grid>
  </Fade>
);

export default function ProjectsOverview() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  return (
    <Flex pt={12}>
      <div
        style={{
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          zIndex: "0",
        }}
      >
        {projects.map((project, index) => (
          <Project
            key={project.name}
            index={index}
            shouldAlternate={shouldAlternate}
            {...project}
          />
        ))}
      </div>
    </Flex>
  );
}
