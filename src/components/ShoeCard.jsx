const ShoeCard = ({ ImgData, bigShoeImg, changeBigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImg !== ImgData.bigShoe) {
      changeBigShoeImage(ImgData.bigShoe);
    }
  };

  return (
    <>
      <button
        className={`border-2 rounded-xl
        ${
          bigShoeImg === ImgData.bigShoe
            ? "border-coral-blue"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1
      `}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center h-full bg-gradient-to-b from-red-100 to-teal-100 flex-1 rounded-xl max-sm:p-4 bg-cover bg-center">
          <img
            src={ImgData.bigShoe}
            alt="shoe"
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </button>
    </>
  );
};

export default ShoeCard;
