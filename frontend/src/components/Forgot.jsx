import { useForm } from "react-hook-form";
import { useForgot } from "./useForgot";
import { useState } from "react";

function Forgot() {
  const [message, setMessage] = useState(null);
  const { handleSubmit, register } = useForm();
  const { forgetPassword, isLoading, isError } = useForgot();

  function onSubmit(data) {
    forgetPassword(
      { ...data },
      {
        onSuccess: (data) => {
          setMessage(data.message);
        },
      }
    );
  }

  return (
    <main className="form-signin w-100 m-auto">
      {(message || isError) && (
        <p className={isError ? `alert alert-danger` : `alert alert-success`}>
          {isError ? "Something went wrong" : message}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 fw-normal">Please put your email</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-2"
            id="floatingInput"
            placeholder="name@example.com"
            {...register("email", { required: "Email is required" })}
            disabled={isLoading}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          disabled={isLoading}
        >
          Send Me
        </button>
      </form>
    </main>
  );
}

export default Forgot;
