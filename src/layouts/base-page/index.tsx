import { PropsWithChildren } from "react";
import TopPart from "./top";
import BottomPart from "./bottom";

interface Props extends PropsWithChildren {
  topNodeLeft: React.ReactNode;
  topLeftTitle: string;
  topLeftSubTitle: string;
  bottomRightNode: React.ReactNode;
}

const BasePage = (props: Props) => {
  return (
    <div>
      {/* <TopPart
        leftTitle={props.topLeftTitle}
        leftSubTitle={props.topLeftSubTitle}
        nodeRight={props.topNodeLeft}
      /> */}
      <div className="px-[72px] py-7">{props.children}</div>
      {/* <BottomPart rightNode={props.bottomRightNode} /> */}
    </div>
  );
};

export default BasePage;
