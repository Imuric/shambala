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
  Badge,
} from "@mantine/core";

import {
  IconPackage,
  IconTool,
  IconCube,
  IconCheck,
  IconSettings,
  IconBuildingFactory,
} from "@tabler/icons-react";

export default function ProductsPage() {
  return (
    <Container size="lg" py="xl">
      {/* PAGE HEADER */}
      <section style={{ padding: "40px 0" }}>
        <Title order={1} fw={800} mb="sm">
          Our Products
        </Title>
        <Text size="lg" c="dimmed" style={{ maxWidth: rem(780) }}>
          This page contains sample text for product categories and items. You
          can update all items, descriptions, icons, and layout based on your
          real product catalog.
        </Text>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section style={{ paddingBottom: "60px" }}>
        <Title order={2} mb="lg">
          Product Categories
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <CategoryCard
            icon={IconPackage}
            title="Category 1"
            description="Short description for your main product category."
          />

          <CategoryCard
            icon={IconTool}
            title="Category 2"
            description="Sample text for a second category. Replace with real products."
          />

          <CategoryCard
            icon={IconBuildingFactory}
            title="Category 3"
            description="This area can include your OEM products or specialized lines."
          />
        </SimpleGrid>
      </section>

      {/* LIST OF PRODUCTS */}
      <section style={{ paddingBottom: "60px" }}>
        <Title order={2} mb="lg">
          Featured Products
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <ProductCard
            icon={IconCube}
            title="Product A"
            tag="Top Seller"
            description="Sample product description. Replace with actual product specs."
          />

          <ProductCard
            icon={IconCube}
            title="Product B"
            tag="New"
            description="Sample description for a new product in your portfolio."
          />

          <ProductCard
            icon={IconCube}
            title="Product C"
            tag="Popular"
            description="Sample description for a popular product among customers."
          />
        </SimpleGrid>
      </section>

      {/* PRODUCT FEATURES */}
      <section style={{ paddingBottom: "80px" }}>
        <Title order={2} mb="lg">
          What Makes Our Products Stand Out
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <FeatureCard
            icon={IconCheck}
            title="High Quality"
            description="All products follow strict quality control and industry standards."
          />

          <FeatureCard
            icon={IconSettings}
            title="Precision Engineering"
            description="Designed with expert engineering for best performance."
          />

          <FeatureCard
            icon={IconTool}
            title="Custom Solutions"
            description="Customizable products to match your business needs."
          />
        </SimpleGrid>
      </section>
    </Container>
  );
}

/* COMPONENTS */

function CategoryCard({
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

function ProductCard({
  icon: Icon,
  title,
  tag,
  description,
}: {
  icon: any;
  title: string;
  tag: string;
  description: string;
}) {
  return (
    <Card withBorder radius="md" padding="lg" shadow="sm">
      <Stack gap="sm">
        <Group position="apart">
          <ThemeIcon size={40} radius="md" variant="light">
            <Icon size={20} />
          </ThemeIcon>

          <Badge color="blue" variant="light">
            {tag}
          </Badge>
        </Group>

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

function FeatureCard({
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
      <Group align="flex-start" spacing="md">
        <ThemeIcon size={40} radius="md" variant="light">
          <Icon size={20} />
        </ThemeIcon>

        <Stack spacing={4}>
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
