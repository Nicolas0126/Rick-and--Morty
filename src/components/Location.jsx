import axios from "axios";
import { randomDimension } from "../utils/random";
import "../styles/location.css"

const Location = ({ location, setLocation }) => { 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  

  return (
    <section className="flex flex-col gap-6" >
      {/* Input de búsqueda */}
      <div className=" w-[220px] sm:w-[300px] m-auto relative flex justify-center items-center">
      <img className="portal m-auto" src="/public/portal4.png" alt="" />
      <img className="w-[300px] absolute z-10 left-0 " src="/title.png" alt="" />
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center p-6  " action="">
        <input
          required
          id="newLocation"
          className="text-neutral-300 bg-black/70 border-[#8EFF8B] border-2  sm:pl-3 sm:pr-12 py-2 "
          type="text"
          placeholder="Type a Location ID..."
        />
        <button className="border-[#8EFF8B] border-2 bg-[#8EFF8B]/50 px-2 sm:px-4 flex gap-2 items-center">
          Search <i className="bx bx-search-alt-2"></i>
        </button>
      </form>
      {/* Info location */}
      <section className="text-center  w-[280px] m-auto grid gap-3 sm:w-[60%] font-fontTitle">
        <h2 className="p-2 text-3xl text-[#8EFF8B] font-bold ">{location?.name}</h2>
        <ul className="grid py-2 gap-5 px-3 text-xs sm:text-lg grid-cols-3">
          <li> <p className="uppercase font-bold text-zinc-400">Type: </p> {location?.type}</li>
          <li> <p className="uppercase font-bold text-zinc-400">Dimension:</p>{location?.dimension}</li>
          <li> <p className="uppercase font-bold text-zinc-400">Population: </p>{location?.residents.length}</li>
        </ul>
      </section>
    </section>
  );
};
export default Location;
