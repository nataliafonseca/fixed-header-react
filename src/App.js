import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function scrollPosition() {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener("scroll", scrollPosition);
  }, []);

  return (
    <div>
      <Header scrolled={scrolled} />
      <Section />
    </div>
  );
}

export default App;
