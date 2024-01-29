import { Call, Camera, Microfone, Tela } from "@/Icons";
import Container from "./Container";

export default function Footer() {
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
            <Microfone className="h-10 w-14 text-white p-1 bg-gray-950 rounded-md cursor-pointer" />
            <Camera className="h-10 w-14 text-white p-1 bg-gray-950 rounded-md cursor-pointer" />
            <Tela className="h-10 w-14 text-white p-1 bg-gray-950 rounded-md cursor-pointer" />
            <Call className="h-10 w-14 text-white p-1 bg-ciano-100 rounded-md cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
}
