"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  Group,
  ThemeIcon,
  rem,
} from "@mantine/core";
import {
  IconTarget,
  IconEye,
  IconHeartHandshake,
  IconStar,
  IconShieldCheck,
  IconUsersGroup,
} from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <Container size="lg" py="xl">
      {/* PAGE TITLE */}
      <section style={{ padding: "40px 0" }}>
        <Title order={1} fw={800} mb="sm">
          About Us
        </Title>
        <Text size="lg" c="dimmed" style={{ maxWidth: rem(720) }}>
          This page contains sample information about the organisation. Replace
          this text later with the real story, background, and purpose of your
          company.
        </Text>
      </section>

      {/* INTRODUCTION */}
      <section style={{ padding: "20px 0 60px" }}>
        <Title order={2} mb="md">
          Who We Are
        </Title>
        <Text size="md" c="dimmed" style={{ maxWidth: rem(720) }}>
          This is placeholder text describing the company introduction. Add your
          foundation year, what your organisation does, your expertise, and the
          industries you work with. This section helps customers understand your
          identity and long-term vision.
        </Text>
      </section>

      {/* MISSION & VISION */}
      <section style={{ paddingBottom: "60px" }}>
        <Title order={2} mb="lg">
          Mission & Vision
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <InfoCard
            icon={IconTarget}
            title="Our Mission"
            description="This is sample text for your mission statement. Describe what your organisation aims to achieve and the value you provide."
          />

          <InfoCard
            icon={IconEye}
            title="Our Vision"
            description="This is sample text for your future goals, direction, and long-term commitments to clients and industries."
          />
        </SimpleGrid>
      </section>

      {/* VALUES */}
      <section style={{ paddingBottom: "80px" }}>
        <Title order={2} mb="lg">
          Our Core Values
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <ValueCard
            icon={IconHeartHandshake}
            title="Integrity"
            description="Sample text explaining how integrity and honesty guide your operations."
          />
          <ValueCard
            icon={IconUsersGroup}
            title="Teamwork"
            description="Sample text about strong collaboration and teamwork within your organisation."
          />
          <ValueCard
            icon={IconShieldCheck}
            title="Reliability"
            description="Sample text showing your commitment to consistent quality and dependable service."
          />
          <ValueCard
            icon={IconStar}
            title="Excellence"
            description="Sample text describing your focus on delivering exceptional performance."
          />
        </SimpleGrid>
      </section>
    </Container>
  );
}

/* COMPONENTS */

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Group gap="md" align="flex-start">
        <ThemeIcon variant="light" size={44} radius="md">
          <Icon size={22} />
        </ThemeIcon>
        <Stack gap={4}>
          <Text fw={700} size="lg">
            {title}
          </Text>
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card withBorder radius="md" padding="lg" shadow="xs">
      <Stack gap="sm">
        <ThemeIcon size={40} radius="md" variant="light">
          <Icon size={20} />
        </ThemeIcon>

        <Text fw={700} size="lg">
          {title}
        </Text>

        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
