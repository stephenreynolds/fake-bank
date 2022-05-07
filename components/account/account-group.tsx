import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const AccountGroupContainer = styled.div`
  --border-color: rgb(0 0 0 / 22%);
  
  background-color: #fff;
  box-shadow: 0 1px 3px 0 var(--border-color);
  
  header {
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 1px solid var(--border-color);
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    user-select: none;

    &:hover {
      cursor: pointer;
      background-color: hsl(240, 100%, 90%, 25%);
      transition: background-color 0.1s linear;
      
      .icon {
        opacity: 1;
        transition: opacity 0.1s linear;
      }
    }
    
    .icon {
      opacity: 0;
    }
  }
  
  .accounts {
    padding: 1rem;
    display: grid;
    gap: 1rem;
  }
`;

type Props = {
  name: string;
  children?: React.ReactNode;
};

const AccountGroup = ({ name, children }: Props) => {
  const [expand, setExpand] = useState(true);

  return (
    <AccountGroupContainer>
      <header onClick={() => setExpand(!expand)}>
        <div>{name}</div>
        <div className="icon"><FontAwesomeIcon icon={expand ? faAngleUp : faAngleDown} /></div>
      </header>
      {expand ? (
        <div className="accounts">
          {children}
        </div>
      ) : null}
    </AccountGroupContainer>
  );
};

export default AccountGroup;