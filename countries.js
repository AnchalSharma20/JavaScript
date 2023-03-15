let countriesName=['India','Australia','Sri Lanka','Brazil','Combodia','Japan','Nepal','Peru','United States','United Kingdom']

exports.countriesName=countriesName





//Q21:
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if(!countriesName.includes('Ethiopia')){
    countriesName.push('Ethiopia')
}
else{
    console.log("ETHIOPIA")
}

