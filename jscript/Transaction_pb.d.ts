// package: proto
// file: Transaction.proto

import * as jspb from "google-protobuf";
import * as AdminDelete_pb from "./AdminDelete_pb";
import * as AdminUndelete_pb from "./AdminUndelete_pb";
import * as ContractCall_pb from "./ContractCall_pb";
import * as ContractCreate_pb from "./ContractCreate_pb";
import * as ContractUpdate_pb from "./ContractUpdate_pb";
import * as CryptoAddClaim_pb from "./CryptoAddClaim_pb";
import * as CryptoCreate_pb from "./CryptoCreate_pb";
import * as CryptoDelete_pb from "./CryptoDelete_pb";
import * as CryptoDeleteClaim_pb from "./CryptoDeleteClaim_pb";
import * as CryptoTransfer_pb from "./CryptoTransfer_pb";
import * as CryptoUpdate_pb from "./CryptoUpdate_pb";
import * as FileAppend_pb from "./FileAppend_pb";
import * as FileCreate_pb from "./FileCreate_pb";
import * as FileDelete_pb from "./FileDelete_pb";
import * as FileUpdate_pb from "./FileUpdate_pb";
import * as Duration_pb from "./Duration_pb";
import * as BasicTypes_pb from "./BasicTypes_pb";

export class TransactionBody extends jspb.Message {
  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): BasicTypes_pb.TransactionID | undefined;
  setTransactionid(value?: BasicTypes_pb.TransactionID): void;

  hasNodeaccountid(): boolean;
  clearNodeaccountid(): void;
  getNodeaccountid(): BasicTypes_pb.AccountID | undefined;
  setNodeaccountid(value?: BasicTypes_pb.AccountID): void;

  getTransactionfee(): number;
  setTransactionfee(value: number): void;

  hasTransactionvalidduration(): boolean;
  clearTransactionvalidduration(): void;
  getTransactionvalidduration(): Duration_pb.Duration | undefined;
  setTransactionvalidduration(value?: Duration_pb.Duration): void;

  getGeneraterecord(): boolean;
  setGeneraterecord(value: boolean): void;

  getMemo(): string;
  setMemo(value: string): void;

  hasAdmindelete(): boolean;
  clearAdmindelete(): void;
  getAdmindelete(): AdminDelete_pb.AdminDeleteTransactionBody | undefined;
  setAdmindelete(value?: AdminDelete_pb.AdminDeleteTransactionBody): void;

  hasAdminundelete(): boolean;
  clearAdminundelete(): void;
  getAdminundelete(): AdminUndelete_pb.AdminUndeleteTransactionBody | undefined;
  setAdminundelete(value?: AdminUndelete_pb.AdminUndeleteTransactionBody): void;

  hasContractcall(): boolean;
  clearContractcall(): void;
  getContractcall(): ContractCall_pb.ContractCallTransactionBody | undefined;
  setContractcall(value?: ContractCall_pb.ContractCallTransactionBody): void;

  hasContractcreateinstance(): boolean;
  clearContractcreateinstance(): void;
  getContractcreateinstance(): ContractCreate_pb.ContractCreateTransactionBody | undefined;
  setContractcreateinstance(value?: ContractCreate_pb.ContractCreateTransactionBody): void;

  hasContractupdateinstance(): boolean;
  clearContractupdateinstance(): void;
  getContractupdateinstance(): ContractUpdate_pb.ContractUpdateTransactionBody | undefined;
  setContractupdateinstance(value?: ContractUpdate_pb.ContractUpdateTransactionBody): void;

  hasCryptoaddclaim(): boolean;
  clearCryptoaddclaim(): void;
  getCryptoaddclaim(): CryptoAddClaim_pb.CryptoAddClaimTransactionBody | undefined;
  setCryptoaddclaim(value?: CryptoAddClaim_pb.CryptoAddClaimTransactionBody): void;

  hasCryptocreateaccount(): boolean;
  clearCryptocreateaccount(): void;
  getCryptocreateaccount(): CryptoCreate_pb.CryptoCreateTransactionBody | undefined;
  setCryptocreateaccount(value?: CryptoCreate_pb.CryptoCreateTransactionBody): void;

  hasCryptodelete(): boolean;
  clearCryptodelete(): void;
  getCryptodelete(): CryptoDelete_pb.CryptoDeleteTransactionBody | undefined;
  setCryptodelete(value?: CryptoDelete_pb.CryptoDeleteTransactionBody): void;

  hasCryptodeleteclaim(): boolean;
  clearCryptodeleteclaim(): void;
  getCryptodeleteclaim(): CryptoDeleteClaim_pb.CryptoDeleteClaimTransactionBody | undefined;
  setCryptodeleteclaim(value?: CryptoDeleteClaim_pb.CryptoDeleteClaimTransactionBody): void;

  hasCryptotransfer(): boolean;
  clearCryptotransfer(): void;
  getCryptotransfer(): CryptoTransfer_pb.CryptoTransferTransactionBody | undefined;
  setCryptotransfer(value?: CryptoTransfer_pb.CryptoTransferTransactionBody): void;

  hasCryptoupdateaccount(): boolean;
  clearCryptoupdateaccount(): void;
  getCryptoupdateaccount(): CryptoUpdate_pb.CryptoUpdateTransactionBody | undefined;
  setCryptoupdateaccount(value?: CryptoUpdate_pb.CryptoUpdateTransactionBody): void;

  hasFileappend(): boolean;
  clearFileappend(): void;
  getFileappend(): FileAppend_pb.FileAppendTransactionBody | undefined;
  setFileappend(value?: FileAppend_pb.FileAppendTransactionBody): void;

  hasFilecreate(): boolean;
  clearFilecreate(): void;
  getFilecreate(): FileCreate_pb.FileCreateTransactionBody | undefined;
  setFilecreate(value?: FileCreate_pb.FileCreateTransactionBody): void;

  hasFiledelete(): boolean;
  clearFiledelete(): void;
  getFiledelete(): FileDelete_pb.FileDeleteTransactionBody | undefined;
  setFiledelete(value?: FileDelete_pb.FileDeleteTransactionBody): void;

  hasFileupdate(): boolean;
  clearFileupdate(): void;
  getFileupdate(): FileUpdate_pb.FileUpdateTransactionBody | undefined;
  setFileupdate(value?: FileUpdate_pb.FileUpdateTransactionBody): void;

  getDataCase(): TransactionBody.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBody): TransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBody;
  static deserializeBinaryFromReader(message: TransactionBody, reader: jspb.BinaryReader): TransactionBody;
}

export namespace TransactionBody {
  export type AsObject = {
    transactionid?: BasicTypes_pb.TransactionID.AsObject,
    nodeaccountid?: BasicTypes_pb.AccountID.AsObject,
    transactionfee: number,
    transactionvalidduration?: Duration_pb.Duration.AsObject,
    generaterecord: boolean,
    memo: string,
    admindelete?: AdminDelete_pb.AdminDeleteTransactionBody.AsObject,
    adminundelete?: AdminUndelete_pb.AdminUndeleteTransactionBody.AsObject,
    contractcall?: ContractCall_pb.ContractCallTransactionBody.AsObject,
    contractcreateinstance?: ContractCreate_pb.ContractCreateTransactionBody.AsObject,
    contractupdateinstance?: ContractUpdate_pb.ContractUpdateTransactionBody.AsObject,
    cryptoaddclaim?: CryptoAddClaim_pb.CryptoAddClaimTransactionBody.AsObject,
    cryptocreateaccount?: CryptoCreate_pb.CryptoCreateTransactionBody.AsObject,
    cryptodelete?: CryptoDelete_pb.CryptoDeleteTransactionBody.AsObject,
    cryptodeleteclaim?: CryptoDeleteClaim_pb.CryptoDeleteClaimTransactionBody.AsObject,
    cryptotransfer?: CryptoTransfer_pb.CryptoTransferTransactionBody.AsObject,
    cryptoupdateaccount?: CryptoUpdate_pb.CryptoUpdateTransactionBody.AsObject,
    fileappend?: FileAppend_pb.FileAppendTransactionBody.AsObject,
    filecreate?: FileCreate_pb.FileCreateTransactionBody.AsObject,
    filedelete?: FileDelete_pb.FileDeleteTransactionBody.AsObject,
    fileupdate?: FileUpdate_pb.FileUpdateTransactionBody.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    ADMINDELETE = 20,
    ADMINUNDELETE = 21,
    CONTRACTCALL = 7,
    CONTRACTCREATEINSTANCE = 8,
    CONTRACTUPDATEINSTANCE = 9,
    CRYPTOADDCLAIM = 10,
    CRYPTOCREATEACCOUNT = 11,
    CRYPTODELETE = 12,
    CRYPTODELETECLAIM = 13,
    CRYPTOTRANSFER = 14,
    CRYPTOUPDATEACCOUNT = 15,
    FILEAPPEND = 16,
    FILECREATE = 17,
    FILEDELETE = 18,
    FILEUPDATE = 19,
  }
}

export class Transaction extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): TransactionBody | undefined;
  setBody(value?: TransactionBody): void;

  hasSigs(): boolean;
  clearSigs(): void;
  getSigs(): BasicTypes_pb.SignatureList | undefined;
  setSigs(value?: BasicTypes_pb.SignatureList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    body?: TransactionBody.AsObject,
    sigs?: BasicTypes_pb.SignatureList.AsObject,
  }
}

