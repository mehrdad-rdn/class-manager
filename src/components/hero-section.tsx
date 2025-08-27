'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import {
  ChartNoAxesCombined,
  FileAudio,
  MapPinCheck,
  Menu,
  Rocket,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./darkModeToggle";

const menuItems = [
  { name: "دوره‌های آموزشی", href: "#" },
  { name: "مربیان", href: "#" },
  { name: "استخرها", href: "#" },
  { name: "مقالات", href: "#" },
  { name: "تماس با ما", href: "#" },
];

const swiperData = [
  {
    icon: <FileAudio className="size-10" />,
    desc: {
      line_1: " مشاوره رایگان قبل ثبت‌نام",
      line_2: "برای انتخاب دوره مناسب شرایط شما",
    },
  },
  {
    icon: <ChartNoAxesCombined className="size-10" />,

    desc: {
      line_1: "امکان پیگیری روند پیشرفت شناگر",
      line_2: "از طریق پنل اختصاصی",
    },
  },
  {
    icon: <MapPinCheck className="size-10" />,
    desc: {
      line_1: "امکان انتخاب نزدیک‌ترین مکان و بهترین مربیان",
      line_2: " بین کلاس‌های موجود",
    },
  },
];

export default function HeroSection() {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-background backdrop-blur md:relative dark:bg-cyan-950/75 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link href="/" aria-label="home" className="flex items-center">
                  <div className="border-e border-muted pe-6">
                    <ModeToggle />
                  </div>
                  <span className="font-lalezar font-bold text-lg text-foreground ps-6">
                    مارلین آبی
                  </span>
                  <Logo className="size-9" />
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-cyan-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pe-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent block duration-150 font-vazir font-semibold"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-s lg:border-muted lg:ps-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">
                      <span className="font-vazir font-semibold">عضویت</span>
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <Link href="#">
                      <span className="font-vazir font-semibold">ورود</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="overflow-hidden">
        <section className="relative ">
          <div className="relative py-24 lg:py-28  bg-[url(/pics/header.jpg)] bg-center bg-origin-content bg-cover">
            <div className="mx-auto max-w-7xl px-6 md:px-12 ">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5 bg-cyan-950/75 rounded-(--radius) py-4">
                <div className="rounded-(--radius) mx-auto w-fit items-center p-4">
                  <span className="text-2xl font-medium font-vazir text-cyan-100 ">
                    تفریحی سالم ، مهارتی ماندگار
                  </span>
                </div>

                <h1 className="mt-8 text-4xl font-semibold font-lalezar md:text-5xl xl:text-5xl xl:[line-height:1.125] text-cyan-50">
                  <span className="text-accent">آموزش تخصصی شنا</span> <br />{" "}
                  برای همه سنین
                </h1>
                <p className="mx-auto mt-8 font-vazir hidden max-w-2xl text-wrap text-lg sm:block text-cyan-100">
                  در محیطی شاد و ایمن زیرنظر مربیان باتجربه و حرفه‌ای <br />
                  با متدهای بروز براساس نظام آموزشی ملی فدراسیون شنا
                </p>
                <p className="mx-auto mt-6 font-vazir max-w-2xl text-wrap sm:hidden text-cyan-100">
                  در محیطی شاد و ایمن زیرنظر مربیان باتجربه و حرفه‌ای <br />
                  با متدهای بروز براساس نظام آموزشی ملی فدراسیون شنا
                </p>
              </div>
              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-cyan-950/75 text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Link href="#">
                    <Rocket className="relative size-4" />
                    <span className="text-nowrap font-vazir font-medium text-lg">
                      شروع ثبت‌نام
                    </span>
                  </Link>
                </Button>
              </div>
              <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12">
                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

                <Swiper
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{ delay: 5000 }}
                  modules={[Autoplay, EffectCoverflow]}
                  className="font-vazir font-semibold text-cyan-100 bg-cyan-950/75   rounded-(--radius)"
                >
                  {swiperData.map((item) => (
                    <SwiperSlide className="px-2">
                      <div className=" rounded-(--radius) h-54 max-w-lg  p-9">
                        <div className="flex justify-center h-fit w-full">
                          {item.icon}
                        </div>
                        <p className="mt-6 text-center text-lg font-medium">
                          {item.desc.line_1}
                          <br /> {item.desc.line_2}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
