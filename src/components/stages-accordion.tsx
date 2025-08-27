"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";
import {toPersianDigits} from "../lib/utils";

export default function StagesAccordion() {
  type ImageKey =
    | "item-1"
    | "item-2"
    | "item-3"
    | "item-4"
    | "item-5"
    | "item-6"
    | "item-7";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/pics/LTAD (1).jpg",
      alt: "Starfish",
    },
    "item-2": {
      image: "/pics/LTAD (2).jpg",
      alt: "Baby Turtle",
    },
    "item-3": {
      image: "/pics/LTAD (3).jpg",
      alt: "Tadpole",
    },
    "item-4": {
      image: "/pics/LTAD (4).jpg",
      alt: "Goldfish",
    },
    "item-5": {
      image: "/pics/LTAD (5).jpg",
      alt: "Baby Seal",
    },
    "item-6": {
      image: "/pics/LTAD (6).jpg",
      alt: "Dolphin",
    },
    "item-7": {
      image: "/pics/LTAD (7).jpg",
      alt: "Shark",
    },
  };

  const accItems = [
    {
      value: "item-1",
      trigger: `سطح یک، پایه A (ستاره دریایی)، ${toPersianDigits(6)}-
                    ${toPersianDigits(4)} سال`,
      content: `آموزش‌های این سطح متمرکز بر بازی ایمن در استخر می‌باشد که
                  درطول دوره آشنایی با محیط استخر، اصول اولیه ایمنی در آب و
                  بازی‌های انفرادی و گروهی در آب آموحته می‌شود.`,
      image: {
        url: "/pics/LTAD (1).jpg",
        alt: "Starfish",
      },
    },
    {
      value: "item-2",
      trigger: `سطح دو، پایه B (بچه‌لاکپشت)، ${toPersianDigits(7)}-
                  ${toPersianDigits(5)} سال`,
      content: `آموزش‌های این سطح متمرکز بر ایمنی بدون وابستگی به مربی و مهارت
                شناوری می‌باشد و درطول دوره شناگر انواع شناوری روی آب در قسمت
                کم‌عمق و عمیق، تنفس صحیح و پای دوچرخه مقدماتی را خواهد آموحت.`,
      image: {
        url: "/pics/LTAD (2).jpg",
        alt: "Baby Turtle",
      },
    },
    {
      value: "item-3",
      trigger: `سطح سه، مقدماتی A (بچه‌قورباغه)، رده‌سنی ${toPersianDigits(8)}-
                  ${toPersianDigits(6)} سال`,
      content: `در این سطح تمرکز آموزش روی شنای کرال سینه و کرال پشت مقدماتی
                می‌باشد که شامل آموزش پا زدن صحیح به سینه و پشت و هواگیری
                می‌باشد.`,
      image: {
        url: "/pics/LTAD (3).jpg",
        alt: "Tadpole",
      },
    },
    {
      value: "item-4",
      trigger: `سطح چهار، تکمیلی A (ماهی‌قرمز)، رده‌سنی ${toPersianDigits(9)}-
                  ${toPersianDigits(7)} سال`,
      content: `آموزش‌های اسن سطح مربوط به تکمیل شناهای کرال‌سینه و کرال‌پشت
                می‌باشد که شامل آموزش دست کرال سینه و پشت ، هماهنگی و هواگیری
                صحیح، شیرجه و شروع تمرینات هوازی می‌باشد.`,
      image: {
        url: "/pics/LTAD (4).jpg",
        alt: "Goldfish",
      },
    },
    {
      value: "item-5",
      trigger: `سطح پنج، مقماتی B(بچه فوک)،رده سنی ${toPersianDigits(10)}-
                  ${toPersianDigits(8)} سال`,
      content: `تمرکز این سطح بر آموزش مقدماتی شنای قورباغه و پروانه است که شامل
                آموزش اجرای صحیح پای قورباغه و پروانه و هماهنگی و تنفس این دو
                شنا می‌باشد.`,
      image: {
        url: "/pics/LTAD (5).jpg",
        alt: "Baby Seal",
      },
    },
    {
      value: "item-6",
      trigger: `سطح شش، تکمیلی B (بچه دلفین)، رده سنی ${toPersianDigits(11)}-
                  ${toPersianDigits(9)} سال`,
      content: `تمرکز این سطح بر تکمیل شناهای قورباغه و پروانه است که شامل آموزش
                اجرای صحیح دست قورباغه و پروانه، هماهنگی دست و پا و تمرینات
                تخصصی و استقامتی می‌باشد.`,
      image: {
        url: "/pics/LTAD (6).jpg",
        alt: "Dolphin",
      },
    },
    {
      value: "item-7",
      trigger: `سطح هفت،پیشرفته (بچه کوسه)، رده سنی ${toPersianDigits(12)}-
                  ${toPersianDigits(10)} سال`,
      content: `ترکز این سطح بر توانمندسازی در شنای مختاط و شنای استقامت است و
                شامل آموزش استارت و برگشت پیشرفته،دریل‌های تخصصی، اصلاح
                تکنیک،تمرینات اینتروال و هوازی برای آمادگی شرکت در رقابت
                می‌باشد.`,
      image: {
        url: "/pics/LTAD (7).jpg",
        alt: "Shark",
      },
    },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-cyan-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl font-lalezar ">
            نظام آموزش ملی شنا
          </h2>
          <p className="font-vazir font-semibold text-xl">
            آموزشی ملی فدراسیون شنای ایران ساختاری هفت سطحی است که برای آموزش
            شنا از سن چهار سالگی طراحی شده‌است. این نظام با هدف ارتقاء کیفیت
            آموزش، استعدادیابی و سازماندهی بهتر شناگران اجرا می‌شود که در آن
            هرسطح نشان‌دهنده میزان مهارت و آمادگی شناگر برای ورود به سطح بعد
            است.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full font-vazir font-semibold"
          >
            {accItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    {item.trigger}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Image
                    src={item.image.url}
                    className="size-full py-3 object-contain object-center rounded-2xl dark:mix-blend-lighten md:hidden"
                    alt={item.image.alt}
                    width={1207}
                    height={929}
                  />
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-background relative hidden md:flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-cyan-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-contain object-center rounded-2xl dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
