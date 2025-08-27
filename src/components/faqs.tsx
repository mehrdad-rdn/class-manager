'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { toPersianDigits } from "../lib/utils";

export default function FAQsTwo() {
  const faqItems = [
    {
      id: "item-1",
      question: "1- بهتر است در چه دوره‌ای شرکت کنم؟",
      answer: `لطفا با شماره ${toPersianDigits(
        "09330003333"
      )} تماس بگیرید تا کارشناسان ما شما رو راهنمایی کنند..`,
    },
    {
      id: "item-2",
      question: "2- تایم کلاس‌های آموزش شنا به چه صورته؟",
      answer:
        "شما میتوانید دوره‌های فعال در هر ترم را در صفحه دوره‌های فعال آکادمی شنا ببینید.",
    },
    {
      id: "item-3",
      question: "کلاس‌ها در چه شهرهایی برگزار می‌شوند؟",
      answer:
        "درحال حاضر دوره‌ها در شهرهای گرگان و علی‌آباد تشکیل می‌شوند اما تیم ما در حال گسترش بوده و امیدواریم در آینده نزدیک شهرهای دیگر به این لیست افزوده شوند.",
    },
    {
      id: "item-4",
      question: "4-محل برگزاری کلاس‌های آموزش شنا کجاست؟",
      answer:
        "تلاش تیم ما براین است که به‌منظور سهولت دسترسی در نقاط مختلف شهرها دوره‌هایی برگزار کنیم که در صفحه استخرها لیست مجموعه‌هایی که با ما همکاری می‌کنند و آدرس و امکانات آنها قابل مشاهده است.",
    },
    {
      id: "item-5",
      question: "چطور از توانایی مربیان مطمئن شویم؟",
      answer:
        "در تیم ما بهترین مربیان هر شهر به برگزاری دوره‌های آموزشی مشغول هستند اما برای اطمینان بیشتر می‌توانید با کلیک بر روی عکس هر مربی به صفحه شخصی او وارد شوید و سابقه و فعالیت‌های پیشین او را مشاهده کنید، همچنین لینک مجوز فعالیت، شما را به سایت فدراسیون شنا هدایت خواهد کرد و می‌توانید مجوز سالانه فعالیت مربی که تاییدی از طرف هیات شنای استان و فدراسیون کشور بر توانایی‌های وی می‌باشد را نیز مشاهده کنید.",
    },
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-4xl lg:text-5xl font-lalezar">
            سوالات پرتکرار
          </h2>
          <p className="text-muted-foreground mt-4 text-balance font-vazir font-semibold">
            اینجا ما به سوالات مهمی که ممکن است برای شما پیش آید پاسخ داده‌ایم
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed font-vazir "
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground text-center mt-6 px-8 font-vazir font-semibold">
            برای پرسیدن سوالات بیشتر با{" "}
            <Link
              href="#"
              className="text-secondary font-medium hover:text-accent"
            >
              تیم پشتیبان مشتریان
            </Link>{" "}
            ما تماس بگیرید
          </p>
        </div>
      </div>
    </section>
  );
}
