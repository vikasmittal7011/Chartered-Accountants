import { academy, connect, research, search } from "../assets/index";

export const navigation = [
  {
    name: "Solulions",
    href: "#",
    current: true,
    subNav: [
      {
        name: "Solulions 1",
        href: "#",
        current: true,
      },
      {
        name: "Solulions 2",
        href: "#",
        current: true,
      },
      {
        name: "Solulions 3",
        href: "#",
        current: true,
      },
    ],
  },
  {
    name: "Features",
    href: "#",
    current: false,
    subNav: [
      {
        name: "Features 1",
        href: "#",
        current: true,
      },
      {
        name: "Features 2",
        href: "#",
        current: true,
      },
      {
        name: "Features 3",
        href: "#",
        current: true,
      },
    ],
  },
  {
    name: "Blog",
    href: "#",
    current: false,
  },
  {
    name: "About",
    href: "#",
    current: false,
    subNav: [
      {
        name: "About 1",
        href: "#",
        current: true,
      },
      {
        name: "About 2",
        href: "#",
        current: true,
      },
      {
        name: "About 3",
        href: "#",
        current: true,
      },
    ],
  },
  {
    name: "Contact",
    href: "#",
    current: false,
  },
];

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const plans = [
  {
    title: "Commencement of business",
    desc: "Invested shareholders must confirm payment and office address",
    dueDate: "Within 180 days",
    penaltyFess: [
      {
        amount: "₹50,000",
        text: " for the company",
      },
      {
        amount: "₹1,000",
        text: "/day for directors",
      },
    ],
    index: {
      no: "1",
      letter: "st",
    },
  },
  {
    title: "Auditor Appointment",
    desc: "Company informs new auditor and submits ADT.1 form to ROC.",
    dueDate: "Within 30 days",
    penaltyFess: [
      {
        amount: "₹300",
        text: " per month.",
      },
    ],
    index: {
      no: "2",
      letter: "nd",
    },
  },
  {
    title: "DIN eKYC",
    desc: "Directors share personal information for identification & verification",
    dueDate: "Every Year",
    penaltyFess: [
      {
        amount: "₹5000",
        text: " one time",
      },
    ],
    index: {
      no: "3",
      letter: "rd",
    },
  },
  {
    title: "DPT-3",
    desc: "Companies report money taken from people to ROC; auditors confirm details.",
    dueDate: "Within 30 days",
    penaltyFess: [
      {
        amount: "₹300",
        text: " per month",
      },
    ],
    index: {
      no: "4",
      letter: "th",
    },
  },
  {
    title: "MCA Form AOC-4",
    desc: `It's like an official report card for a company's documents`,
    dueDate: `On or Before 30th November `,
    penaltyFess: [
      {
        amount: "₹200",
        text: " per day",
      },
      {
        text: "(No upper limit)*",
      },
    ],
    index: {
      no: "5",
      letter: "st",
    },
  },
  {
    title: "MCA Form MGT-7",
    desc: `Companies must annually report activities and finances to the registrar.`,
    dueDate: `On or Before 31st December`,
    penaltyFess: [
      {
        amount: "₹200",
        text: " per day",
      },
      {
        text: "(No upper limit)*",
      },
    ],
    index: {
      no: "6",
      letter: "st",
    },
  },
];

export const detailsPageInfo = [
  {
    image: search,
    topic: "SEARCH",
    text: `for vital company
    information`,
  },
  {
    image: connect,
    topic: "CONNECT",
    text: `with the resources to
    meet your business needs`,
  },
  {
    image: research,
    topic: "SEARCH",
    text: `and generate reports
    that drive growth`,
  },
  {
    image: academy,
    topic: "ACADEMY",
    text: `to give you the skills
    for success in your career`,
  },
];

export const detailsPageChat = [
  {
    message: "Hey, check out loreumipsum services.",
    color: "--fs-search-surface-bg, #d1a2ce",
  },
  {
    message: "I learned from their videos, got my first job.",
    color: "--fs-search-surface-bg, #d1a2ce",
  },
  {
    message: "You won't be disappointed with their services.",
    color: "--fs-search-surface-bg, #d1a2ce",
  },
  {
    message: "I got a perfect analysis report from them too",
    color: "--fs-search-banner-blue, #DDF3FF",
  },
  {
    message: "Oh, that's great.",
    color: "--fs-search-banner-blue, #DDF3FF",
  },
];

export const footerLiks = [
  {
    title: "Company",
    links: [{ name: "About" }, { name: "pricing" }, { name: "Careers" }],
  },
  {
    title: "Solutions",
    links: [
      { name: "Search" },
      { name: "Connect" },
      { name: "Research" },
      { name: "Academy" },
    ],
  },
  {
    title: "Resources",
    links: [{ name: "Blogs" }, { name: "Forms" }],
  },
  {
    title: "Support",
    links: [{ name: "Help" }, { name: "Contact Us" }],
  },
  {
    title: "Legal",
    links: [{ name: "Privacy" }, { name: "Teams" }, { name: "Accessibility" }],
  },
];
