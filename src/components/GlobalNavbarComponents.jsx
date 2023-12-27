import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logocri from "../assets/Images/newlogocri.png";
import search from "../assets/icon/icons8-search-100.png";
import { Link } from "react-scroll";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "Services", href: "/", current: false },
  { name: "About Us", href: "/aboutus", current: false },
  { name: "Experience", href: "/", current: false },
  { name: "Our Team", href: "/ourteam", current: false },
  // { name: "Carrer", href: "/", current: false },
  // { name: "E-Learning", href: "/", current: false },
  // { name: "Paper", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GlobalNavbarComponent() {
  return (
    <Disclosure as="nav" className="bg-[#003478e4] sticky top-0 w-full z-[999]">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex flex-15 items-center justify-items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flitems-center justify-center sm:items-stretch sm:justify-center">
                {/* --Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={logocri}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.name}
                        key={item.name}
                        smooth={true}
                        className={classNames(
                          item.current
                            ? "text-white cursor-pointer"
                            : "text-gray-300  hover:text-white cursor-pointer",
                          "rounded-md px-3 py-2 text-sm font-normal"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
