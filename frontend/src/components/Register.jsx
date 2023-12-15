import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigator = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { signUp, isSignup } = useRegister();
  function onsubmit(data) {
    signUp(
      { ...data },
      {
        onSettled: () => {
          navigator("/login");
        },
      }
    );
  }
  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit(onsubmit)}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="first_name"
            placeholder="John"
            {...register("first_name", { required: "First Name is required" })}
            disabled={isSignup}
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        {errors?.first_name?.message}
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="last_name"
            placeholder="Doe"
            {...register("last_name", { required: "Last Name is required" })}
            disabled={isSignup}
          />
          <label htmlFor="last_name">Last Name</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="address"
            {...register("address", { required: "Address is required" })}
            disabled={isSignup}
          />
          <label htmlFor="address">Address</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            {...register("email", { required: "Email is required" })}
            disabled={isSignup}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            disabled={isSignup}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            placeholder="Confirm Password"
            {...register("confirm_password", {
              required: "Confirm Password is required",
            })}
            disabled={isSignup}
          />
          <label htmlFor="confirm_password">Confirm Password</label>
        </div>

        <button
          disabled={isSignup}
          className="btn btn-primary w-100 py-2"
          type="submit"
        >
          Submit
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
      </form>
    </main>
  );
}

export default Register;
