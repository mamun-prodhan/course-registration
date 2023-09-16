const Cart = () => {
  return (
    <div className="w-2/5">
      <h3 className="text-lg font-bold text-[#2F80ED] p-6 border-b-2">
        Credit Hour Remaining hr
      </h3>
      <div className="p-6">
        <h3 className="mb-5 text-xl font-bold text-[#1C1B1B]">Course Name</h3>
        <p className="py-4 border-y-2 text-base font-semibold text-[#1C1B1BCC] opacity-80">
          Total Credit Hour:
        </p>
        <p className="pt-4 text-base font-semibold  text-[#1C1B1BCC] opacity-80">
          Total Price: USD
        </p>
      </div>
    </div>
  );
};

export default Cart;
