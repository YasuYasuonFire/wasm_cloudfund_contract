import type BN from 'bn.js';

export type AccountId = string | number[]

export interface Error {
	custom ? : Array<(number | string | BN)>
}

export class ErrorBuilder {
	static Custom(value: Array<(number | string | BN)>): Error {
		return {
			custom: value,
		};
	}
}

