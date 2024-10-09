import BasePage from "@/layouts/base-page";
import "./style.scss";
import BaseButton from "@/components/Button";
import { useForm } from "react-hook-form";
import ControllerSearchInput from "@/components/Form/ControllerSearchInput";
import TableHead, { ITHead } from "@/components/Table/TableHead";
import TableBody from "@/components/Table/TableBody";
import BaseTag from "@/components/Tag";
import IconEye from "@/components/Icon/eye";
import IconEdit from "@/components/Icon/edit";
import IconXSquare from "@/components/Icon/x-square";
import IconThreeDot from "@/components/Icon/three-dot";
import DropdownMenu from "@/components/DropdownMenu";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import IconLock from "@/components/Icon/lock";

import CreateBusiness from "./create-business";
import OutsideDetectWrapper from "@/hocs/OutsideDetectWrapper";
import { IFilterBusiness } from "./model";
import { useEnterpriseStore } from "./state";

//
const draft_waiting_action = [
  { id: uuid(), label: "Xem thông tin", icon: <IconEye /> },
  { id: uuid(), label: "Chỉnh sửa", icon: <IconEdit /> },
  { id: uuid(), label: "Lấy mật khẩu mới", icon: <IconLock /> },
  { id: uuid(), label: "Dừng hoạt động", icon: <IconXSquare /> },
];

const list_head: ITHead[] = [
  { label: "STT", position: "center", key: "index", additionClass: "w-[5%]" },
  {
    label: "Mã số thuế",
    position: "left",
    key: "code",
    additionClass: "w-[10%]",
  },
  {
    label: "Thông tin doanh nghiệp",
    position: "left",
    key: "name",
    subKey: "address",
    subkeyAdditionClass: "font-normal !font-['SVN-Light'] mt-1",
    additionClass: "font-semibold",
  },
  {
    label: "SP đã mua",
    position: "right",
    key: "order_amount",
    additionClass: "w-[12%]",
  },
  {
    label: "Trạng thái",
    position: "left",
    key: "status",
    additionClass: "w-[20%]",
  },
  {
    label: "Thao tác",
    position: "center",
    key: "action",
    additionClass: "w-[10%]",
  },
];

const BusinessPage = () => {
  const { control } = useForm<IFilterBusiness>({
    defaultValues: {
      keyword: "",
    },
  });
  const [expandRowAction, setExpandRowAction] = useState<string | null>(null);
  const [openDialogCreate, setOpenDialogCreate] = useState<boolean>(false);

  const { getEnterpriseList } = useEnterpriseStore();

  useEffect(() => {
    getEnterpriseList();
  }, []);

  return (
    <BasePage
      topLeftTitle="Danh sách tài khoản doanh nghiệp"
      topLeftSubTitle="Quản lý danh sách doanh nghiệp và tài khoản của doanh nghiệp trong hệ thống"
      topNodeLeft={
        <BaseButton
          title="Thêm tài khoản doanh nghiệp"
          uiType="second"
          onClick={() => {
            setOpenDialogCreate(true);
          }}
        />
      }
      bottomRightNode={<></>}
    >
      <div className="flex w-full gap-4">
        <ControllerSearchInput
          placeholder="Mã số thuế/ tên doanh nghiệp"
          name="keyword"
          control={control}
          containerAdditionClass="flex-1"
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
                code: "0109069458",
                category: "Sản phẩm nhựa, cao su",
                name: "CÔNG TY CỔ PHẦN FANVITY VIỆT NAM",
                address: "Bình Thanh, HCM",
                order_amount: 0,
                status: (
                  <BaseTag
                    additionClass="w-[127px]"
                    label="Đang hoạt động"
                    uiType="active"
                  />
                ),
                action: (
                  <div className="flex justify-center gap-[8px]">
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
                name: "CÔNG TY CỔ PHẦN SPHINX",
                address: "Bình Thanh, HCM",
                order_amount: 0,
                status: (
                  <BaseTag
                    additionClass="w-[127px]"
                    uiType="active"
                    label="Đang hoạt động"
                  />
                ),
                action: (
                  <div className="flex justify-center gap-[8px]">
                    <BaseTag
                      onClick={() => {
                        if (expandRowAction === "2") {
                          setExpandRowAction(null);
                        } else {
                          setExpandRowAction("2");
                        }
                      }}
                      additionClass="cursor-pointer relative"
                      absoluteChildNode={
                        <OutsideDetectWrapper
                          callback={() => setExpandRowAction(null)}
                        >
                          <DropdownMenu
                            additionClass={`absolute z-[1] w-[253px] top-[110%] right-0 ${
                              expandRowAction === "2" ? "flex" : "hidden"
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
                index: 4,
                code: "DPP0001",
                category: "Sản phẩm dệt, may, da, giầy",
                name: "CÔNG TY CỔ PHẦN FANVITY VIỆT NAM",
                address: "Bình Thanh, HCM",
                order_amount: 50,
                status: (
                  <BaseTag
                    additionClass="w-[127px]"
                    label="Dừng hoạt động"
                    uiType="disabled"
                  />
                ),
                action: (
                  <div className="flex justify-center gap-[8px]">
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
                        <OutsideDetectWrapper
                          callback={() => setExpandRowAction(null)}
                        >
                          <DropdownMenu
                            additionClass={`absolute z-[1] w-[253px] top-[110%] right-0 ${
                              expandRowAction === "3" ? "flex" : "hidden"
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
            ]}
          />
        </table>
      </div>
      <CreateBusiness setOpen={setOpenDialogCreate} isOpen={openDialogCreate} />
    </BasePage>
  );
};

export default BusinessPage;
