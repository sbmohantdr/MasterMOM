(function(w) {
    "use strict";
    var utilMethods = {
        "convertToJson": convertToJson,
        "getXmlFromSoap": getXmlFromSoap,
        "xmlToJson": xmlToJson,
        "validateXML": validateXML,
        "_j_r":_j_r
    };

    const  _Error_Code = {
        101: 'Browser cant validate your XML string',
        102: 'Parse error, You have passed invalid XMl string',
        103: 'Check your XML body tag name',
        104: 'Your input should not be empty',
        105: 'convertToJson function Exception : ',
        106: 'xmlToJson function Exception : '
    };

    function convertToJson(xml_string) {
        let _c_r = this._j_r(false,'','','');  
        try {
            if (xml_string != "") {
                let xml = this.validateXML(xml_string);
                let XML_validate = xml["success"];  
                if (XML_validate) {
                    let bXml = this.getXmlFromSoap(xml_string);
                    let SOAP_XML = bXml["success"];
                    if (SOAP_XML && bXml["success_value"] != "") { 
                        let _XML_converted = new DOMParser().parseFromString(bXml["success_value"], 'text/xml');
                        let _XMLResponse = this.xmlToJson(_XML_converted);
                        if (_XMLResponse != "" && _XMLResponse!="Error") {
                            _c_r = this._j_r(true,'',_XMLResponse,'');   
                        } else {
                            _c_r = this._j_r(false,106,'','');  
                        }
                    } else {
                        _c_r = this._j_r(false,bXml['ErrorCode'],'','');  
                    }
                } else {
                    _c_r = this._j_r(false,xml['ErrorCode'],'','');   
                }
            } else {
                _c_r = this._j_r(false,104,'','');  
            }
        } catch (e) {
            _c_r = this._j_r(false,105,'',e.message); 
        } finally {
            return _c_r;
        }
    }

    function _j_r( returnVal, ErrorCode, SuccessVal, AddtionalVal) {
            if (_Error_Code.hasOwnProperty(ErrorCode)) {
                   return { success: returnVal, ErrorCode: _Error_Code[ErrorCode] + " " + AddtionalVal, success_value: SuccessVal };
      
            }else{
                   return { success: returnVal, ErrorCode: ErrorCode+ " " + AddtionalVal, success_value: SuccessVal };
      
            }    
    }

    function getXmlFromSoap(xml_string) {
        let _v_r = this._j_r(true,'','','');  
        try {
            let bodyStart = xml_string.indexOf("<SOAP-ENV:Body>") + ("<SOAP-ENV:Body>").length;
            let bodyEnd = xml_string.indexOf("</SOAP-ENV:Body>");
            let xml = xml_string.substring(bodyStart, bodyEnd);
            _v_r = this._j_r(true,'',xml,'');  
        } catch (e) {
            _v_r = this._j_r(false,103,'',''); 
        } finally {
            return _v_r;
        }
    }

    function xmlToJson(xml) {
        try {
            let obj = {};
            if (xml.nodeType == 1) {
                if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                    for (let j = 0; j < xml.attributes.length; j++) {
                        let attribute = xml.attributes.item(j);
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                }
            } else if (xml.nodeType == 3) {
                obj = xml.nodeValue;
            }
            if (xml.hasChildNodes()) {
                for (let i = 0; i < xml.childNodes.length; i++) {
                    let item = xml.childNodes.item(i);
                    let nodeName = item.nodeName.substring(item.nodeName.indexOf(":") + 1).replace('#', '');
                    if (typeof(obj[nodeName]) == "undefined") {
                        obj[nodeName] = xmlToJson(item);
                    } else {
                        if (typeof(obj[nodeName].push) == "undefined") {
                            let old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(xmlToJson(item));
                    }
                }
            }
            return obj;
        } catch (e) { 
            return "Error";
        }
    }


    function validateXML(txt) {
        // code for IE 
        let _v_r = this._j_r(true,'','','');   

        if (window.ActiveXObject) {
            let xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(txt);
            if (xmlDoc.parseError.errorCode != 0) {
                _v_r = this._j_r(false,102,'','');   
            }
        }
        // code for Mozilla, Firefox, Opera, etc.
        else if (document.implementation.createDocument) {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(txt, "text/xml");
            if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
                _v_r = this._j_r(false,102,'','');   
            }
        } else {
            _v_r = this._j_r(false,101,'','');   
        }
        return _v_r;
    } 
    w.voltumlib = utilMethods;
    
})(window);