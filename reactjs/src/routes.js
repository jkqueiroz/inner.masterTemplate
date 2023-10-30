/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//import Dashboard from "views/Dashboard.js";
//import Notifications from "views/Notifications.js";
//import Icons from "views/Icons.js";
//import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
//import UserPage from "views/User.js";
//import Cadastro from "views/Cadastro.js";
import Upload from "views/Upload";
import Arquivos from "views/Arquivos.js";
import Photo from "views/Photos.js";

var routes = [
   {
    path: "/Upload",
    name: "Uploads",
    icon: "nc-icon nc-cloud-upload-94",
    component: Upload,
    layout: "/admin"
  },
  {
    path: "/Arquivos",
    name: "Arquivos",
    icon: "nc-icon nc-cloud-upload-94",
    component: Arquivos,
    layout: "/admin"
  },
  {
    path: "/Photos",
    name: "Photos",
    icon: "nc-icon nc-cloud-upload-94",
    component: Photo,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Evolução",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  
  }/*,
  {
    path: "/Cadastro",
    name: "Devedores",
    icon: "nc-icon nc-laptop",
    component: Cadastro,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin"
  }*/
];
export default routes;
