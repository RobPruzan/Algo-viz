type AlgoInfoProps = {
  title: string;
  description: string;
  gradient?: string;
};

const AlgoInfo = ({ description, title }: AlgoInfoProps) => {
  return (
    <div className="mx-3 my-6 flex w-52  cursor-pointer flex-col items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center shadow-xl transition-transform ease-linear hover:scale-105 hover:shadow-xl sm:h-32 md:h-48 md:w-64">
      <p className="font-semibold text-white ">{title}</p>
      <p className="font-light text-slate-700">{description}</p>
    </div>
  );
};

export default AlgoInfo;
