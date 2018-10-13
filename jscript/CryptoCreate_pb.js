/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var BasicTypes_pb = require('./BasicTypes_pb.js');
var Duration_pb = require('./Duration_pb.js');
goog.exportSymbol('proto.proto.CryptoCreateTransactionBody', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CryptoCreateTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CryptoCreateTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.CryptoCreateTransactionBody.displayName = 'proto.proto.CryptoCreateTransactionBody';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CryptoCreateTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoCreateTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoCreateTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoCreateTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && BasicTypes_pb.Key.toObject(includeInstance, f),
    initialbalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    proxyaccountid: (f = msg.getProxyaccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    proxyfraction: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxreceiveproxyfraction: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sendrecordthreshold: jspb.Message.getFieldWithDefault(msg, 6, 0),
    receiverecordthreshold: jspb.Message.getFieldWithDefault(msg, 7, 0),
    receiversigrequired: jspb.Message.getFieldWithDefault(msg, 8, false),
    autorenewperiod: (f = msg.getAutorenewperiod()) && Duration_pb.Duration.toObject(includeInstance, f),
    shardid: (f = msg.getShardid()) && BasicTypes_pb.ShardID.toObject(includeInstance, f),
    realmid: (f = msg.getRealmid()) && BasicTypes_pb.RealmID.toObject(includeInstance, f),
    newrealmadminkey: (f = msg.getNewrealmadminkey()) && BasicTypes_pb.Key.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CryptoCreateTransactionBody}
 */
proto.proto.CryptoCreateTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoCreateTransactionBody;
  return proto.proto.CryptoCreateTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoCreateTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoCreateTransactionBody}
 */
proto.proto.CryptoCreateTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInitialbalance(value);
      break;
    case 3:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setProxyaccountid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProxyfraction(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxreceiveproxyfraction(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSendrecordthreshold(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReceiverecordthreshold(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReceiversigrequired(value);
      break;
    case 9:
      var value = new Duration_pb.Duration;
      reader.readMessage(value,Duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAutorenewperiod(value);
      break;
    case 10:
      var value = new BasicTypes_pb.ShardID;
      reader.readMessage(value,BasicTypes_pb.ShardID.deserializeBinaryFromReader);
      msg.setShardid(value);
      break;
    case 11:
      var value = new BasicTypes_pb.RealmID;
      reader.readMessage(value,BasicTypes_pb.RealmID.deserializeBinaryFromReader);
      msg.setRealmid(value);
      break;
    case 12:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setNewrealmadminkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CryptoCreateTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoCreateTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoCreateTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoCreateTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.Key.serializeBinaryToWriter
    );
  }
  f = message.getInitialbalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getProxyaccountid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getProxyfraction();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMaxreceiveproxyfraction();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSendrecordthreshold();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getReceiverecordthreshold();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getReceiversigrequired();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getAutorenewperiod();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      Duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getShardid();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      BasicTypes_pb.ShardID.serializeBinaryToWriter
    );
  }
  f = message.getRealmid();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      BasicTypes_pb.RealmID.serializeBinaryToWriter
    );
  }
  f = message.getNewrealmadminkey();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      BasicTypes_pb.Key.serializeBinaryToWriter
    );
  }
};


/**
 * optional Key key = 1;
 * @return {?proto.proto.Key}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getKey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 1));
};


/** @param {?proto.proto.Key|undefined} value */
proto.proto.CryptoCreateTransactionBody.prototype.setKey = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.CryptoCreateTransactionBody.prototype.clearKey = function() {
  this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoCreateTransactionBody.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 initialBalance = 2;
 * @return {number}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getInitialbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.CryptoCreateTransactionBody.prototype.setInitialbalance = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AccountID proxyAccountID = 3;
 * @return {?proto.proto.AccountID}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getProxyaccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 3));
};


/** @param {?proto.proto.AccountID|undefined} value */
proto.proto.CryptoCreateTransactionBody.prototype.setProxyaccountid = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.proto.CryptoCreateTransactionBody.prototype.clearProxyaccountid = function() {
  this.setProxyaccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoCreateTransactionBody.prototype.hasProxyaccountid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 proxyFraction = 4;
 * @return {number}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getProxyfraction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.CryptoCreateTransactionBody.prototype.setProxyfraction = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 maxReceiveProxyFraction = 5;
 * @return {number}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getMaxreceiveproxyfraction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.proto.CryptoCreateTransactionBody.prototype.setMaxreceiveproxyfraction = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 sendRecordThreshold = 6;
 * @return {number}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getSendrecordthreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.proto.CryptoCreateTransactionBody.prototype.setSendrecordthreshold = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 receiveRecordThreshold = 7;
 * @return {number}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getReceiverecordthreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.proto.CryptoCreateTransactionBody.prototype.setReceiverecordthreshold = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool receiverSigRequired = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getReceiversigrequired = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.proto.CryptoCreateTransactionBody.prototype.setReceiversigrequired = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional Duration autoRenewPeriod = 9;
 * @return {?proto.proto.Duration}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getAutorenewperiod = function() {
  return /** @type{?proto.proto.Duration} */ (
    jspb.Message.getWrapperField(this, Duration_pb.Duration, 9));
};


/** @param {?proto.proto.Duration|undefined} value */
proto.proto.CryptoCreateTransactionBody.prototype.setAutorenewperiod = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.proto.CryptoCreateTransactionBody.prototype.clearAutorenewperiod = function() {
  this.setAutorenewperiod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoCreateTransactionBody.prototype.hasAutorenewperiod = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ShardID shardID = 10;
 * @return {?proto.proto.ShardID}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getShardid = function() {
  return /** @type{?proto.proto.ShardID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ShardID, 10));
};


/** @param {?proto.proto.ShardID|undefined} value */
proto.proto.CryptoCreateTransactionBody.prototype.setShardid = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.proto.CryptoCreateTransactionBody.prototype.clearShardid = function() {
  this.setShardid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoCreateTransactionBody.prototype.hasShardid = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RealmID realmID = 11;
 * @return {?proto.proto.RealmID}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getRealmid = function() {
  return /** @type{?proto.proto.RealmID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.RealmID, 11));
};


/** @param {?proto.proto.RealmID|undefined} value */
proto.proto.CryptoCreateTransactionBody.prototype.setRealmid = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.proto.CryptoCreateTransactionBody.prototype.clearRealmid = function() {
  this.setRealmid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoCreateTransactionBody.prototype.hasRealmid = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Key newRealmAdminKey = 12;
 * @return {?proto.proto.Key}
 */
proto.proto.CryptoCreateTransactionBody.prototype.getNewrealmadminkey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 12));
};


/** @param {?proto.proto.Key|undefined} value */
proto.proto.CryptoCreateTransactionBody.prototype.setNewrealmadminkey = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.proto.CryptoCreateTransactionBody.prototype.clearNewrealmadminkey = function() {
  this.setNewrealmadminkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoCreateTransactionBody.prototype.hasNewrealmadminkey = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.proto);