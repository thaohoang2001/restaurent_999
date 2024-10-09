import Dialog from "@/components/Dialog";
import ControllerFormInput from "@/components/Form/ControllerFormInput";
import { requireMessage } from "@/utils/string.utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ControllerFormDropdown from "@/components/AutoComplete/ControllerFormDropdown";
import { apiCreateEnterprise } from "../service";
import { IEnterpriseRequest } from "../model";

type Props = {
  additionClass?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const schema = yup
  .object({
    username: yup.string().required(requireMessage("Tài khoản")),
    password: yup.string().required(requireMessage("Mật khẩu")),
    province_code: yup.string().required(requireMessage("Tỉnh/Thành phố")),
    district_code: yup.string().required(requireMessage("Quận/Huyện phố")),
    ward_code: yup.string().required(requireMessage("Xã/Phường")),
    code: yup.string().required(requireMessage("Mã số thuế")),
    name: yup.string().required(requireMessage("Tên doanh nghiệp")),
    email: yup.string().email().required(requireMessage("Tên doanh nghiệp")),
  })
  .required();

function CreateBusiness({ setOpen, isOpen }: Props) {
  const { handleSubmit, control, reset } = useForm<IEnterpriseRequest>({
    defaultValues: {
      username: "",
      password: "",
      province_code: "",
      district_code: "",
      ward_code: "",
      address: "",
      name: "",
      code: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = async (formData: IEnterpriseRequest) => {
    try {
      const res = await apiCreateEnterprise(formData);
      console.log("🚀 ~ onSubmit ~ res:", res.data);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
    handleClose();
  };

  return (
    <Dialog
      title="Tạo mới tài khoản doanh nghiệp"
      additionClass={isOpen ? "block" : "hidden"}
      onClose={handleClose}
      actionButtonCancel={handleClose}
      actionButtonConfirm={handleSubmit(onSubmit)}
    >
      <div className="max-w-[591px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-2 gap-4 items-end">
            <ControllerFormInput
              control={control}
              label="Tên tài khoản"
              inputAdditionClass="w-full"
              name="username"
              required={true}
            />
            <ControllerFormInput
              control={control}
              label="Mật khẩu"
              inputAdditionClass="w-full"
              name="password"
              type="password"
              required={true}
            />
          </div>
          <div className="grid grid-cols-1">
            <ControllerFormInput
              control={control}
              label="Mã số thuế"
              inputAdditionClass="w-full"
              name="code"
              required={true}
            />
          </div>
          <div className="grid-cols-1">
            <ControllerFormInput
              control={control}
              label="Tên doanh nghiệp"
              inputAdditionClass="w-full"
              name="name"
              required={true}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ControllerFormDropdown
              required={true}
              control={control}
              label="Tỉnh/Thành phố"
              inputAdditionClass="w-full"
              name="province_code"
              data={[
                {
                  value: "1",
                  name: "Hà Nội",
                },
                {
                  value: "2",
                  name: "Thái Bình",
                },
                {
                  value: "3",
                  name: "Hà Nam",
                },
                { value: "4", name: "Nghệ An" },
                { value: "5", name: "Hà Nội" },
                { value: "6", name: "Hà Tĩnh" },
                { value: "7", name: "Đà Nẵng" },
              ]}
            />
            <ControllerFormDropdown
              required={true}
              control={control}
              label="Quận/Huyện"
              inputAdditionClass="w-full"
              name="district_code"
              data={[
                {
                  value: "1",
                  name: "Đống Đa",
                },
                {
                  value: "2",
                  name: "Cầu Giấy",
                },
              ]}
            />
            <ControllerFormDropdown
              required={true}
              control={control}
              label="Xã/Phường"
              inputAdditionClass="w-full"
              name="ward_code"
              data={[
                {
                  value: "1",
                  name: "Dịch Vọng Hậu",
                },
                {
                  value: "2",
                  name: "Phú Đô",
                },
              ]}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <ControllerFormInput
              required={true}
              control={control}
              label="Địa chỉ"
              inputAdditionClass="w-full"
              name="address"
            />
          </div>
        </form>
      </div>
    </Dialog>
  );
}

export default CreateBusiness;
