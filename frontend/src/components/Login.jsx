import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Login() {
  const { login, isLoading } = useLogin();
  const { handleSubmit, register } = useForm();
  const navigator = useNavigate();

  function onSubmit(data) {
    login({ ...data });
  }

  async function handleGoogleSuccessResponse(googleUser) {
    const { status } = await axios.post(
      "google-auth",
      {
        token: googleUser.credential,
      },
      { withCredentials: true }
    );

    if (status === 200) {
      navigator("/", { replace: true });
    }
  }
  function handleGoogleFailedResponse(e) {
    console.log(e.error);
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            {...register("email", { required: "Email is required" })}
            disabled={isLoading}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            {...register("password", { required: "password is required" })}
            disabled={isLoading}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="mb-3">
          <Link to="/forgot">Forgot password?</Link>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          disabled={isLoading}
        >
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
      </form>
      <GoogleLogin
        onSuccess={handleGoogleSuccessResponse}
        onError={handleGoogleFailedResponse}
        width="100%"
      />
    </main>
  );
}

export default Login;
