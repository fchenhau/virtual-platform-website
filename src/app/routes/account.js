import LoginMerchantAccount from "../pages/account/LoginMerchantAccount";
import CreateMerchantAccount from "../pages/account/CreateMerchantAccount";
import FirstTimeLogin from "../pages/account/FirstTimeLogin/Login";
import ChangeAccountPassword from "../pages/account/ChangeAccountPassword";
import FirstTimeLoginProcessing from "../pages/account/FirstTimeLogin/Processing";
import FirstTimePassword from "../pages/account/FirstTimeLogin/Password";
import FirstTimeLoginCreated from "../pages/account/FirstTimeLogin/Created";
import ForgotPassword from "../pages/account/ForgotPassword/ForgotPassword";
import SetupForgotPassword from "../pages/account/ForgotPassword/SetupForgotPassword";

const AccountRoutes = [{
    path: '/account/login',
    label: "Login Merchant Account",
    component: LoginMerchantAccount
}, {
    path: '/account/create',
    label: "Create Merchant Account",
    component: CreateMerchantAccount
}, {
    path: '/account/first-time',
    exact: true,
    label: "First Time Login",
    component: FirstTimeLogin
}, {
    path: '/account/changeAccountPassword',
    label: "Change Account Password",
    component: ChangeAccountPassword
}, {
    path: '/account/first-time/processing',
    label: 'First Time Login Processing',
    component: FirstTimeLoginProcessing
}, {
    path: '/account/first-time/setup',
    label: 'First Time Password Setup',
    component: FirstTimePassword
}, {
    path: '/account/first-time/created',
    label: 'First Time Login Created',
    component: FirstTimeLoginCreated
}, {
    path: '/account/forgot-password',
    exact: true,
    label: 'Forgot Password',
    component: ForgotPassword
}, {
    path: '/account/forgot-password/setup',
    label: 'Setup Forgot Password',
    component: SetupForgotPassword
}];

export default AccountRoutes;