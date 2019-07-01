({
    doInit : function(component, event, helper) {
        alert('s');
		helper.getAccountList(component);
	},
  	createMOM : function(component, event) {
      	alert('s');
        var newAcc = component.get("v.newMOM");
        var action = component.get("c.saveMOM");
        action.setParams({ 
            "acc": newAcc
        });
        action.setCallback(this, function(a) {
                var state = a.getState();
            	alert(state);
                if (state === "SUCCESS") {
                    var name = a.getReturnValue();
                    alert("hello from here"+name);
                }
            });
        $A.enqueueAction(action)
    }
})