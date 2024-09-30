import { Link } from "react-router-dom";
import { usePath } from "../../hooks/usePath";

export default function LinKHeader({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  const { isCurrentPage } = usePath();
  return (
    <Link
      to={to}
      className='flex flex-col h-full items-center justify-end group'>
      <span className=' text-lg pt-5 font-medium p-4'>{label}</span>
      <div
        className={`w-full h-1 ${
          isCurrentPage(to) && "bg-blue-500"
        } text-end group-hover:bg-blue-500`}></div>
    </Link>
  );
}
