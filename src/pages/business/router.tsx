import MasterLayout from "@/layouts/master";
import BusinessPage from ".";

const BusinessRouter = [
  {
    path: "/business",
    element: (
      <MasterLayout>
        <BusinessPage />
      </MasterLayout>
    ),
    private: true,
  },
];

export default BusinessRouter;
