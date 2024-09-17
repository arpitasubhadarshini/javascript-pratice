function square(r) {
   let a=r*r;
   let b=a*a;
   let res=b*b;
   return res;
}
function check(r,fun) {
   const value = fun(r);
   console.log(value);
}
check(2,square);