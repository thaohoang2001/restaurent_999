export type ITHead = {
  label: string;
  position: "left" | "right" | "center";
  key: string;
  additionClass?: string;
  subkeyAdditionClass?: string;
  subKey?: string;
};

type Props = {
  data: ITHead[];
};

const TableHead = ({ data }: Props) => {
  return (
    <thead className="bg-grey-f6">
      <tr>
        {data.map(({ label, position, key, additionClass }) => (
          <td
            key={label + "-" + key}
            className={` text text-size-medium font-['SVN-SemiBold'] leading-5 text-first-black py-[12px] px-[26px] ${additionClass} text-${position}`}
          >
            {label}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
