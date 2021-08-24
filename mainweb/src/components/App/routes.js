import HomePage from "../HomePage/HomePage";

import AboutPage from "../AboutPage/AboutPage";
import TeamAccess from "../TeamAccess/TeamAccess";
import Library from "../Library/Library";
import Community from "../ComingSoon/Community";
import JoinToday from "../ComingSoon/JoinToday";
import AuthorPage from "../AuthorPage/AuthorPage";

import PrivacyPolicy from "../Footer/PrivacyPolicy";
import TermsOfUse from "../Footer/TermsOfUse";
import Press from "../Footer/Press";
import Contact from "../Footer/Contact";
import WorkWithTheCreator from "../Footer/WorkWithTheCreator";
import FAQ from "../Footer/FAQ";
import CreateAccount from "../CreateAccount/CreateAccount";
import Login from "../Login/Login";
import ConfirmRegister from "../ConfirmRegister/ConfirmRegister";
import ForgetPassword from "../ForgotPassword/ForgetPassword";
import EditProfile from "../EditProfile/EditProfile";
import Payment from "../Payment/Payment";
import OpenEpisode from "../OpenEpisode/OpenEpisode";
import NewEpisode from "../NewEpisode/NewEpisode";

let routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/team-access": TeamAccess,
  "/author": AuthorPage,
  "/library": Library,
  "/community": Community,
  "/join-today": JoinToday,
  "/work-with-the-creator": WorkWithTheCreator,
  "/privacy-policy": PrivacyPolicy,
  "/terms-of-use": TermsOfUse,
  "/press": Press,
  "/contact": Contact,
  "/contact/frequently-asked-questions": FAQ,
  "/login": Login,
  "/register": CreateAccount,
  "/forgot-password": ForgetPassword,
  "/confirm-register": ConfirmRegister,
  "/payment": Payment,
  "/edit-profile": EditProfile,
  '/new-episode': NewEpisode,
  "/episode/:id": OpenEpisode,
};
export default routes;
