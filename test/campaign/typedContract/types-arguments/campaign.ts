import type BN from 'bn.js';

export type AccountId = string | number[]

export interface Error {
	custom ? : string
}

export class ErrorBuilder {
	static Custom(value: string): Error {
		return {
			custom: value,
		};
	}
}

