
import Link from "next/link";
import { Compass, Menu } from "lucide-react";

import { AppSidebar } from "./app-sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-[#F5F1E8]">
      <div className="hidden lg:flex">
        <AppSidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-[#E8E2D7] bg-[#F5F1E8] px-5 lg:hidden">
          <Link href="/en" className="flex items-center gap-2">
            <Compass className="text-[#B77B5B]" size={23} />
            <span className="font-semibold text-[#34483B]">
              PlanningApp
            </span>
          </Link>

          <button
            type="button"
            aria-label="Open navigation"
            className="rounded-lg p-2 text-[#34483B] hover:bg-[#EAE4D9]"
          >
            <Menu size={22} />
          </button>
        </header>

        <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
