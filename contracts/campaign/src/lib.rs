#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

///SPDX-License-Identifier: GPL-3.0
#[openbrush::contract]
pub mod campaign {
    use ink_storage::traits::SpreadAllocate;
    //use ink_env::transfer;
    use openbrush::storage::Mapping;
    use openbrush::traits::Storage;
    use openbrush::traits::String;
    use openbrush::{
        contracts::ownable::*,
    };
    use scale::Decode;
    use scale::Encode;

    #[derive(Debug, Encode, Decode, PartialEq)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        Custom(String),
    }

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Campaign {
        owner : AccountId,
        minimum_contribution: u128,
        approvers: Mapping<AccountId, bool>,
        approvers_count: u128,
        //request
        description: Option<String>,
        value: u128,
        recipient: AccountId,
        now_request: bool,//request is existing
        approval_count: u128,
    }

    impl Campaign {
        #[ink(constructor)]
        pub fn new(minimum: u128) -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut Self| {
                instance.minimum_contribution = minimum;
                //set owner
                instance.owner = instance.env().caller();
            })
        }

        /// Simply returns the 'minimum' value.
        #[ink(message)]
        pub fn get_minimum(&self) -> u128 {
            self.minimum_contribution
        }

        /// Simply return value.
        #[ink(message)]
        pub fn get_approvers_count(&self) -> u128 {
            self.approvers_count
        }

        /// Simply return value.
        #[ink(message)]
        pub fn get_approval_count(&self) -> u128 {
            self.approval_count
        }

        /// Simply return value.
        #[ink(message)]
        pub fn get_description(&self) -> Option<String> {
            return self.description.clone();
        }

        /// Simply return value.
        #[ink(message)]
        pub fn get_value(&self) -> u128 {
            self.value
        }

        /// Simply return value.
        #[ink(message)]
        pub fn get_recipient(&self) -> AccountId {
            self.recipient
        }
        /// Simply return value.
        #[ink(message)]
        pub fn get_balance(&self) -> u128 {
            self.env().balance() 
        }


        // #[ink(message, payable)]
        // pub fn contribute(&mut self) -> Result<(), Error> {
        //     if self.env().transferred_value() <= self.minimum_contribution {
        //         return Err(Error::Custom(String::from(
        //             "Your contribution is under minimum.",
        //         )));
        //     }
        //     if !self.now_request{
        //         return Err(Error::Custom(String::from(
        //             "There is no proposal.",
        //         )));
        //     }
        //     self.approvers.insert(&self.env().caller(), &true);
        //     self.approvers_count += 1;
        //     Ok(())
        // }

        #[ink(message)]
        pub fn create_request(&mut self,description: Option<String>, value: u128, recipient: AccountId,
        ) -> Result<(), OwnableError> {
            self.description = description.clone();
            self.value = value;
            self.recipient = recipient;
            self.now_request = true;
            Ok(())
        }

        #[ink(message,payable)]
        pub fn approve_request(&mut self) -> Result<(), Error> {
            if self.env().transferred_value() <= self.minimum_contribution {
                         return Err(Error::Custom(String::from(
                             "Your contribution is under minimum.",
                         )));
             }
             if !(self.now_request) {
                return Err(Error::Custom(String::from(
                    "No Request yet.",
                )));
            }
            Ok(())
        }
        #[ink(message)]
        //#[openbrush::modifiers(only_owner)]
        pub fn finalize_request(&mut self) -> Result<(), Error> {
            //only owner can execute.
            if !(self.env().caller() == self.owner){
                return Err(Error::Custom(String::from(
                    "Except owner can't excute finalization.",
                )))
            }
            if self.env().balance() >= self.value { //enough balance gethered.
                if self.env().transfer(self.recipient,self.env().balance()).is_err() {
                    panic!("error transferring")
                }
                self.now_request = false;
            }

            Ok(())
        }
    }
}
