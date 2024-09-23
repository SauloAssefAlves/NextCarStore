//hook para mostrar qual a pagina atual
import { useLocation } from "react-router-dom";

export function usePath() {
  const isCurrentPage = (link: string) => {
    const { pathname } = useLocation();

    if (link === pathname) return true;

    return false;
  };

  return { isCurrentPage };
}
