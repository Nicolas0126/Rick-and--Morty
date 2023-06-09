import { useEffect, useState } from "react";
import Resident from "./Resident";
import { paginationLogic } from "../utils/pagination";


const FIRST_PAGE = 1

const ResidentList = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

  const {pages, residentsInPage} =  paginationLogic(currentPage, residents)

  useEffect(() => {
    setCurrentPage(FIRST_PAGE)
  }, [location])

  return (
    <section className="px-3">
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto p-6 ">
        {residentsInPage?.map((resident) => (
          <Resident residentURL={resident} key={resident} />
        ))}
      </section>

      {/* Paginación */}
      <section className="flex justify-center gap-6 flex-wrap p-8">
        {
            pages.map(page =>
               <button
                key={page}
                onClick={() => setCurrentPage(page)} 
                className={`px-3 rounded-md ${currentPage === page ? "bg-[#062226] px-4" : "bg-black p-2"}`}>{page}</button>)
        }
      </section>
    </section>
  );
};
export default ResidentList;
