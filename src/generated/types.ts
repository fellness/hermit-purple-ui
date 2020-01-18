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

export type Epoch = {
  __typename?: 'Epoch';
  epochId: Scalars['Int'];
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

export type EpochTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EpochValidatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EpochCreateInput = {
  epochId: Scalars['Int'];
  transactionsCount: Scalars['Int'];
  preHash: Scalars['String'];
  timestamp: Scalars['DateTime'];
  orderRoot: Scalars['String'];
  stateRoot: Scalars['String'];
  proposer: Scalars['String'];
  validatorVersion: Scalars['String'];
  transactions?: Maybe<TransactionCreateManyWithoutTransactionsInput>;
  proof: ProofCreateOneWithoutProofInput;
  validators?: Maybe<ValidatorCreateManyWithoutValidatorsInput>;
};

export type EpochCreateManyWithoutEpochesInput = {
  create?: Maybe<Array<EpochCreateWithoutValidatorsInput>>;
  connect?: Maybe<Array<EpochWhereUniqueInput>>;
};

export type EpochCreateOneWithoutEpochInput = {
  create?: Maybe<EpochCreateWithoutTransactionsInput>;
  connect?: Maybe<EpochWhereUniqueInput>;
};

export type EpochCreateWithoutTransactionsInput = {
  epochId: Scalars['Int'];
  transactionsCount: Scalars['Int'];
  preHash: Scalars['String'];
  timestamp: Scalars['DateTime'];
  orderRoot: Scalars['String'];
  stateRoot: Scalars['String'];
  proposer: Scalars['String'];
  validatorVersion: Scalars['String'];
  proof: ProofCreateOneWithoutProofInput;
  validators?: Maybe<ValidatorCreateManyWithoutValidatorsInput>;
};

export type EpochCreateWithoutValidatorsInput = {
  epochId: Scalars['Int'];
  transactionsCount: Scalars['Int'];
  preHash: Scalars['String'];
  timestamp: Scalars['DateTime'];
  orderRoot: Scalars['String'];
  stateRoot: Scalars['String'];
  proposer: Scalars['String'];
  validatorVersion: Scalars['String'];
  transactions?: Maybe<TransactionCreateManyWithoutTransactionsInput>;
  proof: ProofCreateOneWithoutProofInput;
};

export type EpochFilter = {
  every?: Maybe<EpochWhereInput>;
  some?: Maybe<EpochWhereInput>;
  none?: Maybe<EpochWhereInput>;
};

export type EpochOrderByInput = {
  id?: Maybe<OrderByArg>;
  epochId?: Maybe<OrderByArg>;
  transactionsCount?: Maybe<OrderByArg>;
  preHash?: Maybe<OrderByArg>;
  timestamp?: Maybe<OrderByArg>;
  orderRoot?: Maybe<OrderByArg>;
  stateRoot?: Maybe<OrderByArg>;
  proposer?: Maybe<OrderByArg>;
  validatorVersion?: Maybe<OrderByArg>;
};

export type EpochWhereInput = {
  id?: Maybe<IntFilter>;
  epochId?: Maybe<IntFilter>;
  transactionsCount?: Maybe<IntFilter>;
  transactions?: Maybe<TransactionFilter>;
  preHash?: Maybe<StringFilter>;
  timestamp?: Maybe<DateTimeFilter>;
  orderRoot?: Maybe<StringFilter>;
  stateRoot?: Maybe<StringFilter>;
  proposer?: Maybe<StringFilter>;
  validatorVersion?: Maybe<StringFilter>;
  validators?: Maybe<ValidatorFilter>;
  AND?: Maybe<Array<EpochWhereInput>>;
  OR?: Maybe<Array<EpochWhereInput>>;
  NOT?: Maybe<Array<EpochWhereInput>>;
  proof?: Maybe<ProofWhereInput>;
};

export type EpochWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  epochId?: Maybe<Scalars['Int']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createOneEpoch: Epoch;
  createOneTransaction: Transaction;
  createOneValidator: Validator;
};

export type MutationCreateOneEpochArgs = {
  data: EpochCreateInput;
};

export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput;
};

export type MutationCreateOneValidatorArgs = {
  data: ValidatorCreateInput;
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
  epochHash: Scalars['String'];
};

export type ProofCreateOneWithoutProofInput = {
  create?: Maybe<ProofCreateWithoutEpochesInput>;
  connect?: Maybe<ProofWhereUniqueInput>;
};

export type ProofCreateWithoutEpochesInput = {
  epochId: Scalars['Int'];
  round: Scalars['Int'];
  epochHash: Scalars['String'];
  signature: Scalars['String'];
  bitmap: Scalars['String'];
};

export type ProofWhereInput = {
  id?: Maybe<IntFilter>;
  epochId?: Maybe<IntFilter>;
  round?: Maybe<IntFilter>;
  epochHash?: Maybe<StringFilter>;
  signature?: Maybe<StringFilter>;
  bitmap?: Maybe<StringFilter>;
  epoches?: Maybe<EpochFilter>;
  AND?: Maybe<Array<ProofWhereInput>>;
  OR?: Maybe<Array<ProofWhereInput>>;
  NOT?: Maybe<Array<ProofWhereInput>>;
};

export type ProofWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  epoch?: Maybe<Epoch>;
  transaction?: Maybe<Transaction>;
  validator?: Maybe<Validator>;
  epoches: Array<Epoch>;
  transactions: Array<Transaction>;
};

export type QueryEpochArgs = {
  where: EpochWhereUniqueInput;
};

export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};

export type QueryValidatorArgs = {
  where: ValidatorWhereUniqueInput;
};

export type QueryEpochesArgs = {
  where?: Maybe<EpochWhereInput>;
  orderBy?: Maybe<EpochOrderByInput>;
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
  epoch: Epoch;
  serviceName: Scalars['String'];
  method: Scalars['String'];
  payload: Scalars['String'];
  cyclesPrice: Scalars['String'];
  cyclesLimit: Scalars['String'];
  nonce: Scalars['String'];
  pubkey: Scalars['String'];
  signature: Scalars['String'];
};

export type TransactionCreateInput = {
  txHash: Scalars['String'];
  serviceName: Scalars['String'];
  method: Scalars['String'];
  payload: Scalars['String'];
  cyclesPrice: Scalars['String'];
  cyclesLimit: Scalars['String'];
  nonce: Scalars['String'];
  pubkey: Scalars['String'];
  signature: Scalars['String'];
  chainId: Scalars['String'];
  timeout: Scalars['String'];
  epoch: EpochCreateOneWithoutEpochInput;
};

export type TransactionCreateManyWithoutTransactionsInput = {
  create?: Maybe<Array<TransactionCreateWithoutEpochInput>>;
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
};

export type TransactionCreateWithoutEpochInput = {
  txHash: Scalars['String'];
  serviceName: Scalars['String'];
  method: Scalars['String'];
  payload: Scalars['String'];
  cyclesPrice: Scalars['String'];
  cyclesLimit: Scalars['String'];
  nonce: Scalars['String'];
  pubkey: Scalars['String'];
  signature: Scalars['String'];
  chainId: Scalars['String'];
  timeout: Scalars['String'];
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
  epoch?: Maybe<EpochWhereInput>;
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
  epoches: Array<Epoch>;
};

export type ValidatorEpochesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ValidatorCreateInput = {
  address: Scalars['String'];
  proposeWeight: Scalars['Int'];
  voteWeight: Scalars['Int'];
  epoches?: Maybe<EpochCreateManyWithoutEpochesInput>;
};

export type ValidatorCreateManyWithoutValidatorsInput = {
  create?: Maybe<Array<ValidatorCreateWithoutEpochesInput>>;
  connect?: Maybe<Array<ValidatorWhereUniqueInput>>;
};

export type ValidatorCreateWithoutEpochesInput = {
  address: Scalars['String'];
  proposeWeight: Scalars['Int'];
  voteWeight: Scalars['Int'];
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
  epoches?: Maybe<EpochFilter>;
  AND?: Maybe<Array<ValidatorWhereInput>>;
  OR?: Maybe<Array<ValidatorWhereInput>>;
  NOT?: Maybe<Array<ValidatorWhereInput>>;
};

export type ValidatorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
};

export type EpochQueryVariables = {
  epochId?: Maybe<Scalars['Int']>;
};

export type EpochQuery = { __typename?: 'Query' } & {
  epoch: Maybe<
    { __typename?: 'Epoch' } & Pick<
      Epoch,
      | 'epochId'
      | 'stateRoot'
      | 'timestamp'
      | 'transactionsCount'
      | 'validatorVersion'
    > & { proof: { __typename?: 'Proof' } & Pick<Proof, 'round'> }
  >;
};

export type EpochsListQueryVariables = {
  skip?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type EpochsListQuery = { __typename?: 'Query' } & {
  epoches: Array<
    { __typename?: 'Epoch' } & Pick<
      Epoch,
      'epochId' | 'timestamp' | 'transactionsCount'
    >
  >;
};

export type RecentEpochesQueryVariables = {};

export type RecentEpochesQuery = { __typename?: 'Query' } & {
  epoches: Array<
    { __typename?: 'Epoch' } & Pick<
      Epoch,
      'epochId' | 'transactionsCount' | 'timestamp'
    >
  >;
};

export type RecentTransactionsQueryVariables = {};

export type RecentTransactionsQuery = { __typename?: 'Query' } & {
  transactions: Array<
    { __typename?: 'Transaction' } & Pick<
      Transaction,
      'cyclesPrice' | 'txHash' | 'serviceName' | 'method'
    > & { epoch: { __typename?: 'Epoch' } & Pick<Epoch, 'epochId'> }
  >;
};

export type LatestEpochQueryVariables = {};

export type LatestEpochQuery = { __typename?: 'Query' } & {
  epoches: Array<
    { __typename?: 'Epoch' } & Pick<Epoch, 'epochId' | 'timestamp'> & {
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
    > & { epoch: { __typename?: 'Epoch' } & Pick<Epoch, 'epochId'> }
  >;
};

export type GetTransactionListQueryVariables = {};

export type GetTransactionListQuery = { __typename?: 'Query' } & {
  transactions: Array<
    { __typename?: 'Transaction' } & Pick<
      Transaction,
      'txHash' | 'cyclesPrice' | 'cyclesLimit' | 'serviceName' | 'method'
    > & { epoch: { __typename?: 'Epoch' } & Pick<Epoch, 'epochId'> }
  >;
};
