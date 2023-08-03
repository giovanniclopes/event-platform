import { useState } from "react";
import logo from "../assets/svg/logo-intellion.svg";
import { List, X } from "phosphor-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cursos", href: "/subscribe" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre Nós", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-product-darkPurple text-white">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <NavLink to="/">
          <img
            src={logo}
            className="w-100 h-10 mr-2"
            alt="Logo"
            draggable="false"
          />
        </NavLink>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          {isOpen ? (
            <X size={24} color="#fff" />
          ) : (
            <List size={24} color="#fff" />
          )}
        </button>
      </div>
      <div
        className={`w-full flex flex-grow lg:flex lg:items-center lg:w-auto mbl:flex-col mbl:gap-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-3 text-base font-semibold lg:flex-grow mbl:flex-col mbl:gap-0 mbl:mt-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-pink-100 focus:text-pink-400"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <NavLink to="/contact">
            <button className="flex items-center justify-center font-semibold bg-product-pink px-8 py-3 rounded-full transition-colors hover:bg-product-pink/80 mbl:w-full mbl:rounded-sm">
              Contato
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
