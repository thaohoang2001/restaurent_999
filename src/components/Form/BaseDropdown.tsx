import { useEffect, useRef, useState } from "react";
import IconSearch from "../Icon/search";
import BaseInput from "./BaseInput";
import IconCheckedOpt from "../Icon/checkedOpt";
import IconXSquare from "../Icon/x-square";
import IconError from "../Icon/error";
import { ControllerRenderProps } from "react-hook-form";

interface Props {
  label?: string;
  labelAdditionClass?: string;
  inputAdditionClass?: string;
  twColor?: string;
  data: OptionProps[];
  name: string;
  placeHolder?: string;
  errors: any;
  field: ControllerRenderProps<any, string>;
  required?: boolean;
}

interface OptionProps {
  name: string;
  value: string;
}

const BaseDropdown = ({
  label,
  labelAdditionClass = "",
  inputAdditionClass = "",
  data,
  name,
  placeHolder,
  errors,
  field,
  required,
}: Props) => {
  const [showOptions, setShowOption] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<OptionProps[]>(data);

  useEffect(() => {
    if (!keyword) {
      setFilteredOptions(data);
    } else {
      const filtered = data.filter((option) =>
        option.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [keyword, data]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectOption = (option: OptionProps) => {
    field?.onChange(option?.value);
    setShowOption(false);
    setKeyword("");
  };

  return (
    <div ref={dropdownRef} className="relative w-full flex flex-col">
      {label && (
        <div className="flex items-center gap-[2px] font-[SVN-Regular]">
          <label htmlFor={name} className={`${labelAdditionClass}`}>
            {label}
          </label>
          {required && <span className="text-base-error ml-1">*</span>}
        </div>
      )}

      <div className="relative flex flex-col gap-1">
        <input
          className={`rounded-radius-6 text-size-base outline-none bg-grey-f6 focus:bg-white focus:border focus:border-secondart py-[9px] pl-4 pr-[6px] ${inputAdditionClass} ${
            showOptions ? "border-[#001FC5]" : ""
          } ${errors[name] ? "!border-base-error" : ""}`}
          id={name}
          // readOnly
          onClick={() => setShowOption(!showOptions)}
          placeholder={placeHolder || `Chọn ${label}`}
          {...field}
          value={data.find((item) => field.value === item.value)?.name || ""}
        />
        {errors[name] && (
          <div className="text-base-error text-size-sm font-medium font-[SVN-Regular] flex items-center gap-1">
            <IconError /> {errors[name]?.message as string}
          </div>
        )}
        {field.value && (
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              setShowOption(true);
              setKeyword("");
              field?.onChange(null);
            }}
          >
            <IconXSquare />
          </span>
        )}
      </div>

      {/* Dropdown */}
      <div
        className={`absolute border bg-white border-grey-ec mt-2 rounded-radius-base p-4 shadow-white-sm top-[100%] left-0 right-0 ${
          showOptions ? "block" : "hidden"
        }`}
      >
        {/* Ô tìm kiếm */}
        <div className="flex items-center border border-dropdown-search-border rounded-radius-base pl-4">
          <IconSearch />
          <BaseInput
            inputAdditionClass="h-[34px] px-[16px] py-[6] border-none w-full"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* Danh sách kết quả lọc */}
        <ul className="mt-3 max-h-[136px] overflow-y-auto flex flex-col gap-1">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center justify-between text-dropdown-item-text text-size-base leading-[22px] py-[6px] px-4 hover:bg-dropdown-item-hover-bg hover:font-semibold hover:cursor-pointer rounded-radius-8 ${
                  field?.value === item.value
                    ? "bg-login-bg text-login-button font-semibold"
                    : ""
                }`}
                onClick={() => handleSelectOption(item)}
              >
                {item.name} {field?.value === item.value && <IconCheckedOpt />}
              </li>
            ))
          ) : (
            <li className="text-dropdown-item-text text-size-base text-center leading-[22px] py-[6px] px-4 rounded-radius-8">
              Không có dữ liệu
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BaseDropdown;
