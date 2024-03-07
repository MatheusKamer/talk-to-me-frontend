import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { SendMessage } from "@/Icons";
import { SocketContext } from "@/contexts/SocketContext";

interface iChatMessage {
  message: string;
  username: string;
  roomId: string;
  time: string;
}

export default function Chat({ roomId }: { roomId: string }) {
  const currentMessage = useRef<HTMLInputElement>(null)
  const { socket } = useContext( SocketContext )
  const [chat, setChat] = useState<iChatMessage[]>([]);

  useEffect(() => {
    socket?.on('chat', (data) => {
      console.log('message: ', data)
      setChat((prevState) => [...prevState, data])
    })
  },[socket])

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(currentMessage.current && currentMessage.current?.value !== '') {
      const sendMessageToServer = {
        message: currentMessage.current.value,
        username: 'Matheus Kamer',
        roomId,
        time: new Date().toLocaleTimeString(),
      };

      socket?.emit('chat', sendMessageToServer);
      setChat((prevState) =>
        [
          ...prevState,
          sendMessageToServer
        ]
      );

      currentMessage.current!.value = '';
    }
  }

  return (
    <div className="md:flex flex-col justify-end h-full bg-gray-850 px-4 pt-4 w-[25%] hidden rounded-md m-3 overflow-auto">
      <div >
      {chat.map((chat, index) => (
        <div className="bg-gray-950 rounded p-2 mb-4 " key={index}>
          <div className="flex items-center space-x-2">
            <span>{chat.username}</span>
            <span>{chat.time}</span>
          </div>
          <div className="mt-4 text-sm">
            <p>{chat.message}</p>
          </div>
        </div>
      ))}
      </div>

      <form
        action=""
        onSubmit={(e) => sendMessage(e)}
        className="mb-4 flex relative items-center"
      >
        <input
          type="text"
          ref={currentMessage}
          className="p-2 w-full rounded-sm bg-gray-750"
        />
        <button className="absolute w-4 h-4 right-2" type="submit">
          <SendMessage />
        </button>
      </form>
    </div>
  );
}
