'use client'

import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SocketContext } from "@/contexts/SocketContext";
import { useContext, useEffect, useRef } from "react";

export default function Room({ params }: { params: { id: string } }) {
  const { socket } = useContext(SocketContext);
  const localStream = useRef<HTMLVideoElement>(null);
  const peerConnections = useRef<Record<string, RTCPeerConnection>>({})

  useEffect(() => {
    socket?.on('connect', async () => {
      console.log('Conectado');
      socket.emit('subscribe', {
        roomId: params.id,
        socketId: socket.id
      })
      await handleStartCamera()
    })
    socket?.on('newUserStart', (data) => {
      console.log('Usuário conectado na sala: ', data)
    })

    socket?.on('new user', (data) => {
      console.log('Usuário conectado', {data});
      createPeerConnection(data.socketId);
      socket.emit('newUserStart', {
        to: data.socketId,
        sender: socket.id
      })
    });
  },[socket, params.id])

  const createPeerConnection = (socketId: string) => {
    const config = {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };

    const peer = new RTCPeerConnection(config);

    peerConnections.current[socketId] = peer;
  }

  const handleStartCamera = async () => {
    const video = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: {
        noiseSuppression: true,
        echoCancellation: true,
      }
    })

    if (localStream.current) {
      localStream.current.srcObject = video;
    }
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="md:w-[75%] w-full mt-3 mx-3">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="bg-gray-950 w-full rounded-md h-full gap-4 p-2 relative">
              <video
                className="h-full w-full mirror-mode"
                autoPlay playsInline ref={localStream}
              />
              <span className="absolute bottom-3">teste</span>
            </div>
            <div className="bg-gray-950 w-full rounded-md h-full gap-4 p-2 relative">
              <video className="h-full w-full"></video>
              <span className="absolute bottom-3">Matheus Kamer</span>
            </div>
          </div>
        </div>
        <Chat roomId={params.id}/>
      </div>
      <Footer />
    </div>
  );
}
