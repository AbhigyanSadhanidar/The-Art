import { FormEvent, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useAuth } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert("Something went wrong");
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="row flex  flex-center">
      <div className="">LOGIN TO YOUR ACCOUNT</div>
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={"button block"} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
