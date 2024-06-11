import { FC } from "react";
import { Link } from "react-router-dom";


type Props = {
    title: string;
    subTitle?: string;
    showButtom: boolean;
  };

  const NotFound: FC<Props> = ({title, showButtom, subTitle=''}) => {
  return (
    <div className="my-10 border border-gray-700 rounded-lg p-2">
    <h1 className="text-3xl font-bold text-center my-6">{title}</h1>
    <p className="text-lg font-bold text-center my-6">{subTitle}</p>

    {showButtom &&(
        <Link to='/' className='flex justify-center bg-gradient py-[5px] text-white min-w-full md:min-w-0 rounded-lg text-center px-5 hover:cursor-pointer md:w-auto mb-6'>
          Volver
       </Link>
    )}
 </div>

  );
};

export default NotFound;