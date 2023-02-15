/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/campaign';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * getMinimum
	 *
	*/
	"getMinimum" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getMinimum", [], __options);
	}

	/**
	 * getDescription
	 *
	*/
	"getDescription" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getDescription", [], __options);
	}

	/**
	 * getValue
	 *
	*/
	"getValue" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getValue", [], __options);
	}

	/**
	 * getRecipient
	 *
	*/
	"getRecipient" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getRecipient", [], __options);
	}

	/**
	 * getBalance
	 *
	*/
	"getBalance" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getBalance", [], __options);
	}

	/**
	 * createRequest
	 *
	 * @param { Array<(number | string | BN)> | null } description,
	 * @param { (string | number | BN) } value,
	 * @param { ArgumentTypes.AccountId } recipient,
	*/
	"createRequest" (
		description: Array<(number | string | BN)> | null,
		value: (string | number | BN),
		recipient: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "createRequest", [description, value, recipient], __options);
	}

	/**
	 * approveRequest
	 *
	*/
	"approveRequest" (
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "approveRequest", [], __options);
	}

	/**
	 * finalizeRequest
	 *
	*/
	"finalizeRequest" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "finalizeRequest", [], __options);
	}

}