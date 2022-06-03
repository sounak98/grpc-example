## Server

### Setup

```sh
cd server
go mod download
```

### Run

```sh
cd server
go run main.go
```

### Generate server stubs

```sh
cd server/proto
./gen-server-stubs.sh
```

Stubs will be generated in `server/proto/stubs`

### Generate client stubs

```sh
cd server/proto
./gen-client-stubs.sh
```

Stubs will be generated in `client/src/stubs`

## Proxy

### Run

```sh
cd proxy
./start_proxy.sh
```

## Client

### Setup

```sh
cd client
npm install
```

### Run

```sh
cd client
npm run start
```

The example app will be accessible at http://localhost:3000
