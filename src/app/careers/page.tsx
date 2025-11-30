"use client";

import {
  Container,
  Title,
  Text,
  Card,
  SimpleGrid,
  Stack,
  Group,
  Button,
  ThemeIcon,
  rem,
  Badge,
} from "@mantine/core";
import {
  IconUser,
  IconUsersGroup,
  IconClock,
  IconBriefcase,
  IconTarget,
  IconHeartHandshake,
} from "@tabler/icons-react";

export default function CareersPage() {
  return (
    <Container size="lg" py="xl">
      {/* HEADER */}
      <section style={{ padding: "32px 0" }}>
        <Title order={1} fw={800} mb="sm">
          Careers
        </Title>
        <Text size="md" c="dimmed" mb="lg" style={{ maxWidth: rem(760) }}>
          Explore opportunities to join our team. We are always looking for
          talented and passionate individuals. Below are sample job postings —
          replace with real job descriptions when ready.
        </Text>
      </section>

      {/* OPEN POSITIONS */}
      <section style={{ paddingBottom: "60px" }}>
        <Title order={2} mb="lg">
          Open Positions
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <JobCard
            title="Sales Executive"
            location="Pune, Maharashtra"
            type="Full-time"
            description="Sample description for a sales role. Replace with key responsibilities and experience."
          />

          <JobCard
            title="Production Supervisor"
            location="Factory Location"
            type="Full-time"
            description="Sample text describing this supervisory role. Add your real job tasks here."
          />

          <JobCard
            title="Quality Inspector"
            location="Factory Location"
            type="Full-time"
            description="Short placeholder text for a QA/QC job position. Replace with real details."
          />

          <JobCard
            title="Office Administrator"
            location="Pune Office"
            type="Full-time"
            description="Sample description for administrative support tasks and office management duties."
          />
        </SimpleGrid>
      </section>

      {/* CULTURE & BENEFITS */}
      <section style={{ paddingBottom: "80px" }}>
        <Title order={2} mb="lg">
          Life at Our Organisation
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <BenefitCard
            icon={IconUsersGroup}
            title="Collaborative Team"
            description="We promote teamwork, communication and collaboration across all departments."
          />

          <BenefitCard
            icon={IconClock}
            title="Work-Life Balance"
            description="We respect time and ensure reasonable working hours for all employees."
          />

          <BenefitCard
            icon={IconTarget}
            title="Growth Opportunities"
            description="We provide a safe environment to learn new skills and grow professionally."
          />

          <BenefitCard
            icon={IconBriefcase}
            title="Professional Development"
            description="Regular training sessions, skill development workshops and upskilling support."
          />

          <BenefitCard
            icon={IconHeartHandshake}
            title="Healthy Work Culture"
            description="Respect, transparency and care form the foundation of our company culture."
          />

          <BenefitCard
            icon={IconUser}
            title="Employee First"
            description="We prioritise wellbeing and provide support to help employees succeed."
          />
        </SimpleGrid>
      </section>
    </Container>
  );
}

/* COMPONENTS */

function JobCard({
  title,
  location,
  type,
  description,
}: {
  title: string;
  location: string;
  type: string;
  description: string;
}) {
  return (
    <Card withBorder radius="md" padding="lg" shadow="sm">
      <Stack gap="sm">
        <Group position="apart">
          <Title order={3} size="h4">
            {title}
          </Title>
          <Badge variant="light" color="blue">
            {type}
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          <b>Location:</b> {location}
        </Text>

        <Text size="sm" c="dimmed">
          {description}
        </Text>

        <Button size="sm" variant="outline" mt="sm">
          Apply Now
        </Button>
      </Stack>
    </Card>
  );
}

function BenefitCard({
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

        <Text fw={700}>{title}</Text>

        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
