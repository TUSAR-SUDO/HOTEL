import PlaceholderMedia from "./PlaceholderMedia";

export default function NearbyCard({
  name,
  line,
  imageId,
}: {
  name: string;
  line: string;
  imageId: string;
}) {
  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <PlaceholderMedia
          mediaId={imageId}
          className="aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <h3 className="mt-4 font-heading text-[24px] font-semibold leading-tight tracking-tight text-espresso">
        {name}
      </h3>
      <p className="mt-1.5 max-w-md text-[15.5px] leading-relaxed text-warm-umber">{line}</p>
    </article>
  );
}
