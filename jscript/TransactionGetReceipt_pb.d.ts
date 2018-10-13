// package: proto
// file: TransactionGetReceipt.proto

import * as jspb from "google-protobuf";
import * as TransactionReceipt_pb from "./TransactionReceipt_pb";
import * as BasicTypes_pb from "./BasicTypes_pb";
import * as QueryHeader_pb from "./QueryHeader_pb";
import * as ResponseHeader_pb from "./ResponseHeader_pb";

export class TransactionGetReceiptQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;

  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): BasicTypes_pb.TransactionID | undefined;
  setTransactionid(value?: BasicTypes_pb.TransactionID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetReceiptQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetReceiptQuery): TransactionGetReceiptQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetReceiptQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetReceiptQuery;
  static deserializeBinaryFromReader(message: TransactionGetReceiptQuery, reader: jspb.BinaryReader): TransactionGetReceiptQuery;
}

export namespace TransactionGetReceiptQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    transactionid?: BasicTypes_pb.TransactionID.AsObject,
  }
}

export class TransactionGetReceiptResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;

  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): TransactionReceipt_pb.TransactionReceipt | undefined;
  setReceipt(value?: TransactionReceipt_pb.TransactionReceipt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetReceiptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetReceiptResponse): TransactionGetReceiptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetReceiptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetReceiptResponse;
  static deserializeBinaryFromReader(message: TransactionGetReceiptResponse, reader: jspb.BinaryReader): TransactionGetReceiptResponse;
}

export namespace TransactionGetReceiptResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    receipt?: TransactionReceipt_pb.TransactionReceipt.AsObject,
  }
}

