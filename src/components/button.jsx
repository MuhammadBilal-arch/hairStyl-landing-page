export const Button = ({ text, onHandleClick , type , background }) => {
  return (
    <button
      onClick={onHandleClick}
      type={type || 'submit'}
      className={`shadow-right-bottom whitespace-nowrap px-5 sm:py-0.5   md:py-1 text-base font-medium ${background}`}
    >
        {text}
    </button>
  );
};
