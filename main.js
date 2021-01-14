const url='https://swapi.dev/api/planets/';

function ftechData(){
   let arr= [];
   
    fetch(url).then(function(res){
        return res.json();
    }).then(function(data){
        data.results.map(arr1=>{
            arr.push(arr1)
        })
        
    })
   
    return arr
}
console.log(ftechData());

