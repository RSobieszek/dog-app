import React from "react";
import DogLogo from "assets/dog-logo.png";

function Header() {
  return (
    <header className="px-2 bg-white h-24 flex items-center">
      <img src={DogLogo} alt="dog-logo" className="h-full p-2" />
      <p className="font-bold text-3xl text-pink-400">DOG PICTURES</p>
    </header>
  );
}

export default Header;
