import "./App.css";

import Form from "./Components/Form";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 App">
      <header className="mb-20">
        <h1 className="mb-4 text-4xl font-semibold text-center text-gray-800 dark:text-white">
          Formik + Yup Test Form
        </h1>
        <p className="mb-2">
          This is just a quick demo form I made while reading{" "}
          <a
            className="underline"
            href="https://formik.org/docs/tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formik's documentation.
          </a>
          <br />
          It shows how to use Formik and Yup with custom input components.
        </p>
        <p>Form submissions are logged to the console.</p>
      </header>
      <Form />
    </div>
  );
}

export default App;
