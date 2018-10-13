#!/bin/bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

OUT_DIR="jscript/"

# Supports both javascript and typescript. TypeScript gives us autocomplete functionality.
mkdir -p ${OUT_DIR}
protoc -I=proto/Common -I=proto/Contract -I=proto/Crypto -I=proto/File -I=proto/Query -I=proto/Services \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --ts_out=${OUT_DIR} \
    proto/*/*.proto

