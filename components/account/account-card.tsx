import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { usd } from "../../shared/format";

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
  name: string;
  balance: number;
  accountNumber: string;
}

const AccountCard = ({ name, balance, accountNumber }: Props): JSX.Element => (
  <AccountContainer>
    <div className="header">
      <AccountButton>{name} (...{accountNumber}) <FontAwesomeIcon icon={faAngleRight} /></AccountButton>
      <div className="buttons">
        <button>Transfer money</button>
        <button>More <FontAwesomeIcon icon={faAngleDown}/></button>
      </div>
    </div>
    <BalanceText>{usd.format(balance)}</BalanceText>
  </AccountContainer>
);

export default AccountCard;