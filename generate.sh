#!/bin/bash


echo "#########################################"
echo "Generating JavaScript/TypeScript protobuf"
echo "#########################################"

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

OUT_DIR="jscript/"

# Supports both javascript and typescript. TypeScript gives us autocomplete functionality.
mkdir -p ${OUT_DIR}
protoc -I=proto/Common -I=proto/Contract -I=proto/Crypto -I=proto/File -I=proto/Query -I=proto/Services \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --ts_out=${OUT_DIR} \
    proto/*/*.proto

echo "##########################"
echo "Generating golang protobuf"
echo "##########################"

mkdir -p go
export GOPATH=$PWD
export PATH=$PATH:$GOPATH/bin
go get -v google.golang.org/grpc
go get -v github.com/golang/protobuf/protoc-gen-go
protoc -I=proto/Common -I=proto/Contract -I=proto/Crypto -I=proto/File -I=proto/Query -I=proto/Services \
    --go_out=plugins=grpc:go/ \
    proto/*/*.proto

