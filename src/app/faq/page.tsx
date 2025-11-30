"use client";

import {
  Container,
  Title,
  Text,
  Accordion,
  Card,
  Stack,
  rem,
} from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";

export default function FAQPage() {
  return (
    <Container size="lg" py="xl">
      <section style={{ padding: "32px 0" }}>
        <Title order={1} fw={800} mb="sm">
          Frequently Asked Questions
        </Title>
        <Text size="md" c="dimmed" mb="lg" style={{ maxWidth: rem(780) }}>
          Common questions about our organisation, products and services. Edit
          these Q&A entries to match your real FAQs.
        </Text>

        <Card withBorder radius="md" padding="lg">
          <Stack spacing="md">
            <Accordion
              variant="separated"
              chevronPosition="right"
              styles={{ item: { borderRadius: rem(8) } }}
            >
              <Accordion.Item value="q1">
                <Accordion.Control icon={<IconPlus size={16} />}>
                  What does Sample Org do?
                </Accordion.Control>
                <Accordion.Panel>
                  We manufacture and supply industrial products and provide B2B
                  solutions. Replace this placeholder with a concise explanation
                  of your primary business activities.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="q2">
                <Accordion.Control icon={<IconPlus size={16} />}>
                  How can I request a quotation?
                </Accordion.Control>
                <Accordion.Panel>
                  Use the Contact page to send enquiries, or email our sales
                  team at <b>sales@example.com</b>. If you need a formal quote,
                  include product details, quantities, and delivery location.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="q3">
                <Accordion.Control icon={<IconPlus size={16} />}>
                  Do you provide custom manufacturing?
                </Accordion.Control>
                <Accordion.Panel>
                  Yes — we offer custom solutions and OEM manufacturing. Provide
                  specifications and we can discuss feasibility and lead times.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="q4">
                <Accordion.Control icon={<IconPlus size={16} />}>
                  What are your lead times?
                </Accordion.Control>
                <Accordion.Panel>
                  Lead times vary by product complexity and order size. Typical
                  lead times range from 2–8 weeks. Contact us with details for a
                  specific estimate.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="q5">
                <Accordion.Control icon={<IconPlus size={16} />}>
                  Where do you ship?
                </Accordion.Control>
                <Accordion.Panel>
                  We ship across India and to select international partners.
                  Contact our logistics team for destination-specific details and
                  shipping options.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
        </Card>
      </section>
    </Container>
  );
}
