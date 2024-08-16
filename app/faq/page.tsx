"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is Next.js?",
    answer: (
      <span>
        Next.js is a powerful React framework that enables developers to build fast and scalable web applications. It includes features like{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          server-side rendering (SSR)
        </a>
        ,{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          static site generation (SSG)
        </a>
        , and API routes.
      </span>
    ),
  },
  {
    question: "Why should I choose Next.js for my project?",
    answer: <span>Next.js simplifies complex tasks like SSR, SSG, and routing while providing powerful tools like image optimization and built-in CSS support. It’s ideal for both small and large-scale projects.</span>,
  },
  {
    question: "How does Next.js differ from React?",
    answer: <span>React is a library for building user interfaces, while Next.js is a framework built on top of React that adds features like SSR, SSG, and API routes. Next.js provides a complete solution for building production-ready React applications.</span>,
  },
  {
    question: "What are the benefits of server-side rendering (SSR) in Next.js?",
    answer: (
      <span>
        Server-side rendering improves performance and SEO by rendering pages on the server before sending them to the client. This is especially beneficial for content-heavy applications. Learn more about SSR in the{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          Next.js documentation
        </a>
        .
      </span>
    ),
  },
  {
    question: "What is static site generation (SSG) in Next.js?",
    answer: (
      <span>
        SSG pre-renders pages at build time, creating static HTML files that are served to users quickly. This is ideal for content that doesn’t change frequently, such as blogs or documentation sites. Learn more about SSG in the{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          Next.js documentation
        </a>
        .
      </span>
    ),
  },
  {
    question: "Can I use APIs in a Next.js application?",
    answer: (
      <span>
        Yes, Next.js supports API routes, which allow you to create API endpoints directly within your Next.js application. These routes are created in the `pages/api` directory. Learn more about{" "}
        <a href="https://nextjs.org/docs/api-routes/introduction" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          API routes in Next.js
        </a>
        .
      </span>
    ),
  },
  {
    question: "How does Next.js handle SEO?",
    answer: (
      <span>
        Next.js offers excellent SEO capabilities through server-side rendering, static site generation, and dynamic meta tag customization. These features help improve the visibility of your content in search engines. For more details, visit the{" "}
        <a href="https://nextjs.org/docs/advanced-features/seo" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          SEO guide for Next.js
        </a>
        .
      </span>
    ),
  },
  {
    question: "How does Next.js support CSS and styling?",
    answer: (
      <span>
        Next.js has built-in support for CSS and Sass, allowing you to import CSS files directly into your components. You can also use CSS Modules for scoped styling or popular CSS-in-JS libraries like styled-components. Learn more about{" "}
        <a href="https://nextjs.org/docs/basic-features/built-in-css-support" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          styling in Next.js
        </a>
        .
      </span>
    ),
  },
  {
    question: "How do I optimize images in a Next.js application?",
    answer: (
      <span>
        Next.js includes a built-in `Image` component that automatically optimizes images. It supports features like lazy loading, resizing, and serving images in modern formats like WebP. Check out the{" "}
        <a href="https://nextjs.org/docs/basic-features/image-optimization" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          Image Optimization guide
        </a>
        for more details.
      </span>
    ),
  },
  {
    question: "What are the best practices for securing a Next.js application?",
    answer: (
      <span>
        To secure a Next.js application, ensure that you use HTTPS, validate inputs, implement proper authentication and authorization, and use environment variables for sensitive information. Additionally, regularly update dependencies to avoid vulnerabilities. Read more about{" "}
        <a href="https://nextjs.org/docs/advanced-features/security" target="_blank" className="text-blue-500 hover:underline" rel="noopener noreferrer">
          security best practices
        </a>
        in the Next.js documentation.
      </span>
    ),
  },
];

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter((faq) => faq.question.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="py-10 md:py-20 mt-24 md:mt-20 text-primary-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl section-heading">Frequently asked questions</h2>
        </div>
        <div className="w-full xl:w-3/4 mx-auto">
          <div className="flex justify-end">
            <div className="relative mb-6 w-full sm:w-80">
              <input type="text" placeholder="Search..." className="p-3 pl-10 border rounded-lg w-full" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="mb-2">
                  <button onClick={() => toggleFaq(index)} className="flex justify-between items-center w-full text-left px-4 py-2 border-b">
                    <span className="text-lg">{faq.question}</span>
                    {openIndex === index ? <FaChevronUp size={20} className="text-secondary-600 flex-shrink-0 ml-2" /> : <FaChevronDown size={20} className="text-secondary-600 flex-shrink-0 ml-2" />}
                  </button>
                  {openIndex === index && (
                    <div className="p-4">
                      <div className="text-lg font-semibold">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center p-4">No results found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}