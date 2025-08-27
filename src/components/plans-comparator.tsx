import { Button } from "@/components/ui/button";
import { CircleCheck, CircleMinus } from "lucide-react";
import Link from "next/link";

const tableData = [
  {
    feature: "تعین سطح رایگان",
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: "'گزارش جلسه‌ای پیشرفت",
    free: false,
    pro: false,
    startup: true,
  },
  {
    feature: "غیبت مجاز",
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: "تعداد جلسات",
    free: "12",
    pro: "12",
    startup: "12",
  },
  {
    feature: "زمان هرجلسه",
    free: "75 دقیقه",
    pro: "60 دقیقه",
    startup: "60 دقیقه",
  },
  {
    feature: "آلبوم عکس",
    free: "1",
    pro: "5",
    startup: "10",
  },
];

export default function PlansComparator() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="w-full overflow-auto lg:overflow-visible">
          <table className="max-w-[120vw] text-foreground border-separate border-spacing-x-3 sm:w-full dark:[--color-muted:var(--color-cyan-900)]">
            <thead className="bg-background sticky top-0">
              <tr className="*:py-4 font-medium font-vazir">
                <th className="lg:w-2/5"></th>
                <th className="space-y-3">
                  <span className="block">عمومی</span>

                  <Button asChild variant="outline" size="sm">
                    <Link href="#">ثبت نام</Link>
                  </Button>
                </th>
                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                  <span className="block">نیمه خصوصی</span>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="#">ثبت نام</Link>
                  </Button>
                </th>
                <th className="space-y-3">
                  <span className="block">خصوصی</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">ثبت نام</Link>
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="text-caption text-sm">
              <tr className="*:py-3">
                <td className="flex items-center gap-2 font-medium ">
                  <span className="font-vazir font-semibold text-lg">
                    ویژگی‌ها
                  </span>
                </td>
                <td></td>
                <td className="bg-muted border-none px-4"></td>
                <td></td>
              </tr>
              {tableData.map((row, index) => (
                <tr key={index} className="*:border-b *:py-3 font-vazir">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>
                    {row.free === true ? (
                      <CircleCheck
                        size={24}
                        fill="currentColor"
                        color="var(--background)"
                      />
                    ) : row.free === false ? (
                      <CircleMinus
                        size={24}
                        fill="var(--background)"
                        color="currentColor"
                      />
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="bg-muted border-none px-4">
                    <div className="-mb-3 border-b py-3">
                      {row.pro === true ? (
                        <CircleCheck
                          size={24}
                          fill="currentColor"
                          color="var(--muted)"
                        />
                      ) : row.free === false ? (
                        <CircleMinus
                          size={24}
                          fill="var(--muted)"
                          color="currentColor"
                        />
                      ) : (
                        row.free
                      )}
                    </div>
                  </td>
                  <td>
                    {row.startup === true ? (
                      <CircleCheck
                        size={24}
                        fill="currentColor"
                        color="var(--background)"
                      />
                    ) : row.free === false ? (
                      <CircleMinus
                        size={24}
                        fill="var(--background) "
                        color="currentColor"
                      />
                    ) : (
                      row.free
                    )}
                  </td>
                </tr>
              ))}
              <tr className="*:py-6">
                <td></td>
                <td></td>
                <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
