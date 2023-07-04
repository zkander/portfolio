import Image from "next/image";
import EarthModel from "./component/Earth/Earth";

export default function Home() {
  return (
    <div className=" h-[60%] w-[60%] right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <EarthModel />
    </div>
  );
}
