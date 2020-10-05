module.exports = function reverse (n) {
  n = Math.abs(n);
let p = String(n);
let b = "";
for (let i = p.length -1; i >= 0; i--) {
 b = b + p[i];
}
let result = Number(b);
return result;
};
