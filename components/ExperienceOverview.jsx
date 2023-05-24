import {
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Select,
  Text,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";

import jobs from "../data/jobs";
import { colors } from "../theme";

const ExperienceSelect = ({ expIndex, setIndex }) => (
  <Select value={expIndex} onChange={(e) => setIndex(e.target.value)}>
    {jobs.map((job, index) => (
      <option key={`${job.workplace}-select-option`} value={index}>
        {job.workplace}
      </option>
    ))}
  </Select>
);

const ExperienceButtons = ({ expIndex, setIndex }) => (
  <Grid
    item
    spacing={2}
    container
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      margin: "auto",
    }}
  >
    {jobs.map((job, index) => (
      <Grid item key={`${job.workplace}-btn`}>
        <Button
          isActive={expIndex === index}
          style={{ width: "inherit", marginTop: "4px" }}
          onClick={() => setIndex(index)}
        >
          {job.workplace}
        </Button>
      </Grid>
    ))}
  </Grid>
);

const ExperienceDetails = ({ index }) => {
  const job = jobs[index];
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <Grid item style={{ display: "flex", flexDirection: "column" }}>
      <Grid item style={{ margin: "12px" }}>
        <Heading as="h1" size="md">
          {job.position} @{" "}
          <Link href={job.url} isExternal color={secondary}>
            {job.workplace}
          </Link>
        </Heading>
      </Grid>
      <Grid item style={{ marginLeft: "12px" }}>
        {job.duration.map((duration) => (
          <Grid key={duration} item>
            <Text mt={2}>{duration}</Text>
          </Grid>
        ))}
      </Grid>
      <Grid item style={{ marginLeft: "12px", marginBottom: "12px" }}>
        <UnorderedList mt={2}>
          {job.description.map((desc) => (
            <ListItem key={desc}>{desc}</ListItem>
          ))}
        </UnorderedList>
      </Grid>
    </Grid>
  );
};

export default function ExperienceOverview() {
  const [index, setIndex] = useState(0);
  const showSelect = useBreakpointValue({
    base: false,
    lg: true,
  });
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <Flex
      as={Grid}
      item
      xs={9}
      sm={9}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      container
      style={{
        flexDirection: "row",
        margin: "24px",
        marginTop: "3vh",
        width: "80%",
        height: "60vh",
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={9}
        sm={6}
        md={2}
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          marginTop: "24px",
          marginBottom: "24px",
          marginRight: "3vw",
        }}
      >
        {showSelect ? (
          <ExperienceButtons expIndex={index} setIndex={setIndex} />
        ) : (
          <ExperienceSelect expIndex={index} setIndex={setIndex} />
        )}
      </Grid>
      <Grid
        item
        xs={9}
        sm={6}
        style={{ marginTop: "24px", marginBottom: "24px", marginLeft: "12px" }}
      >
        <ExperienceDetails index={index} />
      </Grid>
    </Flex>
  );
}
