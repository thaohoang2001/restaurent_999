import MasterLayout from "@/layouts/master";
import DigitalProductPassportPage from ".";

const DigitalProductPassportRouter = [
  {
    path: "/digital-product-passport",
    element: (
      <MasterLayout>
        <DigitalProductPassportPage />
      </MasterLayout>
    ),
    private: true,
  },
];

export default DigitalProductPassportRouter;
