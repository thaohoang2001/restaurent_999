import React from "react";

type Props = {
  leftTitle: string;
  leftSubTitle: string;
  nodeRight: React.ReactNode;
};

const TopPart = ({ leftTitle, leftSubTitle, nodeRight }: Props) => {
  return (
    <div className="px-[72px] py-7 flex justify-between items-center border-b border-b-grey-ed">
      <div>
        <p className="m-0 text-2xl leading-[25.2px] font-[SVN-SemiBold]">{leftTitle}</p>
        <p className="m-0 mt-1 leading-5 font-[SVN-Regular] text-secondart text-[15px]">{leftSubTitle}</p>
      </div>
      {nodeRight}
    </div>
 
  );
};

export default TopPart;
