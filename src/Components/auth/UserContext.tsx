// UserContext.tsx
import { createContext, useContext, useState } from 'react';
import { User } from 'firebase/auth';

interface UserContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
