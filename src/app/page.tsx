"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Card,
  Stack,
  ThemeIcon,
  rem,
} from "@mantine/core";
import {
  IconBuildingFactory,
  IconUsers,
  IconMap2,
  IconPackage,
} from "@tabler/icons-react";

export default function HomePage() {
  return (
    <Container size="lg" pb="xl">
      {/* HERO SECTION */}
      <section style={{ padding: "60px 0" }}>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing="xl"
          align="center"
        >
          {/* Left side text */}
          <Stack gap="md">
            <Title order={1} fw={800}>
              Welcome to Sample Org
            </Title>

            <Text size="lg" c="dimmed">
              This is sample introductory text about your organisation. You can
              edit this content later to describe your company, industries you
              serve, and your value proposition.
            </Text>

            <Group gap="md" mt="sm">
              <Button size="md">Contact Us</Button>
              <Button size="md" variant="outline">
                Learn More
              </Button>
            </Group>
          </Stack>

          {/* Right side placeholder card */}
          <Card
            radius="md"
            withBorder
            shadow="sm"
            padding="lg"
            style={{ minHeight: rem(220) }}
          >
            <Stack gap="sm">
              <Title order={3}>Company Highlights</Title>
              <Text size="sm" c="dimmed">
                Replace this with real stats once ready.
              </Text>

              <SimpleGrid cols={2} spacing="md" mt="sm">
                <StatCard icon={IconBuildingFactory} label="Years" value="15+" />
                <StatCard icon={IconUsers} label="Clients" value="100+" />
                <StatCard icon={IconPackage} label="Products" value="50+" />
                <StatCard icon={IconMap2} label="Locations" value="Pan-India" />
              </SimpleGrid>
            </Stack>
          </Card>
        </SimpleGrid>
      </section>

      {/* SERVICES / BUSINESS HIGHLIGHTS */}
      <section style={{ padding: "20px 0 60px" }}>
        <Title order={2} mb="md">
          Our Key Business Areas
        </Title>

        <Text size="sm" c="dimmed" mb="md">
          Below is sample text showing what your business covers. You can update
          this later with real information.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <ServiceCard
            icon={IconBuildingFactory}
            title="Business Line 1"
            description="Short description about a major business line or service."
          />
          <ServiceCard
            icon={IconPackage}
            title="Business Line 2"
            description="Another type of service or business area you cover."
          />
          <ServiceCard
            icon={IconUsers}
            title="Business Line 3"
            description="You can replace this sample with actual content later."
          />
        </SimpleGrid>
      </section>
    </Container>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <Card withBorder radius="md" padding="md">
      <Group gap="sm">
        <ThemeIcon variant="light" size={36} radius="md">
          <Icon size={18} />
        </ThemeIcon>

        <div>
          <Text size="xs" c="dimmed">
            {label}
          </Text>
          <Text fw={700}>{value}</Text>
        </div>
      </Group>
    </Card>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card withBorder radius="md" shadow="xs" padding="lg">
      <Stack gap="xs">
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
