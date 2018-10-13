// package: proto
// file: Query.proto

import * as jspb from "google-protobuf";
import * as GetByKey_pb from "./GetByKey_pb";
import * as GetBySolidityID_pb from "./GetBySolidityID_pb";
import * as ContractCallLocal_pb from "./ContractCallLocal_pb";
import * as ContractGetInfo_pb from "./ContractGetInfo_pb";
import * as ContractGetBytecode_pb from "./ContractGetBytecode_pb";
import * as ContractGetRecords_pb from "./ContractGetRecords_pb";
import * as CryptoGetAccountBalance_pb from "./CryptoGetAccountBalance_pb";
import * as CryptoGetAccountRecords_pb from "./CryptoGetAccountRecords_pb";
import * as CryptoGetInfo_pb from "./CryptoGetInfo_pb";
import * as CryptoGetClaim_pb from "./CryptoGetClaim_pb";
import * as CryptoGetStakers_pb from "./CryptoGetStakers_pb";
import * as FileGetContents_pb from "./FileGetContents_pb";
import * as FileGetInfo_pb from "./FileGetInfo_pb";
import * as TransactionGetReceipt_pb from "./TransactionGetReceipt_pb";
import * as TransactionGetRecord_pb from "./TransactionGetRecord_pb";

export class Query extends jspb.Message {
  hasGetbykey(): boolean;
  clearGetbykey(): void;
  getGetbykey(): GetByKey_pb.GetByKeyQuery | undefined;
  setGetbykey(value?: GetByKey_pb.GetByKeyQuery): void;

  hasGetbysolidityid(): boolean;
  clearGetbysolidityid(): void;
  getGetbysolidityid(): GetBySolidityID_pb.GetBySolidityIDQuery | undefined;
  setGetbysolidityid(value?: GetBySolidityID_pb.GetBySolidityIDQuery): void;

  hasContractcalllocal(): boolean;
  clearContractcalllocal(): void;
  getContractcalllocal(): ContractCallLocal_pb.ContractCallLocalQuery | undefined;
  setContractcalllocal(value?: ContractCallLocal_pb.ContractCallLocalQuery): void;

  hasContractgetinfo(): boolean;
  clearContractgetinfo(): void;
  getContractgetinfo(): ContractGetInfo_pb.ContractGetInfoQuery | undefined;
  setContractgetinfo(value?: ContractGetInfo_pb.ContractGetInfoQuery): void;

  hasContractgetbytecode(): boolean;
  clearContractgetbytecode(): void;
  getContractgetbytecode(): ContractGetBytecode_pb.ContractGetBytecodeQuery | undefined;
  setContractgetbytecode(value?: ContractGetBytecode_pb.ContractGetBytecodeQuery): void;

  hasContractgetrecords(): boolean;
  clearContractgetrecords(): void;
  getContractgetrecords(): ContractGetRecords_pb.ContractGetRecordsQuery | undefined;
  setContractgetrecords(value?: ContractGetRecords_pb.ContractGetRecordsQuery): void;

  hasCryptogetaccountbalance(): boolean;
  clearCryptogetaccountbalance(): void;
  getCryptogetaccountbalance(): CryptoGetAccountBalance_pb.CryptoGetAccountBalanceQuery | undefined;
  setCryptogetaccountbalance(value?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceQuery): void;

  hasCryptogetaccountrecords(): boolean;
  clearCryptogetaccountrecords(): void;
  getCryptogetaccountrecords(): CryptoGetAccountRecords_pb.CryptoGetAccountRecordsQuery | undefined;
  setCryptogetaccountrecords(value?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsQuery): void;

  hasCryptogetinfo(): boolean;
  clearCryptogetinfo(): void;
  getCryptogetinfo(): CryptoGetInfo_pb.CryptoGetInfoQuery | undefined;
  setCryptogetinfo(value?: CryptoGetInfo_pb.CryptoGetInfoQuery): void;

  hasCryptogetclaim(): boolean;
  clearCryptogetclaim(): void;
  getCryptogetclaim(): CryptoGetClaim_pb.CryptoGetClaimQuery | undefined;
  setCryptogetclaim(value?: CryptoGetClaim_pb.CryptoGetClaimQuery): void;

  hasCryptogetproxystakers(): boolean;
  clearCryptogetproxystakers(): void;
  getCryptogetproxystakers(): CryptoGetStakers_pb.CryptoGetStakersQuery | undefined;
  setCryptogetproxystakers(value?: CryptoGetStakers_pb.CryptoGetStakersQuery): void;

  hasFilegetcontents(): boolean;
  clearFilegetcontents(): void;
  getFilegetcontents(): FileGetContents_pb.FileGetContentsQuery | undefined;
  setFilegetcontents(value?: FileGetContents_pb.FileGetContentsQuery): void;

  hasFilegetinfo(): boolean;
  clearFilegetinfo(): void;
  getFilegetinfo(): FileGetInfo_pb.FileGetInfoQuery | undefined;
  setFilegetinfo(value?: FileGetInfo_pb.FileGetInfoQuery): void;

  hasTransactiongetreceipt(): boolean;
  clearTransactiongetreceipt(): void;
  getTransactiongetreceipt(): TransactionGetReceipt_pb.TransactionGetReceiptQuery | undefined;
  setTransactiongetreceipt(value?: TransactionGetReceipt_pb.TransactionGetReceiptQuery): void;

  hasTransactiongetrecord(): boolean;
  clearTransactiongetrecord(): void;
  getTransactiongetrecord(): TransactionGetRecord_pb.TransactionGetRecordQuery | undefined;
  setTransactiongetrecord(value?: TransactionGetRecord_pb.TransactionGetRecordQuery): void;

  getQueryCase(): Query.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    getbykey?: GetByKey_pb.GetByKeyQuery.AsObject,
    getbysolidityid?: GetBySolidityID_pb.GetBySolidityIDQuery.AsObject,
    contractcalllocal?: ContractCallLocal_pb.ContractCallLocalQuery.AsObject,
    contractgetinfo?: ContractGetInfo_pb.ContractGetInfoQuery.AsObject,
    contractgetbytecode?: ContractGetBytecode_pb.ContractGetBytecodeQuery.AsObject,
    contractgetrecords?: ContractGetRecords_pb.ContractGetRecordsQuery.AsObject,
    cryptogetaccountbalance?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceQuery.AsObject,
    cryptogetaccountrecords?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsQuery.AsObject,
    cryptogetinfo?: CryptoGetInfo_pb.CryptoGetInfoQuery.AsObject,
    cryptogetclaim?: CryptoGetClaim_pb.CryptoGetClaimQuery.AsObject,
    cryptogetproxystakers?: CryptoGetStakers_pb.CryptoGetStakersQuery.AsObject,
    filegetcontents?: FileGetContents_pb.FileGetContentsQuery.AsObject,
    filegetinfo?: FileGetInfo_pb.FileGetInfoQuery.AsObject,
    transactiongetreceipt?: TransactionGetReceipt_pb.TransactionGetReceiptQuery.AsObject,
    transactiongetrecord?: TransactionGetRecord_pb.TransactionGetRecordQuery.AsObject,
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    GETBYKEY = 1,
    GETBYSOLIDITYID = 2,
    CONTRACTCALLLOCAL = 3,
    CONTRACTGETINFO = 4,
    CONTRACTGETBYTECODE = 5,
    CONTRACTGETRECORDS = 6,
    CRYPTOGETACCOUNTBALANCE = 7,
    CRYPTOGETACCOUNTRECORDS = 8,
    CRYPTOGETINFO = 9,
    CRYPTOGETCLAIM = 10,
    CRYPTOGETPROXYSTAKERS = 11,
    FILEGETCONTENTS = 12,
    FILEGETINFO = 13,
    TRANSACTIONGETRECEIPT = 14,
    TRANSACTIONGETRECORD = 15,
  }
}

