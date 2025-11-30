"use client";

import React from "react";
import { Container, Group, Text, rem, Stack, Anchor } from "@mantine/core";
import Link from "next/link";

const data = [
  {
    title: "Company",
    links: [
      { label: "About us", link: "/about" },
      { label: "History", link: "#" },
      { label: "Careers", link: "#" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Products", link: "/products" },
      { label: "Our Services", link: "/business" },
      { label: "Industries", link: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", link: "/contact" },
      { label: "FAQ", link: "#" },
      { label: "Downloads", link: "#" },
    ],
  },
];

export function FooterLinks() {
  return (
    <footer
      style={{
        padding: `${rem(40)} 0`,
        borderTop: "1px solid var(--mantine-color-gray-3)",
        background: "white",
      }}
    >
      <Container size="lg">
        <Group align="flex-start" position="apart" style={{ gap: rem(24) }}>
          <Stack spacing={6}>
            <Text fw={700} size="lg">
              Sample Org
            </Text>
            <Text size="sm" color="dimmed">
              Manufacturer · Supplier · B2B Solutions
            </Text>
          </Stack>

          <Group align="flex-start" gap={40}>
            {data.map((group) => (
              <div key={group.title}>
                <Text fw={700} mb="xs">
                  {group.title}
                </Text>

                <Stack spacing={6}>
                  {group.links.map((link, i) => (
                    <Anchor
                      key={i}
                      component={Link}
                      href={link.link}
                      size="sm"
                      color="dimmed"
                      style={{ display: "block" }}
                    >
                      {link.label}
                    </Anchor>
                  ))}
                </Stack>
              </div>
            ))}
          </Group>
        </Group>

        <Text size="xs" color="dimmed" align="center" mt="xl">
          © {new Date().getFullYear()} Sample Org. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
