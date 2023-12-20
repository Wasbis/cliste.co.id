import React from "react";

const carouselItem = [
  {
    name: "Reliability Avaibility Maintenability Target Interpretation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/",
    current: true,
    icon: "",
  },
  {
    name: "Reliability Assurance Plan",
    href: "/",
    current: false,
    icon: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Reliability Availability Maintainability (RAM)",
    href: "/",
    current: false,
    icon: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Reliability Centered Maintenance (RCM)",
    href: "/",
    current: false,
    icon: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Spare-part Optimization",
    href: "/",
    current: false,
    icon: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Life Cycle Analysis",
    href: "/",
    current: false,
    icon: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CaroouselAnimation1() {
  return (
    <div className="carouselanimation-1">
      <div id="slide">
        <div className="content">
          {carouselItem.map((item) => {
            <a key={item.name} href={item.href}>
              {item.name}
            </a>;
          })}
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default CaroouselAnimation1;
