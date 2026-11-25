import { AppShell } from "@/components/layout/app-shell";
import { TripsPage } from "@/features/trips/components/trips-page";

export default function HomePage() {
  return (
    <AppShell>
      <TripsPage />
    </AppShell>
  );
}