import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from 'react';

interface WarpContextType {
  warping: boolean;
  triggerWarp: () => void;
}

const WarpContext = createContext<WarpContextType>({
  warping: false,
  triggerWarp: () => {},
});

export function WarpProvider({ children }: { children: ReactNode }) {
  const [warping, setWarping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const triggerWarp = useCallback(() => {
    if (warping) return;
    setWarping(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setWarping(false), 900);
  }, [warping]);

  return <WarpContext.Provider value={{ warping, triggerWarp }}>{children}</WarpContext.Provider>;
}

export const useWarp = () => useContext(WarpContext);
