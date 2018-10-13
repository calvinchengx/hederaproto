// package: proto
// file: CreateFeeSchedule.proto

import * as jspb from "google-protobuf";
import * as BasicTypes_pb from "./BasicTypes_pb";

export class CreateFeeScheduleTransactionBody extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): BasicTypes_pb.Key | undefined;
  setKey(value?: BasicTypes_pb.Key): void;

  clearTransactionfeescheduleList(): void;
  getTransactionfeescheduleList(): Array<BasicTypes_pb.TransactionFeeSchedule>;
  setTransactionfeescheduleList(value: Array<BasicTypes_pb.TransactionFeeSchedule>): void;
  addTransactionfeeschedule(value?: BasicTypes_pb.TransactionFeeSchedule, index?: number): BasicTypes_pb.TransactionFeeSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeeScheduleTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeeScheduleTransactionBody): CreateFeeScheduleTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFeeScheduleTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeeScheduleTransactionBody;
  static deserializeBinaryFromReader(message: CreateFeeScheduleTransactionBody, reader: jspb.BinaryReader): CreateFeeScheduleTransactionBody;
}

export namespace CreateFeeScheduleTransactionBody {
  export type AsObject = {
    key?: BasicTypes_pb.Key.AsObject,
    transactionfeescheduleList: Array<BasicTypes_pb.TransactionFeeSchedule.AsObject>,
  }
}

