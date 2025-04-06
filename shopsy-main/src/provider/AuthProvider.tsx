import { Session, User } from "@supabase/supabase-js";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../utils/supabaseClient";
// import { ActivityIndicator } from "react-native";

type Auth = {
  isAuthenticated: boolean;
  session: Session | null;
  user?: User;
};
const AuthContext = createContext<Auth>({
  isAuthenticated: false,
  session: null,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsReady(true);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  if (!isReady) {
    return <div>Loading</div>;
  }
  return (
    <AuthContext.Provider
      value={{ session, user: session?.user, isAuthenticated: !!session?.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
