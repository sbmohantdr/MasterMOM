({
	getAccountList : function(component) {
		var action = component.get('c.GetAccounts');
        var self = this;
        action.setCallback(this, function(actionResult) { 
         	component.set('v.Accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})