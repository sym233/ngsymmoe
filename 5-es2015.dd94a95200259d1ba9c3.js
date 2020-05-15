(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{L3UP:function(e){e.exports=JSON.parse('[{"name":"Hello World!","abstract":"\u8fd9\u662f\u7b2c\u4e00\u7bc7\u535a\u5ba2","url":"1","paragraph":"<h1>Hello, World!</h1><time>2020\u5e745\u670813\u65e5-15\u70b949\u5206</time><p>\u7b2c\u4e00\u7bc7\u535a\u5ba2</p>"}]')},"U4+L":function(e,t,o){"use strict";o.r(t),o.d(t,"BlogModule",(function(){return D}));var r,i=o("ofXK"),s=o("tk/3"),n=o("2Vo4"),c=o("HDdC"),a=o("Cfvw"),h=o("LRne"),p=o("SxV6"),d=o("bOdf"),u={100:{code:100,text:"Continue",description:'"The initial part of a request has been received and has not yet been rejected by the server."',spec_title:"RFC7231#6.2.1",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.2.1"},101:{code:101,text:"Switching Protocols",description:'"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection."',spec_title:"RFC7231#6.2.2",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.2.2"},200:{code:200,text:"OK",description:'"The request has succeeded."',spec_title:"RFC7231#6.3.1",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.3.1"},201:{code:201,text:"Created",description:'"The request has been fulfilled and has resulted in one or more new resources being created."',spec_title:"RFC7231#6.3.2",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.3.2"},202:{code:202,text:"Accepted",description:'"The request has been accepted for processing, but the processing has not been completed."',spec_title:"RFC7231#6.3.3",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.3.3"},203:{code:203,text:"Non-Authoritative Information",description:'"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy."',spec_title:"RFC7231#6.3.4",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.3.4"},204:{code:204,text:"No Content",description:'"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body."',spec_title:"RFC7231#6.3.5",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.3.5"},205:{code:205,text:"Reset Content",description:'"The server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server."',spec_title:"RFC7231#6.3.6",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.3.6"},206:{code:206,text:"Partial Content",description:'"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field."',spec_title:"RFC7233#4.1",spec_href:"http://tools.ietf.org/html/rfc7233#section-4.1"},300:{code:300,text:"Multiple Choices",description:'"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers."',spec_title:"RFC7231#6.4.1",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.4.1"},301:{code:301,text:"Moved Permanently",description:'"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."',spec_title:"RFC7231#6.4.2",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.4.2"},302:{code:302,text:"Found",description:'"The target resource resides temporarily under a different URI."',spec_title:"RFC7231#6.4.3",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.4.3"},303:{code:303,text:"See Other",description:'"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request."',spec_title:"RFC7231#6.4.4",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.4.4"},304:{code:304,text:"Not Modified",description:'"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false."',spec_title:"RFC7232#4.1",spec_href:"http://tools.ietf.org/html/rfc7232#section-4.1"},305:{code:305,text:"Use Proxy",description:"*deprecated*",spec_title:"RFC7231#6.4.5",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.4.5"},307:{code:307,text:"Temporary Redirect",description:'"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI."',spec_title:"RFC7231#6.4.7",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.4.7"},400:{code:400,text:"Bad Request",description:'"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."',spec_title:"RFC7231#6.5.1",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.1"},401:{code:401,text:"Unauthorized",description:'"The request has not been applied because it lacks valid authentication credentials for the target resource."',spec_title:"RFC7235#6.3.1",spec_href:"http://tools.ietf.org/html/rfc7235#section-3.1"},402:{code:402,text:"Payment Required",description:"*reserved*",spec_title:"RFC7231#6.5.2",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.2"},403:{code:403,text:"Forbidden",description:'"The server understood the request but refuses to authorize it."',spec_title:"RFC7231#6.5.3",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.3"},404:{code:404,text:"Not Found",description:'"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists."',spec_title:"RFC7231#6.5.4",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.4"},405:{code:405,text:"Method Not Allowed",description:'"The method specified in the request-line is known by the origin server but not supported by the target resource."',spec_title:"RFC7231#6.5.5",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.5"},406:{code:406,text:"Not Acceptable",description:'"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation."',spec_title:"RFC7231#6.5.6",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.6"},407:{code:407,text:"Proxy Authentication Required",description:'"The client needs to authenticate itself in order to use a proxy."',spec_title:"RFC7231#6.3.2",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.3.2"},408:{code:408,text:"Request Timeout",description:'"The server did not receive a complete request message within the time that it was prepared to wait."',spec_title:"RFC7231#6.5.7",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.7"},409:{code:409,text:"Conflict",description:'"The request could not be completed due to a conflict with the current state of the resource."',spec_title:"RFC7231#6.5.8",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.8"},410:{code:410,text:"Gone",description:'"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."',spec_title:"RFC7231#6.5.9",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.9"},411:{code:411,text:"Length Required",description:'"The server refuses to accept the request without a defined Content-Length."',spec_title:"RFC7231#6.5.10",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.10"},412:{code:412,text:"Precondition Failed",description:'"One or more preconditions given in the request header fields evaluated to false when tested on the server."',spec_title:"RFC7232#4.2",spec_href:"http://tools.ietf.org/html/rfc7232#section-4.2"},413:{code:413,text:"Payload Too Large",description:'"The server is refusing to process a request because the request payload is larger than the server is willing or able to process."',spec_title:"RFC7231#6.5.11",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.11"},414:{code:414,text:"URI Too Long",description:'"The server is refusing to service the request because the request-target is longer than the server is willing to interpret."',spec_title:"RFC7231#6.5.12",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.12"},415:{code:415,text:"Unsupported Media Type",description:'"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method."',spec_title:"RFC7231#6.5.13",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.13"},416:{code:416,text:"Range Not Satisfiable",description:'"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."',spec_title:"RFC7233#4.4",spec_href:"http://tools.ietf.org/html/rfc7233#section-4.4"},417:{code:417,text:"Expectation Failed",description:'"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers."',spec_title:"RFC7231#6.5.14",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.14"},418:{code:418,text:"I'm a teapot",description:'"1988 April Fools Joke. Returned by tea pots requested to brew coffee."',spec_title:"RFC 2324",spec_href:"https://tools.ietf.org/html/rfc2324"},426:{code:426,text:"Upgrade Required",description:'"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."',spec_title:"RFC7231#6.5.15",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.5.15"},500:{code:500,text:"Internal Server Error",description:'"The server encountered an unexpected condition that prevented it from fulfilling the request."',spec_title:"RFC7231#6.6.1",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.6.1"},501:{code:501,text:"Not Implemented",description:'"The server does not support the functionality required to fulfill the request."',spec_title:"RFC7231#6.6.2",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.6.2"},502:{code:502,text:"Bad Gateway",description:'"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request."',spec_title:"RFC7231#6.6.3",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.6.3"},503:{code:503,text:"Service Unavailable",description:'"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay."',spec_title:"RFC7231#6.6.4",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.6.4"},504:{code:504,text:"Gateway Time-out",description:'"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request."',spec_title:"RFC7231#6.6.5",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.6.5"},505:{code:505,text:"HTTP Version Not Supported",description:'"The server does not support, or refuses to support, the protocol version that was used in the request message."',spec_title:"RFC7231#6.6.6",spec_href:"http://tools.ietf.org/html/rfc7231#section-6.6.6"},102:{code:102,text:"Processing",description:'"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it."',spec_title:"RFC5218#10.1",spec_href:"http://tools.ietf.org/html/rfc2518#section-10.1"},207:{code:207,text:"Multi-Status",description:'"Status for multiple independent operations."',spec_title:"RFC5218#10.2",spec_href:"http://tools.ietf.org/html/rfc2518#section-10.2"},226:{code:226,text:"IM Used",description:'"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."',spec_title:"RFC3229#10.4.1",spec_href:"http://tools.ietf.org/html/rfc3229#section-10.4.1"},308:{code:308,text:"Permanent Redirect",description:'"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET."',spec_title:"RFC7238",spec_href:"http://tools.ietf.org/html/rfc7238"},422:{code:422,text:"Unprocessable Entity",description:'"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions."',spec_title:"RFC5218#10.3",spec_href:"http://tools.ietf.org/html/rfc2518#section-10.3"},423:{code:423,text:"Locked",description:'"The source or destination resource of a method is locked."',spec_title:"RFC5218#10.4",spec_href:"http://tools.ietf.org/html/rfc2518#section-10.4"},424:{code:424,text:"Failed Dependency",description:'"The method could not be performed on the resource because the requested action depended on another action and that action failed."',spec_title:"RFC5218#10.5",spec_href:"http://tools.ietf.org/html/rfc2518#section-10.5"},428:{code:428,text:"Precondition Required",description:'"The origin server requires the request to be conditional."',spec_title:"RFC6585#3",spec_href:"http://tools.ietf.org/html/rfc6585#section-3"},429:{code:429,text:"Too Many Requests",description:'"The user has sent too many requests in a given amount of time ("rate limiting")."',spec_title:"RFC6585#4",spec_href:"http://tools.ietf.org/html/rfc6585#section-4"},431:{code:431,text:"Request Header Fields Too Large",description:'"The server is unwilling to process the request because its header fields are too large."',spec_title:"RFC6585#5",spec_href:"http://tools.ietf.org/html/rfc6585#section-5"},451:{code:451,text:"Unavailable For Legal Reasons",description:'"The server is denying access to the resource in response to a legal demand."',spec_title:"draft-ietf-httpbis-legally-restricted-status",spec_href:"http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status"},506:{code:506,text:"Variant Also Negotiates",description:'"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."',spec_title:"RFC2295#8.1",spec_href:"http://tools.ietf.org/html/rfc2295#section-8.1"},507:{code:507,text:"Insufficient Storage",description:'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."',spec_title:"RFC5218#10.6",spec_href:"http://tools.ietf.org/html/rfc2518#section-10.6"},511:{code:511,text:"Network Authentication Required",description:'"The client needs to authenticate to gain network access."',spec_title:"RFC6585#6",spec_href:"http://tools.ietf.org/html/rfc6585#section-6"}},l=o("fXoL"),f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(){},b=function(){},m=function(){function e(e){void 0===e&&(e={}),Object.assign(this,{caseSensitiveSearch:!1,dataEncapsulation:!1,delay:500,delete404:!1,passThruUnknownUrl:!1,post204:!0,post409:!1,put204:!0,put404:!1,apiBase:void 0,host:void 0,rootPath:void 0},e)}return(e=function(e,t,o,r){var i,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(s<3?i(n):s>3?i(t,o,n):i(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n}([f("design:paramtypes",[b])],e)).\u0275fac=function(t){return new(t||e)(l.Zb(b))},e.\u0275prov=l.Mb({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),y=function(){function e(e,t){void 0===t&&(t={}),this.inMemDbService=e,this.config=new m,this.requestInfoUtils=this.getRequestInfoUtils();var o=this.getLocation("/");this.config.host=o.host,this.config.rootPath=o.path,Object.assign(this.config,t)}return Object.defineProperty(e.prototype,"dbReady",{get:function(){return this.dbReadySubject||(this.dbReadySubject=new n.a(!1),this.resetDb()),this.dbReadySubject.asObservable().pipe(Object(p.a)((function(e){return e})))},enumerable:!0,configurable:!0}),e.prototype.handleRequest=function(e){var t=this;return this.dbReady.pipe(Object(d.a)((function(){return t.handleRequest_(e)})))},e.prototype.handleRequest_=function(e){var t,o=this,r=e.urlWithParams?e.urlWithParams:e.url,i=this.bind("parseRequestUrl"),s=i&&i(r,this.requestInfoUtils)||this.parseRequestUrl(r),n=s.collectionName,c=this.db[n],a={req:e,apiBase:s.apiBase,collection:c,collectionName:n,headers:this.createHeaders({"Content-Type":"application/json"}),id:this.parseId(c,n,s.id),method:this.getRequestMethod(e),query:s.query,resourceUrl:s.resourceUrl,url:r,utils:this.requestInfoUtils};if(/commands\/?$/i.test(a.apiBase))return this.commands(a);var h=this.bind(a.method);if(h){var p=h(a);if(p)return p}return this.db[n]?this.createResponse$((function(){return o.collectionHandler(a)})):this.config.passThruUnknownUrl?this.getPassThruBackend().handle(e):(t=this.createErrorResponseOptions(r,404,"Collection '"+n+"' not found"),this.createResponse$((function(){return t})))},e.prototype.addDelay=function(e){var t,o,r=this.config.delay;return 0===r?e:(t=e,o=r||500,new c.a((function(e){var r=!1,i=!1,s=t.subscribe((function(t){i=!0,setTimeout((function(){e.next(t),r&&e.complete()}),o)}),(function(t){return setTimeout((function(){return e.error(t)}),o)}),(function(){r=!0,i||e.complete()}));return function(){return s.unsubscribe()}})))},e.prototype.applyQuery=function(e,t){var o=[],r=this.config.caseSensitiveSearch?void 0:"i";t.forEach((function(e,t){e.forEach((function(e){return o.push({name:t,rx:new RegExp(decodeURI(e),r)})}))}));var i=o.length;return i?e.filter((function(e){for(var t=!0,r=i;t&&r;){var s=o[r-=1];t=s.rx.test(e[s.name])}return t})):e},e.prototype.bind=function(e){var t=this.inMemDbService[e];return t?t.bind(this.inMemDbService):void 0},e.prototype.bodify=function(e){return this.config.dataEncapsulation?{data:e}:e},e.prototype.clone=function(e){return JSON.parse(JSON.stringify(e))},e.prototype.collectionHandler=function(e){var t;switch(e.method){case"get":t=this.get(e);break;case"post":t=this.post(e);break;case"put":t=this.put(e);break;case"delete":t=this.delete(e);break;default:t=this.createErrorResponseOptions(e.url,405,"Method not allowed")}var o=this.bind("responseInterceptor");return o?o(t,e):t},e.prototype.commands=function(e){var t=this,o=e.collectionName.toLowerCase(),r=e.method,i={url:e.url};switch(o){case"resetdb":return i.status=204,this.resetDb(e).pipe(Object(d.a)((function(){return t.createResponse$((function(){return i}),!1)})));case"config":if("get"===r)i.status=200,i.body=this.clone(this.config);else{var s=this.getJsonBody(e.req);Object.assign(this.config,s),this.passThruBackend=void 0,i.status=204}break;default:i=this.createErrorResponseOptions(e.url,500,'Unknown command "'+o+'"')}return this.createResponse$((function(){return i}),!1)},e.prototype.createErrorResponseOptions=function(e,t,o){return{body:{error:""+o},url:e,headers:this.createHeaders({"Content-Type":"application/json"}),status:t}},e.prototype.createResponse$=function(e,t){void 0===t&&(t=!0);var o=this.createResponseOptions$(e),r=this.createResponse$fromResponseOptions$(o);return t?this.addDelay(r):r},e.prototype.createResponseOptions$=function(e){var t=this;return new c.a((function(o){var r;try{r=e()}catch(s){r=t.createErrorResponseOptions("",500,""+(s.message||s))}var i=r.status;try{r.statusText=function(e){return u[e].text||"Unknown Status"}(i)}catch(n){}return function(e){return e>=200&&e<300}(i)?(o.next(r),o.complete()):o.error(r),function(){}}))},e.prototype.delete=function(e){var t=e.collection,o=e.headers,r=e.id;return null==r?this.createErrorResponseOptions(e.url,404,'Missing "'+e.collectionName+'" id'):{headers:o,status:this.removeById(t,r)||!this.config.delete404?204:404}},e.prototype.findById=function(e,t){return e.find((function(e){return e.id===t}))},e.prototype.genId=function(e,t){var o=this.bind("genId");if(o){var r=o(e,t);if(null!=r)return r}return this.genIdDefault(e,t)},e.prototype.genIdDefault=function(e,t){if(!this.isCollectionIdNumeric(e,t))throw new Error("Collection '"+t+"' id type is non-numeric or unknown. Can only generate numeric ids.");var o=0;return e.reduce((function(e,t){o=Math.max(o,"number"==typeof t.id?t.id:o)}),void 0),o+1},e.prototype.get=function(e){var t=e.collection,o=e.collectionName,r=e.headers,i=e.id,s=e.query,n=e.url,c=t;return null!=i&&""!==i?c=this.findById(t,i):s&&(c=this.applyQuery(t,s)),c?{body:this.bodify(this.clone(c)),headers:r,status:200}:this.createErrorResponseOptions(n,404,"'"+o+"' with id='"+i+"' not found")},e.prototype.getLocation=function(e){if(!e.startsWith("http")){var t="undefined"==typeof document?void 0:document,o=t?t.location.protocol+"//"+t.location.host:"http://fake";e=e.startsWith("/")?o+e:o+"/"+e}return function(e){for(var t=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),o={source:"",protocol:"",authority:"",userInfo:"",user:"",password:"",host:"",port:"",relative:"",path:"",directory:"",file:"",query:"",anchor:""},r=Object.keys(o),i=r.length;i--;)o[r[i]]=t[i]||"";return o}(e)},e.prototype.getPassThruBackend=function(){return this.passThruBackend?this.passThruBackend:this.passThruBackend=this.createPassThruBackend()},e.prototype.getRequestInfoUtils=function(){var e=this;return{createResponse$:this.createResponse$.bind(this),findById:this.findById.bind(this),isCollectionIdNumeric:this.isCollectionIdNumeric.bind(this),getConfig:function(){return e.config},getDb:function(){return e.db},getJsonBody:this.getJsonBody.bind(this),getLocation:this.getLocation.bind(this),getPassThruBackend:this.getPassThruBackend.bind(this),parseRequestUrl:this.parseRequestUrl.bind(this)}},e.prototype.indexOf=function(e,t){return e.findIndex((function(e){return e.id===t}))},e.prototype.parseId=function(e,t,o){if(!this.isCollectionIdNumeric(e,t))return o;var r=parseFloat(o);return isNaN(r)?o:r},e.prototype.isCollectionIdNumeric=function(e,t){return!(!e||!e[0])&&"number"==typeof e[0].id},e.prototype.parseRequestUrl=function(e){try{var t=this.getLocation(e),o=this.config.rootPath.length,r="";t.host!==this.config.host&&(o=1,r=t.protocol+"//"+t.host+"/");var i=t.path.substring(o).split("/"),s=0,n=void 0;null==this.config.apiBase?n=i[s++]:s=(n=this.config.apiBase.trim().replace(/\/$/,""))?n.split("/").length:0;var c=i[s++];return{apiBase:n+="/",collectionName:c=c&&c.split(".")[0],id:i[s++],query:this.createQueryMap(t.query),resourceUrl:r+n+c+"/"}}catch(a){throw new Error("unable to parse url '"+e+"'; original error: "+a.message)}},e.prototype.post=function(e){var t=e.collection,o=e.collectionName,r=e.headers,i=e.id,s=e.resourceUrl,n=e.url,c=this.clone(this.getJsonBody(e.req));if(null==c.id)try{c.id=i||this.genId(t,o)}catch(d){var a=d.message||"";return/id type is non-numeric/.test(a)?this.createErrorResponseOptions(n,422,a):(console.error(d),this.createErrorResponseOptions(n,500,"Failed to generate new id for '"+o+"'"))}if(i&&i!==c.id)return this.createErrorResponseOptions(n,400,"Request id does not match item.id");var h=this.indexOf(t,i=c.id),p=this.bodify(c);return-1===h?(t.push(c),r.set("Location",s+"/"+i),{headers:r,body:p,status:201}):this.config.post409?this.createErrorResponseOptions(n,409,"'"+o+"' item with id='"+i+" exists and may not be updated with POST; use PUT instead."):(t[h]=c,this.config.post204?{headers:r,status:204}:{headers:r,body:p,status:200})},e.prototype.put=function(e){var t=e.collection,o=e.collectionName,r=e.headers,i=e.id,s=e.url,n=this.clone(this.getJsonBody(e.req));if(null==n.id)return this.createErrorResponseOptions(s,404,"Missing '"+o+"' id");if(i&&i!==n.id)return this.createErrorResponseOptions(s,400,"Request for '"+o+"' id does not match item.id");var c=this.indexOf(t,i=n.id),a=this.bodify(n);return c>-1?(t[c]=n,this.config.put204?{headers:r,status:204}:{headers:r,body:a,status:200}):this.config.put404?this.createErrorResponseOptions(s,404,"'"+o+"' item with id='"+i+" not found and may not be created with PUT; use POST instead."):(t.push(n),{headers:r,body:a,status:201})},e.prototype.removeById=function(e,t){var o=this.indexOf(e,t);return o>-1&&(e.splice(o,1),!0)},e.prototype.resetDb=function(e){var t=this;this.dbReadySubject.next(!1);var o=this.inMemDbService.createDb(e);return(o instanceof c.a?o:"function"==typeof o.then?Object(a.a)(o):Object(h.a)(o)).pipe(Object(p.a)()).subscribe((function(e){t.db=e,t.dbReadySubject.next(!0)})),this.dbReady},e}(),v=o("lJxs"),R=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t){return function(o,r){t(o,r,e)}},w=function(e){function t(t,o,r){var i=e.call(this,t,o)||this;return i.xhrFactory=r,i}return R(t,e),t.prototype.handle=function(e){try{return this.handleRequest(e)}catch(o){var t=this.createErrorResponseOptions(e.url,500,""+(o.message||o));return this.createResponse$((function(){return t}))}},t.prototype.getJsonBody=function(e){return e.body},t.prototype.getRequestMethod=function(e){return(e.method||"get").toLowerCase()},t.prototype.createHeaders=function(e){return new s.d(e)},t.prototype.createQueryMap=function(e){var t=new Map;if(e){var o=new s.e({fromString:e});o.keys().forEach((function(e){return t.set(e,o.getAll(e))}))}return t},t.prototype.createResponse$fromResponseOptions$=function(e){return e.pipe(Object(v.a)((function(e){return new s.f(e)})))},t.prototype.createPassThruBackend=function(){try{return new s.g(this.xhrFactory)}catch(e){throw e.message="Cannot create passThru404 backend; "+(e.message||""),e}},(t=function(e,t,o,r){var i,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(s<3?i(n):s>3?i(t,o,n):i(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n}([x(1,Object(l.p)(m)),x(1,Object(l.C)()),_("design:paramtypes",[g,b,s.h])],t)).\u0275fac=function(e){return new(e||t)(l.Zb(g),l.Zb(m,8),l.Zb(s.h))},t.\u0275prov=l.Mb({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(y);function q(e,t,o){return new w(e,t,o)}var T=function(){function e(){}var t;return t=e,e.forRoot=function(e,o){return{ngModule:t,providers:[{provide:g,useClass:e},{provide:m,useValue:o},{provide:s.a,useFactory:q,deps:[g,m,s.h]}]}},e.forFeature=function(e,o){return t.forRoot(e,o)},e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)}}),e}(),C=(function(){function e(){}var t;t=e,e.forRoot=function(e,o){return{ngModule:t,providers:[{provide:g,useClass:e},{provide:m,useValue:o},{provide:s.a,useFactory:q,deps:[g,m,s.h]}]}},e.forFeature=function(e,o){return t.forRoot(e,o)},e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)}})}(),o("tyNb"));let F=(()=>{class e{constructor(e){this.http=e}getBlogIndex(){return this.http.get("api/blogIndex")}getBlog(e){return this.http.get(`api/blog_${e}`)}}return e.\u0275fac=function(t){return new(t||e)(l.Zb(s.b))},e.\u0275prov=l.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const O=function(e){return[e]};function I(e,t){if(1&e&&(l.Vb(0,"div"),l.Vb(1,"a",2),l.Vb(2,"h5"),l.sc(3),l.Ub(),l.Vb(4,"p"),l.sc(5),l.Ub(),l.Ub(),l.Ub()),2&e){const e=t.$implicit;l.Eb(1),l.ic("routerLink",l.jc(3,O,e.url)),l.Eb(2),l.tc(e.name),l.Eb(2),l.tc(e.abstract)}}function U(e,t){1&e&&(l.Vb(0,"p"),l.sc(1," loading blog index\n"),l.Ub())}let E=(()=>{class e{constructor(e){this.blogService=e}ngOnInit(){this.getBlogIndex()}getBlogIndex(){this.blogService.getBlogIndex().subscribe(e=>{this.blogIndex=e})}}return e.\u0275fac=function(t){return new(t||e)(l.Qb(F))},e.\u0275cmp=l.Kb({type:e,selectors:[["app-blog-main"]],decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"]],template:function(e,t){1&e&&(l.Vb(0,"p"),l.sc(1,"blog-main works!"),l.Ub(),l.rc(2,I,6,5,"div",0),l.rc(3,U,2,0,"p",1)),2&e&&(l.Eb(2),l.ic("ngForOf",t.blogIndex),l.Eb(1),l.ic("ngIf",!t.blogIndex))},directives:[i.h,i.i,C.c],styles:[""]}),e})();function k(e,t){if(1&e&&(l.Tb(0),l.sc(1),l.Sb()),2&e){const e=l.fc(2);l.Eb(1),l.tc(e.blogContent)}}function B(e,t){1&e&&(l.Vb(0,"h3"),l.sc(1,"blog loading..."),l.Ub())}function S(e,t){if(1&e&&(l.Vb(0,"p"),l.sc(1),l.Ub()),2&e){const e=l.fc(2);l.Eb(1),l.tc(e.blogError)}}function P(e,t){if(1&e&&(l.Vb(0,"div"),l.rc(1,k,2,1,"ng-container",0),l.rc(2,B,2,0,"h3",0),l.rc(3,S,2,1,"p",0),l.Ub()),2&e){const e=l.fc();l.Eb(1),l.ic("ngIf",e.blogFinished&&!e.blogError),l.Eb(1),l.ic("ngIf",!e.blogFinished&&!e.blogError),l.Eb(1),l.ic("ngIf",e.blogError)}}function j(e,t){1&e&&(l.Vb(0,"div"),l.Vb(1,"p"),l.sc(2,"blog id error"),l.Ub(),l.Ub())}const N=[{path:":blog-id",component:(()=>{class e{constructor(e,t,o){this.route=e,this.router=t,this.blogService=o,this.blogFinished=!1}ngOnInit(){this.route.paramMap.subscribe(e=>{const t=e.get("blog-id")||"";this.blogId=t,t&&this.blogService.getBlog(this.blogId).subscribe(e=>{this.blogContent=e},e=>{this.blogError=JSON.stringify(e)},()=>{this.blogFinished=!0})})}backBlogPage(){this.router.navigate([".."])}}return e.\u0275fac=function(t){return new(t||e)(l.Qb(C.a),l.Qb(C.b),l.Qb(F))},e.\u0275cmp=l.Kb({type:e,selectors:[["app-blog-detail"]],decls:7,vars:3,consts:[[4,"ngIf"],[3,"routerLink"]],template:function(e,t){1&e&&(l.Vb(0,"p"),l.sc(1,"blog-detail works!"),l.Ub(),l.rc(2,P,4,3,"div",0),l.rc(3,j,3,0,"div",0),l.Vb(4,"a",1),l.Vb(5,"button"),l.sc(6," back "),l.Ub(),l.Ub()),2&e&&(l.Eb(2),l.ic("ngIf",t.blogId),l.Eb(1),l.ic("ngIf",!t.blogId),l.Eb(1),l.ic("routerLink",".."))},directives:[i.i,C.c],styles:[""]}),e})()},{path:"",component:E}];let M=(()=>{class e{}return e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},imports:[[C.d.forChild(N)],C.d]}),e})();var L=o("L3UP");let V=(()=>{class e extends g{constructor(){super(...arguments),this.blogIndex=L}createDb(){const e={blogIndex:this.blogIndex};return L.forEach(t=>{e[`blog_${t.url}`]=t.paragraph}),e}}return e.\u0275fac=function(t){return $(t||e)},e.\u0275prov=l.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $=l.Xb(V);let D=(()=>{class e{}return e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},providers:[F],imports:[[i.b,M,s.c,T.forRoot(V,{dataEncapsulation:!1})]]}),e})()}}]);