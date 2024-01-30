"use client";
import {
  Call,
  Camera,
  Microfone,
  NoCamera,
  NoMicrofone,
  NoScreen,
  Tela,
} from "@/Icons";
import Container from "./Container";
import { useState } from "react";

export default function Footer() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isScreenOff, setIsScreenOff] = useState(false);

  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0") + ":";
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return (
    <div className="fixed bottom-0 bg-black-100 py-6 w-full">
      <Container>
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <span className="text-xl">{hours + minutes}</span>
          </div>
          <div className="flex gap-4 justify-center">
            {isMuted ? (
              <NoMicrofone
                className="h-10 w-14 text-white p-2 bg-red-500 rounded-md cursor-pointer"
                onClick={() => setIsMuted(!isMuted)}
              />
            ) : (
              <Microfone
                className="h-10 w-14 text-white p-1 bg-gray-950 rounded-md cursor-pointer"
                onClick={() => setIsMuted(!isMuted)}
              />
            )}
            {isCameraOff ? (
              <NoCamera
                className="h-10 w-14 text-white p-2 bg-red-500 rounded-md cursor-pointer"
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            ) : (
              <Camera
                className="h-10 w-14 text-white p-1 bg-gray-950 rounded-md cursor-pointer"
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            )}
            {isScreenOff ? (
              <NoScreen
                className="h-10 w-14 text-white p-2 bg-red-500 rounded-md cursor-pointer"
                onClick={() => setIsScreenOff(!isScreenOff)}
              />
            ) : (
              <Tela
                className="h-10 w-14 text-white p-1 bg-gray-950 rounded-md cursor-pointer"
                onClick={() => setIsScreenOff(!isScreenOff)}
              />
            )}
            <Call className="h-10 w-14 text-white p-2 bg-ciano-100 rounded-md cursor-pointer hover:bg-red-500" />
          </div>
        </div>
      </Container>
    </div>
  );
}
