#! /usr/bin/env sh

# run this script from dir `server/proto`
mkdir -p ../../client/src/stubs
protoc \
    --js_out=import_style=commonjs,binary:../../client/src/stubs \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:../../client/src/stubs \
    main.proto
