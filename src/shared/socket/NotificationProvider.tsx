import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/features/authSlice";
import { NotificationData } from "./interface";

export type SocketContextProps = {
  notifications: NotificationData[];
  sendMessage: () => void;
  lastNotification?: NotificationData;
};

const SocketContext = React.createContext<SocketContextProps>({
  notifications: [],
  sendMessage: () => {},
});

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const clientRef = useRef<WebSocket | null>(null);
  const clientCloseRef = useRef<boolean>(false);

  const { user, token } = useSelector(currentUser);
  const socketUrl = useMemo(() => {
    if (user && token) {
      return `${import.meta.env.VITE_WEBSOCKET_URL}ws/${
        user.id
      }?token=${token}`;
    }
  }, [user, token]);

  const [messages, setMesssages] = useState<NotificationData[]>([]);
  const lastNotification = useMemo(
    () => (messages.length ? messages[messages.length - 1] : undefined),
    [messages]
  );

  const sendMessage = () => {
    if (clientRef.current) {
      setMesssages((prev) =>
        prev.map((message) => ({ ...message, marked: true }))
      );
      clientRef.current.send(JSON.stringify({ action: "register" }));
    }
  };

  const start = useCallback((url: string) => {
    const sock = new WebSocket(url);

    sock.onopen = () => {
      console.log("socket connected");
      clientRef.current = sock;
      clientCloseRef.current = false;
    };

    sock.onmessage = (e) => {
      console.log("socket recieved", e.data);
      setMesssages((prev) => [...prev, JSON.parse(e.data) as NotificationData]);
    };

    sock.onerror = (e) => {
      console.error("socket error", e);
    };

    sock.onclose = () => {
      console.log("socket closed");
      if (!clientCloseRef.current) {
        console.log("retry after 3s");
        setTimeout(() => start(url), 3000);
      }
    };
  }, []);

  const close = useCallback(() => {
    if (clientRef.current) {
      clientCloseRef.current = true;
      clientRef.current.close();
      clientRef.current = null;
    }
  }, []);

  // useEffect(() => {
  //   if (socketUrl) {
  //     start(socketUrl);
  //   } else {
  //     close();
  //   }

  //   return () => {
  //     close();
  //   };
  // }, [socketUrl, start, close]);

  return (
    <SocketContext.Provider
      value={{
        notifications: messages,
        sendMessage,
        lastNotification,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(SocketContext);
  return context;
};
