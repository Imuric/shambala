"use client";

import React from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  Divider,
  SimpleGrid,
  Card,
  rem,
} from "@mantine/core";

export default function PrivacyPolicyPage() {
  return (
    <Container size="lg" py="xl">
      <section style={{ padding: "24px 0" }}>
        <Title order={1} fw={800} mb="sm">
          Privacy Policy
        </Title>

        <Text size="sm" c="dimmed" mb="md" style={{ maxWidth: rem(860) }}>
          Last updated: <b>November 30, 2025</b>
        </Text>

        <Text size="md" c="dimmed" mb="lg">
          This Privacy Policy explains how <b>Sample Org</b> (“we”, “our”, or
          “us”) collects, uses, discloses, and protects information when you
          visit our website and interact with our services. Replace this
          placeholder text with your organisation's accurate privacy practices.
        </Text>

        <Divider my="lg" />

        <Stack spacing="lg">
          <section>
            <Title order={2} size="h4" mb="sm">
              1. Information We Collect
            </Title>
            <Text size="sm" c="dimmed">
              We may collect information you provide directly to us (for example,
              contact form entries, email, company name), and non-personal
              information automatically (such as browser type, device, and
              usage patterns).
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              2. How We Use Your Information
            </Title>
            <Text size="sm" c="dimmed">
              We use data to respond to enquiries, provide information about our
              products and services, improve the website, and for internal
              analytics. We do not sell personal data to third parties.
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              3. Cookies & Tracking
            </Title>
            <Text size="sm" c="dimmed">
              Our site may use cookies or similar technologies to improve user
              experience. You can disable cookies via your browser settings,
              however some features may not function properly.
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              4. Data Security
            </Title>
            <Text size="sm" c="dimmed">
              We implement reasonable technical and organizational measures to
              protect your information. No method of transmission over the
              internet is 100% secure—please contact us if you have concerns.
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              5. Third-Party Services
            </Title>
            <Text size="sm" c="dimmed">
              We may use third-party services for hosting, analytics, or other
              features. These providers have their own privacy policies — please
              review them when appropriate.
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              6. Retention
            </Title>
            <Text size="sm" c="dimmed">
              We retain personal information only as long as necessary to fulfill
              the purposes described in this policy or to comply with legal
              obligations.
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              7. Your Rights
            </Title>
            <Text size="sm" c="dimmed">
              Depending on your jurisdiction you may have the right to access,
              correct, or delete personal information we hold about you. Contact
              us to exercise these rights.
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              8. Contact
            </Title>
            <Text size="sm" c="dimmed">
              For privacy-related inquiries, please contact:{" "}
              <b>privacy@example.com</b> or use the Contact page on this site.
            </Text>
          </section>

          <section>
            <Title order={2} size="h4" mb="sm">
              9. Changes to This Policy
            </Title>
            <Text size="sm" c="dimmed">
              We may update this policy from time to time. If changes are
              material, we will provide a more prominent notice (e.g., email or
              site banner).
            </Text>
          </section>
        </Stack>

        <Divider my="lg" />

        <Card withBorder radius="md" padding="lg" mt="lg">
          <Text size="sm" c="dimmed">
            This page contains example text. Make sure to replace it with your
            organisation's actual privacy policy reviewed by legal counsel to
            ensure compliance with local laws (such as the IT Act in India,
            GDPR, etc.) if applicable.
          </Text>
        </Card>
      </section>
    </Container>
  );
}
