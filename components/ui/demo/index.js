"use client";
import { Button, Input, Popover, Portal, Text } from "@chakra-ui/react"
import React from "react";
import { useCount } from "../context";

export default function Demo() {
  const { count } = useCount();
  return (
    <div>
      <h3>Demo Component Count: {count}</h3>
    
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button size="sm" variant="outline" border="2px solid red">
          Click me
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
              <Text my="4">
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </Text>
              <Input placeholder="Your fav. character" size="sm" />
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal> 
    </Popover.Root> </div>
  );
}









// "use client";

// import { Button, HStack  } from "@chakra-ui/react";

// export default function Demo() {
//   return (
    
//       <HStack spacing={4} padding={4}>
//         <Button colorScheme="blue">Click me</Button>
//         <Button colorScheme="green">Click me</Button>
//       </HStack>
 
//   );
// }


