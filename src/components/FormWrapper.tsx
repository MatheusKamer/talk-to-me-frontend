'use client';
import { useState } from 'react';
import CreateRoom from './Create';
import JoinRoom from './Join';

export default function FormWrapper() {
  const [selectedRoom, setSelectedRoom] = useState<'create' | 'join'>('join');
  const handleSelectRoom = (room: 'create' | 'join') => {
    setSelectedRoom(room);
  };
  return (
    <div className="max-w-[580px] w-full ">
      <div className="flex mx-auto items-center space-x-6 text-center ">
        <span
          className={`cursor-pointer w-1/2  p-4 ${
            selectedRoom === 'join' &&
            ' bg-gray-850 rounded-t-lg  text-ciano-100'
          }`}
          onClick={() => handleSelectRoom('join')}
        >
          Ingressar
        </span>
        <span
          className={`cursor-pointer w-1/2  p-4 ${
            selectedRoom === 'create' &&
            ' bg-gray-850 rounded-t-lg  text-ciano-100'
          }`}
          onClick={() => handleSelectRoom('create')}
        >
          Nova reunião
        </span>
      </div>
      <div className="space-y-8 bg-gray-850 p-10 rounded-b-lg">
        <RoomSelector selectedRoom={selectedRoom} />
      </div>
    </div>
  );
}

const RoomSelector = ({ selectedRoom }: { selectedRoom: string }) => {
  switch (selectedRoom) {
    case 'create':
      return <CreateRoom />;
    case 'join':
      return <JoinRoom />;
    default:
      return <JoinRoom />;
  }
};
