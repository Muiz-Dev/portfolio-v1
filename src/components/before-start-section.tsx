"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const questions = [
  {
    question: "I do not have content yet. Can we still start?",
    answer:
      "Yes. We can help plan the page structure first and show you exactly what content is needed. If you already have text, we can clean it up. If you do not, we can guide the writing around your services, contact details, and business goals.",
  },
  {
    question: "Can I request only business email or domain setup?",
    answer:
      "Yes. Not every project has to be a full website. We can help with business email, domain connection, hosting, SSL, redirects, or setup work as a smaller project.",
  },
  {
    question: "I already have a website. Can you improve it?",
    answer:
      "Yes. We can review the current website, redesign important sections, fix technical issues, improve contact flow, or rebuild it if the existing setup is holding the business back.",
  },
  {
    question: "What if I do not know the right domain or hosting to choose?",
    answer:
      "That is part of what we help with. We explain the options clearly, connect the domain, configure DNS, set up SSL, and make sure the website points to the right place.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We check the website, test contact routes, help with small fixes, and can continue with maintenance for updates, backups, content changes, and support.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on the pages, features, content, and setup needed. A simple website, an email setup, and a custom web application are not the same kind of project. The best next step is to share what you need so we can recommend the right scope.",
  },
];

export function BeforeStartSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [accordionRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <section className="before-start" aria-labelledby="before-start-title">
      <div className="before-start-copy">
        <p className="before-start-kicker">Before you start</p>
        <h2 id="before-start-title">Questions clients usually ask before starting.</h2>
        <p>
          You do not need to have everything figured out before you reach out.
          These are the common questions we help clients sort through at the
          beginning of a project.
        </p>
        <div className="before-start-note">
          <p>Best next step</p>
          <span>Send what you need, even if the idea is rough.</span>
        </div>
      </div>

      <div className="before-start-accordion" ref={accordionRef}>
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `before-start-question-${index}`;
          const answerId = `before-start-answer-${index}`;

          return (
            <div className="before-start-item" key={item.question}>
              <button
                className="before-start-trigger"
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="before-start-mark" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <div
                  className="before-start-answer"
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
