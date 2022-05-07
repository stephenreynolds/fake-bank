import Head from 'next/head'
import AccountCard from "../components/account/account-card";
import AccountGroup from "../components/account/account-group";
import AccountGroupContainer from "../components/account/account-group-container";

const Home = () => {
  return (
    <div>
      <Head>
        <title>fakeBank</title>
        <meta name="description" content="A fake banking web app made with Next.js."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <AccountGroupContainer>
        <AccountGroup name="Bank accounts">
          <AccountCard name="Checking" balance={1000} accountNumber="1234" />
          <AccountCard name="Savings" balance={20000} accountNumber="5678" />
        </AccountGroup>
        <AccountGroup name="Credit cards">
          <AccountCard name="fakeBank Credit Card" balance={300} accountNumber="9401" />
        </AccountGroup>
        <AccountGroup name="Investing accounts">
          <AccountCard name="Individual" balance={25000} accountNumber="4580" />
          <AccountCard name="IRA" balance={100000} accountNumber="9844" />
        </AccountGroup>

        <AccountGroup name="External accounts">
          <AccountCard name="Ext checking" balance={1000} accountNumber="0151" />
        </AccountGroup>
      </AccountGroupContainer>
    </div>
  );
};

export default Home;