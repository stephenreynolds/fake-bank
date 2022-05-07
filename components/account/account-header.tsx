import Link from "next/link";
import styled from "styled-components";
import { usd } from "../../shared/format";

const Header = styled.header`
  --text-color: #eee;
  
  background: rgb(60,127,136);
  background: linear-gradient(135deg, rgba(60,127,136,1) 0%, rgba(46,74,128,1) 100%);

  .brand-link {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem;
  }
  
  .container {
    margin: 0 auto;
    width: 50%;
    padding: 1rem 0;
    color: var(--text-color);
  }
`;

interface Props {
  totalValue: number;
}

const AccountHeader = ({ totalValue }: Props) => (
  <Header>
    <Link href="/">
      <a className="brand-link">fakeBank</a>
    </Link>
    <div className="container">
      <h2>Total value: {usd.format(totalValue)}</h2>
    </div>
  </Header>
);

export default AccountHeader;