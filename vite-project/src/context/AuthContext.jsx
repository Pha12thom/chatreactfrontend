import { createContext } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Milugo",
        
    });

  return <AuthContext.Provider 
  value={{
    user,
    setUser
  }}>{children}</AuthContext.Provider>;
};