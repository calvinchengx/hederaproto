// package: proto
// file: TransactionReceipt.proto

import * as jspb from "google-protobuf";
import * as BasicTypes_pb from "./BasicTypes_pb";

export class TransactionReceipt extends jspb.Message {
  getStatus(): TransactionStatus;
  setStatus(value: TransactionStatus): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionReceipt): TransactionReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionReceipt;
  static deserializeBinaryFromReader(message: TransactionReceipt, reader: jspb.BinaryReader): TransactionReceipt;
}

export namespace TransactionReceipt {
  export type AsObject = {
    status: TransactionStatus,
    accountid?: BasicTypes_pb.AccountID.AsObject,
    fileid?: BasicTypes_pb.FileID.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
  }
}

export enum TransactionStatus {
  UNKNOWN = 0,
  SUCCESS = 1,
  FAIL_INVALID = 2,
  FAIL_FEE = 3,
  FAIL_BALANCE = 4,
}

