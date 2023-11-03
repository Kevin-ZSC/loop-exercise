
/*function x(a,b) {
    for(let i = a; i >=1; i--) {
        if( a % i ==0 && b % i == 0) {
           return i;
        }
    }
}
console.log(x(40,20));*/

/*git config --global user.name "Sanchen Zhang"
git config --global user.email "zsckevin777@gmail.com"*/
/*npm install readline-sync*/

function y (a,b) {
  let z;
  z = a % b;
  console.log(z);
  if (z == 0) 
  {
    return b;
  }
  return y(b,z)
}
console.log(y(33,99))