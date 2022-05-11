import Router from "next/router";
import { useEffect } from "react";
import AccountSettingsLayout from "../../components/account/settings-layout";

const AccountSettings = () => {
  useEffect(() => {
    Router.push("/account/profile").then();
  }, []);

  return <AccountSettingsLayout />;
};

export default AccountSettings;