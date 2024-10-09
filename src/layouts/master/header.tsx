import DropdownMenu from "@/components/DropdownMenu";
import IconArrow from "@/components/Icon/arrow";
import IconArrowOne from "@/components/Icon/arrow-one";
import IconCardText from "@/components/Icon/card-text";
import IconEnvelopOpen from "@/components/Icon/envelop-open";
import IconLock from "@/components/Icon/lock";
import IconLogOut from "@/components/Icon/logout";
import IconQuestionCircle from "@/components/Icon/question-circle";
import IconThreeDot from "@/components/Icon/three-dot";
import OutsideDetectWrapper from "@/hocs/OutsideDetectWrapper";
import { useUserStore } from "@/pages/authenticate/state";
import { JSX, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface INavbar {
  route: string;
  label: string;
  icon?: JSX.Element;
  childrens?: INavbar[];
}

interface IAccountMenu {
  label: string;
  icon: JSX.Element;
  id: string;
}

const ListNavbar: INavbar[] = [
  {
    route: "/digital-product-passport",
    label: "Order",
  },
  {
    route: "/business",
    label: "Menu",
  },
  {
    route: "/qrcode",
    label: "Contact",
  },
];

const ListAccountMenu: IAccountMenu[] = [
  {
    label: "Thông tin tài khoản",
    icon: <IconCardText />,
    id: uuidv4(),
  },
  {
    label: "Đổi mật khẩu",
    icon: <IconLock />,
    id: uuidv4(),
  },
  {
    label: "Liên hệ",
    icon: <IconEnvelopOpen />,
    id: uuidv4(),
  },
  {
    label: "Trợ giúp & Hỗ trợ",
    icon: <IconQuestionCircle />,
    id: uuidv4(),
  },
  {
    label: "Đăng xuất",
    icon: <IconLogOut />,
    id: uuidv4(),
  },
];

const navBarStyle = {
  padding: '10px !important',
};

const MasterHeader = () => {
  const { user, getUserInformation } = useUserStore();
  const [chooseNav, setChooseNav] = useState<string>("");
  const [expandAccountMenu, setExpandAccountMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const route = useLocation();

  useEffect(() => {
    // if (route.pathname) {
    //   setChooseNav(route.pathname);
    // }
  }, []);

  const selectNav = (route: string) => () => {
    setChooseNav(route);
    navigate(route);
  };

  useEffect(() => {
    // if (!user) {
    //   getUserInformation();
    // }
  }, [user]);

  const renderChildNav = (itemNav: INavbar) => {
    return (
      <div
        className="nested-nav border-l-2 border-purple-500 p-2 hover:bg-purple-100 rounded-[0_4px_4px_0]"
        key={itemNav.label + "-" + itemNav.route}
      >
        {itemNav.label}
        {itemNav.childrens && itemNav.childrens.length > 0 && (
          <div className="child-nested-nav left-[100%] top-0 gap-2 w-[240px] absolute">
            {itemNav.childrens.map((snc) => renderChildNav(snc))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 flex justify-content-between" style={navBarStyle}>
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary m-0 ff-secondary"><i className="fa fa-utensils me-3"></i>Vua gà mạnh hoạch 999</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="flex justify-content-between">
          <div className="flex items-center text-size-medium gap-8">
            {ListNavbar.map((it) => (
              <div
                onClick={selectNav(it.route)}
                key={it.label + "-" + it.route}
                className={`parent-nav flex items-center gap-2 py-2 px-4 cursor-pointer text-primary ff-secondary ${chooseNav === it.route
                  ? "bg-login-bg rounded-radius-8 font-['SVN-SemiBold'] text-login-button"
                  : ""
                  } hover:bg-login-bg hover:rounded-radius-8 hover:text-login-button relative`}
              >
                {it.icon} {it.label}
                {it.childrens && it.childrens.length > 0 && (
                  <div
                    className={`${chooseNav === it.route ? "block" : ""
                      } gap-2 child-nav top-[3rem] bg-white px-6 py-4 left-0 rounded-radius-8 border border-purple-100 absolute shadow-[0px_4px_4px_0px_#f5ecfb]`}
                  >
                    <div className="relative">
                      <div className="flex flex-col gap-2 w-[240px]">
                        {it.childrens.map((sn) => renderChildNav(sn))}
                      </div>
                    </div>
                  </div>
                )}
                {it.childrens && it.childrens.length > 0 && <IconArrow />}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-lg">
            {/* {user?.name} */}
            <i className="fa-solid fa-bars-sort"></i>
          </div>
        </div>

      </nav>

      <div className="py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              {/* <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br>Delicious Meal</h1> */}
              <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              {/* <img className="img-fluid" src="img/hero.png" alt=""> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MasterHeader;
