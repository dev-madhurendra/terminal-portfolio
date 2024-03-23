import React from "react";
import Typed from "typed.js";

export default function Welcome() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome"],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="element font-fascinate text-8xl font-bold uppercase" ref={el}></span>
    </div>
  );
}
