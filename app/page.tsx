import Image from "next/image";
import EarthModel from "./components/Earth";

export default function Home() {
  return (
    <div className=" h-[30%] w-[100%] right-0 absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
      <EarthModel />
    </div>
  );
}
