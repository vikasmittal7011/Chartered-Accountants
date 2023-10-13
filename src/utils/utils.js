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
