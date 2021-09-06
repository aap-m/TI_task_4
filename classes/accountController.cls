public with sharing class accountController {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id, Name, Rating FROM Account];
    }
}