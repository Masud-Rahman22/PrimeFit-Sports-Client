import { useState } from "react";

export default function Login() {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div
          className={`flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none dark:border-gray-700 *:dark:border-gray-600 ${
            signUp
              ? "last-of-type:*:bg-blue-600 last-of-type:*:text-white"
              : "first-of-type:*:bg-blue-600 first-of-type:*:text-white"
          }`}
        >
          <button
            className={`flex-1 py-2 text-lg ${
              !signUp ? "bg-blue-600 text-white" : "bg-transparent"
            }`}
            onClick={() => setSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 text-lg ${
              signUp ? "bg-blue-600 text-white" : "bg-transparent"
            }`}
            onClick={() => setSignUp(true)}
          >
            Sign Up
          </button>
        </div>

        <div className="w-full flex-col items-center p-6 sm:p-8">
          {/* Sign Up Form */}
          <form
            className={`${
              signUp
                ? "block h-full opacity-100 duration-300"
                : "hidden h-0 opacity-0"
            } space-y-4`}
          >
            <h1 className="mb-4 text-center text-xl font-bold uppercase text-gray-700 dark:text-gray-100">
              Sign Up
            </h1>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="block w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="block w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="block w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 py-2 text-white shadow-lg hover:bg-blue-700"
            >
              Submit
            </button>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setSignUp(!signUp)}
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Sign In
              </button>
            </p>
          </form>

          {/* Sign In Form */}
          <form
            className={`${
              signUp
                ? "hidden h-0 opacity-0"
                : "block h-full opacity-100 duration-300"
            } space-y-4`}
          >
            <h1 className="mb-4 text-center text-xl font-bold uppercase text-gray-700 dark:text-gray-100">
              Sign In
            </h1>
            <input
              type="email"
              placeholder="Email"
              className="block w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
            />
            <p className="text-end text-sm text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </p>
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 py-2 text-white shadow-lg hover:bg-blue-700"
            >
              Submit
            </button>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setSignUp(!signUp)}
                type="button"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Sign Up
              </button>
            </p>
          </form>

          <div className="mt-6">
            <hr className="border-gray-300 dark:border-gray-600" />
            <button className="mx-auto mt-6 flex w-full items-center justify-center gap-2 rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-5 w-5 fill-current text-gray-700 dark:text-gray-300"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Continue with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
