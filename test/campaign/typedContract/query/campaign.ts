/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/campaign';
import type * as ReturnTypes from '../types-returns/campaign';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
	}

	/**
	* getMinimum
	*
	* @returns { ReturnNumber }
	*/
	"getMinimum" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getMinimum", [], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getDescription
	*
	* @returns { Array<number> | null }
	*/
	"getDescription" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<number> | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getDescription", [], __options , (result) => { return handleReturnType(result, getTypeDescription(6, 'campaign')); });
	}

	/**
	* getValue
	*
	* @returns { ReturnNumber }
	*/
	"getValue" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getValue", [], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getRecipient
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"getRecipient" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getRecipient", [], __options , (result) => { return handleReturnType(result, getTypeDescription(0, 'campaign')); });
	}

	/**
	* getBalance
	*
	* @returns { ReturnNumber }
	*/
	"getBalance" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "getBalance", [], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* createRequest
	*
	* @param { Array<(number | string | BN)> | null } description,
	* @param { (string | number | BN) } value,
	* @param { ArgumentTypes.AccountId } recipient,
	* @returns { Result<null, ReturnTypes.OwnableError> }
	*/
	"createRequest" (
		description: Array<(number | string | BN)> | null,
		value: (string | number | BN),
		recipient: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.OwnableError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "createRequest", [description, value, recipient], __options , (result) => { return handleReturnType(result, getTypeDescription(7, 'campaign')); });
	}

	/**
	* approveRequest
	*
	* @returns { Result<null, ReturnTypes.Error> }
	*/
	"approveRequest" (
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<null, ReturnTypes.Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "approveRequest", [], __options , (result) => { return handleReturnType(result, getTypeDescription(10, 'campaign')); });
	}

	/**
	* finalizeRequest
	*
	* @returns { Result<null, ReturnTypes.Error> }
	*/
	"finalizeRequest" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "finalizeRequest", [], __options , (result) => { return handleReturnType(result, getTypeDescription(10, 'campaign')); });
	}

}