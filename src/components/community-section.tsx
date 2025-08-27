import Link from 'next/link'

const coachList = [
  {
    id: "1",
    href: "https://github.com/mehrdad-rdn",
    target: "_blank",
    title: "coach-name-1",
    image: {
      alt: "John Doe",
      src: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: "2",
    href: "https://github.com/mehrdad-rdn",
    target: "_blank",
    title: "coach-name-2",
    image: {
      alt: "John Doe",
      src: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  },
  {
    id: "3",
    href: "https://github.com/mehrdad-rdn",
    target: "_blank",
    title: "coach-name-3",
    image: {
      alt: "John Doe",
      src: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  },
  {
    id: "4",
    href: "https://github.com/mehrdad-rdn",
    target: "_blank",
    title: "coach-name-4",
    image: {
      alt: "John Doe",
      src: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  },
  {
    id: "5",
    href: "https://github.com/mehrdad-rdn",
    target: "_blank",
    title: "coach-name-5",
    image: {
      alt: "John Doe",
      src: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  },
  {
    id: "6",
    href: "https://github.com/mehrdad-rdn",
    target: "_blank",
    title: "coach-name-6",
    image: {
      alt: "John Doe",
      src: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  },
  {
    id: "7",
    href: "https://github.com/mehrdad-rdn",
    target: "_blank",
    title: "coach-name-7",
    image: {
      alt: "John Doe",
      src: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  },
];
export default function CommunitySection() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl lg:text-5xl font-lalezar font-bold">
            لیست مربی‌ها
          </h2>
          <p className="mt-6 font-vazir text-xl font-semibold">
            جمعی از بهترین مربیان استان آماده هدایت شما و فرزندانتان تا سکوهای
            قهرمانی
          </p>
        </div>
        <div className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-3">
          {coachList.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.target}
              title={item.title}
              className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
            >
              <img
                alt={item.image.alt}
                src={item.image.src}
                loading="lazy"
                width={120}
                height={120}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
