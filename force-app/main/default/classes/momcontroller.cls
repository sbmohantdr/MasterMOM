public with sharing class momcontroller{
    @AuraEnabled
    
    public static mom__c saveMOM (mom__c acc) { 
        upsert acc;
        return acc;
    }
	
    public static list<Account> GetAccounts(){
        return [select
               			Id,
               			Name,
               			Phone
                From
                		Account
                Order By
                		CreatedDate
                Asc
               ]; 
    }
}