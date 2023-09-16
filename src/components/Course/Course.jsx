import { FiDollarSign, FiBookOpen } from "react-icons/fi";
const Course = ({ course }) => {
  const { id, img, title, description, price, credit_hour } = course;
  console.log(course);
  return (
    <div className="p-4 w-[312px] h-[402px] border  rounded-xl">
      <img className="rounded-lg" src={img} alt="" />
      <h2 className="mt-4 mb-3 text-lg font-semibold text-[#1C1B1B]">
        {title}
      </h2>
      <p className="mb-4 text-sm opacity-60 text-[##1C1B1B99]">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-base font-semibold text-[#1C1B1B] opacity-60">
          <FiDollarSign className="text-2xl"></FiDollarSign>
          <span>Price: {price}</span>
        </div>
        <div className="flex items-center gap-3 text-base font-semibold text-[#1C1B1B] opacity-60">
          <FiBookOpen className="text-2xl"></FiBookOpen>
          <span>Credit: {credit_hour}hr</span>
        </div>
      </div>
      <button className="text-lg font-semibold text-[#FFF] w-full mt-6 bg-[#2F80ED] py-2 rounded-lg hover:bg-blue-600 duration-200">
        Select
      </button>
    </div>
  );
};

export default Course;
