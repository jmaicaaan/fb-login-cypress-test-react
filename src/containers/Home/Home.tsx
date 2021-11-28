import React from 'react';

import { Button } from '@chakra-ui/button';
import { Container, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Skeleton } from '@chakra-ui/skeleton';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();

  const handleOnLogout = () => {
    navigate('/');
  };

  return (
    <Container>
      <HStack
        justify="space-between"
      >
        <Text
          fontSize="2xl"
          sx={{
            mt: '24px',
            mb: '40px',
          }}
        >
          Welcome back, John Doe!
        </Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem
              onClick={handleOnLogout}
            >
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>

      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      <Stack
        sx={{
          my: '40px',
        }}
      >
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Container>
  );
};
