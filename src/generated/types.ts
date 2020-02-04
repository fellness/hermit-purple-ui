export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type Account = {
   __typename?: 'Account',
  address: Scalars['String'],
  transactions: Array<Transaction>,
};


export type AccountTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type AccountCreateOneWithoutTransactionsInput = {
  create?: Maybe<AccountCreateWithoutTransactionsInput>,
  connect?: Maybe<AccountWhereUniqueInput>,
};

export type AccountCreateWithoutTransactionsInput = {
  address: Scalars['String'],
};

export type AccountOrderByInput = {
  id?: Maybe<OrderByArg>,
  address?: Maybe<OrderByArg>,
};

export type AccountWhereInput = {
  id?: Maybe<IntFilter>,
  address?: Maybe<StringFilter>,
  transactions?: Maybe<TransactionFilter>,
  AND?: Maybe<Array<AccountWhereInput>>,
  OR?: Maybe<Array<AccountWhereInput>>,
  NOT?: Maybe<Array<AccountWhereInput>>,
};

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  address?: Maybe<Scalars['String']>,
};

export type Block = {
   __typename?: 'Block',
  height: Scalars['Int'],
  transactionsCount: Scalars['Int'],
  transactions: Array<Transaction>,
  preHash: Scalars['String'],
  timestamp: Scalars['DateTime'],
  orderedTransactionRoot: Scalars['String'],
  stateRoot: Scalars['String'],
  proof: Proof,
  validatorVersion: Scalars['String'],
  validators: Array<Validator>,
};


export type BlockTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type BlockValidatorsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type BlockCreateInput = {
  height: Scalars['Int'],
  transactionsCount: Scalars['Int'],
  preHash: Scalars['String'],
  timestamp: Scalars['DateTime'],
  orderRoot: Scalars['String'],
  stateRoot: Scalars['String'],
  proposer: Scalars['String'],
  validatorVersion: Scalars['String'],
  transactions?: Maybe<TransactionCreateManyWithoutBlockInput>,
  proof: ProofCreateOneWithoutBlocksInput,
  validators?: Maybe<ValidatorCreateManyWithoutBlocksInput>,
  receipts?: Maybe<ReceiptCreateManyWithoutBlockInput>,
};

export type BlockCreateManyWithoutValidatorsInput = {
  create?: Maybe<Array<BlockCreateWithoutValidatorsInput>>,
  connect?: Maybe<Array<BlockWhereUniqueInput>>,
};

export type BlockCreateOneWithoutReceiptsInput = {
  create?: Maybe<BlockCreateWithoutReceiptsInput>,
  connect?: Maybe<BlockWhereUniqueInput>,
};

export type BlockCreateOneWithoutTransactionsInput = {
  create?: Maybe<BlockCreateWithoutTransactionsInput>,
  connect?: Maybe<BlockWhereUniqueInput>,
};

export type BlockCreateWithoutReceiptsInput = {
  height: Scalars['Int'],
  transactionsCount: Scalars['Int'],
  preHash: Scalars['String'],
  timestamp: Scalars['DateTime'],
  orderRoot: Scalars['String'],
  stateRoot: Scalars['String'],
  proposer: Scalars['String'],
  validatorVersion: Scalars['String'],
  transactions?: Maybe<TransactionCreateManyWithoutBlockInput>,
  proof: ProofCreateOneWithoutBlocksInput,
  validators?: Maybe<ValidatorCreateManyWithoutBlocksInput>,
};

export type BlockCreateWithoutTransactionsInput = {
  height: Scalars['Int'],
  transactionsCount: Scalars['Int'],
  preHash: Scalars['String'],
  timestamp: Scalars['DateTime'],
  orderRoot: Scalars['String'],
  stateRoot: Scalars['String'],
  proposer: Scalars['String'],
  validatorVersion: Scalars['String'],
  proof: ProofCreateOneWithoutBlocksInput,
  validators?: Maybe<ValidatorCreateManyWithoutBlocksInput>,
  receipts?: Maybe<ReceiptCreateManyWithoutBlockInput>,
};

export type BlockCreateWithoutValidatorsInput = {
  height: Scalars['Int'],
  transactionsCount: Scalars['Int'],
  preHash: Scalars['String'],
  timestamp: Scalars['DateTime'],
  orderRoot: Scalars['String'],
  stateRoot: Scalars['String'],
  proposer: Scalars['String'],
  validatorVersion: Scalars['String'],
  transactions?: Maybe<TransactionCreateManyWithoutBlockInput>,
  proof: ProofCreateOneWithoutBlocksInput,
  receipts?: Maybe<ReceiptCreateManyWithoutBlockInput>,
};

export type BlockFilter = {
  every?: Maybe<BlockWhereInput>,
  some?: Maybe<BlockWhereInput>,
  none?: Maybe<BlockWhereInput>,
};

export type BlockOrderByInput = {
  id?: Maybe<OrderByArg>,
  height?: Maybe<OrderByArg>,
  transactionsCount?: Maybe<OrderByArg>,
  preHash?: Maybe<OrderByArg>,
  timestamp?: Maybe<OrderByArg>,
  orderRoot?: Maybe<OrderByArg>,
  stateRoot?: Maybe<OrderByArg>,
  proposer?: Maybe<OrderByArg>,
  validatorVersion?: Maybe<OrderByArg>,
};

export type BlockWhereInput = {
  id?: Maybe<IntFilter>,
  height?: Maybe<IntFilter>,
  transactionsCount?: Maybe<IntFilter>,
  transactions?: Maybe<TransactionFilter>,
  preHash?: Maybe<StringFilter>,
  timestamp?: Maybe<DateTimeFilter>,
  orderRoot?: Maybe<StringFilter>,
  stateRoot?: Maybe<StringFilter>,
  proposer?: Maybe<StringFilter>,
  validatorVersion?: Maybe<StringFilter>,
  validators?: Maybe<ValidatorFilter>,
  receipts?: Maybe<ReceiptFilter>,
  AND?: Maybe<Array<BlockWhereInput>>,
  OR?: Maybe<Array<BlockWhereInput>>,
  NOT?: Maybe<Array<BlockWhereInput>>,
  proof?: Maybe<ProofWhereInput>,
};

export type BlockWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>,
  not?: Maybe<Scalars['Boolean']>,
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  not?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
};

export type Event = {
   __typename?: 'Event',
  data: Scalars['String'],
  receipt: Receipt,
};

export type EventCreateManyWithoutReceiptInput = {
  create?: Maybe<Array<EventCreateWithoutReceiptInput>>,
  connect?: Maybe<Array<EventWhereUniqueInput>>,
};

export type EventCreateWithoutReceiptInput = {
  service: Scalars['String'],
  data: Scalars['String'],
};

export type EventFilter = {
  every?: Maybe<EventWhereInput>,
  some?: Maybe<EventWhereInput>,
  none?: Maybe<EventWhereInput>,
};

export type EventWhereInput = {
  id?: Maybe<IntFilter>,
  service?: Maybe<StringFilter>,
  data?: Maybe<StringFilter>,
  AND?: Maybe<Array<EventWhereInput>>,
  OR?: Maybe<Array<EventWhereInput>>,
  NOT?: Maybe<Array<EventWhereInput>>,
  receipt?: Maybe<ReceiptWhereInput>,
};

export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createOneBlock: Block,
  createOneTransaction: Transaction,
  createOneValidator: Validator,
};


export type MutationCreateOneBlockArgs = {
  data: BlockCreateInput
};


export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput
};


export type MutationCreateOneValidatorArgs = {
  data: ValidatorCreateInput
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Proof = {
   __typename?: 'Proof',
  signature: Scalars['String'],
  round: Scalars['Int'],
  bitmap: Scalars['String'],
  blockHash: Scalars['String'],
};

export type ProofCreateOneWithoutBlocksInput = {
  create?: Maybe<ProofCreateWithoutBlocksInput>,
  connect?: Maybe<ProofWhereUniqueInput>,
};

export type ProofCreateWithoutBlocksInput = {
  height: Scalars['Int'],
  round: Scalars['Int'],
  blockHash: Scalars['String'],
  signature: Scalars['String'],
  bitmap: Scalars['String'],
};

export type ProofWhereInput = {
  id?: Maybe<IntFilter>,
  height?: Maybe<IntFilter>,
  round?: Maybe<IntFilter>,
  blockHash?: Maybe<StringFilter>,
  signature?: Maybe<StringFilter>,
  bitmap?: Maybe<StringFilter>,
  blocks?: Maybe<BlockFilter>,
  AND?: Maybe<Array<ProofWhereInput>>,
  OR?: Maybe<Array<ProofWhereInput>>,
  NOT?: Maybe<Array<ProofWhereInput>>,
};

export type ProofWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  block?: Maybe<Block>,
  transaction?: Maybe<Transaction>,
  validator?: Maybe<Validator>,
  receipt?: Maybe<Receipt>,
  account?: Maybe<Account>,
  accounts: Array<Account>,
  blocks: Array<Block>,
  transactions: Array<Transaction>,
  receipts: Array<Receipt>,
};


export type QueryBlockArgs = {
  where: BlockWhereUniqueInput
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput
};


export type QueryValidatorArgs = {
  where: ValidatorWhereUniqueInput
};


export type QueryReceiptArgs = {
  where: ReceiptWhereUniqueInput
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput
};


export type QueryAccountsArgs = {
  where?: Maybe<AccountWhereInput>,
  orderBy?: Maybe<AccountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBlocksArgs = {
  where?: Maybe<BlockWhereInput>,
  orderBy?: Maybe<BlockOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryReceiptsArgs = {
  where?: Maybe<ReceiptWhereInput>,
  orderBy?: Maybe<ReceiptOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type Receipt = {
   __typename?: 'Receipt',
  block: Block,
  transaction: Transaction,
  cyclesUsed: Scalars['String'],
  events: Array<Event>,
  response: ReceiptResponse,
};


export type ReceiptEventsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ReceiptCreateManyWithoutBlockInput = {
  create?: Maybe<Array<ReceiptCreateWithoutBlockInput>>,
  connect?: Maybe<Array<ReceiptWhereUniqueInput>>,
};

export type ReceiptCreateOneWithoutTransactionInput = {
  create?: Maybe<ReceiptCreateWithoutTransactionInput>,
  connect?: Maybe<ReceiptWhereUniqueInput>,
};

export type ReceiptCreateWithoutBlockInput = {
  cyclesUsed: Scalars['String'],
  transaction: TransactionCreateOneWithoutReceiptInput,
  events?: Maybe<EventCreateManyWithoutReceiptInput>,
  response: ReceiptResponseCreateOneWithoutReceiptInput,
};

export type ReceiptCreateWithoutTransactionInput = {
  cyclesUsed: Scalars['String'],
  block: BlockCreateOneWithoutReceiptsInput,
  events?: Maybe<EventCreateManyWithoutReceiptInput>,
  response: ReceiptResponseCreateOneWithoutReceiptInput,
};

export type ReceiptFilter = {
  every?: Maybe<ReceiptWhereInput>,
  some?: Maybe<ReceiptWhereInput>,
  none?: Maybe<ReceiptWhereInput>,
};

export type ReceiptOrderByInput = {
  id?: Maybe<OrderByArg>,
  cyclesUsed?: Maybe<OrderByArg>,
};

export type ReceiptResponse = {
   __typename?: 'ReceiptResponse',
  isError: Scalars['Boolean'],
  ret: Scalars['String'],
};

export type ReceiptResponseCreateOneWithoutReceiptInput = {
  create?: Maybe<ReceiptResponseCreateWithoutReceiptInput>,
  connect?: Maybe<ReceiptResponseWhereUniqueInput>,
};

export type ReceiptResponseCreateWithoutReceiptInput = {
  ret: Scalars['String'],
  isError: Scalars['Boolean'],
};

export type ReceiptResponseWhereInput = {
  id?: Maybe<IntFilter>,
  ret?: Maybe<StringFilter>,
  isError?: Maybe<BooleanFilter>,
  AND?: Maybe<Array<ReceiptResponseWhereInput>>,
  OR?: Maybe<Array<ReceiptResponseWhereInput>>,
  NOT?: Maybe<Array<ReceiptResponseWhereInput>>,
  receipt?: Maybe<ReceiptWhereInput>,
};

export type ReceiptResponseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type ReceiptWhereInput = {
  id?: Maybe<IntFilter>,
  cyclesUsed?: Maybe<StringFilter>,
  events?: Maybe<EventFilter>,
  AND?: Maybe<Array<ReceiptWhereInput>>,
  OR?: Maybe<Array<ReceiptWhereInput>>,
  NOT?: Maybe<Array<ReceiptWhereInput>>,
  block?: Maybe<BlockWhereInput>,
  transaction?: Maybe<TransactionWhereInput>,
  response?: Maybe<ReceiptResponseWhereInput>,
};

export type ReceiptWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export type Transaction = {
   __typename?: 'Transaction',
  txHash: Scalars['String'],
  block: Block,
  serviceName: Scalars['String'],
  method: Scalars['String'],
  payload: Scalars['String'],
  cyclesPrice: Scalars['String'],
  cyclesLimit: Scalars['String'],
  nonce: Scalars['String'],
  account: Account,
  pubkey: Scalars['String'],
  signature: Scalars['String'],
  receipt?: Maybe<Receipt>,
};

export type TransactionCreateInput = {
  txHash: Scalars['String'],
  serviceName: Scalars['String'],
  method: Scalars['String'],
  payload: Scalars['String'],
  cyclesPrice: Scalars['String'],
  cyclesLimit: Scalars['String'],
  nonce: Scalars['String'],
  pubkey: Scalars['String'],
  signature: Scalars['String'],
  chainId: Scalars['String'],
  timeout: Scalars['String'],
  receipt?: Maybe<ReceiptCreateOneWithoutTransactionInput>,
  block: BlockCreateOneWithoutTransactionsInput,
  account: AccountCreateOneWithoutTransactionsInput,
};

export type TransactionCreateManyWithoutBlockInput = {
  create?: Maybe<Array<TransactionCreateWithoutBlockInput>>,
  connect?: Maybe<Array<TransactionWhereUniqueInput>>,
};

export type TransactionCreateOneWithoutReceiptInput = {
  create?: Maybe<TransactionCreateWithoutReceiptInput>,
  connect?: Maybe<TransactionWhereUniqueInput>,
};

export type TransactionCreateWithoutBlockInput = {
  txHash: Scalars['String'],
  serviceName: Scalars['String'],
  method: Scalars['String'],
  payload: Scalars['String'],
  cyclesPrice: Scalars['String'],
  cyclesLimit: Scalars['String'],
  nonce: Scalars['String'],
  pubkey: Scalars['String'],
  signature: Scalars['String'],
  chainId: Scalars['String'],
  timeout: Scalars['String'],
  receipt?: Maybe<ReceiptCreateOneWithoutTransactionInput>,
  account: AccountCreateOneWithoutTransactionsInput,
};

export type TransactionCreateWithoutReceiptInput = {
  txHash: Scalars['String'],
  serviceName: Scalars['String'],
  method: Scalars['String'],
  payload: Scalars['String'],
  cyclesPrice: Scalars['String'],
  cyclesLimit: Scalars['String'],
  nonce: Scalars['String'],
  pubkey: Scalars['String'],
  signature: Scalars['String'],
  chainId: Scalars['String'],
  timeout: Scalars['String'],
  block: BlockCreateOneWithoutTransactionsInput,
  account: AccountCreateOneWithoutTransactionsInput,
};

export type TransactionFilter = {
  every?: Maybe<TransactionWhereInput>,
  some?: Maybe<TransactionWhereInput>,
  none?: Maybe<TransactionWhereInput>,
};

export type TransactionOrderByInput = {
  id?: Maybe<OrderByArg>,
  txHash?: Maybe<OrderByArg>,
  serviceName?: Maybe<OrderByArg>,
  method?: Maybe<OrderByArg>,
  payload?: Maybe<OrderByArg>,
  cyclesPrice?: Maybe<OrderByArg>,
  cyclesLimit?: Maybe<OrderByArg>,
  nonce?: Maybe<OrderByArg>,
  pubkey?: Maybe<OrderByArg>,
  signature?: Maybe<OrderByArg>,
  chainId?: Maybe<OrderByArg>,
  timeout?: Maybe<OrderByArg>,
};

export type TransactionWhereInput = {
  id?: Maybe<IntFilter>,
  txHash?: Maybe<StringFilter>,
  serviceName?: Maybe<StringFilter>,
  method?: Maybe<StringFilter>,
  payload?: Maybe<StringFilter>,
  cyclesPrice?: Maybe<StringFilter>,
  cyclesLimit?: Maybe<StringFilter>,
  nonce?: Maybe<StringFilter>,
  pubkey?: Maybe<StringFilter>,
  signature?: Maybe<StringFilter>,
  chainId?: Maybe<StringFilter>,
  timeout?: Maybe<StringFilter>,
  AND?: Maybe<Array<TransactionWhereInput>>,
  OR?: Maybe<Array<TransactionWhereInput>>,
  NOT?: Maybe<Array<TransactionWhereInput>>,
  receipt?: Maybe<ReceiptWhereInput>,
  block?: Maybe<BlockWhereInput>,
  account?: Maybe<AccountWhereInput>,
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  txHash?: Maybe<Scalars['String']>,
};

export type Validator = {
   __typename?: 'Validator',
  address: Scalars['String'],
  proposeWeight: Scalars['Int'],
  voteWeight: Scalars['Int'],
  blocks: Array<Block>,
};


export type ValidatorBlocksArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ValidatorCreateInput = {
  address: Scalars['String'],
  proposeWeight: Scalars['Int'],
  voteWeight: Scalars['Int'],
  blocks?: Maybe<BlockCreateManyWithoutValidatorsInput>,
};

export type ValidatorCreateManyWithoutBlocksInput = {
  create?: Maybe<Array<ValidatorCreateWithoutBlocksInput>>,
  connect?: Maybe<Array<ValidatorWhereUniqueInput>>,
};

export type ValidatorCreateWithoutBlocksInput = {
  address: Scalars['String'],
  proposeWeight: Scalars['Int'],
  voteWeight: Scalars['Int'],
};

export type ValidatorFilter = {
  every?: Maybe<ValidatorWhereInput>,
  some?: Maybe<ValidatorWhereInput>,
  none?: Maybe<ValidatorWhereInput>,
};

export type ValidatorWhereInput = {
  id?: Maybe<IntFilter>,
  address?: Maybe<StringFilter>,
  proposeWeight?: Maybe<IntFilter>,
  voteWeight?: Maybe<IntFilter>,
  blocks?: Maybe<BlockFilter>,
  AND?: Maybe<Array<ValidatorWhereInput>>,
  OR?: Maybe<Array<ValidatorWhereInput>>,
  NOT?: Maybe<Array<ValidatorWhereInput>>,
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  address?: Maybe<Scalars['String']>,
};

export type BlockQueryVariables = {
  height?: Maybe<Scalars['Int']>
};


export type BlockQuery = (
  { __typename?: 'Query' }
  & { block: Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'height' | 'stateRoot' | 'timestamp' | 'transactionsCount' | 'validatorVersion'>
    & { proof: (
      { __typename?: 'Proof' }
      & Pick<Proof, 'round'>
    ) }
  )> }
);

export type BlocksListQueryVariables = {
  skip?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>
};


export type BlocksListQuery = (
  { __typename?: 'Query' }
  & { blocks: Array<(
    { __typename?: 'Block' }
    & Pick<Block, 'height' | 'timestamp' | 'transactionsCount'>
  )> }
);

export type RecentBlocksQueryVariables = {};


export type RecentBlocksQuery = (
  { __typename?: 'Query' }
  & { blocks: Array<(
    { __typename?: 'Block' }
    & Pick<Block, 'height' | 'transactionsCount' | 'timestamp'>
  )> }
);

export type RecentTransactionsQueryVariables = {};


export type RecentTransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'cyclesPrice' | 'txHash' | 'serviceName' | 'method'>
    & { block: (
      { __typename?: 'Block' }
      & Pick<Block, 'height'>
    ) }
  )> }
);

export type LatestBlockQueryVariables = {};


export type LatestBlockQuery = (
  { __typename?: 'Query' }
  & { blocks: Array<(
    { __typename?: 'Block' }
    & Pick<Block, 'height' | 'timestamp'>
    & { validators: Array<(
      { __typename?: 'Validator' }
      & Pick<Validator, 'address'>
    )> }
  )> }
);

export type TransactionQueryVariables = {
  txHash: Scalars['String']
};


export type TransactionQuery = (
  { __typename?: 'Query' }
  & { transaction: Maybe<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'txHash' | 'cyclesLimit' | 'cyclesPrice' | 'serviceName' | 'method' | 'payload' | 'nonce' | 'pubkey' | 'signature'>
    & { block: (
      { __typename?: 'Block' }
      & Pick<Block, 'height'>
    ), receipt: Maybe<(
      { __typename?: 'Receipt' }
      & Pick<Receipt, 'cyclesUsed'>
      & { response: (
        { __typename?: 'ReceiptResponse' }
        & Pick<ReceiptResponse, 'isError' | 'ret'>
      ) }
    )> }
  )> }
);

export type GetTransactionListQueryVariables = {
  perPage?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type GetTransactionListQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'txHash' | 'cyclesPrice' | 'cyclesLimit' | 'serviceName' | 'method'>
    & { block: (
      { __typename?: 'Block' }
      & Pick<Block, 'height'>
    ) }
  )> }
);
