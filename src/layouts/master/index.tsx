import { PropsWithChildren } from "react";
import MasterFooter from "./footer";
import MasterHeader from "./header";
import "./style.scss";

const MasterLayout = (props: PropsWithChildren) => {
  return (
    <div className="master-layout">
      <MasterHeader />
      {props.children}
      <MasterFooter />
    </div>
  );
};

export default MasterLayout;
