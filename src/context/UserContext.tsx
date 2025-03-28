"use client";
import { getCurrentUser } from "@/services/AuthService";
import { TUser } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type IUserProviderValues = {
  user: TUser | null;
  isLoading: boolean;
  setUser: (user: TUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    try {
      const userData = await getCurrentUser(); // get current user data from JWT
      if (userData) {
        // Map the JwtPayload to TUser type
        // const user: TUser = {
        //   ...userData,
        //   email: userData.email || '',
        //   _id: userData._id || '',
        //   name: userData.name || '',
        //   phone: userData.phone || '',
        //   isBlocked: userData.isBlocked || false,
        //   role: userData.role || "customer",
        //   iat: userData.iat,
        //   exp: userData.exp,
        // };
        setUser(user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null); // set null in case of error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, setIsLoading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context == undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
