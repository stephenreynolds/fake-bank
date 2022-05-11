import { ChangeEvent, useState } from "react";
import AccountSettingsLayout from "../../components/account/settings-layout";

const SecuritySettings = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <AccountSettingsLayout>
      <section>
        <h2>Username</h2>
        <form>
          <label htmlFor="username">New username</label>
          <input type="text" name="username" value={username} onChange={onUsernameChange} />
        </form>
      </section>

      <section>
        <h2>Password</h2>
        <form>
          <label htmlFor="password">New password</label>
          <input type="password" name="password" value={password} onChange={onPasswordChange} />

          <label htmlFor="confirm">New password</label>
          <input type="password" name="confirm" value={confirmPassword} onChange={onConfirmPasswordChange} />
        </form>
      </section>
    </AccountSettingsLayout>
  );
};

export default SecuritySettings;