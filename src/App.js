import React from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "What is Reaact?",
//     content: "React is a front end javascript framework.",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers.",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating React components.",
//   },
// ];
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const exportedColors = () => {
  return (
    <div>
      <Dropdown options={options}></Dropdown>
    </div>
  );
};

export default exportedColors;
