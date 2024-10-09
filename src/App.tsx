import "./App.css";
import "./fonts/SVN-GILROY-BLACK-ITALIC.OTF";
import "./fonts/SVN-GILROY-BLACK.OTF";
import "./fonts/SVN-GILROY-BOLD-ITALIC.OTF";
import "./fonts/SVN-GILROY-BOLD.OTF";
import "./fonts/SVN-GILROY-HEAVY-ITALIC.OTF";
import "./fonts/SVN-GILROY-HEAVY.OTF";
import "./fonts/SVN-GILROY-ITALIC.OTF";
import "./fonts/SVN-GILROY-LIGHT-ITALIC.OTF";
import "./fonts/SVN-GILROY-LIGHT.OTF";
import "./fonts/SVN-GILROY-MEDIUM-ITALIC.OTF";
import "./fonts/SVN-GILROY-MEDIUM.OTF";
import "./fonts/SVN-GILROY-REGULAR.OTF";
import "./fonts/SVN-GILROY-SEMIBOLD-ITALIC.OTF";
import "./fonts/SVN-GILROY-SEMIBOLD.OTF";
import "./fonts/SVN-GILROY-THIN-ITALIC.OTF";
import "./fonts/SVN-GILROY-THIN.OTF";
import "./fonts/SVN-GILROY-XBOLD-ITALIC.OTF";
import "./fonts/SVN-GILROY-XBOLD.OTF";
import "./fonts/SVN-GILROY-XLIGHT-ITALIC.OTF";
import "./fonts/SVN-GILROY-XLIGHT.OTF";
import RouteList from "./routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RouteList></RouteList>
    </BrowserRouter>
  )
}

export default App
