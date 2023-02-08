/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/campaign';
import type * as ReturnTypes from '../types-returns/campaign';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* getMinimum
	*
	* @returns { ReturnNumber }
	*/
	"getMinimum" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getMinimum", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getApproversCount
	*
	* @returns { ReturnNumber }
	*/
	"getApproversCount" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getApproversCount", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getApprovalCount
	*
	* @returns { ReturnNumber }
	*/
	"getApprovalCount" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getApprovalCount", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getDescription
	*
	* @returns { Array<number> | null }
	*/
	"getDescription" (
		__options: GasLimit,
	): Promise< QueryReturnType< Array<number> | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getDescription", [], __options, (result) => { return handleReturnType(result, getTypeDescription(9, 'campaign')); });
	}

	/**
	* getValue
	*
	* @returns { ReturnNumber }
	*/
	"getValue" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getValue", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getRecipient
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"getRecipient" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getRecipient", [], __options, (result) => { return handleReturnType(result, getTypeDescription(0, 'campaign')); });
	}

	/**
	* getBalance
	*
	* @returns { ReturnNumber }
	*/
	"getBalance" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getBalance", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* createRequest
	*
	* @param { Array<(number | string | BN)> | null } description,
	* @param { (string | number | BN) } value,
	* @param { ArgumentTypes.AccountId } recipient,
	* @returns { void }
	*/
	"createRequest" (
		description: Array<(number | string | BN)> | null,
		value: (string | number | BN),
		recipient: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createRequest", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [description, value, recipient], __options);
	}

	/**
	* approveRequest
	*
	* @returns { void }
	*/
	"approveRequest" (
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "approveRequest", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

	/**
	* finalizeRequest
	*
	* @returns { void }
	*/
	"finalizeRequest" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "finalizeRequest", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "campaign");
		}, [], __options);
	}

}