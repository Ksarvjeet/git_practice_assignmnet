let n=25;
let prime= true;

for(let i=2; i<n; i++ )
{
  if(n%i==0)
{
   prime=false;
}

}
(prime==false) ? console.log("Not a Prime Number") : console.log("Prime number");