function ControlList() {
  return (
    <div className="mb-4 h-14 text-sm lg:mb-6 lg:pl-0">
      <div className="flex h-[55px] items-center justify-start">
        <div className="mr-2">
          <div className="flex min-w-[150px] items-center rounded-lg bg-white/[0.07] px-4 py-2.5">
            Order by:{" "}
            <select
              name="order"
              title="order"
              className="bg-transparent font-bold focus:outline-none"
            >
              <option value="">popular</option>
              <option value="">date</option>
            </select>
          </div>
        </div>
        <div className="mr-2"></div>
      </div>
    </div>
  );
}

export default ControlList;
