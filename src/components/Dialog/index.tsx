import BaseButton from "../Button";

type Props = {
  additionClass?: string;
  children: React.ReactNode;
  onClose: () => void;
  title: string;
  buttonCancelLabel?: string;
  buttonConfirmLabel?: string;
  actionButtonCancel: () => void;
  actionButtonConfirm: any;
};

export default function Dialog({
  additionClass,
  children,
  onClose,
  title,
  buttonCancelLabel = "Hủy bỏ",
  buttonConfirmLabel = "Xác nhận",
  actionButtonCancel,
  actionButtonConfirm,
}: Props) {
  return (
    <div
      className={`relative z-10 ${additionClass} `}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform rounded-radius-8 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg px-[40px]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="py-[26px] text-[24px] text-first-black font-semibold leading-normal">
              {title}
            </p>
            {children}
            <div className="flex justify-end py-[20px] gap-2 ">
              <BaseButton
                title={buttonCancelLabel}
                onClick={actionButtonCancel}
                uiType="fourth"
              />
              <BaseButton
                title={buttonConfirmLabel}
                onClick={actionButtonConfirm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
