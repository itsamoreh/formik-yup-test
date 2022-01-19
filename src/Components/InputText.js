import cn from "classnames";

export default function InputText({
  error,
  id,
  label,
  name,
  onBlur,
  onChange,
  touched,
  type,
  value,
}) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
        {label}
      </label>

      <input
        className={cn(
          "block w-full px-4 py-2 mb-2 text-gray-700 bg-white border rounded-md",
          "focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40",
          "dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300",
          touched &&
            error &&
            "ring ring-red-400  dark:ring-red-400 ring-opacity-40 dark:ring-opacity-40 focus:border-red-500 focus:ring-red-400 dark:focus:border-red-500"
        )}
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />

      <div className="min-h-[1.25rem]">
        {touched && error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </>
  );
}
