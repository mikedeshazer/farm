/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUniswapV2ZapIn } from "../IUniswapV2ZapIn";

export class IUniswapV2ZapIn__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV2ZapIn {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV2ZapIn;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_toWhomToIssue",
        type: "address",
      },
      {
        internalType: "address",
        name: "_FromTokenContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ToUnipoolToken0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ToUnipoolToken1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minPoolTokens",
        type: "uint256",
      },
    ],
    name: "ZapIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userIn",
        type: "uint256",
      },
    ],
    name: "calculateSwapInAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
