#! /usr/bin/env sh

# run this script from dir `server/proto`
mkdir -p stubs
protoc \
    --go_out=./stubs \
    --go_opt=paths=source_relative \
    --go-grpc_out=./stubs \
    --go-grpc_opt=paths=source_relative \
    main.proto
