/* eslint-disable no-console */
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoRepoForked, GoStar } from "react-icons/go";
import { animateScroll as scroll } from "react-scroll";

import links from "../data/footerLinks";
import LinkIconBar from "./LinkIconBar";

const GITHUB_URL = "https://github.com/exrelativity/exrelativity.github.io";

export default function Footer() {
  const [forks, setForks] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/exrelativity/exrelativity.github.io")
      .then((response) => response.json()) // Converting the response to a JSON object
      .then((data) => {
        setForks(data.forks);
        setStars(data.stargazers_count);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      <Link href={GITHUB_URL} isExternal>
        <Text fontSize="sm">Made with Next.js and React</Text>
      </Link>
      <Stack
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoRepoForked /> <Text size="xs">{forks}</Text>
        <GoStar /> <Text size="xs">{stars}</Text>
      </Stack>

      <Text fontSize="sm" mt={2} onClick={scroll.scrollToTop}>
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Click me to scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
      </Text>
      <LinkIconBar links={links} />
    </Box>
  );
}
