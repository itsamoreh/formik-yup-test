import * as Yup from "yup";

import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import { useFormik } from "formik";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter a name."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Please enter an email address."),
      message: Yup.string()
        .max(300, "Sorry! Your message must be 300 characters or less.")
        .required("Please enter a message."),
    }),
    onSubmit: (values) => {
      console.log("SUBMITTED", values);
    },
  });

  return (
    <section className="w-full max-w-2xl p-8 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
        Get in touch
      </h2>
      <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
        <a
          href="https://maps.google.com"
          className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>

          <span className="mt-2">121 Street, NY</span>
        </a>

        <a
          href="tel:1234567890"
          className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>

          <span className="mt-2">+1234567890</span>
        </a>

        <a
          href="mailto:test@example.com"
          className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>

          <span className="mt-2">test@example.com</span>
        </a>
      </div>

      <form className="mt-6" onSubmit={formik.handleSubmit}>
        <div className="items-center md:-mx-2 md:flex">
          <div className="w-full md:mx-2">
            <InputText
              label="Name"
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              touched={formik.touched.name}
              error={formik.errors.name}
            />
          </div>

          <div className="w-full mt-4 md:mx-2 md:mt-0">
            <InputText
              label="Email"
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <InputTextarea
            label="Message"
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            touched={formik.touched.message}
            error={formik.errors.message}
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
