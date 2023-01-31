#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod campaign {
    use ink_prelude::string::String;
    use ink_storage::traits::SpreadAllocate;   
    use openbrush::storage::Mapping;
    use openbrush::traits::Storage;      
    use openbrush::{
        contracts::ownable::*,
        modifiers,
    };
    use scale::Decode;
    use scale::Encode;

    #[derive(Debug, Encode, Decode, PartialEq)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        Custom(String),
    }
    pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

    #[derive(Default, Debug)]
    #[openbrush::upgradeable_storage(STORAGE_KEY)]
    pub struct Data {
        pub minimum_contribution: u128,
        pub approvers: Mapping<AccountId, bool>,
        pub approvers_count: u128,
        //request
        pub description: String,
        pub value: u128,
        pub recipient: AccountId,
        pub complete: bool,
        pub approval_count: u128,
    }

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Campaign {
        #[storage_field]
        data: Data,
        #[storage_field]
        ownable: ownable::Data,
    }

    impl Ownable for Campaign {}

    impl Campaign {
        #[ink(constructor)]
        pub fn new(minimum: u128) -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut Campaign| {
                instance.data.minimum_contribution = minimum;
                //set owner
                let caller = instance.env().caller();
                instance._init_with_owner(caller);
            })
        }

        /*
        #[ink(message, payable)]
        pub fn contribute(&mut self) -> Result<(), Error> {
            if self.env().transferred_value() <= self.data.minimum_contribution {
                return Err(Error::Custom(String::from(
                    "Amount is under minimumContribution",
                )));
            }
            self.data.approvers.insert(&self.env().caller(), &(true));
            self.data.approvers_count += 1;
            Ok(())
        }

        #[ink(message, payable)]
        //#[modifiers(only_owner)]
        pub fn create_request(&mut self,description: String, value: u128, recipient: AccountId,
        ) -> Result<(), OwnableError> {
            // Sol2Ink Not Implemented yet: Request newRequest = Request({description: description, value: value, recipient: recipient, complete: false, approvalCount: 0 })
            // Sol2Ink Not Implemented yet: requests.push(newRequest);
            self.data.description = description;
            self.data.value = value;
            self.data.recipient = recipient;
            Ok(())
        }

        #[ink(message)]
        pub fn approve_request(&mut self) -> Result<(), Error> {
            if !self
                .data
                .approvers
                .get(&self.env().caller())
                .unwrap_or_default()
            {
                return Err(Error::Custom(String::from(
                    "SMART CONTRACT MAKE PANIC BEEP BEEP BEEP",
                )));
            }
            self.data.approval_count += 1;
            Ok(())
        }

        #[ink(message)]
        //#[modifiers(only_owner)]
        pub fn finalize_request(&mut self) -> Result<(), OwnableError> {
            if self.data.approval_count <= (self.data.approvers_count / 2) {
                // return Err(OwnableError::Custom(String::from(
                //     "SMART CONTRACT MAKE PANIC BEEP BEEP BEEP",
                // )));
        }
            if self.data.complete {
                // return Err(OwnableError::Custom(String::from(
                //     "SMART CONTRACT MAKE PANIC BEEP BEEP BEEP",
                // )));
            }
            // Sol2Ink Not Implemented yet: request.recipient.transfer(request.value);
            self.data.complete = true;
            Ok(())
        }
    */
    }
}
