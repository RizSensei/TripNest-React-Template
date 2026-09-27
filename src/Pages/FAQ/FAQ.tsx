import React from "react";
import Layout from "../../component/Layout/Layout";

const faqs = [
  {
    question: "How do I find a morning view?",
    answer:
      "Start with a region or use the visual deck to explore sunrise perspectives from Nepalese stays. Each view opens into a property detail page.",
  },
  {
    question: "Can I preview different times of day?",
    answer:
      "Yes. Property pages include sunrise, midday, and golden-hour imagery so you can understand the atmosphere beyond a single photograph.",
  },
  {
    question: "Can I save a view I like?",
    answer:
      "Yes. Use the heart on a property card or detail page to collect favorite vistas in your wishlist.",
  },
  {
    question: "What makes each stay different?",
    answer:
      "Alongside pricing and room highlights, every stay introduces its host, regional setting, elevation, orientation, and signature horizon.",
  },
  {
    question: "Do I need a real account to browse the app?",
    answer:
      "No. The frontend prototype is designed to showcase the booking flow visually without requiring a real authentication system.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl py-8 md:py-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
            A little clarity before dawn
          </p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900">
            Questions about the view
          </h1>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm shadow-orange-100"
            >
              <h2 className="text-lg font-semibold text-stone-900">
                {item.question}
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
