const FormattedText = ({
  leftText,
  rightText,
  reverse = false,
}: {
  leftText: string;
  rightText: string;
  reverse?: boolean;
}) => {
  return (
    <p
      className={
        reverse ? "text-natural-7" : "text-black_white regular-16 md:regular-18"
      }
    >
      {leftText}
      <span
        className={
          reverse
            ? "text-black_white regular-16 md:regular-18"
            : "text-natural-7"
        }
      >
        {" "}
        {rightText}
      </span>
    </p>
  );
};

export default FormattedText;
