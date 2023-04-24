import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import Fade from "react-reveal/Fade";

import { extraProjects } from "../data/projects";
import { colors } from "../theme";
import LinkIconBar from "./LinkIconBar";
import Tech from "./Tech";

const DisplayBar = ({ showGridView, setShowGridView }) => (
  <Stack
    mt={4}
    direction="row"
    spacing="12px"
    justifyContent="center"
    mb={10}
    float="right"
  >
    <Tooltip label="List View">
      <IconButton
        aria-label="Display List View"
        icon={<FaListUl />}
        isActive={!showGridView}
        onClick={() => setShowGridView(true)}
      />
    </Tooltip>
    <Tooltip label="Grid View">
      <IconButton
        aria-label="Display Grid View"
        icon={<BsGridFill />}
        isActive={showGridView}
        onClick={() => setShowGridView(false)}
      />
    </Tooltip>
  </Stack>
);

const ProjectCard = ({ name, description, links, tech }) => {
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <Box
      as={Grid}
      item
      xs={9}
      sm={6}
      md={3}
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      shadow="lg"
      textAlign="start"
      style={{ margin: "24px", flexDirection: "column" }}
    >
      <Grid
        item
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={6}>
          <Icon
            as={HiCode}
            boxSize="3em"
            color={secondary}
            m="auto"
            marginLeft="10px"
          />
        </Grid>
        <Grid item xs={6} style={{ float: "left" }}>
          <LinkIconBar links={links} mr="24px" />
        </Grid>
      </Grid>
      <Grid item style={{ display: "flex", marginTop: "-24px" }}>
        <Heading as="h1" size="md" m={2} p={1} pt={6}>
          {name}
        </Heading>
      </Grid>
      <Grid item style={{ display: "flex" }}>
        <Text fontSize="md" m={2} p={1}>
          {description}
        </Text>
      </Grid>
      <Grid
        item
        style={{
          display: "flex",
          marginBottom: "12px",
          padding: "12px",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Tech tech={tech} />
      </Grid>
    </Box>
  );
};

const ProjectRow = ({ name, type, description, tech, links }) => (
  <Tr>
    <Td>{name}</Td>
    <Td>{type}</Td>
    <Td>{description}</Td>
    <Td>
      <Grid item style={{ flexDirection: "row" }}>
        <Tech tech={tech} techMr={2} />
      </Grid>
    </Td>
    <Td>
      <Grid>
        <LinkIconBar links={links} />
      </Grid>
    </Td>
  </Tr>
);

const ProjectTable = ({ projs }) => (
  <Fade>
    <div style={{ overflowX: "auto" }}>
      <Table size="md" w="100%">
        <Thead>
          <Tr>
            <Th w="10%">Name</Th>
            <Th w="10%">Type</Th>
            <Th w="25%">Description</Th>
            <Th w="20%">Technologies</Th>
            <Th w="15%">Links</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projs.map((project) => (
            <ProjectRow key={project.name} {...project} />
          ))}
        </Tbody>
      </Table>
    </div>
  </Fade>
);

export default function MoreProjectsGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGridView, setShowGridView] = useState(true);

  const projects = isExpanded ? extraProjects : extraProjects.slice(0, 3);

  return (
    <>
      <Flex justifyContent="flex-end" pl="15%" pr="15%" w="100vw">
        <DisplayBar
          showGridView={showGridView}
          setShowGridView={setShowGridView}
        />
      </Flex>
      <Flex justifyContent="center" w="100vw">
        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {showGridView ? (
            <ProjectTable projs={projects} />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "75%",
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>
          )}
        </Grid>
      </Flex>
      <Flex justifyContent="center" w="100vw">
        <Button
          mt={6}
          leftIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {`Show ${isExpanded ? "Less" : "More"}`}
        </Button>
      </Flex>
    </>
  );
}
