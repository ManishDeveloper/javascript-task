//Write Your JS Code Here

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log('50, 50 = ' + test50(50, 50))
console.log('20, 50 = ' + test50(20, 50))
console.log('20, 20 = ' + test50(20, 20))
console.log('20, 30 = ' +test50(20, 30))