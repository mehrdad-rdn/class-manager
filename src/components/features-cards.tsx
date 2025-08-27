import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";
import { KidSwim } from "./svg/kid-swim";
import { Swimmer } from "./svg/swimmer";
import { HappyBoy } from "./svg/boy-in-pool";
import { FreeSwim } from "./svg/free-swim";
import { SwimDrill } from "./svg/swim-drill";

interface CardData {
  id: number;
  decorator: ReactNode;
  title: string;
  Content: string;
}
const CardsData: CardData[] = [
  {
    id: 1,
    decorator: <HappyBoy className="h-40" />,
    title: "آموزش اقتصادی",
    Content:
      "کم‌توانی مالی نباید باعث دوری از آموزش شنا و نهان موندن شایستگی‌ها باشه.",
  },
  {
    id: 2,
    decorator: <KidSwim className="h-40" />,
    title: "آموزش کودکان",
    Content:
      "کلاس های آموزشی و کلاس های پیشرفته که با درنظر گرفتن الویت سلامتی و جذابیت ، با روش‌های آموزشی ویژه کودکان برگزار می‌شود.",
  },
  {
    id: 3,
    decorator: <Swimmer className="h-40" />,
    title: "اصلاح تکنیک تخصصی",
    Content:
      "اصلاح تکنیک‌های چهار شنا شروعی هدفمند برای ورود به دنیای شنای حرفه‌ای می‌باشد که توسط مربیان حرفه‌ای با متدهای بروز و کاربردی  انجام می‌شود.",
  },
];
// {
//   id: 3,
//   decorator: <SwimDrill className="h-40" />,
//   title: "اصلاح تکنیک تخصصی",
//   Content: "توضیحاتتکمیلی خیلی مهم است",
// },
// {
//   id: 4,
//   decorator: <Swimmer className="h-40" />,
//   title: "تمرینات رقابتی",
//   Content: "توضیحاتتکمیلی خیلی مهم است",
// },

export default function FeatureCards() {
  return (
    <section className="bg-secondary py-8 md:py-16 dark:bg-card">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center text-foreground">
          <h2 className="text-balance text-4xl lg:text-5xl font-lalezar font-bold">
            انواع دوره‌های آموزشی
          </h2>
          <p className="mt-4 font-vazir font-semibold">
            آموزش علمی و تخصصی برای همه
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {CardsData.map((item: CardData) => (
            <Card
              key={item.id}
              className="group shadow-cyan-950/5 bg-background text-foreground"
            >
              <CardHeader className="pb-3">
                <CardDecorator>{item.decorator}</CardDecorator>

                <h3 className="mt-6 font-vazir font-semibold">{item.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm font-vazir font-medium">{item.Content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-48 sm:size-64 duration-200 [--color-border:color-mix(in_oklab,var(--color-cyan-950)40%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-cyan-950)80%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)50%,transparent)] dark:group-hover:bg-secondary/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:20px_20px] "
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-secondary absolute inset-0 m-auto rounded-full flex size-30 sm:size-40 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
