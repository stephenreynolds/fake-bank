import Head from 'next/head'
import React from "react";
import AccountHeader, { AccountHeaderContent } from "../components/account/account-header";
import AccountItem from "../components/account/account-item";
import AccountGroup from "../components/account/account-group";
import AccountGroupContainer from "../components/account/account-group-container";
import { usd } from "../shared/format";
import { getAccountByAccountNumber, getUserAccounts, User } from "../shared/mockdb";

interface Props {
  user: User;
}

const Home = ({ user }: Props) => {
  const getTotalValue = (): number => {
    return getUserAccounts(user.id)
      .map(account => account.balance)
      .reduce((prev, next) => prev + next, 0);
  };

  return (
    <>
      <Head>
        <title>fakeBank: Dashboard</title>
      </Head>

      {user ? (
        <>
          <AccountHeader>
            <AccountHeaderContent>
              <h2>Total value: {usd.format(getTotalValue())}</h2>
              <small>Net change: +420.00 (0.3%)</small>
            </AccountHeaderContent>
          </AccountHeader>

          <AccountGroupContainer>
            {user.accountGroups.map((group, i) => (
              <AccountGroup key={i} name={group.name}>
                {group.accountNumbers.map((accountNumber, j) => (
                  <AccountItem key={j} account={getAccountByAccountNumber(accountNumber)!}/>
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
