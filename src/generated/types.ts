export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  address: Scalars['String'];
  transactions: Array<Transaction>;
};

export type AccountTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AccountOrderByInput = {
  id?: Maybe<OrderByArg>;
  address?: Maybe<OrderByArg>;
};

export type AccountWhereInput = {
  id?: Maybe<IntFilter>;
  address?: Maybe<StringFilter>;
  transactions?: Maybe<TransactionFilter>;
  assets?: Maybe<AssetFilter>;
  transferFrom?: Maybe<AssetTransferFilter>;
  transferTo?: Maybe<AssetTransferFilter>;
  AND?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  NOT?: Maybe<Array<AccountWhereInput>>;
};

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
};

export type Asset = {
  __typename?: 'Asset';
  assetId: Scalars['String'];
  account: Account;
  name: Scalars['String'];
  supply: Scalars['String'];
  symbol: Scalars['String'];
  creationTransaction: Transaction;
  assetTransfers: Array<AssetTransfer>;
};

export type AssetAssetTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AssetFilter = {
  every?: Maybe<AssetWhereInput>;
  some?: Maybe<AssetWhereInput>;
  none?: Maybe<AssetWhereInput>;
};

export type AssetOrderByInput = {
  id?: Maybe<OrderByArg>;
  assetId?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  symbol?: Maybe<OrderByArg>;
  supply?: Maybe<OrderByArg>;
};

export type AssetTransfer = {
  __typename?: 'AssetTransfer';
  from: Account;
  to: Account;
  value: Scalars['String'];
  transaction: Transaction;
};

export type AssetTransferFilter = {
  every?: Maybe<AssetTransferWhereInput>;
  some?: Maybe<AssetTransferWhereInput>;
  none?: Maybe<AssetTransferWhereInput>;
};

export type AssetTransferOrderByInput = {
  id?: Maybe<OrderByArg>;
  value?: Maybe<OrderByArg>;
};

export type AssetTransferWhereInput = {
  id?: Maybe<IntFilter>;
  value?: Maybe<StringFilter>;
  AND?: Maybe<Array<AssetTransferWhereInput>>;
  OR?: Maybe<Array<AssetTransferWhereInput>>;
  NOT?: Maybe<Array<AssetTransferWhereInput>>;
  asset?: Maybe<AssetWhereInput>;
  transaction?: Maybe<TransactionWhereInput>;
  from?: Maybe<AccountWhereInput>;
  to?: Maybe<AccountWhereInput>;
};

export type AssetTransferWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type AssetWhereInput = {
  id?: Maybe<IntFilter>;
  assetId?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  symbol?: Maybe<StringFilter>;
  supply?: Maybe<StringFilter>;
  assetTransfers?: Maybe<AssetTransferFilter>;
  AND?: Maybe<Array<AssetWhereInput>>;
  OR?: Maybe<Array<AssetWhereInput>>;
  NOT?: Maybe<Array<AssetWhereInput>>;
  creationTransaction?: Maybe<TransactionWhereInput>;
  account?: Maybe<AccountWhereInput>;
};

export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  assetId?: Maybe<Scalars['String']>;
};

export type Block = {
  __typename?: 'Block';
  height: Scalars['Int'];
  transactionsCount: Scalars['Int'];
  transactions: Array<Transaction>;
  preHash: Scalars['String'];
  timestamp: Scalars['DateTime'];
  orderedTransactionRoot: Scalars['String'];
  stateRoot: Scalars['String'];
  proof: Proof;
  validatorVersion: Scalars['String'];
  validators: Array<Validator>;
};

export type BlockTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BlockValidatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BlockFilter = {
  every?: Maybe<BlockWhereInput>;
  some?: Maybe<BlockWhereInput>;
  none?: Maybe<BlockWhereInput>;
};

export type BlockOrderByInput = {
  id?: Maybe<OrderByArg>;
  height?: Maybe<OrderByArg>;
  transactionsCount?: Maybe<OrderByArg>;
  preHash?: Maybe<OrderByArg>;
  timestamp?: Maybe<OrderByArg>;
  orderRoot?: Maybe<OrderByArg>;
  stateRoot?: Maybe<OrderByArg>;
  proposer?: Maybe<OrderByArg>;
  validatorVersion?: Maybe<OrderByArg>;
};

export type BlockWhereInput = {
  id?: Maybe<IntFilter>;
  height?: Maybe<IntFilter>;
  transactionsCount?: Maybe<IntFilter>;
  transactions?: Maybe<TransactionFilter>;
  preHash?: Maybe<StringFilter>;
  timestamp?: Maybe<DateTimeFilter>;
  orderRoot?: Maybe<StringFilter>;
  stateRoot?: Maybe<StringFilter>;
  proposer?: Maybe<StringFilter>;
  validatorVersion?: Maybe<StringFilter>;
  validators?: Maybe<ValidatorFilter>;
  AND?: Maybe<Array<BlockWhereInput>>;
  OR?: Maybe<Array<BlockWhereInput>>;
  NOT?: Maybe<Array<BlockWhereInput>>;
  proof?: Maybe<ProofWhereInput>;
};

export type BlockWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type Event = {
  __typename?: 'Event';
  data: Scalars['String'];
  receipt: Receipt;
};

export type EventFilter = {
  every?: Maybe<EventWhereInput>;
  some?: Maybe<EventWhereInput>;
  none?: Maybe<EventWhereInput>;
};

export type EventWhereInput = {
  id?: Maybe<IntFilter>;
  service?: Maybe<StringFilter>;
  data?: Maybe<StringFilter>;
  AND?: Maybe<Array<EventWhereInput>>;
  OR?: Maybe<Array<EventWhereInput>>;
  NOT?: Maybe<Array<EventWhereInput>>;
  receipt?: Maybe<ReceiptWhereInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc',
}

export type Proof = {
  __typename?: 'Proof';
  signature: Scalars['String'];
  round: Scalars['Int'];
  bitmap: Scalars['String'];
  blockHash: Scalars['String'];
};

export type ProofWhereInput = {
  id?: Maybe<IntFilter>;
  height?: Maybe<IntFilter>;
  round?: Maybe<IntFilter>;
  blockHash?: Maybe<StringFilter>;
  signature?: Maybe<StringFilter>;
  bitmap?: Maybe<StringFilter>;
  blocks?: Maybe<BlockFilter>;
  AND?: Maybe<Array<ProofWhereInput>>;
  OR?: Maybe<Array<ProofWhereInput>>;
  NOT?: Maybe<Array<ProofWhereInput>>;
};

export type Query = {
  __typename?: 'Query';
  block?: Maybe<Block>;
  transaction?: Maybe<Transaction>;
  validator?: Maybe<Validator>;
  receipt?: Maybe<Receipt>;
  account?: Maybe<Account>;
  asset?: Maybe<Asset>;
  assetTransfer?: Maybe<AssetTransfer>;
  accounts: Array<Account>;
  blocks: Array<Block>;
  transactions: Array<Transaction>;
  receipts: Array<Receipt>;
  assets: Array<Asset>;
  assetTransfers: Array<AssetTransfer>;
};

export type QueryBlockArgs = {
  where: BlockWhereUniqueInput;
};

export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};

export type QueryValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};

export type QueryReceiptArgs = {
  where: ReceiptWhereUniqueInput;
};

export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type QueryAssetTransferArgs = {
  where: AssetTransferWhereUniqueInput;
};

export type QueryAccountsArgs = {
  where?: Maybe<AccountWhereInput>;
  orderBy?: Maybe<AccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryBlocksArgs = {
  where?: Maybe<BlockWhereInput>;
  orderBy?: Maybe<BlockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryReceiptsArgs = {
  where?: Maybe<ReceiptWhereInput>;
  orderBy?: Maybe<ReceiptOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAssetTransfersArgs = {
  where?: Maybe<AssetTransferWhereInput>;
  orderBy?: Maybe<AssetTransferOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Receipt = {
  __typename?: 'Receipt';
  transaction: Transaction;
  cyclesUsed: Scalars['String'];
  events: Array<Event>;
  response: ReceiptResponse;
};

export type ReceiptEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ReceiptOrderByInput = {
  id?: Maybe<OrderByArg>;
  cyclesUsed?: Maybe<OrderByArg>;
};

export type ReceiptResponse = {
  __typename?: 'ReceiptResponse';
  isError: Scalars['Boolean'];
  ret: Scalars['String'];
};

export type ReceiptResponseWhereInput = {
  id?: Maybe<IntFilter>;
  ret?: Maybe<StringFilter>;
  isError?: Maybe<BooleanFilter>;
  AND?: Maybe<Array<ReceiptResponseWhereInput>>;
  OR?: Maybe<Array<ReceiptResponseWhereInput>>;
  NOT?: Maybe<Array<ReceiptResponseWhereInput>>;
  receipt?: Maybe<ReceiptWhereInput>;
};

export type ReceiptWhereInput = {
  id?: Maybe<IntFilter>;
  cyclesUsed?: Maybe<StringFilter>;
  events?: Maybe<EventFilter>;
  AND?: Maybe<Array<ReceiptWhereInput>>;
  OR?: Maybe<Array<ReceiptWhereInput>>;
  NOT?: Maybe<Array<ReceiptWhereInput>>;
  transaction?: Maybe<TransactionWhereInput>;
  response?: Maybe<ReceiptResponseWhereInput>;
};

export type ReceiptWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  txHash: Scalars['String'];
  block: Block;
  serviceName: Scalars['String'];
  method: Scalars['String'];
  payload: Scalars['String'];
  cyclesPrice: Scalars['String'];
  cyclesLimit: Scalars['String'];
  nonce: Scalars['String'];
  account: Account;
  pubkey: Scalars['String'];
  signature: Scalars['String'];
  receipt?: Maybe<Receipt>;
};

export type TransactionFilter = {
  every?: Maybe<TransactionWhereInput>;
  some?: Maybe<TransactionWhereInput>;
  none?: Maybe<TransactionWhereInput>;
};

export type TransactionOrderByInput = {
  id?: Maybe<OrderByArg>;
  txHash?: Maybe<OrderByArg>;
  serviceName?: Maybe<OrderByArg>;
  method?: Maybe<OrderByArg>;
  payload?: Maybe<OrderByArg>;
  cyclesPrice?: Maybe<OrderByArg>;
  cyclesLimit?: Maybe<OrderByArg>;
  nonce?: Maybe<OrderByArg>;
  pubkey?: Maybe<OrderByArg>;
  signature?: Maybe<OrderByArg>;
  chainId?: Maybe<OrderByArg>;
  timeout?: Maybe<OrderByArg>;
};

export type TransactionWhereInput = {
  id?: Maybe<IntFilter>;
  txHash?: Maybe<StringFilter>;
  serviceName?: Maybe<StringFilter>;
  method?: Maybe<StringFilter>;
  payload?: Maybe<StringFilter>;
  cyclesPrice?: Maybe<StringFilter>;
  cyclesLimit?: Maybe<StringFilter>;
  nonce?: Maybe<StringFilter>;
  pubkey?: Maybe<StringFilter>;
  signature?: Maybe<StringFilter>;
  chainId?: Maybe<StringFilter>;
  timeout?: Maybe<StringFilter>;
  AND?: Maybe<Array<TransactionWhereInput>>;
  OR?: Maybe<Array<TransactionWhereInput>>;
  NOT?: Maybe<Array<TransactionWhereInput>>;
  receipt?: Maybe<ReceiptWhereInput>;
  block?: Maybe<BlockWhereInput>;
  account?: Maybe<AccountWhereInput>;
  createdAsset?: Maybe<AssetWhereInput>;
  transfer?: Maybe<AssetTransferWhereInput>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  txHash?: Maybe<Scalars['String']>;
};

export type Validator = {
  __typename?: 'Validator';
  address: Scalars['String'];
  proposeWeight: Scalars['Int'];
  voteWeight: Scalars['Int'];
  blocks: Array<Block>;
};

export type ValidatorBlocksArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ValidatorFilter = {
  every?: Maybe<ValidatorWhereInput>;
  some?: Maybe<ValidatorWhereInput>;
  none?: Maybe<ValidatorWhereInput>;
};

export type ValidatorWhereInput = {
  id?: Maybe<IntFilter>;
  address?: Maybe<StringFilter>;
  proposeWeight?: Maybe<IntFilter>;
  voteWeight?: Maybe<IntFilter>;
  blocks?: Maybe<BlockFilter>;
  AND?: Maybe<Array<ValidatorWhereInput>>;
  OR?: Maybe<Array<ValidatorWhereInput>>;
  NOT?: Maybe<Array<ValidatorWhereInput>>;
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
};

export type AccountTransactionQueryVariables = {
  address: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AccountTransactionQuery = { __typename?: 'Query' } & {
  account: Maybe<
    { __typename?: 'Account' } & {
      transactions: Array<
        { __typename?: 'Transaction' } & Pick<
          Transaction,
          'txHash' | 'cyclesPrice' | 'cyclesLimit' | 'serviceName' | 'method'
        > & {
            block: { __typename?: 'Block' } & Pick<
              Block,
              'height' | 'timestamp'
            >;
          }
      >;
    }
  >;
};

export type AssetQueryVariables = {
  assetId: Scalars['String'];
  perPage?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AssetQuery = { __typename?: 'Query' } & {
  asset: Maybe<
    { __typename?: 'Asset' } & Pick<Asset, 'name' | 'symbol' | 'supply'> & {
        assetTransfers: Array<
          { __typename?: 'AssetTransfer' } & Pick<AssetTransfer, 'value'> & {
              from: { __typename?: 'Account' } & Pick<Account, 'address'>;
              to: { __typename?: 'Account' } & Pick<Account, 'address'>;
              transaction: { __typename?: 'Transaction' } & Pick<
                Transaction,
                'txHash'
              >;
            }
        >;
      }
  >;
};

export type GetAssetListQueryVariables = {
  perPage?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type GetAssetListQuery = { __typename?: 'Query' } & {
  assets: Array<
    { __typename?: 'Asset' } & Pick<
      Asset,
      'assetId' | 'name' | 'symbol' | 'supply'
    >
  >;
};

export type BlockQueryVariables = {
  height?: Maybe<Scalars['Int']>;
};

export type BlockQuery = { __typename?: 'Query' } & {
  block: Maybe<
    { __typename?: 'Block' } & Pick<
      Block,
      | 'height'
      | 'stateRoot'
      | 'timestamp'
      | 'transactionsCount'
      | 'validatorVersion'
    > & { proof: { __typename?: 'Proof' } & Pick<Proof, 'round'> }
  >;
};

export type BlocksListQueryVariables = {
  skip?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type BlocksListQuery = { __typename?: 'Query' } & {
  blocks: Array<
    { __typename?: 'Block' } & Pick<
      Block,
      'height' | 'timestamp' | 'transactionsCount'
    >
  >;
};

export type RecentBlocksQueryVariables = {};

export type RecentBlocksQuery = { __typename?: 'Query' } & {
  blocks: Array<
    { __typename?: 'Block' } & Pick<
      Block,
      'height' | 'transactionsCount' | 'timestamp'
    >
  >;
};

export type RecentTransactionsQueryVariables = {};

export type RecentTransactionsQuery = { __typename?: 'Query' } & {
  transactions: Array<
    { __typename?: 'Transaction' } & Pick<
      Transaction,
      'cyclesPrice' | 'txHash' | 'serviceName' | 'method'
    > & { block: { __typename?: 'Block' } & Pick<Block, 'height'> }
  >;
};

export type LatestBlockQueryVariables = {};

export type LatestBlockQuery = { __typename?: 'Query' } & {
  blocks: Array<
    { __typename?: 'Block' } & Pick<Block, 'height' | 'timestamp'> & {
        validators: Array<
          { __typename?: 'Validator' } & Pick<Validator, 'address'>
        >;
      }
  >;
};

export type TransactionQueryVariables = {
  txHash: Scalars['String'];
};

export type TransactionQuery = { __typename?: 'Query' } & {
  transaction: Maybe<
    { __typename?: 'Transaction' } & Pick<
      Transaction,
      | 'txHash'
      | 'cyclesLimit'
      | 'cyclesPrice'
      | 'serviceName'
      | 'method'
      | 'payload'
      | 'nonce'
      | 'pubkey'
      | 'signature'
    > & {
        block: { __typename?: 'Block' } & Pick<Block, 'height'>;
        receipt: Maybe<
          { __typename?: 'Receipt' } & Pick<Receipt, 'cyclesUsed'> & {
              response: { __typename?: 'ReceiptResponse' } & Pick<
                ReceiptResponse,
                'isError' | 'ret'
              >;
            }
        >;
      }
  >;
};

export type GetTransactionListQueryVariables = {
  perPage?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type GetTransactionListQuery = { __typename?: 'Query' } & {
  transactions: Array<
    { __typename?: 'Transaction' } & Pick<
      Transaction,
      'txHash' | 'cyclesPrice' | 'cyclesLimit' | 'serviceName' | 'method'
    > & { block: { __typename?: 'Block' } & Pick<Block, 'height'> }
  >;
};
