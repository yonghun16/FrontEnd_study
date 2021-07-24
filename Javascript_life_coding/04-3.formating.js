/* 포메팅 */
/* ES6 템플릿 문자열과 백틱을 이용한 문자열 포매팅 */
// '(백틱)으로 감싼다.
let val1 = 4, val2 = 5, val3 = 13;
console.log(`${val1} + ${val2} + ${val1} = ${val3}`);
console.log('${val1} + ${val2} + ${val1} = ${val3}');
console.log();


/* 익스플로어를 고려하면 format() 함수를 만들어 처리를 해줘야 한다. */
String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
            formatted = formatted.replace("{" + arg + "}", arguments[arg]);
        }
    return formatted;
};
console.log("{0} + {1} = {2}".format(4, 5, 9));
console.log("{1} + {2} = {3}".format(4, 5, 9));
console.log("{0} + {0} = {1}".format(4, 5));
console.log();


String.prototype.format2 = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
            var regexp = new RegExp('\\{'+i+'\\}', 'gi');
            formatted = formatted.replace(regexp, arguments[i]);
        }
    return formatted;
};
console.log("{10} + {0} = {1}".format2(4, 11, 4, 8, 4, 8, 4, 8, 4, 8, 7));
console.log();


String.prototype.format3 = function() {
    var formatted = this, i = 0;
    while (/%s/.test(formatted))
        formatted = formatted.replace("%s", arguments[i++]);
    return formatted;
}
console.log("%s + %s = %s".format3(4, 5, 9));
console.log();


String.format4 = function(formatted) {
    var args = Array.prototype.slice.call(arguments, 1);
    return formatted.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
}
console.log(String.format4("{0} + {1} = {2}", 4, 5, 9));
console.log();


String.prototype.format5 = function() {
    return [...arguments].reduce((pattern,value) => pattern.replace(/%s/,value), this);
};
console.log('%s + %s = %s'.format5(4, 5, 9));
