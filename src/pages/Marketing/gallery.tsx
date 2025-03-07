/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/ui/image-fade";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Gallery() {
  return (
    <>
      <section id="photos" className="max-w-7xl mx-auto mb-[20%]">
        <div className="max-w-7xl relative mx-auto py-12 px-4 w-full left-0 top-0">
          <div className="w-full h-full py-20">
            <h1 className="text-2xl md:text-6xl font-bold dark:text-[#52e500]">
              Premium Partners
            </h1>
          </div>
        </div>
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}
