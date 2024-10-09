import { InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";
import BaseDropdown from "./BaseDropdown";

interface OptionProps {
  name: string;
  value: string;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  control: Control<any>;
  twColor?: string;
  inputAdditionClass?: string;
  labelAdditionClass?: string;
  data: OptionProps[];
}

const ControllerFormDropdown = ({
  control,
  name,
  label,
  inputAdditionClass,
  labelAdditionClass,
  data,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, formState: { errors } }) => {
        return (
          <div className="flex flex-col gap-1">
            <BaseDropdown
              name={name}
              label={label}
              data={data}
              inputAdditionClass={inputAdditionClass}
              labelAdditionClass={labelAdditionClass}
              errors={errors}
              field={field}
            />
          </div>
        );
      }}
    />
  );
};

export default ControllerFormDropdown;
