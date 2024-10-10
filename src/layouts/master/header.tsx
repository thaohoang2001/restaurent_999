import IconArrow from "@/components/Icon/arrow";
import IconClose from "@/components/Icon/close";
import IconMenu from "@/components/Icon/menu";
import { JSX, useState } from "react";
import { useNavigate } from "react-router-dom";

interface INavbar {
  route: string;
  label: string;
  icon?: JSX.Element;
  childrens?: INavbar[];
}

const ListNavbar: INavbar[] = [
  {
    route: "/digital-product-passport",
    label: "Đặt bàn",
  },
  {
    route: "/business",
    label: "Danh sách món ăn",
  },
  // {
  //   route: "/qrcode",
  //   label: "",
  // },
];

const navBarStyle = {
  padding: '10px !important',
};


const MasterHeader = () => {
  const [chooseNav, setChooseNav] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // const sidebarRef = useRef(null);

  // const handleClickOutside = (event: any) => {
  //   if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //     setIsOpen(false); // Nếu click ngoài sidebar, đóng nó lại
  //   }
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     // Chỉ thêm event listener khi sidebar đang mở
  //     document.addEventListener('mousedown', handleClickOutside);
  //   } else {
  //     // Khi sidebar đóng, loại bỏ event listener
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }
  //   return () => {
  //     // Cleanup khi component unmount
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isOpen]);

  const selectNav = (route: string) => () => {
    setChooseNav(route);
    navigate(route);
  };

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };


  const linkHome = () => {
    navigate('/')
    setChooseNav('');
  }

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
        <a className="navbar-brand p-0 hover:cursor-pointer" onClick={linkHome}>
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
          {/* {user?.name} */}
          <div className="flex items-center gap-2 text-lg cursor-pointer menu-custom" onClick={toggleMenu}>
            <IconMenu />
          </div>
          {isOpen ?
            <div className={`sidebar ${isOpen ? 'show-sidebar' : 'hide-sidebar'}`}>
              <div className={`icon-close ${isOpen ? 'show-sidebar' : 'hide-sidebar'}`} onClick={toggleMenu}>
                <IconClose />
              </div>
              <div className="side-inner">
                <div className="profile">
                  <img src="images/person_profile.jpg" alt="Image" className="img-fluid" />
                  <h3 className="name">Debby Williams</h3>
                  <span className="country">New York, USA</span>
                </div>

                <div className="counter d-flex justify-content-center">
                  <div className="col">
                    <strong className="number">892</strong>
                    <span className="number-label">Posts</span>
                  </div>
                  <div className="col">
                    <strong className="number">22.5k</strong>
                    <span className="number-label">Followers</span>
                  </div>
                  <div className="col">
                    <strong className="number">150</strong>
                    <span className="number-label">Following</span>
                  </div>
                </div>

                <div className="nav-menu">
                  <ul>
                    <li className="active"><a href="#"><span className="icon-home mr-3"></span>Feed</a></li>
                    <li><a href="#"><span className="icon-search2 mr-3"></span>Explore</a></li>
                    <li><a href="#"><span className="icon-notifications mr-3"></span>Notifications</a></li>
                    <li><a href="#"><span className="icon-location-arrow mr-3"></span>Direct</a></li>
                    <li><a href="#"><span className="icon-pie-chart mr-3"></span>Stats</a></li>
                    <li><a href="#"><span className="icon-sign-out mr-3"></span>Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
            : ''}
        </div>

      </nav>

      <div className="py-5 bg-dark hero-header mb-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              {/* <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br>Delicious Meal</h1> */}
              <p className="text-white animated slideInLeft mb-4 pb-2">Vua Gà 999 – Hương vị gà Mạnh Hoạch trứ danh, thơm ngon từ từng thớ thịt, đậm đà đến từng miếng cắn,
                mang đến trải nghiệm ẩm thực khó quên, gắn kết mọi bữa ăn của bạn!</p>
              <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid w-50" src="../../src/assets/img/img_signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MasterHeader;
