import Head from 'next/head'
import { useEffect, useState } from "react";
import AccountItem from "../components/account/account-item";
import AccountGroup from "../components/account/account-group";
import AccountGroupContainer from "../components/account/account-group-container";
import AccountHeader from "../components/account/account-header";
import { getAccountByAccountNumber, getCurrentUser, User } from "../shared/mockdb";

const Home = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!user) {
      setUser(getCurrentUser());
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>fakeBank</title>
        <meta name="description" content="A fake banking web app made with Next.js."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {user ? (
        <>
          <AccountHeader user={user}/>

          <AccountGroupContainer>
            {user.accountGroups.map((group, i) => (
              <AccountGroup key={i} name={group.name}>
                {group.accountNumbers.map((accountNumber, j) => (
                  <AccountItem key={j} account={getAccountByAccountNumber(accountNumber)!} />
                ))}
              </AccountGroup>
            ))}
          </AccountGroupContainer>
        </>
      ) : null}
    </>
  );
};

export default Home;
