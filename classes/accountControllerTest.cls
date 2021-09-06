@isTest
private class accountControllerTest {
    @isTest 
    static void TestOneAcc(){
        Account AccTest1 = new Account(Name = 'Test1', Rating = 'Test1');
        Insert AccTest1;

        test.startTest();      
        List<Account> first = new List<Account>(accountController.getAccount());
        test.stopTest();
        System.assertEquals(first.size(), 1);
    }
    
    @isTest 
    static void TestZeroAcc(){

        test.startTest();      
        List<Account> first = new List<Account>(accountController.getAccount());
        test.stopTest();
        System.assertEquals(first.size(), 0);
    }
}

