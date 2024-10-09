import BasePage from "@/layouts/base-page";
import "./style.scss";
import BaseButton from "@/components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { requireMessage } from "@/utils/string.utils";
import { useForm } from "react-hook-form";
import ControllerMultiSelect from "@/components/Form/ControllerMultiSelect";
import ControllerSearchInput from "@/components/Form/ControllerSearchInput";
import TableHead, { ITHead } from "@/components/Table/TableHead";
import TableBody from "@/components/Table/TableBody";
import BaseTag from "@/components/Tag";
import IconDuplicate from "@/components/Icon/duplicate";
import IconQrCode from "@/components/Icon/qrcode";
import IconEye from "@/components/Icon/eye";
import IconEdit from "@/components/Icon/edit";
import IconTrash from "@/components/Icon/trash";
import IconThreeDot from "@/components/Icon/three-dot";
import DropdownMenu from "@/components/DropdownMenu";
import { v4 as uuid } from "uuid";
import IconMineCart from "@/components/Icon/mine-cart";
import { useState } from "react";
import OutsideDetectWrapper from "@/hocs/OutsideDetectWrapper";
import IconGreyXSquare from "@/components/Icon/grey-x-square";
import IconGreyCheckedSquare from "@/components/Icon/grey-checked-square";

const schema = yup
  .object({
    username: yup.string().required(requireMessage("Tài khoản")),
    password: yup.string().required(requireMessage("Mật khẩu")),
  })
  .required();

const draft_waiting_action = [
  { id: uuid(), label: "Xem trước", icon: <IconEye /> },
  { id: uuid(), label: "Chỉnh sửa nhãn", icon: <IconEdit /> },
  { id: uuid(), label: "Mua thêm nhãn", icon: <IconMineCart /> },
  { id: uuid(), label: "Xóa nhãn", icon: <IconTrash /> },
];

const active_action = [
  { id: uuid(), label: "Xem trước", icon: <IconEye /> },
  { id: uuid(), label: "Chỉnh sửa nhãn", icon: <IconEdit /> },
  { id: uuid(), label: "Mua thêm nhãn", icon: <IconMineCart /> },
  { id: uuid(), label: "Vô hiệu hóa", icon: <IconGreyXSquare /> },
];

const deactive_action = [
  { id: uuid(), label: "Xem trước", icon: <IconEye /> },
  { id: uuid(), label: "Chỉnh sửa nhãn", icon: <IconEdit /> },
  { id: uuid(), label: "Mua thêm nhãn", icon: <IconMineCart /> },
  { id: uuid(), label: "Kích hoạt nhãn", icon: <IconGreyCheckedSquare /> },
];

const list_head: ITHead[] = [
  { label: "STT", position: "center", key: "index", additionClass: "w-[5%]" },
  {
    label: "Mã nhãn dán",
    position: "left",
    key: "code",
    additionClass: "w-[10%]",
  },
  { label: "Tên sản phẩm", position: "left", key: "product_name" },
  {
    label: "Số lượng đặt",
    position: "right",
    key: "order_amount",
    additionClass: "w-[10%]",
  },
  {
    label: "Trạng thái",
    position: "left",
    key: "status",
    additionClass: "w-[10%]",
  },
  {
    label: "Thao tác",
    position: "center",
    key: "action",
    additionClass: "w-[20%]",
  },
];

type Props = {};

const DigitalProductPassportPage = ({}: Props) => {
  const {
    // handleSubmit,
    control,
    // reset,
    // watch,
    // formState: { errors },
  } = useForm<any>({
    defaultValues: {
      username: "admin107",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const [expandRowAction, setExpandRowAction] = useState<string | null>(null);

  return (
    <BasePage
      topLeftTitle="Danh sách nhãn dán điện tử"
      topLeftSubTitle="Tổ chức, cá nhân ghi nhãn phải chịu trách nhiệm về tính chính xác, trung thực của nội dung ghi"
      topNodeLeft={<BaseButton title="Khai báo nhãn mới" uiType="second" />}
      bottomRightNode={<></>}
    >
      <div className="flex w-full gap-4">
        <ControllerSearchInput
          placeholder="Tìm kiếm theo tên sản phẩm, mã nhãn"
          name="keyword"
          control={control}
          containerAdditionClass="flex-1"
        />
        <ControllerMultiSelect
          placeholder="Tất cả nhóm sản phẩm"
          name="product_type"
          control={control}
          inputAdditionClass="min-w-[207px]"
        />
        <ControllerMultiSelect
          placeholder="Tất cả trạng thái"
          name="status"
          control={control}
          inputAdditionClass="min-w-[207px]"
        />
        <BaseButton title="Tìm kiếm" />
      </div>
      <div className="w-full mt-8">
        <table className="w-full">
          <TableHead data={list_head} />
          <TableBody
            list_head={list_head}
            data={[
              {
                index: 1,
                code: "DPP0004",
                category: "Sản phẩm nhựa, cao su",
                product_name: "Cao Su Nhựa Đức Vượng",
                order_amount: 0,
                status: <BaseTag additionClass="!w-[128px]" label="Bản nháp" />,
                action: (
                  <div className="flex justify-center gap-[8px]">
                    <BaseTag
                      additionClass="cursor-pointer"
                      label="QR"
                      firstIcon={<IconQrCode />}
                    />
                    <BaseTag
                      additionClass="cursor-pointer"
                      label="Nhân bản"
                      firstIcon={<IconDuplicate />}
                    />
                    <BaseTag
                      onClick={() => {
                        if (expandRowAction === "1") {
                          setExpandRowAction(null);
                        } else {
                          setExpandRowAction("1");
                        }
                      }}
                      additionClass="cursor-pointer relative"
                      absoluteChildNode={
                        <OutsideDetectWrapper
                          callback={() => setExpandRowAction(null)}
                        >
                          <DropdownMenu
                            additionClass={`absolute z-[1] w-[253px] top-[110%] right-0 ${
                              expandRowAction === "1" ? "flex" : "hidden"
                            }`}
                            data={draft_waiting_action}
                            onClickRow={(e) => {
                              console.log(e);
                            }}
                          />
                        </OutsideDetectWrapper>
                      }
                      firstIcon={<IconThreeDot />}
                    />
                  </div>
                ),
              },
              {
                index: 3,
                code: "DPP0002",
                category: "Sản phẩm nhựa, cao su",
                product_name: "Cao su nhựa PU PolyUrethane",
                order_amount: 0,
                status: (
                  <BaseTag
                    additionClass="!!w-[128px]"
                    uiType="waiting"
                    label="Chờ kích hoạt"
                  />
                ),
                action: (
                  <div className="flex justify-center gap-[8px]">
                    <BaseTag label="QR" firstIcon={<IconQrCode />} />
                    <BaseTag label="Nhân bản" firstIcon={<IconDuplicate />} />
                    <BaseTag
                      onClick={() => {
                        if (expandRowAction === "3") {
                          setExpandRowAction(null);
                        } else {
                          setExpandRowAction("3");
                        }
                      }}
                      additionClass="cursor-pointer relative"
                      absoluteChildNode={
                        <DropdownMenu
                          additionClass={`absolute z-[1] w-[253px] top-[110%] right-0 ${
                            expandRowAction === "3" ? "flex" : "hidden"
                          }`}
                          data={draft_waiting_action}
                          onClickRow={(e) => {
                            console.log(e);
                          }}
                        />
                      }
                      firstIcon={<IconThreeDot />}
                    />
                  </div>
                ),
              },
              {
                index: 4,
                code: "DPP0001",
                category: "Sản phẩm dệt, may, da, giầy",
                product_name: "Vải dệt thoi từ bông",
                order_amount: 50,
                status: (
                  <BaseTag
                    additionClass="!w-[128px]"
                    label="Đã kích hoạt"
                    uiType="active"
                  />
                ),
                action: (
                  <div className="flex justify-center gap-[8px]">
                    <BaseTag label="QR" firstIcon={<IconQrCode />} />
                    <BaseTag label="Nhân bản" firstIcon={<IconDuplicate />} />
                    <BaseTag
                      onClick={() => {
                        if (expandRowAction === "4") {
                          setExpandRowAction(null);
                        } else {
                          setExpandRowAction("4");
                        }
                      }}
                      additionClass="cursor-pointer relative"
                      absoluteChildNode={
                        <DropdownMenu
                          additionClass={`absolute z-[1] w-[253px] top-[110%] right-0 ${
                            expandRowAction === "4" ? "flex" : "hidden"
                          }`}
                          data={active_action}
                          onClickRow={(e) => {
                            console.log(e);
                          }}
                        />
                      }
                      firstIcon={<IconThreeDot />}
                    />
                  </div>
                ),
              },
              {
                index: 5,
                code: "DPP0000",
                category: "Sản phẩm dệt, may, da, giầy",
                product_name: "Vải dệt thoi từ bông",
                order_amount: 50,
                status: (
                  <BaseTag
                    additionClass="!w-[128px]"
                    label="Vô hiệu hóa"
                    uiType="disabled"
                  />
                ),
                action: (
                  <div className="flex justify-center gap-[8px]">
                    <BaseTag label="QR" firstIcon={<IconQrCode />} />
                    <BaseTag label="Nhân bản" firstIcon={<IconDuplicate />} />
                    <BaseTag
                      onClick={() => {
                        if (expandRowAction === "5") {
                          setExpandRowAction(null);
                        } else {
                          setExpandRowAction("5");
                        }
                      }}
                      additionClass="cursor-pointer relative"
                      absoluteChildNode={
                        <DropdownMenu
                          additionClass={`absolute z-[1] w-[253px] top-[110%] right-0 ${
                            expandRowAction === "5" ? "flex" : "hidden"
                          }`}
                          data={deactive_action}
                          onClickRow={(e) => {
                            console.log(e);
                          }}
                        />
                      }
                      firstIcon={<IconThreeDot />}
                    />
                  </div>
                ),
              },
            ]}
          />
        </table>
      </div>
    </BasePage>
  );
};

export default DigitalProductPassportPage;
