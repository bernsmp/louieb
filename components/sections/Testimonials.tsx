"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

interface TestimonialsProps {
  headline?: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
}

export function Testimonials({
  headline = "What Clients Say",
  subheadline = "Real results from real businesses",
  testimonials,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Format the title from role and company
  const formatTitle = (testimonial: TestimonialItem) => {
    if (testimonial.role && testimonial.company) {
      return `${testimonial.role} - ${testimonial.company}`;
    }
    return testimonial.role || testimonial.company || "";
  };

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

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="bg-white py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
            {subheadline}
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
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 border-t border-neutral-200 pt-6">
                    <p className="text-base font-bold text-neutral-900 lg:text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 lg:text-base">
                      {formatTitle(testimonials[currentIndex])}
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
