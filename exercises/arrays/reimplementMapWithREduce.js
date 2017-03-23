function mioMap(array, funzione){
  return array.reduce(function(memo, item){
    ...
  }, ...)
}

[1,2,3].map(function(item){ return item / 2 })

mioMap([1,2,3], function(item){ return item / 2 })

// reimplement also https://lodash.com/docs/4.17.4#groupBy
