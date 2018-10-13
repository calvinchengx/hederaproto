// package: proto
// file: TransactionResponse.proto

import * as jspb from "google-protobuf";

export class TransactionResponse extends jspb.Message {
  getNodetransactionprecheckcode(): NodeTransactionPrecheckCode;
  setNodetransactionprecheckcode(value: NodeTransactionPrecheckCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResponse;
  static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
  export type AsObject = {
    nodetransactionprecheckcode: NodeTransactionPrecheckCode,
  }
}

export enum NodeTransactionPrecheckCode {
  OK = 0,
  INVALID_TRANSACTION = 1,
  INVALID_ACCOUNT = 2,
  INSUFFICIENT_FEE = 3,
  INSUFFICIENT_BALANCE = 4,
  DUPLICATE = 5,
  BUSY = 6,
  NOT_SUPPORTED = 7,
}

