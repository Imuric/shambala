"use client";

import React from "react";
import {
  Anchor,
  Group,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  UnstyledButton,
  Text,
  ThemeIcon,
  rem,
  Container,
  Menu,
  Paper,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import {
  IconBuildingFactory,
  IconPackageExport,
  IconPhone,
  IconInfoCircle,
  IconChevronDown,
} from "@tabler/icons-react";

const menuItems = [
  {
    icon: IconBuildingFactory,
    title: "Our Business",
    description: "Overview of what we manufacture and supply",
    href: "/business",
  },
  {
    icon: IconPackageExport,
    title: "Products & Solutions",
    description: "Explore our portfolio of offerings",
    href: "/products",
  },
  {
    icon: IconInfoCircle,
    title: "About Us",
    description: "Company story, mission & values",
    href: "/about",
  },
];

export function HeaderMegaMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const links = menuItems.map((item) => (
    <UnstyledButton
      key={item.title}
      component={Link}
      href={item.href}
      onClick={close}
      style={{
        width: "100%",
        borderRadius: rem(8),
        padding: rem(10),
        display: "flex",
        gap: rem(12),
        alignItems: "center",
      }}
    >
      <ThemeIcon variant="light" size={36} radius="md">
        <item.icon style={{ width: rem(16), height: rem(16) }} />
      </ThemeIcon>

      <Box>
        <Text fw={600} size="sm">
          {item.title}
        </Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </Box>
    </UnstyledButton>
  ));

  return (
    <>
      <Box
        component="header"
        style={{
          borderBottom: "1px solid var(--mantine-color-gray-3)",
          background: "white",
          position: "sticky",
          top: 0,
          zIndex: 60,
        }}
      >
        <Container
          size="lg"
          style={{
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: rem(12),
          }}
        >
          {/* logo */}
          <Anchor component={Link} href="/" style={{ textDecoration: "none" }}>
            <Group spacing="xs" align="center">
              <Paper radius="xl" withBorder style={{ padding: rem(6) }}>
                <Box style={{ width: rem(28), height: rem(28), borderRadius: rem(6) }} />
              </Paper>
              <Text fw={700} size="lg">
                Sample Org
              </Text>
            </Group>
          </Anchor>

          {/* desktop nav */}
          <Group spacing="lg" sx={(theme) => ({ alignItems: "center", display: "none", [`@media (min-width: ${theme.breakpoints.sm}px)`]: { display: "flex" } })}>
            <Anchor component={Link} href="/" size="sm">
              Home
            </Anchor>

            <Anchor component={Link} href="/about" size="sm">
              About
            </Anchor>

            <Menu width={360} shadow="md" trigger="hover" openDelay={100} closeDelay={200}>
              <Menu.Target>
                <UnstyledButton style={{ display: "flex", alignItems: "center", gap: rem(8) }}>
                  <Text fw={600} size="sm">
                    More
                  </Text>
                  <IconChevronDown size={16} />
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Paper p="sm" radius="md" withBorder>
                  <ScrollArea style={{ maxHeight: 300 }}>
                    <div style={{ display: "grid", gap: rem(8) }}>{links}</div>
                  </ScrollArea>
                </Paper>
              </Menu.Dropdown>
            </Menu>

            <Anchor component={Link} href="/contact" size="sm">
              Contact
            </Anchor>
          </Group>

          {/* mobile burger (visible on small screens) */}
          <Box sx={(theme) => ({ display: "block", [`@media (min-width: ${theme.breakpoints.sm}px)`]: { display: "none" } })}>
            <Burger opened={opened} onClick={toggle} />
          </Box>
        </Container>
      </Box>

      {/* Mobile drawer */}
      <Drawer opened={opened} onClose={close} size="80%" padding="md" title="Menu">
        <ScrollArea h={`calc(100vh - 80px)`} mx="-md">
          <Box p="md" style={{ display: "flex", flexDirection: "column", gap: rem(10) }}>
            <Anchor component={Link} href="/" onClick={close} style={{ fontWeight: 600 }}>
              Home
            </Anchor>

            <Anchor component={Link} href="/about" onClick={close} style={{ fontWeight: 600 }}>
              About
            </Anchor>

            <Divider my="sm" />

            <Text fw={700}>Explore</Text>
            {menuItems.map((item) => (
              <Box key={item.title} component={Link} href={item.href} onClick={close} style={{ textDecoration: "none" }}>
                <UnstyledButton
                  style={{
                    width: "100%",
                    borderRadius: rem(8),
                    padding: rem(10),
                    display: "flex",
                    gap: rem(12),
                    alignItems: "center",
                  }}
                >
                  <ThemeIcon variant="light" size={34} radius="md">
                    <item.icon style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>

                  <Box>
                    <Text fw={600}>{item.title}</Text>
                    <Text size="xs" color="dimmed">
                      {item.description}
                    </Text>
                  </Box>
                </UnstyledButton>
              </Box>
            ))}

            <Divider my="sm" />

            <Anchor component={Link} href="/contact" onClick={close} style={{ fontWeight: 600 }}>
              Contact
            </Anchor>

            <Text size="sm" color="dimmed" mt="sm">
              <IconPhone size={14} style={{ verticalAlign: "middle", marginRight: 8 }} />
              +91 00000 00000
            </Text>
          </Box>
        </ScrollArea>
      </Drawer>
    </>
  );
}
