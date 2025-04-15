import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={skills} />
    </div>
  );
}
export const skills = [
  {
    title: "React.js",
    description:
      "React: Building Interactive UIs with JavaScript",
    link: "https://react.dev/",
    img:"https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
  },
  {
    title: "Next.js",
    description:
      "Next.js: The React Framework for Production to Develop Scalable and Performant Web Apps with Next.js",
    link: "https://nextjs.org/",
    img:"https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
  },
  {
    title: "HTML",
    description:
      "HTML: The Foundation of Web Pages, Structuring Content for the Internet",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img:"https://icons.veryicon.com/png/System/Hex/html%205.png"
  },
  {
    title: "Python",
    description:
      "Python: A Versatile and Readable Programming Language for Beginners and Experts Alike",
    link: "https://www.python.org/",
    img:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
  },
  {
    title: "Javascript",
    description:
      "JavaScript: The Language of the Web, Bringing Interactivity and Dynamism to Websites, Powering the Frontend and Backend of Modern Web Applications",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img:"https://cdn-icons-png.freepik.com/512/919/919828.png"
  },
  {
    title: "MongoDB",
    description:
      "MongoDB: A Flexible and Scalable NoSQL Database for Modern Applications, The Document Database Designed for High Performance and Scalability",
    link: "https://mongodb.com",
    img:"https://www.svgrepo.com/show/331488/mongodb.svg"
  },
];
