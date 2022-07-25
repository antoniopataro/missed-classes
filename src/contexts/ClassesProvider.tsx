import React, { useState, createContext, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface ClassesContextProps {
  classes: ClassProps[];
  addClass: (newClass: ClassProps) => void;
  removeClass: (id: string) => void;
  addMissedClass: (id: string) => void;
  removeMissedClass: (id: string) => void;
  updateRequiredPresence: (id: string, newRequiredPresence: number) => void;
  updateTotalClasses: (id: string, newTotalClasses: number) => void;
}

export interface ClassProps {
  name: string;
  presence: number;
  missedClasses: number;
  requiredPresence: number;
  totalClasses: number;
  id: string;
}

interface ClassesProviderProps {
  children: React.ReactNode;
}

export const ClassesContext = createContext({} as ClassesContextProps);

function ClassesProvider({ children }: ClassesProviderProps) {
  const [classes, setClasses] = useState<ClassProps[]>([]);

  const addClass = (newClass: ClassProps) => {
    const newArray = [...classes, newClass];

    setClasses(newArray);
    updateAsyncStorage(newArray);
  };

  const removeClass = (id: string) => {
    const newArray = classes.filter((item) => {
      if (item.id === id) {
        return;
      }
      return item;
    });

    setClasses(newArray);
    updateAsyncStorage(newArray);
  };

  const addMissedClass = (id: string) => {
    const newArray = classes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          missedClasses: item.missedClasses + 1,
          presence: Math.floor(((item.totalClasses - (item.missedClasses + 1)) * 100) / item.totalClasses),
        };
      }
      return item;
    });

    setClasses(newArray);
    updateAsyncStorage(newArray);
  };

  const removeMissedClass = (id: string) => {
    const newArray = classes.map((item) => {
      if (item.id === id && item.missedClasses > 0) {
        return {
          ...item,
          missedClasses: item.missedClasses - 1,
          presence: Math.floor(((item.totalClasses - (item.missedClasses - 1)) * 100) / item.totalClasses),
        };
      }
      return item;
    });

    setClasses(newArray);
    updateAsyncStorage(newArray);
  };

  const updateRequiredPresence = (id: string, newRequiredPresence: number) => {
    const newArray = classes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          requiredPresence: newRequiredPresence,
          presence: Math.floor(((item.totalClasses - item.missedClasses) * 100) / item.totalClasses),
        };
      }
      return item;
    });

    setClasses(newArray);
    updateAsyncStorage(newArray);
  };

  const updateTotalClasses = (id: string, newTotalClasses: number) => {
    const newArray = classes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          totalClasses: newTotalClasses,
          presence: Math.floor(((newTotalClasses - item.missedClasses) * 100) / item.totalClasses),
        };
      }
      return item;
    });

    setClasses(newArray);
    updateAsyncStorage(newArray);
  };

  const updateAsyncStorage = async (newClasses: ClassProps[]) => {
    try {
      const stringified = JSON.stringify(newClasses);
      await AsyncStorage.setItem("@userClasses", stringified);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getAsyncStorage = async () => {
      const storedData = await AsyncStorage.getItem("@userClasses");

      storedData != null ? setClasses(JSON.parse(storedData)) : null;
    };

    getAsyncStorage();
  }, []);

  return (
    <ClassesContext.Provider
      value={{
        classes,
        addClass,
        removeClass,
        addMissedClass,
        removeMissedClass,
        updateRequiredPresence,
        updateTotalClasses,
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
}

export default ClassesProvider;
