"use client";

import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  TextInput,
  Textarea,
  Button,
  Group,
  ThemeIcon,
  rem,
  Anchor,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      showNotification({
        title: "Missing fields",
        message: "Please fill name, email and message before submitting.",
        color: "red",
      });
      return;
    }

    setSubmitting(true);

    // Simulate send (client-only)
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");

      showNotification({
        title: "Message sent",
        message: "Thanks — your message was submitted (simulated).",
        color: "teal",
      });
    }, 900);
  }

  return (
    <Container size="lg" py="xl">
      <section style={{ padding: "32px 0" }}>
        <Title order={1} fw={800} mb="sm">
          Contact Us
        </Title>
        <Text size="md" c="dimmed" mb="lg" style={{ maxWidth: rem(760) }}>
          Use this form to reach out for enquiries, quotations or partnership
          requests. This is a static form (no server). I can help wire this to a
          serverless endpoint later if you want.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {/* Left: contact info */}
          <Card withBorder radius="md" padding="lg">
            <Stack spacing="lg">
              <div>
                <Text fw={700} size="lg">
                  Get in touch
                </Text>
                <Text size="sm" c="dimmed" mt={6}>
                  Call or email us during business hours. We'll respond as soon
                  as possible.
                </Text>
              </div>

              <Stack spacing={8}>
                <ContactRow
                  icon={<IconPhone size={18} />}
                  title="+91 00000 00000"
                  sub="Mon–Fri, 9:00–18:00"
                />

                <ContactRow
                  icon={<IconMail size={18} />}
                  title={
                    <Anchor href="mailto:info@example.com">info@example.com</Anchor>
                  }
                  sub="General enquiries"
                />

                <ContactRow
                  icon={<IconMapPin size={18} />}
                  title="Office — Pune, Maharashtra"
                  sub="Address placeholder. Replace with real address."
                />
              </Stack>

              <Text size="sm" c="dimmed" mt="md">
                If you prefer, email us directly at{" "}
                <Anchor href="mailto:sales@example.com">sales@example.com</Anchor>
                .
              </Text>
            </Stack>
          </Card>

          {/* Right: contact form */}
          <Card withBorder radius="md" padding="lg">
            <form onSubmit={handleSubmit}>
              <Stack spacing="sm">
                <Text fw={700}>Send a message</Text>

                <TextInput
                  label="Full name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
                />

                <TextInput
                  label="Company (optional)"
                  placeholder="Your company"
                  value={company}
                  onChange={(e) => setCompany(e.currentTarget.value)}
                />

                <TextInput
                  label="Email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />

                <Textarea
                  label="Message"
                  placeholder="Write your message..."
                  minRows={5}
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  required
                />

                <Group position="apart" mt="sm">
                  <Text size="sm" c="dimmed">
                    We respect your privacy — no spam.
                  </Text>

                  <Button
                    type="submit"
                    leftIcon={<IconSend size={16} />}
                    loading={submitting}
                  >
                    Send Message
                  </Button>
                </Group>
              </Stack>
            </form>
          </Card>
        </SimpleGrid>
      </section>

      {/* Map placeholder / location */}
      <section style={{ paddingTop: 12 }}>
        <Title order={2} mb="md">
          Our Location
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          Map placeholder — replace with a real embed (Google Maps / Leaflet) if
          you want. No external services are required for the static site.
        </Text>

        <div
          style={{
            width: "100%",
            height: rem(280),
            borderRadius: rem(8),
            border: "1px dashed rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(0,0,0,0.45)",
            background: "#fafafa",
          }}
        >
          <Text>Map placeholder</Text>
        </div>
      </section>
    </Container>
  );
}

/* small helper components */

function ContactRow({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <Group align="flex-start" spacing="sm">
      <ThemeIcon size={34} radius="md" variant="light">
        {icon}
      </ThemeIcon>

      <div>
        <Text fw={700}>{title}</Text>
        {sub && (
          <Text size="sm" color="dimmed" mt={4}>
            {sub}
          </Text>
        )}
      </div>
    </Group>
  );
}
