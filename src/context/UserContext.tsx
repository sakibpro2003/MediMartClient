// "use client";
// import { getCurrentUser } from "@/services/AuthService";
// import { TUser } from "@/types";
// import {
//   createContext,
//   Dispatch,
//   SetStateAction,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// type IUserProviderValues = {
//   user: TUser | null;
//   isLoading: boolean;
//   setUser: (user: TUser | null) => void;
//   setIsLoading: Dispatch<SetStateAction<boolean>>;
// };

// const UserContext = createContext<IUserProviderValues | undefined>(undefined);

// const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<TUser | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleUser = async () => {
//       try {
//         const userData = await getCurrentUser();
//         if (userData){
//           setUser(userData);
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//         setUser(null);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     handleUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, isLoading, setUser, setIsLoading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };

// export default UserProvider;

"use client";
import { getCurrentUser } from "@/services/AuthService";
import { TUser } from "@/types";
// import { IUser } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUserProviderValues {
  user: TUser | null;
  isLoading: boolean;
  setUser: (user: TUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;

