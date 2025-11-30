'use client';

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css'; // We will use inline styles for simplicity if you prefer, or CSS modules. Let's use inline/Mantine styles to avoid extra CSS files for now.

const mockdata = [
  {
    icon: IconCode,
    title: 'Open Source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell, which is hard as diamond, protects',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className="w-full p-md hover:bg-gray-100 rounded-md" key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={0}>
      <header className="h-[60px] px-md border-b border-gray-200 bg-white">
        <Group justify="space-between" h="100%">
          <div className="flex items-center gap-2 font-bold text-xl">
            <ThemeIcon size="lg" radius="md" variant="filled" color="blue">
                <IconCode style={{ width: rem(20), height: rem(20) }} />
            </ThemeIcon>
            ORG NAME
          </div>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className="flex items-center h-full px-4 text-gray-700 font-medium hover:bg-gray-50 text-sm">
              Home
            </a>
            
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className="flex items-center h-full px-4 text-gray-700 font-medium hover:bg-gray-50 text-sm">
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className="bg-gray-50 -mx-md -mb-md p-md mt-md flex justify-between items-center">
                  <div>
                    <Text fw={500} fz="sm">
                      Get started
                    </Text>
                    <Text size="xs" c="dimmed">
                      Their food sources have decreased, and their numbers
                    </Text>
                  </div>
                  <Button variant="default">Get started</Button>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="#" className="flex items-center h-full px-4 text-gray-700 font-medium hover:bg-gray-50 text-sm">
              Learn
            </a>
            <a href="#" className="flex items-center h-full px-4 text-gray-700 font-medium hover:bg-gray-50 text-sm">
              Academy
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className="block px-md py-xs text-gray-700 font-medium hover:bg-gray-50">
            Home
          </a>
          
          <UnstyledButton className="w-full px-md py-xs text-gray-700 font-medium hover:bg-gray-50" onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          
          <a href="#" className="block px-md py-xs text-gray-700 font-medium hover:bg-gray-50">
            Learn
          </a>
          <a href="#" className="block px-md py-xs text-gray-700 font-medium hover:bg-gray-50">
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}