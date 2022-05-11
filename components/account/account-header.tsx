import Link from "next/link";
import styled from "styled-components";
import { usd } from "../../shared/format";
import { getUserAccounts, User } from "../../shared/mockdb";

const Header = styled.header`
  --text-color: #eee;
  --text-color-hover: #ddd;

  background: rgb(60, 127, 136);
  background: linear-gradient(135deg, rgba(60, 127, 136, 1) 0%, rgba(46, 74, 128, 1) 100%);
  padding: 0.5rem;

  .header-links {
    display: flex;
    justify-content: space-between;

    a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 600;
      margin: 1rem;
      vertical-align: middle;

      &:hover {
        color: var(--text-color-hover);
        transition: color 0.2s linear;
      }
    }

    .brand-link a {
      font-size: 1.5rem;
    }
  }

  .container {
    margin: 0 auto;
    width: 50%;
    padding: 1rem 0;
    color: var(--text-color);
  }
`;

interface Props {
  user: User;
}

const AccountHeader = ({ user }: Props) => {
  const getTotalValue = (): number => {
    return getUserAccounts(user.id)
      .map(account => account.balance)
      .reduce((prev, next) => prev + next, 0);
  };

  return (
    <Header>
      <div className="header-links">
        <div className="brand-link">
          <Link href="/">
            <a>fakeBank</a>
          </Link>
        </div>
        <div>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/messages">
            <a>Messages</a>
          </Link>
          <Link href="/account">
            <a>Account</a>
          </Link>
        </div>
      </div>
      <div className="container">
        <h2>Total value: {usd.format(getTotalValue())}</h2>
        <small>Net change: +420.00 (0.3%)</small>
      </div>
    </Header>
  );
};

export default AccountHeader;