"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { NativeBaseProvider, Box, Button, Stack, Slider } from "native-base";

export default function Home() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">Hello</Box>
      <Button onPress={() => console.log("hello world")}>Click Me</Button>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        space={2}
        alignItems={{
          base: "center",
          md: "flex-start",
        }}
      >
        <Button isLoading>Button</Button>
        <Button isLoading isLoadingText="Submitting">
          Button
        </Button>
        <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">
          Button
        </Button>
        <Button
          isLoading
          _loading={{
            bg: "amber.400:alpha.70",
            _text: {
              color: "coolGray.700",
            },
          }}
          _spinner={{
            color: "white",
          }}
          isLoadingText="Submitting"
        >
          Button
        </Button>
        <Button isLoading isLoadingText="Submitting" variant="outline">
          Button
        </Button>
        <Box alignItems="center" w="100%">
          <Slider
            w="3/4"
            maxW="300"
            defaultValue={70}
            minValue={0}
            maxValue={100}
            accessibilityLabel="hello world"
            step={10}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Box>
      </Stack>
    </NativeBaseProvider>
  );
}
