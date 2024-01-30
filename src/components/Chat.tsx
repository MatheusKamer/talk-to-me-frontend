import { SendMessage } from "@/Icons";

export default function Chat() {
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

      <form action="" className="mb-4 flex relative items-center">
        <input type="text" className="p-2 w-full rounded-sm bg-gray-750" />
        <SendMessage className=" absolute w-4 h-4 right-2" />
      </form>
    </div>
  );
}
