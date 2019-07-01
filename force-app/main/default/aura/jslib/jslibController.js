({
	doInit : function(component, event, helper){ 
        let xml = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body><InvokeAPIResponse><TOKEN>FHp7MVyHQS18xcuNLOuaAIXlfYpg5Vilo34o+k2J2xOp3cmwPFO3RT3oOHEXW4tB</TOKEN><EXPIREDTIME>2018-09-04T20:14:03.203</EXPIREDTIME><RESULT><value>True</value><value>True</value><value>True</value></RESULT><MESSAGE>Success</MESSAGE></InvokeAPIResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>';
        let JSON_String = voltumlib.convertToJson(xml);
        console.log(JSON_String);
        if(JSON_String['success']){
        	console.log(JSON_String['success_value']);
        }else{
            alert('s');
        	console.log(JSON_String['ErrorCode']);	
        } 
    } 
})