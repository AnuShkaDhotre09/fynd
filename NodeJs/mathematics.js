const p = 30000;
const t = 4;
const r = .08;
const n = 10;
const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
};
console.log(compoundInterest(p, t, r, n));