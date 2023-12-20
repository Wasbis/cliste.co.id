import React from "react";
import { Link } from "react-scroll"; // Import react-scroll library

const navigation = [
  { name: "Home", href: "/home", current: true, navigation: "homeSection" },
  { name: "Services", href: "/", current: false, navigation: "services" },
  { name: "Product", href: "/", current: false },
  { name: "Experience", href: "/", current: false },
  { name: "About Us", href: "/aboutus", current: false },
  { name: "Carrer", href: "/", current: false },
  { name: "E-Learning", href: "/", current: false },
  { name: "Paper", href: "/", current: false },
];

const NavbarScroll = ({ navigation }) => {
  return (
    <div className="bg-black h-11">
      <div className="flex space-x-4 justify-center">
        {navigation.map((item) => (
          <ul>
            <li>
              <Link></Link>
            </li>
          </ul>
        ))}
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarScroll;
