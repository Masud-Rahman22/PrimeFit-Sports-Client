import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/features/hooks";
import { TFormInputs } from "./Register";
import { useLocation, useNavigate } from "react-router-dom";
interface SignUpProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  signUp: boolean;
}
const Login = ({setSignUp,signUp}:SignUpProps) => {
    const [loginMutation] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the path user was trying to access before being redirected to login
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset } = useForm<TFormInputs>();
    const onLoginSubmit = async (data: TFormInputs) => {
        try {
          console.log(data)
          const { email, password } = data;
          const response = await loginMutation({ email, password }).unwrap();
          dispatch(setUser({ user: response.data, token: response.token }));
          reset(); // Clear form after submission
          navigate(from, { replace: true });
        } catch (error) {
          console.error("Error logging in:", error);
        }
      };
    
  return (
    <form
    className={`${
      signUp
        ? "hidden h-0 opacity-0"
        : "block h-full opacity-100 duration-300"
    } space-y-4`}
    onSubmit={handleSubmit(onLoginSubmit)}
  >
    <h1 className="mb-4 text-center text-xl font-bold uppercase text-gray-700 dark:text-gray-100">
      Sign In
    </h1>
    <input
      type="email"
      placeholder="Email"
      className="block w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
      {...register("email", { required: true })}
    />
    <input
      type="password"
      placeholder="Password"
      className="block w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
      {...register("password", { required: true })}
    />
    <p className="text-end text-sm text-gray-600 dark:text-gray-400">
      <a href="#" className="hover:underline">
        Forgot password?
      </a>
    </p>
    <button
      type="submit"
      className="w-full rounded-md bg-blue-600 py-2 text-white shadow-lg hover:bg-blue-700"
    >
      Submit
    </button>
    <p className="text-center text-gray-600 dark:text-gray-300">
      Don&apos;t have an account?{" "}
      <button
        onClick={() => setSignUp(true)}
        type="button"
        className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
      >
        Sign Up
      </button>
    </p>
  </form>
  )
}

export default Login
