@isTest
private class TestVerifyDate { 
				
	 @isTest static void testCheckDates() {
        date d1 = Date.newInstance(2019, 3, 31);
        date d2 = Date.newInstance(2019, 2, 28);  
        date pri = VerifyDate.CheckDates(d1,d2);
        Boolean pri1 = VerifyDate.DateWithin30Days(d1,d2);
         
        date d3 = Date.newInstance(2019, 3, 31);          
        date d4 = Date.newInstance(2019, 3, 1);
        date pri2 = VerifyDate.CheckDates(d3,d4); 
         
        date d5 = Date.newInstance(2019, 3, 31);          
        date d6 = Date.newInstance(2019, 3, 31);
        date pri3 = VerifyDate.CheckDates(d5,d6); 
         
        date pri4 = VerifyDate.SetEndOfMonthDate(d1);
        //System.assertEquals('Normal', pri);
    }   
    
     
    
}