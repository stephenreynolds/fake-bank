import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import AccountHeader, { AccountHeaderContent } from "./account-header";

const Container = styled.div`
  margin: 0 auto 1rem;
  width: 80%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;

  aside {
    flex: 1 1 25%;
    min-width: 20ch;
    border-right: 1px solid #ccc;
    background-color: #fefefe;

    nav {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;

      a {
        padding: 0 1rem;
        color: #000;
        text-decoration: none;
        font-size: 1.2rem;
        line-height: 2;
        border-left: 5px solid rgba(0, 0, 0, 0);

        &:hover {
          background-color: #eee;
        }
        
        &.active {
          border-left: 5px solid #3c7f88;
        }
      }
    }
  }

  main {
    flex: 1 1 75%;
    padding: 1rem;
  }
`;

interface Props {
  children?: React.ReactNode;
}

const AccountSettingsLayout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>fakeBank: Account settings</title>
      </Head>

      <AccountHeader>
        <AccountHeaderContent width="80%">
          <h1>Account settings</h1>
        </AccountHeaderContent>
      </AccountHeader>

      <Container>
        <aside>
          <nav>
            <Link href="/account/profile">
              <a className={router.pathname === "/account/profile" ? "active" : ""}>
                Personal details
              </a>
            </Link>
            <Link href="/account/security">
              <a className={router.pathname === "/account/security" ? "active" : ""}>
                Sign-in security
              </a>
            </Link>
            <Link href="/account/accounts">
              <a className={router.pathname === "/account/accounts" ? "active" : ""}>
                Account settings
              </a>
            </Link>
            <Link href="/account/alerts">
              <a className={router.pathname === "/account/alerts" ? "active" : ""}>
                Alerts
              </a>
            </Link>
            <Link href="/account/payments">
              <a className={router.pathname === "/account/payments" ? "active" : ""}>
                Payments
              </a>
            </Link>
          </nav>
        </aside>
        <main>
          {children}
        </main>
      </Container>
    </>
  );
};

export default AccountSettingsLayout;