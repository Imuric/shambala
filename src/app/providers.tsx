"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: "blue",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      }}
    >
      <Notifications />
      {children}
    </MantineProvider>
  );
}
