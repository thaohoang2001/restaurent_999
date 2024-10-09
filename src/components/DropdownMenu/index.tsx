import React from "react";

type IData = {
  label?: string;
  icon?: React.ReactNode;
  id: string;
};

type Props = {
  data: IData[];
  onClickRow: React.MouseEventHandler<HTMLDivElement> | undefined;
  additionClass?: string;
};

const DropdownMenu = ({ data, onClickRow, additionClass }: Props) => {
  return (
    <div
      className={`${additionClass} border border-grey-ec rounded-radius-base p-4 flex flex-col gap-1 bg-white`}
    >
      {data.map(({ label, icon, id }) => (
        <div
          key={id}
          onClick={onClickRow}
          className="account-menu flex items-center gap-[10px] font-['SVN-Regular'] hover:font-['SVN-SemiBold'] hover:text-login-button py-[11px] px-4 hover:bg-grey-f6"
        >
          {icon}
          {label}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
