import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useReset } from "./useReset";

function ResetPassword() {
  const { token } = useParams();

  const { register, handleSubmit } = useForm();

  const { reset } = useReset();
  function onsubmit(data) {
    reset({ ...data, token });
  }
  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit(onsubmit)}>
        <h1 className="h3 mb-3 fw-normal">Reset Password</h1>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
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
          />
          <label htmlFor="confirm_password">Confirm Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default ResetPassword;
