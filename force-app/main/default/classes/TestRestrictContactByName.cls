@isTest
private class TestRestrictContactByName {
    @isTest static void TestContact() {
        List<Contact> contactList;
        contactList = new List<Contact>();
        contactList.add(new Contact(LastName='Test Account'));
        contactList.add(new Contact(LastName='INVALIDNAME'));
        
        Test.startTest(); 
        insert contactList; 
        Test.stopTest(); 
        
    } 
}