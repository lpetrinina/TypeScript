import { ThemeProvider, useTheme } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <h2>Context API</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          if (theme === "dark") {
            setTheme("system");
            return;
          }

          setTheme("dark");
        }}
      >
        toggle theme
      </button>
    </div>
  );
}

export default ParentComponent;
