import Link from "next/link";
import { Compass, Map, UserRound } from "lucide-react";

export function AppSidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col bg-[#34483B] px-6 py-8 text-white">
      <Link href="/en" className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#B77B5B]">
          <Compass size={22} />
        </div>
        <span className="text-xl font-semibold tracking-tight">
          PlanningApp
        </span>
      </Link>

      <nav className="mt-16 flex flex-col gap-2">
        <Link
          href="/en"
          className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
        >
          <Map size={19} />
          My Trips
        </Link>
      </nav>

      <div className="mt-auto border-t border-white/15 pt-6">
        <Link
          href="/en/profile"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
        >
          <UserRound size={19} />
          Profile
        </Link>
      </div>
    </aside>
  );
}