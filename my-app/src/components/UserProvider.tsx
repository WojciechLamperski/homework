import { useContext, createContext, useState } from "react";

export const UserContext = createContext<any>(undefined);

export function UserProvider({ children }: any) {
  const [user, setUser]: any = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
