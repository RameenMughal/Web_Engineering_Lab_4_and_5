import { useEffect, useState } from "react";

function DarkModeToggle() {

  const [dark, setDark] = useState(false);

  useEffect(() => {

    document.documentElement.classList.toggle(
      "dark",
      dark
    );

  }, [dark]);

  return (

    <button

      className="
      px-3 py-1.5
      rounded-lg
      bg-slate-800
      text-white
      dark:bg-yellow-400
      dark:text-black
      transition
      "

      onClick={() => setDark(!dark)}

    >

      {dark ? "☀️" : "🌙"}

    </button>

  );

}

export default DarkModeToggle;