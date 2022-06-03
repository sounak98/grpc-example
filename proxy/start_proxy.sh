#! /usr/bin/env sh

docker run --rm -it \
    -v $(pwd)/envoy.yaml:/envoy.yaml \
    -p 8000:8000 \
    envoyproxy/envoy:v1.22.0 \
    -c /envoy.yaml
