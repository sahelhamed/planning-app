import { AppShell } from "@/components/layout/app-shell";
import { CreateTripPage } from "@/features/create-trip/components/create-trip-page";

export default function CreateTripRoute() {
  return (
    <AppShell>
      <CreateTripPage />
    </AppShell>
  );
}