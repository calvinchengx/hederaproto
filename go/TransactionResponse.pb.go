// Code generated by protoc-gen-go. DO NOT EDIT.
// source: TransactionResponse.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// When the node receives a transaction from a client, it performs a precheck, to see if if the transaction is correctly formed, and if the account has sufficient cryptocurrency to pay the transaction fee. If it passes the precheck, then the node will send it to the network for processing.  The node will always reply to a transaction with the TransactionResponse, which indicates whether it passed the precheck, or why it failed.
type NodeTransactionPrecheckCode int32

const (
	NodeTransactionPrecheckCode_OK                   NodeTransactionPrecheckCode = 0
	NodeTransactionPrecheckCode_INVALID_TRANSACTION  NodeTransactionPrecheckCode = 1
	NodeTransactionPrecheckCode_INVALID_ACCOUNT      NodeTransactionPrecheckCode = 2
	NodeTransactionPrecheckCode_INSUFFICIENT_FEE     NodeTransactionPrecheckCode = 3
	NodeTransactionPrecheckCode_INSUFFICIENT_BALANCE NodeTransactionPrecheckCode = 4
	NodeTransactionPrecheckCode_DUPLICATE            NodeTransactionPrecheckCode = 5
	NodeTransactionPrecheckCode_BUSY                 NodeTransactionPrecheckCode = 6
	NodeTransactionPrecheckCode_NOT_SUPPORTED        NodeTransactionPrecheckCode = 7
)

var NodeTransactionPrecheckCode_name = map[int32]string{
	0: "OK",
	1: "INVALID_TRANSACTION",
	2: "INVALID_ACCOUNT",
	3: "INSUFFICIENT_FEE",
	4: "INSUFFICIENT_BALANCE",
	5: "DUPLICATE",
	6: "BUSY",
	7: "NOT_SUPPORTED",
}

var NodeTransactionPrecheckCode_value = map[string]int32{
	"OK":                   0,
	"INVALID_TRANSACTION":  1,
	"INVALID_ACCOUNT":      2,
	"INSUFFICIENT_FEE":     3,
	"INSUFFICIENT_BALANCE": 4,
	"DUPLICATE":            5,
	"BUSY":                 6,
	"NOT_SUPPORTED":        7,
}

func (x NodeTransactionPrecheckCode) String() string {
	return proto.EnumName(NodeTransactionPrecheckCode_name, int32(x))
}

func (NodeTransactionPrecheckCode) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_db1f54350bc90c8b, []int{0}
}

// When the client sends the node a transaction of any kind, the node replies with this, which simply says that the transaction passed the precheck (so the node will submit it to the network) or it failed (so it won't). To learn the consensus result, the client should later obtain a receipt (free), or can buy a more detailed record (not free).
type TransactionResponse struct {
	NodeTransactionPrecheckCode NodeTransactionPrecheckCode `protobuf:"varint,1,opt,name=nodeTransactionPrecheckCode,proto3,enum=proto.NodeTransactionPrecheckCode" json:"nodeTransactionPrecheckCode,omitempty"`
	XXX_NoUnkeyedLiteral        struct{}                    `json:"-"`
	XXX_unrecognized            []byte                      `json:"-"`
	XXX_sizecache               int32                       `json:"-"`
}

func (m *TransactionResponse) Reset()         { *m = TransactionResponse{} }
func (m *TransactionResponse) String() string { return proto.CompactTextString(m) }
func (*TransactionResponse) ProtoMessage()    {}
func (*TransactionResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_db1f54350bc90c8b, []int{0}
}

func (m *TransactionResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransactionResponse.Unmarshal(m, b)
}
func (m *TransactionResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransactionResponse.Marshal(b, m, deterministic)
}
func (m *TransactionResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransactionResponse.Merge(m, src)
}
func (m *TransactionResponse) XXX_Size() int {
	return xxx_messageInfo_TransactionResponse.Size(m)
}
func (m *TransactionResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TransactionResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TransactionResponse proto.InternalMessageInfo

func (m *TransactionResponse) GetNodeTransactionPrecheckCode() NodeTransactionPrecheckCode {
	if m != nil {
		return m.NodeTransactionPrecheckCode
	}
	return NodeTransactionPrecheckCode_OK
}

func init() {
	proto.RegisterEnum("proto.NodeTransactionPrecheckCode", NodeTransactionPrecheckCode_name, NodeTransactionPrecheckCode_value)
	proto.RegisterType((*TransactionResponse)(nil), "proto.TransactionResponse")
}

func init() { proto.RegisterFile("TransactionResponse.proto", fileDescriptor_db1f54350bc90c8b) }

var fileDescriptor_db1f54350bc90c8b = []byte{
	// 271 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x90, 0x41, 0x4b, 0xf3, 0x40,
	0x10, 0x86, 0xbf, 0xf4, 0x6b, 0xa3, 0x0e, 0x54, 0xd7, 0x49, 0xc1, 0x4a, 0x2f, 0x92, 0x83, 0x88,
	0x87, 0x1c, 0xf4, 0x17, 0x6c, 0x36, 0x1b, 0x58, 0x0c, 0x9b, 0x90, 0x6c, 0x04, 0x4f, 0x61, 0x4d,
	0x16, 0x53, 0xc5, 0x6c, 0x48, 0x8a, 0x17, 0x7f, 0x94, 0x7f, 0x51, 0xa8, 0x0a, 0x0a, 0xda, 0xd3,
	0x30, 0xf3, 0x3e, 0xf3, 0x1c, 0x5e, 0x38, 0x55, 0x83, 0xee, 0x46, 0x5d, 0x6f, 0xd6, 0xb6, 0xcb,
	0xcd, 0xd8, 0xdb, 0x6e, 0x34, 0x41, 0x3f, 0xd8, 0x8d, 0xc5, 0xd9, 0x76, 0xf8, 0xaf, 0xe0, 0xfd,
	0xc2, 0x60, 0x03, 0xab, 0xce, 0x36, 0xe6, 0x5b, 0x94, 0x0d, 0xa6, 0x6e, 0x4d, 0xfd, 0xc4, 0x6c,
	0x63, 0x96, 0xce, 0x99, 0x73, 0x71, 0x78, 0xe5, 0x7f, 0xa8, 0x02, 0xf9, 0x37, 0x99, 0xef, 0xd2,
	0x5c, 0xbe, 0x39, 0xb0, 0xda, 0xf1, 0x8c, 0x2e, 0x4c, 0xd2, 0x1b, 0xf2, 0x0f, 0x4f, 0xc0, 0x13,
	0xf2, 0x96, 0x26, 0x22, 0xaa, 0x54, 0x4e, 0x65, 0x41, 0x99, 0x12, 0xa9, 0x24, 0x0e, 0x7a, 0x70,
	0xf4, 0x15, 0x50, 0xc6, 0xd2, 0x52, 0x2a, 0x32, 0xc1, 0x05, 0x10, 0x21, 0x8b, 0x32, 0x8e, 0x05,
	0x13, 0x5c, 0xaa, 0x2a, 0xe6, 0x9c, 0xfc, 0xc7, 0x25, 0x2c, 0x7e, 0x5c, 0x43, 0x9a, 0x50, 0xc9,
	0x38, 0x99, 0xe2, 0x1c, 0x0e, 0xa2, 0x32, 0x4b, 0x04, 0xa3, 0x8a, 0x93, 0x19, 0xee, 0xc3, 0x34,
	0x2c, 0x8b, 0x3b, 0xe2, 0xe2, 0x31, 0xcc, 0x65, 0xaa, 0xaa, 0xa2, 0xcc, 0xb2, 0x34, 0x57, 0x3c,
	0x22, 0x7b, 0xe1, 0x39, 0xf8, 0xb5, 0x7d, 0x0e, 0x5a, 0xd3, 0x98, 0x41, 0xb7, 0x7a, 0x6c, 0x1f,
	0x06, 0xdd, 0xb7, 0x81, 0xee, 0xd7, 0x9f, 0x5d, 0x3c, 0xea, 0x17, 0x9d, 0x39, 0xf7, 0xee, 0x76,
	0xbb, 0x7e, 0x0f, 0x00, 0x00, 0xff, 0xff, 0x4d, 0x74, 0x24, 0x00, 0x81, 0x01, 0x00, 0x00,
}
