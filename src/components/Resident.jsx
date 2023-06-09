import axios from "axios";
import { useEffect, useState } from "react";

const Resident = ({residentURL}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
      "Alive" : "bg-green-500",
      "Dead" : "bg-red-500",
      "unknown" : "bg-gray-400"
    }

    useEffect(() => {
        axios.get(residentURL)
        .then(({data}) => setResidentInfo(data))
        .catch((err) => console.log(err))
    }, [])
  return (
    <article className="border-[#8EFF8B] border-2 font-fontTitle w-[280px] grid grid-cols[1fr 2fr] shadow-md shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-3">
      <div className="relative">
        <img src={residentInfo?.image} alt="" />
        <div className="flex gap-2 items-center absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 px-5 border-[#8EFF8B] border-2 ">
            <div className={`h-3 aspect-square  ${statusStyles[residentInfo?.status]} rounded-full`}></div>
            {residentInfo?.status}
        </div>
      </div>
      <section className="p-4 grid grid-rows-2">
        <h4 className="text-2xl py-1 tracking-wide font-semibold flex items-center">{residentInfo?.name}</h4>
        <ul className="text-sm flex gap-2 flex-wrap">
          <li className="flex gap-10">
            <h3 className="text-[#938686]">Species:</h3> <span>{residentInfo?.species}</span>
          </li>
          <li className="flex gap-10">
            <h3 className="text-[#938686]">Origin:</h3> <span>{residentInfo?.origin.name}</span>
          </li>
          <li className="flex gap-5">
            <h3 className="text-[#938686]">Times appear:</h3> <span>{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};
export default Resident;
