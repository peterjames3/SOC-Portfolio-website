import type { WriteUpsFrontmatter } from "@/app/lib/writeUps";
import { SectionLabel } from "../SectionLabel";
import { WriteUpsRow } from "./WriteUpsRow"
import { GhostButton } from "@/app/components/GhostButton";

interface WriteUpsListProps {
  writeups: WriteUpsFrontmatter[];
}

export function WriteUpsList({ writeups }: WriteUpsListProps) {
  if (!writeups || writeups.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="flex items-center gap-4 mb-8">
        <SectionLabel label="WRITE UPs" />
        <span className="h-px flex-1 bg-border" />
      </div>

      

      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {writeups.slice(0, 3).map((writeup, index) => (
          <WriteUpsRow key={writeup.slug} writeup={writeup} index={index} />
        ))}
      </div>
      <div className="max-w-7xl mt-10 mx-auto w-full px-6 md:px-12 lg:px-16 flex items-center justify-center">
        <GhostButton href="/writeup">View All Write Ups</GhostButton>
      </div>
    </div>
  );
}
