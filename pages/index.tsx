import Head from 'next/head'
import AccountItem from "../components/account/account-item";
import AccountGroup from "../components/account/account-group";
import AccountGroupContainer from "../components/account/account-group-container";
import AccountHeader from "../components/account/account-header";

const Home = () => {
  return (
    <>
      <Head>
        <title>fakeBank</title>
        <meta name="description" content="A fake banking web app made with Next.js."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <AccountHeader totalValue={147300} />

      <AccountGroupContainer>
        <AccountGroup name="Bank accounts">
          <AccountItem name="Checking" balance={1000} accountNumber="1234" />
          <AccountItem name="Savings" balance={20000} accountNumber="5678" />
        </AccountGroup>
        <AccountGroup name="Credit cards">
          <AccountItem name="fakeBank Credit Card" balance={300} accountNumber="9401" />
        </AccountGroup>
        <AccountGroup name="Investing accounts">
          <AccountItem name="Individual" balance={25000} accountNumber="4580" />
          <AccountItem name="IRA" balance={100000} accountNumber="9844" />
        </AccountGroup>

        <AccountGroup name="External accounts">
          <AccountItem name="Ext checking" balance={1000} accountNumber="0151" />
        </AccountGroup>
      </AccountGroupContainer>
    </>
  );
};

export default Home;
