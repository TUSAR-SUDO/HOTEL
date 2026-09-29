import { Lightbulb } from "lucide-react";

export default function LocalTips({
  tips,
}: {
  tips: { title: string; bullets: string[] };
}) {
  return (
    <aside className="rounded-[16px] border border-antique-gold/35 bg-ivory p-5 sm:p-6">
      <h2 className="flex items-center gap-2 font-heading text-xl font-semibold text-espresso">
        <Lightbulb className="h-5 w-5 text-deep-gold" aria-hidden="true" />
        {tips.title}
      </h2>
      <ul className="mt-3 space-y-2">
        {tips.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-warm-umber">
            <span aria-hidden="true" className="text-deep-gold">·</span>
            {b}
          </li>
        ))}
      </ul>
    </aside>
  );
}
