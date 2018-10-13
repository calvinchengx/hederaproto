// package: proto
// file: AdminUndelete.proto

import * as jspb from "google-protobuf";
import * as BasicTypes_pb from "./BasicTypes_pb";
import * as Timestamp_pb from "./Timestamp_pb";

export class AdminUndeleteTransactionBody extends jspb.Message {
  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;

  getIdCase(): AdminUndeleteTransactionBody.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUndeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUndeleteTransactionBody): AdminUndeleteTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminUndeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUndeleteTransactionBody;
  static deserializeBinaryFromReader(message: AdminUndeleteTransactionBody, reader: jspb.BinaryReader): AdminUndeleteTransactionBody;
}

export namespace AdminUndeleteTransactionBody {
  export type AsObject = {
    fileid?: BasicTypes_pb.FileID.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    FILEID = 1,
    CONTRACTID = 2,
  }
}

