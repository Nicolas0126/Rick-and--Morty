export const paginationLogic = (currentPage, residents) => {

    // Excepción para el primer render
    if(!residents) {
        return {
            pages: [1],
            residentsInPage: []
        }
    }
    // Cantidad de residentes por página
    const RESIDENTS_PER_PAGE = 20;

    //Cantidad total de páginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);
    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
    const residentsInPage = residents.slice(sliceStart, sliceEnd);

    // Generación de las páginas a mostrar
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return {
        residentsInPage,
        pages
    }
  };