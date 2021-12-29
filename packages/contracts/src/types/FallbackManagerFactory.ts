/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FallbackManager } from "./FallbackManager";

export class FallbackManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FallbackManager> {
    return super.deploy(overrides || {}) as Promise<FallbackManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FallbackManager {
    return super.attach(address) as FallbackManager;
  }
  connect(signer: Signer): FallbackManagerFactory {
    return super.connect(signer) as FallbackManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FallbackManager {
    return new Contract(address, _abi, signerOrProvider) as FallbackManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "ChangedFallbackHandler",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "setFallbackHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610194806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f08a032314610084575b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d580548061005557005b36600080373360601b365260008060143601600080855af190503d6000803e8061007e573d6000fd5b503d6000f35b6100aa6004803603602081101561009a57600080fd5b50356001600160a01b03166100ac565b005b6100b46100fc565b6100bd8161013a565b604080516001600160a01b038316815290517f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b09181900360200190a150565b333014610138576040805162461bcd60e51b8152602060048201526005602482015264475330333160d81b604482015290519081900360640190fd5b565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d55556fea26469706673582212204a9518f4d210feba8825944dbf904642b2006f3309a9c33733edcaed0926e01764736f6c63430007060033";
