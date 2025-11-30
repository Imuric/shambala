'use client';

import { Text, Container, ActionIcon, Group, rem, Box } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconCode } from '@tabler/icons-react';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className="block text-gray-500 text-sm py-1 hover:underline hover:text-gray-900 cursor-pointer"
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className="w-[160px]" key={group.title}>
        <Text className="text-lg font-bold font-sans mb-3 text-gray-900">{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className="mt-[120px] pt-xl pb-xl bg-gray-50 border-t border-gray-200">
      <Container size="lg" className="flex flex-col md:flex-row justify-between">
        <div className="max-w-[200px] mb-8 md:mb-0">
          <div className="flex items-center gap-2 font-bold text-xl mb-xs text-gray-900">
             <IconCode style={{ width: rem(30), height: rem(30) }} className="text-blue-600" />
             ORG NAME
          </div>
          <Text size="xs" c="dimmed" className="text-gray-500">
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-20">{groups}</div>
      </Container>
      
      <Container size="lg" className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
        <Text c="dimmed" size="sm">
          © 2024 Org Name. All rights reserved.
        </Text>

        <Group gap={0} className="mt-4 md:mt-0" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}