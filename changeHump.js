/* ===================== the first method */
// String.prototype.cgHump = function() {
//     let arr = [];
//     arr = this.split("-");
//     for (var i = 1; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join("");
// }
/* ===================== the second method */
String.prototype.cgHump = function() {
    let str = "";
    var reg = /-(\w)/g;
    str = this.replace(reg, function($, $1) {
        return $1.toUpperCase();
    });
    return str;
}