import { FormEvent, useContext, useEffect, useRef } from "react";
import { SendMessage } from "@/Icons";
import { SocketContext } from "@/contexts/SocketContext";

export default function Chat({ roomId }: { roomId: string }) {
  const currentMessage = useRef<HTMLInputElement>(null)
  const { socket } = useContext( SocketContext )

  useEffect(() => {
    socket?.on('chat', (data) => {
      console.log('message: ', data)
    })
  },[socket])

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(currentMessage.current?.value !== '') {
      const sendMessageToServer = {
        message: currentMessage.current?.value,
        username: 'Matheus Kamer',
        roomId,
        time: new Date().toLocaleTimeString
      };

      socket?.emit('chat', sendMessageToServer);

      currentMessage.current!.value = '';
    }
  }

  return (
    <div className="md:flex flex-col justify-between h-full bg-gray-850 px-4 pt-4 w-[25%] hidden rounded-md m-3">
      <div className="bg-gray-950 rounded p-2">
        <div className="flex items-center space-x-2">
          <span>Matheus Kamer</span>
          <span>21:03</span>
        </div>
        <div className="mt-4 text-sm">
          <p>text</p>
        </div>
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
        <SendMessage className=" absolute w-4 h-4 right-2" />
      </form>
    </div>
  );
}
