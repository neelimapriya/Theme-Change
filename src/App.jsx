import { FiSun, FiMoon } from "react-icons/fi";
// import "./App.css";
import { useTheme } from "./Hooks/useTheme";

function App() {
  const { changeTheme, mode } = useTheme();

  return (
    <div className="text-center flex  flex-col items-center">
      <div className="text-black flex  flex-col items-center mb-10">
        <h1 className="text-5xl mb-4 dark:text-blue-400">
          Theme Changing Page
        </h1>
        <p className="outline w-1/2 flex justify-center dark:text-yellow-400">
          Tailwind CSS is known for its simplicity and ease of use in creating
          and changing the design of a website. By following these steps, you
          can quickly change the mood or appearance of your React website using
          Tailwind CSS classes.
        </p>
      </div>
      <button onClick={changeTheme}>
        {mode === "dark" ? (
          <FiSun className="text-4xl fill-yellow-500"></FiSun>
        ) : (
          <FiMoon className="text-4xl fill-blue-800"></FiMoon>
        )}
      </button>
    </div>
  );
}

export default App;
