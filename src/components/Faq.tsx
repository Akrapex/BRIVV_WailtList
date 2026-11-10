import { ChevronDown } from "lucide-react";
import { FAQS } from "./constant/fAQS";

export default function Faq({
  openFaq,
  onToggle,
}: {
  openFaq: number | null;
  onToggle: (index: number | null) => void;
}) {
  return (
    <section className="bg-[#F9F9F7] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 divide-y divide-stone-200/80 border-y border-stone-200/80">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => onToggle(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4.5 text-left transition-colors cursor-pointer group"
                >
                  <span className="text-sm sm:text-[15px] font-medium text-stone-800 group-hover:text-stone-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-stone-700" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-4 text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
