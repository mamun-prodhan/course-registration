import PropTypes from "prop-types";
const Cart = ({
  selectedCourses,
  totalCreditHour,
  totalRemainingHour,
  totalPrice,
}) => {
  return (
    <div className="w-1/4">
      <h3 className="text-lg font-bold text-[#2F80ED] p-6 border-b-2">
        Credit Hour Remaining {totalRemainingHour} hr
      </h3>
      <div className="p-6">
        <div>
          <h3 className="mb-5 text-xl font-bold text-[#1C1B1B]">Course Name</h3>
          <ol className="ps-4">
            {selectedCourses.map((course, idx) => (
              <li
                className="text-base text-[#1C1B1B] opacity-60 list-decimal mb-1"
                key={idx}
              >
                {course.title}
              </li>
            ))}
          </ol>
        </div>
        <p className="py-4 border-y-2 text-base font-semibold text-[#1C1B1BCC] opacity-80">
          Total Credit Hour: {totalCreditHour}
        </p>
        <p className="pt-4 text-base font-semibold  text-[#1C1B1BCC] opacity-80">
          Total Price: {totalPrice} USD
        </p>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.array,
  totalCreditHour: PropTypes.number,
  totalRemainingHour: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Cart;
