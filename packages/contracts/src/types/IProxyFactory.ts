/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IProxy } from "./IProxy";

export class IProxyFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): IProxy {
    return new Contract(address, _abi, signerOrProvider) as IProxy;
  }
}

const _abi = [
  {
    inputs: [],
    name: "masterCopy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
