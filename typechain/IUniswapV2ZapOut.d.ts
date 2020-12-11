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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUniswapV2ZapOutInterface extends ethers.utils.Interface {
  functions: {
    "ZapOut(address,address,uint256,uint256)": FunctionFragment;
    "ZapOut2PairToken(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ZapOut",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ZapOut2PairToken",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ZapOut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ZapOut2PairToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUniswapV2ZapOut extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUniswapV2ZapOutInterface;

  functions: {
    ZapOut(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "ZapOut(address,address,uint256,uint256)"(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    ZapOut2PairToken(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ZapOut2PairToken(address,uint256)"(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  ZapOut(
    _ToTokenContractAddress: string,
    _FromUniPoolAddress: string,
    _IncomingLP: BigNumberish,
    _minTokensRec: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "ZapOut(address,address,uint256,uint256)"(
    _ToTokenContractAddress: string,
    _FromUniPoolAddress: string,
    _IncomingLP: BigNumberish,
    _minTokensRec: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  ZapOut2PairToken(
    _FromUniPoolAddress: string,
    _IncomingLP: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ZapOut2PairToken(address,uint256)"(
    _FromUniPoolAddress: string,
    _IncomingLP: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    ZapOut(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ZapOut(address,address,uint256,uint256)"(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ZapOut2PairToken(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amountA: BigNumber;
      amountB: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "ZapOut2PairToken(address,uint256)"(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amountA: BigNumber;
      amountB: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    ZapOut(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "ZapOut(address,address,uint256,uint256)"(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    ZapOut2PairToken(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ZapOut2PairToken(address,uint256)"(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ZapOut(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "ZapOut(address,address,uint256,uint256)"(
      _ToTokenContractAddress: string,
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      _minTokensRec: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    ZapOut2PairToken(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ZapOut2PairToken(address,uint256)"(
      _FromUniPoolAddress: string,
      _IncomingLP: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
