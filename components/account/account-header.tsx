import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  --text-color: ${props => props.theme.header.text.color};
  --text-color-hover: ${props => props.theme.header.text.hover};

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
`;

interface Props {
  children?: React.ReactNode;
}

export const AccountHeaderContent = styled.div<{ width?: string }>`
  margin: 0 auto;
  width: ${props => props.width ?? "50%"};
  padding: 1rem 0;
  color: var(--text-color);
`;

const AccountHeader = ({ children }: Props) => {
  return (
    <Header>
      <nav className="header-links">
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
      </nav>
      {children}
    </Header>
  );
};

export default AccountHeader;