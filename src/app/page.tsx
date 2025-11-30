import { Container, Title, Text, Button, Group } from '@mantine/core';

export default function Home() {
  return (
    <Container size="lg" py="xl">
      <div className="py-20 text-center lg:text-left lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-1/2">
          <Title className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            A fully featured <span className="text-blue-600">Organization</span>
          </Title>
          <Text c="dimmed" size="lg" className="mb-8 max-w-lg mx-auto lg:mx-0">
            We build fully functional accessible web applications faster than ever – 
            Mantine includes more than 100 customizable components and 50 hooks to 
            cover you in any situation.
          </Text>
          
          {/* FIX: Use Mantine's object syntax for responsive alignment */}
          <Group justify={{ base: 'center', lg: 'flex-start' }}>
            <Button size="lg" variant="filled" color="blue">Get started</Button>
            <Button size="lg" variant="default">GitHub</Button>
          </Group>
        </div>
        
        {/* Placeholder for Hero Image */}
        <div className="hidden lg:flex lg:w-1/2 justify-center">
            <div className="w-80 h-80 bg-blue-50 rounded-full flex items-center justify-center text-blue-200">
               Hero Image
            </div>
        </div>
      </div>
    </Container>
  );
}