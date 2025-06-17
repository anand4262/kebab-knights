'use client';
import FaqItem from './_components/FaqItem';
import { faqData } from "./data";

const FaqSection = () => (
  <section id="faq-section" className="bg-charcoal text-offwhite py-24 sm:py-36 px-4">
    <div className="max-w-4xl mx-auto">
      {/* Styled Heading */}
      <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start">
        Questions? Answered
      </p>
      <h2 className="text-3xl lg:text-5xl font-semibold text-white text-start">
        Frequently Asked <br /> Questions
      </h2>

      <div className="mt-12 space-y-6">
        {faqData.map((faq, i) => (
          <FaqItem key={i} {...faq} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
