import { FC } from "react";


type Props = {
    content: string;
  };

  const NotFound: FC<Props> = ({content}) => {
  return (
    <div className="w-11/12 mx-auto mb-10 border border-gray-700 rounded-lg p-2 mt-10">
    <h1 className="text-3xl font-bold text-center my-6">{content}</h1>
 </div>

  );
};

export default NotFound;