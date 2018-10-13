// package: proto
// file: Response.proto

import * as jspb from "google-protobuf";
import * as GetByKey_pb from "./GetByKey_pb";
import * as GetBySolidityID_pb from "./GetBySolidityID_pb";
import * as ContractCallLocal_pb from "./ContractCallLocal_pb";
import * as ContractGetBytecode_pb from "./ContractGetBytecode_pb";
import * as ContractGetInfo_pb from "./ContractGetInfo_pb";
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

export class Response extends jspb.Message {
  hasGetbykey(): boolean;
  clearGetbykey(): void;
  getGetbykey(): GetByKey_pb.GetByKeyResponse | undefined;
  setGetbykey(value?: GetByKey_pb.GetByKeyResponse): void;

  hasGetbysolidityid(): boolean;
  clearGetbysolidityid(): void;
  getGetbysolidityid(): GetBySolidityID_pb.GetBySolidityIDResponse | undefined;
  setGetbysolidityid(value?: GetBySolidityID_pb.GetBySolidityIDResponse): void;

  hasContractcalllocal(): boolean;
  clearContractcalllocal(): void;
  getContractcalllocal(): ContractCallLocal_pb.ContractCallLocalResponse | undefined;
  setContractcalllocal(value?: ContractCallLocal_pb.ContractCallLocalResponse): void;

  hasContractgetbytecoderesponse(): boolean;
  clearContractgetbytecoderesponse(): void;
  getContractgetbytecoderesponse(): ContractGetBytecode_pb.ContractGetBytecodeResponse | undefined;
  setContractgetbytecoderesponse(value?: ContractGetBytecode_pb.ContractGetBytecodeResponse): void;

  hasContractgetinfo(): boolean;
  clearContractgetinfo(): void;
  getContractgetinfo(): ContractGetInfo_pb.ContractGetInfoResponse | undefined;
  setContractgetinfo(value?: ContractGetInfo_pb.ContractGetInfoResponse): void;

  hasContractgetrecordsresponse(): boolean;
  clearContractgetrecordsresponse(): void;
  getContractgetrecordsresponse(): ContractGetRecords_pb.ContractGetRecordsResponse | undefined;
  setContractgetrecordsresponse(value?: ContractGetRecords_pb.ContractGetRecordsResponse): void;

  hasCryptogetaccountbalance(): boolean;
  clearCryptogetaccountbalance(): void;
  getCryptogetaccountbalance(): CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse | undefined;
  setCryptogetaccountbalance(value?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse): void;

  hasCryptogetaccountrecords(): boolean;
  clearCryptogetaccountrecords(): void;
  getCryptogetaccountrecords(): CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse | undefined;
  setCryptogetaccountrecords(value?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse): void;

  hasCryptogetinfo(): boolean;
  clearCryptogetinfo(): void;
  getCryptogetinfo(): CryptoGetInfo_pb.CryptoGetInfoResponse | undefined;
  setCryptogetinfo(value?: CryptoGetInfo_pb.CryptoGetInfoResponse): void;

  hasCryptogetclaim(): boolean;
  clearCryptogetclaim(): void;
  getCryptogetclaim(): CryptoGetClaim_pb.CryptoGetClaimResponse | undefined;
  setCryptogetclaim(value?: CryptoGetClaim_pb.CryptoGetClaimResponse): void;

  hasCryptogetproxystakers(): boolean;
  clearCryptogetproxystakers(): void;
  getCryptogetproxystakers(): CryptoGetStakers_pb.CryptoGetStakersResponse | undefined;
  setCryptogetproxystakers(value?: CryptoGetStakers_pb.CryptoGetStakersResponse): void;

  hasFilegetcontents(): boolean;
  clearFilegetcontents(): void;
  getFilegetcontents(): FileGetContents_pb.FileGetContentsResponse | undefined;
  setFilegetcontents(value?: FileGetContents_pb.FileGetContentsResponse): void;

  hasFilegetinfo(): boolean;
  clearFilegetinfo(): void;
  getFilegetinfo(): FileGetInfo_pb.FileGetInfoResponse | undefined;
  setFilegetinfo(value?: FileGetInfo_pb.FileGetInfoResponse): void;

  hasTransactiongetreceipt(): boolean;
  clearTransactiongetreceipt(): void;
  getTransactiongetreceipt(): TransactionGetReceipt_pb.TransactionGetReceiptResponse | undefined;
  setTransactiongetreceipt(value?: TransactionGetReceipt_pb.TransactionGetReceiptResponse): void;

  hasTransactiongetrecord(): boolean;
  clearTransactiongetrecord(): void;
  getTransactiongetrecord(): TransactionGetRecord_pb.TransactionGetRecordResponse | undefined;
  setTransactiongetrecord(value?: TransactionGetRecord_pb.TransactionGetRecordResponse): void;

  getResponseCase(): Response.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    getbykey?: GetByKey_pb.GetByKeyResponse.AsObject,
    getbysolidityid?: GetBySolidityID_pb.GetBySolidityIDResponse.AsObject,
    contractcalllocal?: ContractCallLocal_pb.ContractCallLocalResponse.AsObject,
    contractgetbytecoderesponse?: ContractGetBytecode_pb.ContractGetBytecodeResponse.AsObject,
    contractgetinfo?: ContractGetInfo_pb.ContractGetInfoResponse.AsObject,
    contractgetrecordsresponse?: ContractGetRecords_pb.ContractGetRecordsResponse.AsObject,
    cryptogetaccountbalance?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse.AsObject,
    cryptogetaccountrecords?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse.AsObject,
    cryptogetinfo?: CryptoGetInfo_pb.CryptoGetInfoResponse.AsObject,
    cryptogetclaim?: CryptoGetClaim_pb.CryptoGetClaimResponse.AsObject,
    cryptogetproxystakers?: CryptoGetStakers_pb.CryptoGetStakersResponse.AsObject,
    filegetcontents?: FileGetContents_pb.FileGetContentsResponse.AsObject,
    filegetinfo?: FileGetInfo_pb.FileGetInfoResponse.AsObject,
    transactiongetreceipt?: TransactionGetReceipt_pb.TransactionGetReceiptResponse.AsObject,
    transactiongetrecord?: TransactionGetRecord_pb.TransactionGetRecordResponse.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    GETBYKEY = 1,
    GETBYSOLIDITYID = 2,
    CONTRACTCALLLOCAL = 3,
    CONTRACTGETBYTECODERESPONSE = 5,
    CONTRACTGETINFO = 4,
    CONTRACTGETRECORDSRESPONSE = 6,
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

