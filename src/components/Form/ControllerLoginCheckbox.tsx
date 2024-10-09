import { InputHTMLAttributes, forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import IconChecked from "../Icon/checked";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputAdditionClass?: string;
  twColor?: string;
  name: string;
  control: Control<any>;
}

const ControllerLoginCheckbox = forwardRef(
  ({ label, control, name, ...checkboxProps }: Props, ref) => {
    console.log(ref,"123")
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex items-center gap-[7px] mt-[26px]">
            <div className="rk-checkbox-wrapper">
              <input
                {...field}
                {...checkboxProps}
                type="checkbox"
                className={`ml-2 login-checkbox rounded-radius-base border border-login-button ${
                  field.value ? "rk-checked" : ""
                }`}
              />
              <IconChecked additionClass="rk-checked-icon" />
            </div>

            <label className="text-first-black text-size-base font-['SVN-Medium']">
              {label ?? ""}
            </label>
          </div>
        )}
      />
    );
  }
);

export default ControllerLoginCheckbox;
