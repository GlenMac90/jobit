import Image from "next/image";

import { jobItLogo, jobItText } from "@/public";

const JobItLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <Image src={jobItLogo} height={20} width={20} alt="Logo for Jobit" />
      <Image src={jobItText} height={15} width={60} alt="Text for Jobit" />
    </div>
  );
};

export default JobItLogo;
