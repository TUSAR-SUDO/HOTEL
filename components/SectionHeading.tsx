export default function SectionHeading({
  kicker,
  title,
  sub,
  align = "left",
  onDark = false,
}: {
  kicker?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} mb-8`}>
      {kicker && (
        <p
          className={`mb-2 font-heading text-[17px] italic ${
            onDark ? "text-antique-gold" : "text-maroon"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl ${
          onDark ? "text-ivory" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-3 max-w-2xl text-[17px] leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        } ${onDark ? "text-ivory/80" : "text-warm-umber"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
