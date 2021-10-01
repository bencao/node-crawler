# Binance Project Crawler

## Installation

1. Install [NodeJS](https://nodejs.org/en/)
2. Install yarn, by running `npm i -g yarn`
3. Install packages, `yarn`

## Usage

```
Usage: by project name, ex:

$ crawler aave-protocol

{
  aave-protocol: {
    tokenSummary: {
      holdersMakeMoney: {
        in: 22,
        ...
      }
    },
    hasInfo: true
  }
}

OR

All projects:

$ crawler all-binance-projects

{
  aave-protocol: {
    tokenSummary: {
      ...
    },
    hasInfo: true,
  },
  agrello: {
    tokenSummary: {
      ...
    },
    hasInfo: true,
  },
  ...
}
```

## Testing

```
./crawler
./crawler aave-protocol
./crawler agrello
```
