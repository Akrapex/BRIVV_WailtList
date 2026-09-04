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
    <section className="bg-stone-50 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y border-stone-200 border-t border-stone-200">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => onToggle(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-lg font-medium text-stone-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-stone-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-4 text-sm leading-relaxed text-stone-600">
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
