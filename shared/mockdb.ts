export enum AccountType {
  Checking,
  Savings,
  IndividualInvest,
  IRA,
  CreditCard
}

export interface Account {
  userId: string;
  name: string;
  type: AccountType;
  accountNumber: string;
  balance: number;
  external?: boolean;
}

export interface AccountGroup {
  name: string;
  accountNumbers: string[];
}

export interface User {
  id: string;
  username: string;
  passwordHash: string;
  email: string;
  verified: boolean;
  firstName: string;
  lastName: string;
  accountGroups: AccountGroup[];
}

export const users: User[] = [
  {
    id: "ce9b84b9-220e-4996-85e4-758ab0ae6b33",
    username: "testuser",
    passwordHash: "$2a$12$ZsXk09Da2WRSFEfkttOW5.BnInqop38YybC7D4DWMWA2S8LOzCuG6",
    email: "test@test.com",
    verified: false,
    firstName: "John",
    lastName: "Doe",
    accountGroups: [
      {
        name: "Bank accounts",
        accountNumbers: ["542-1234", "683-5678"]
      },
      {
        name: "Credit cards",
        accountNumbers: ["788-9401"]
      },
      {
        name: "Investing accounts",
        accountNumbers: ["989-4580", "111-9844"]
      },
      {
        name: "External accounts",
        accountNumbers: ["024-0151"]
      }
    ]
  }
];

export const accounts: Account[] = [
  {
    userId: "ce9b84b9-220e-4996-85e4-758ab0ae6b33",
    name: "Checking",
    type: AccountType.Checking,
    accountNumber: "542-1234",
    balance: 1000
  },
  {
    userId: "ce9b84b9-220e-4996-85e4-758ab0ae6b33",
    name: "Savings",
    type: AccountType.Savings,
    accountNumber: "683-5678",
    balance: 20000
  },
  {
    userId: "ce9b84b9-220e-4996-85e4-758ab0ae6b33",
    name: "fakeBank Credit Card",
    type: AccountType.CreditCard,
    accountNumber: "788-9401",
    balance: 300
  },
  {
    userId: "ce9b84b9-220e-4996-85e4-758ab0ae6b33",
    name: "Individual",
    type: AccountType.IndividualInvest,
    accountNumber: "989-4580",
    balance: 25000
  },
  {
    userId: "ce9b84b9-220e-4996-85e4-758ab0ae6b33",
    name: "IRA",
    type: AccountType.IRA,
    accountNumber: "111-9844",
    balance: 100000
  },
  {
    userId: "ce9b84b9-220e-4996-85e4-758ab0ae6b33",
    name: "Ext checking",
    type: AccountType.Checking,
    accountNumber: "024-0151",
    balance: 1000,
    external: true
  }
];

const updateUsers = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

const updateAccounts = () => {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

const getUsersStorage = () => {
  const str = localStorage.getItem("users");
  return JSON.parse(str!);
};

const getAccountsStorage = () => {
  const str = localStorage.getItem("accounts");
  return JSON.parse(str!);
};

export const initDb = () => {
  if (!getUsersStorage()) {
    updateUsers();
  }

  if (!getAccountsStorage()) {
    updateAccounts();
  }
};

export const getCurrentUser = (): User => users[0];

export const getUserAccounts = (userId: string): Account[] => {
  return accounts.filter(account => account.userId === userId);
};

export const getAccountByAccountNumber = (accountNumber: string): Account | undefined => {
  return accounts.find(account => account.accountNumber === accountNumber);
};