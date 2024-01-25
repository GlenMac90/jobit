const FormattedText = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string;
}) => {
  return (
    <p className="text-black_white regular-16 md:regular-18">
      {leftText}
      <span className="text-natural-7"> {rightText}</span>
    </p>
  );
};

export default FormattedText;
