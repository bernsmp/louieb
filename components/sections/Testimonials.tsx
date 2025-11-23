"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "When Louie came on board he wrote and organized our outbound scripts and emails. We now had everyone working off the same playbook, and it gave us consistency.",
      author: "Neal Reynolds",
      title: "CEO - BankMarketingCenter.com",
    },
    {
      quote:
        "Thank you Louie for what you have done in the past year. I believe our sales are far better than where they were a year ago, great job.",
      author: "Kevin Zhao",
      title: "CEO - ZBS POS",
    },
    {
      quote:
        "You taught me a great deal, the lessons will always stick with me. Your teachings have contributed to me being a better sales professional.",
      author: "Laura H.",
      title: "Sales Tech Strategist",
    },
    {
      quote:
        "I worked for Louie for over four years. During that time our team had constant sales growth. Louie's leadership and sales processes were key to that growth. Most importantly, our team knew we could always count on Louie to get on the phone and help close deals when needed. Personally, I owe a lot of my success to the coaching and mentoring I received during Louie's time at Izenda.",
      author: "David Yasson",
      title: "Group Manager, Strategic Accounts at Intuit",
    },
    {
      quote:
        "In the thirty years I have had the privilege to know and work with Louie, I have observed him to be organized, efficient, extremely competent, and have an excellent rapport with people of all ages, gender, and ethnicity. He is a brilliant thought leader in the sales and marketing with a strong sense of duty in which he applies to all aspects of his job, family, and community.",
      author: "Jim Nelms",
      title: "Chief Information Security Officer",
    },
    {
      quote:
        "If you needed help closing a deal, Louie was your man. I had never worked in a true sales role before, but Louie was willing to teach me. He helped me to improve my social skills and learn how to speak to people in a way that would get them to like and trust me. Louie has spent many years as a sales professional, and I have never met someone so committed to spreading his knowledge.",
      author: "Richard Adrian, CEM",
      title: "Building Automation Systems Sales Engineer",
    },
    {
      quote:
        "Louie is a highly effective and very successful sales leader. He developed processes that allow him to be on top of all details, making him extremely efficient in managing a large number of employees. Most importantly, he has produced admirable year over year increases in sales results and would be a valuable sales executive in any organization.",
      author: "Stephen W.",
      title: "CEO, Active Angel Investor and Member of multiple Boards",
    },
    {
      quote:
        "I have had the privilege to work and know Louie Bernstein for many years, he gave a young computer professional a chance many years ago to grow and expand his knowledge and skills. I learned an incredible amount from working with and being friends with Louie over the years. His professionalism, his great desire to succeed, his professional ethics, as well as leadership gave me confidence to do many things in my own career.",
      author: "Christopher H. Short",
      title: "Software Engineering, CIO, CTO",
    },
    {
      quote:
        "During his tenure at New Horizons of Atlanta, I had the pleasure of working with Louie on daily basis. He was extremely responsive to the needs of the organization and personally saw to the resolution of several problems that my department had been having. He is one of the best general managers that I have worked with and is a great leader.",
      author: "Victor Hodges - CISSP",
      title: "Information Systems Specialist - Infosec",
    },
    {
      quote:
        "Louie is a great leader. His energy and positive business strategies are infectious. I learned a great deal working for Louie, and see him going far in the business world.",
      author: "Laura Diem",
      title: "Operations and Customer Experience",
    },
    {
      quote:
        "Not to be cliché, but Louie has forgotten more about sales and marketing than most people know. He is a tenacious, hard-working competitor and I recommend him without reservation!",
      author: "Dan McDade",
      title: "Managing Partner @ Prospect-Experience | B2B Marketing Expert",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" className="bg-white py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            What Clients Say
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            Real results from real businesses
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-20 relative pt-12">
          <div className="relative min-h-[500px] lg:min-h-[550px] overflow-visible rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 top-12"
              >
                <div className="group relative rounded-3xl border-2 border-neutral-200 bg-white p-8 pt-20 shadow-sm transition-all hover:border-neutral-900 hover:shadow-xl lg:p-12 lg:pt-24 min-h-[400px] flex flex-col">
                  {/* Quote icon */}
                  <div className="absolute -top-6 left-8 rounded-full bg-neutral-900 p-4 z-10">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <blockquote className="text-lg leading-relaxed text-neutral-700 lg:text-xl xl:text-2xl flex-1">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div className="mt-8 border-t border-neutral-200 pt-6">
                    <p className="text-base font-bold text-neutral-900 lg:text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 lg:text-base">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="rounded-full bg-neutral-100 p-2 hover:bg-neutral-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#0966c2]"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="rounded-full bg-neutral-100 p-2 hover:bg-neutral-200 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
