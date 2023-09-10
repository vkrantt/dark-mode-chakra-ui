import React, { useEffect } from "react";
import ToggleDark from "./components/ToggleDark";
import { useColorMode } from "@chakra-ui/color-mode";
import { Center } from "@chakra-ui/react";

const App = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.title = `${colorMode} mode`;
  }, [colorMode]);

  return (
    <div>
      <Center
        bg={colorMode === "dark" ? "#234E52" : "#319795"}
        h="100px"
        color="white"
      >
        {colorMode} mode (chakra UI)
      </Center>

      <ToggleDark />
    </div>
  );
};

export default App;
