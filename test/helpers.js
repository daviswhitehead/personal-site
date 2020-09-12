const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: "/",
    title: "Davis Whitehead",
    heading: "ABOUT THIS SITE",
  },
  {
    route: "/about",
    title: "About | Davis Whitehead",
    heading: "ABOUT",
  },
  {
    route: "/projects",
    title: "Projects | Davis Whitehead",
    heading: "PROJECTS",
  },
  {
    route: "/writing",
    title: "Writing | Davis Whitehead",
    heading: "WRITING",
  },
];

export { pages, randomString };
