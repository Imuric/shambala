"use client";

import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Stack,
  Modal,
  Group,
  Button,
  rem,
} from "@mantine/core";
import { IconZoomIn } from "@tabler/icons-react";

/**
 * Gallery page
 *
 * - Uses placeholder images (picsum.photos). Replace URLs with your real images.
 * - Clicking an image opens a modal (lightbox) to preview larger.
 */

const IMAGES = [
  { id: 1, src: "https://picsum.photos/seed/p1/1200/800", caption: "Factory — Exterior" },
  { id: 2, src: "https://picsum.photos/seed/p2/1200/800", caption: "Manufacturing Line" },
  { id: 3, src: "https://picsum.photos/seed/p3/1200/800", caption: "Product Close-up" },
  { id: 4, src: "https://picsum.photos/seed/p4/1200/800", caption: "Warehouse" },
  { id: 5, src: "https://picsum.photos/seed/p5/1200/800", caption: "Team at Work" },
  { id: 6, src: "https://picsum.photos/seed/p6/1200/800", caption: "Finished Goods" },
  { id: 7, src: "https://picsum.photos/seed/p7/1200/800", caption: "Quality Control" },
  { id: 8, src: "https://picsum.photos/seed/p8/1200/800", caption: "Packaging" },
];

export default function GalleryPage() {
  const [opened, setOpened] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  function openPreview(id: number) {
    setActiveImage(id);
    setOpened(true);
  }

  function closePreview() {
    setOpened(false);
    setActiveImage(null);
  }

  const active = IMAGES.find((i) => i.id === activeImage);

  return (
    <Container size="lg" py="xl">
      <section style={{ padding: "32px 0" }}>
        <Title order={1} fw={800} mb="sm">
          Gallery
        </Title>

        <Text size="md" c="dimmed" mb="lg" style={{ maxWidth: rem(780) }}>
          A visual overview of our facilities, products and processes. Replace
          these sample images with your actual photos — click any image to preview.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {IMAGES.map((img) => (
            <Card key={img.id} withBorder radius="md" padding={0} style={{ overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <Image
                  src={img.src}
                  alt={img.caption}
                  height={220}
                  fit="cover"
                  withPlaceholder
                />

                <Group position="apart" style={{ padding: rem(10), alignItems: "center" }}>
                  <Text size="sm" fw={700}>
                    {img.caption}
                  </Text>

                  <Button
                    variant="subtle"
                    size="xs"
                    leftIcon={<IconZoomIn size={16} />}
                    onClick={() => openPreview(img.id)}
                  >
                    Preview
                  </Button>
                </Group>
              </div>
            </Card>
          ))}
        </SimpleGrid>
      </section>

      <Modal
        opened={opened}
        onClose={closePreview}
        size="80%"
        centered
        title={active?.caption}
        overlayBlur={2}
      >
        {active ? (
          <div style={{ textAlign: "center" }}>
            <Image src={active.src} alt={active.caption} radius="md" withPlaceholder />
            <Text size="sm" c="dimmed" mt="sm">
              {active.caption}
            </Text>
            <Group position="right" mt="md">
              <Button variant="outline" onClick={closePreview}>
                Close
              </Button>
            </Group>
          </div>
        ) : null}
      </Modal>
    </Container>
  );
}
