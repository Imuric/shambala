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
  IconPackage,
  IconBriefcase2,
  IconBuildingFactory,
  IconTruckDelivery,
  IconTools,
  IconShieldCheck,
} from "@tabler/icons-react";

export default function BusinessPage() {
  return (
    <Container size="lg" py="xl">
      {/* PAGE TITLE */}
      <section style={{ padding: "40px 0" }}>
        <Title order={1} fw={800} mb="sm">
          Our Business
        </Title>
        <Text size="lg" c="dimmed" style={{ maxWidth: rem(720) }}>
          This page includes sample content describing the primary business
          areas, services, and industries your organisation is involved in.
          Replace this text later with your actual business overview.
        </Text>
      </section>

      {/* BUSINESS LINES */}
      <section style={{ padding: "20px 0 60px" }}>
        <Title order={2} mb="lg">
          Key Business Lines
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <BusinessCard
            icon={IconBuildingFactory}
            title="Manufacturing"
            description="Short description about your manufacturing capabilities, facilities, or product portfolio."
          />
          <BusinessCard
            icon={IconPackage}
            title="Products Supply"
            description="Sample text explaining the types of products you supply to customers and partners."
          />
          <BusinessCard
            icon={IconBriefcase2}
            title="B2B Solutions"
            description="Describe customised business-to-business services your organisation offers."
          />
        </SimpleGrid>
      </section>

      {/* INDUSTRY FOCUS */}
      <section style={{ paddingBottom: "60px" }}>
        <Title order={2} mb="lg">
          Industries We Serve
        </Title>

        <Text c="dimmed" size="sm" mb="md">
          Sample text explaining which industries your organisation caters to.
          Replace with real sectors later.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <IndustryCard name="Automotive" />
          <IndustryCard name="Agriculture" />
          <IndustryCard name="Construction" />
          <IndustryCard name="Manufacturing" />
          <IndustryCard name="Machinery" />
          <IndustryCard name="Distribution" />
        </SimpleGrid>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ paddingBottom: "80px" }}>
        <Title order={2} mb="lg">
          Why Choose Us
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <ReasonCard
            icon={IconTruckDelivery}
            title="Fast Delivery"
            description="Sample text about quick logistics and delivery support."
          />
          <ReasonCard
            icon={IconTools}
            title="Technical Expertise"
            description="Sample text about skilled engineering or technical knowledge your organisation provides."
          />
          <ReasonCard
            icon={IconShieldCheck}
            title="Trusted Quality"
            description="Sample text about high-quality, reliable products or services."
          />
        </SimpleGrid>
      </section>
    </Container>
  );
}

/* COMPONENTS */

function BusinessCard({
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

function IndustryCard({ name }: { name: string }) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Text fw={600} size="md">
        {name}
      </Text>
    </Card>
  );
}

function ReasonCard({
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
      <Group gap="md" align="flex-start">
        <ThemeIcon variant="light" size={40} radius="md">
          <Icon size={20} />
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
