/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUniswapV2ZapInInterface extends ethers.utils.Interface {
  functions: {
    "ZapIn(address,address,address,address,uint256,uint256)": FunctionFragment;
    "calculateSwapInAmount(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ZapIn",
    values: [string, string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSwapInAmount",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ZapIn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateSwapInAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUniswapV2ZapIn extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUniswapV2ZapInInterface;

  functions: {
    ZapIn(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "ZapIn(address,address,address,address,uint256,uint256)"(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    calculateSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "calculateSwapInAmount(uint256,uint256)"(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  ZapIn(
    _toWhomToIssue: string,
    _FromTokenContractAddress: string,
    _ToUnipoolToken0: string,
    _ToUnipoolToken1: string,
    _amount: BigNumberish,
    _minPoolTokens: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "ZapIn(address,address,address,address,uint256,uint256)"(
    _toWhomToIssue: string,
    _FromTokenContractAddress: string,
    _ToUnipoolToken0: string,
    _ToUnipoolToken1: string,
    _amount: BigNumberish,
    _minPoolTokens: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  calculateSwapInAmount(
    reserveIn: BigNumberish,
    userIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateSwapInAmount(uint256,uint256)"(
    reserveIn: BigNumberish,
    userIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    ZapIn(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ZapIn(address,address,address,address,uint256,uint256)"(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateSwapInAmount(uint256,uint256)"(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ZapIn(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "ZapIn(address,address,address,address,uint256,uint256)"(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    calculateSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateSwapInAmount(uint256,uint256)"(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ZapIn(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "ZapIn(address,address,address,address,uint256,uint256)"(
      _toWhomToIssue: string,
      _FromTokenContractAddress: string,
      _ToUnipoolToken0: string,
      _ToUnipoolToken1: string,
      _amount: BigNumberish,
      _minPoolTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    calculateSwapInAmount(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateSwapInAmount(uint256,uint256)"(
      reserveIn: BigNumberish,
      userIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
