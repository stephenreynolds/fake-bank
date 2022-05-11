import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { usd } from "../../shared/format";
import { Account } from "../../shared/mockdb";

const AccountContainer = styled.div`
  .header {
    display: flex;
    justify-content: space-between;

    .buttons {
      display: flex;
      gap: 0.5rem;

      button {
        color: blue;
        border: 1px solid blue;
        border-radius: 5px;
        background: none;
        padding: 0.25rem;
        font-weight: 600;

        &:hover {
          cursor: pointer;
          background-color: hsl(240, 100%, 90%, 25%);
          transition: background-color 0.1s linear;
        }
      }
    }
  }
`;

const AccountButton = styled.button`
  color: blue;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background: none;
  display: block;
  padding: 0.5rem;
  margin-left: -0.5rem;

  &:hover {
    cursor: pointer;
    background-color: hsl(240, 100%, 90%, 25%);
    transition: background-color 0.1s linear;
    border-radius: 5px;
  }
`;

const BalanceText = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

interface Props {
  account: Account;
}

const getLastNChars = (str: string, n: number): string => {
  return str.slice(str.length - n);
};

const AccountItem = ({ account }: Props): JSX.Element => (
  <AccountContainer>
    <div className="header">
      <AccountButton>
        {account.name} (...{getLastNChars(account.accountNumber, 4)})
        <FontAwesomeIcon icon={faAngleRight} className="ml-1ch"/>
      </AccountButton>
      <div className="buttons">
        <button>Transfer money</button>
        <button>
          More
          <FontAwesomeIcon icon={faAngleDown} className="ml-1ch"/>
        </button>
      </div>
    </div>
    <BalanceText>{usd.format(account.balance)}</BalanceText>
  </AccountContainer>
);

export default AccountItem;