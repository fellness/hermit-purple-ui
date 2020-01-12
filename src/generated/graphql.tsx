export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Uint64: any,
  Hash: any,
  Address: any,
  Bytes: any,
};



export type Epoch = {
   __typename?: 'Epoch',
  header: EpochHeader,
  orderedTxHashes: Array<Scalars['Hash']>,
};

export type EpochHeader = {
   __typename?: 'EpochHeader',
  chainId: Scalars['Hash'],
  epochId: Scalars['Uint64'],
  preHash: Scalars['Hash'],
  timestamp: Scalars['Uint64'],
  orderRoot: Scalars['Hash'],
  confirmRoot: Array<Scalars['Hash']>,
  stateRoot: Scalars['Hash'],
  receiptRoot: Array<Scalars['Hash']>,
  cyclesUsed: Array<Scalars['Uint64']>,
  proposer: Scalars['Address'],
  proof: Proof,
  validatorVersion: Scalars['Uint64'],
  validators: Array<Validator>,
};

export type Event = {
   __typename?: 'Event',
  service: Scalars['String'],
  data: Scalars['String'],
};

export type ExecResp = {
   __typename?: 'ExecResp',
  ret: Scalars['String'],
  isError: Scalars['Boolean'],
};


export type InputRawTransaction = {
  chainId: Scalars['Hash'],
  cyclesLimit: Scalars['Uint64'],
  cyclesPrice: Scalars['Uint64'],
  nonce: Scalars['Hash'],
  timeout: Scalars['Uint64'],
  serviceName: Scalars['String'],
  method: Scalars['String'],
  payload: Scalars['String'],
};

export type InputTransactionEncryption = {
  txHash: Scalars['Hash'],
  pubkey: Scalars['Bytes'],
  signature: Scalars['Bytes'],
};

export type Mutation = {
   __typename?: 'Mutation',
  sendTransaction: Scalars['Hash'],
  unsafeSendTransaction: Scalars['Hash'],
};


export type MutationSendTransactionArgs = {
  inputRaw: InputRawTransaction,
  inputEncryption: InputTransactionEncryption
};


export type MutationUnsafeSendTransactionArgs = {
  inputRaw: InputRawTransaction,
  inputPrivkey: Scalars['Bytes']
};

export type Proof = {
   __typename?: 'Proof',
  epochId: Scalars['Uint64'],
  round: Scalars['Uint64'],
  epochHash: Scalars['Hash'],
  signature: Scalars['Bytes'],
  bitmap: Scalars['Bytes'],
};

export type Query = {
   __typename?: 'Query',
  getEpoch: Epoch,
  getTransaction: SignedTransaction,
  getReceipt: Receipt,
  queryService: ExecResp,
};


export type QueryGetEpochArgs = {
  epochId?: Maybe<Scalars['Uint64']>
};


export type QueryGetTransactionArgs = {
  txHash: Scalars['Hash']
};


export type QueryGetReceiptArgs = {
  txHash: Scalars['Hash']
};


export type QueryQueryServiceArgs = {
  epochId?: Maybe<Scalars['Uint64']>,
  cyclesLimit?: Maybe<Scalars['Uint64']>,
  cyclesPrice?: Maybe<Scalars['Uint64']>,
  caller: Scalars['Address'],
  serviceName: Scalars['String'],
  method: Scalars['String'],
  payload: Scalars['String']
};

export type Receipt = {
   __typename?: 'Receipt',
  stateRoot: Scalars['Hash'],
  epochId: Scalars['Uint64'],
  txHash: Scalars['Hash'],
  cyclesUsed: Scalars['Uint64'],
  events: Array<Event>,
  response: ReceiptResponse,
};

export type ReceiptResponse = {
   __typename?: 'ReceiptResponse',
  serviceName: Scalars['String'],
  method: Scalars['String'],
  ret: Scalars['String'],
  isError: Scalars['Boolean'],
};

export type SignedTransaction = {
   __typename?: 'SignedTransaction',
  chainId: Scalars['Hash'],
  cyclesLimit: Scalars['Uint64'],
  cyclesPrice: Scalars['Uint64'],
  nonce: Scalars['Hash'],
  timeout: Scalars['Uint64'],
  serviceName: Scalars['String'],
  method: Scalars['String'],
  payload: Scalars['String'],
  txHash: Scalars['Hash'],
  pubkey: Scalars['Bytes'],
  signature: Scalars['Bytes'],
};


export type Validator = {
   __typename?: 'Validator',
  address: Scalars['Address'],
  proposeWeight: Scalars['Int'],
  voteWeight: Scalars['Int'],
};

export type EpochHeightQueryVariables = {};


export type EpochHeightQuery = (
  { __typename?: 'Query' }
  & { getEpoch: (
    { __typename?: 'Epoch' }
    & { header: (
      { __typename?: 'EpochHeader' }
      & Pick<EpochHeader, 'epochId'>
    ) }
  ) }
);
