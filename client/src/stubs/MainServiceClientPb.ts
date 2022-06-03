/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as main_pb from './main_pb';


export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.MethodDescriptor(
    '/helloworld.Greeter/SayHello',
    grpcWeb.MethodType.UNARY,
    main_pb.HelloRequest,
    main_pb.HelloReply,
    (request: main_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    main_pb.HelloReply.deserializeBinary
  );

  sayHello(
    request: main_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<main_pb.HelloReply>;

  sayHello(
    request: main_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: main_pb.HelloReply) => void): grpcWeb.ClientReadableStream<main_pb.HelloReply>;

  sayHello(
    request: main_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: main_pb.HelloReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/helloworld.Greeter/SayHello',
        request,
        metadata || {},
        this.methodInfoSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/helloworld.Greeter/SayHello',
    request,
    metadata || {},
    this.methodInfoSayHello);
  }

}

