import { useEffect, useState } from "react"
import { ThemeContext, ThemeContextProvide } from "./Context/Theme"
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  }

  const lightMode = () => {
    setThemeMode("light");
  }

  // below logic is responsible to change the theme
  useEffect(() => {
    const page = document.querySelector('html').classList
    page.remove("light", "dark");
    page.add(themeMode);

  }, [themeMode]);
  

  return (
    // / style={{backgroundImage: "url('/Images/bg1.jpg')"}}
    <ThemeContextProvide value ={ {themeMode, darkMode, lightMode} }>
      <div className="flex flex-wrap min-h-screen items-center bg-blue-300 "
      >
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeContextProvide>
  )
}

export default App
