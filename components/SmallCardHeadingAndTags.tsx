import Image from "next/image";

const SmallCardHeadingAndTags = ({
  image,
  jobTitle,
  techTags,
  dark = false,
}: {
  image: string;
  jobTitle: string;
  techTags?: string[];
  dark?: boolean;
}) => {
  return (
    <div className="flex gap-5">
      <div
        className={`${dark ? "bg-natural-2_darkBG-2" : "bg-natural-2_darkBG-3"}  flex size-[2.875rem] shrink-0 rounded-lg p-2 md:size-[4rem] md:rounded-ten md:p-2.5`}
      >
        <Image
          src={image || "/jobit-logo.svg"}
          alt={jobTitle}
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col justify-between gap-3 overflow-x-hidden">
        <span className="label-styles">{jobTitle}</span>
        <div className="hide-scrollbar flex gap-1 overflow-scroll">
          {techTags &&
            techTags.map((tag) => (
              <span
                key={tag}
                className={`${dark ? "dark-badge-styles" : "badge-styles"}`}
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SmallCardHeadingAndTags;
