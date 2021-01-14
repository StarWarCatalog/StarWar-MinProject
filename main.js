const url='https://swapi.dev/api/people/';

  function fetchData(){
       fetch(url).then(  function(res){
         return res.json();
     }).then(function(data){ 
         const peoples= data.results.map(function(item){
             console.log(item.name);
             return item.name;
         })   
         peoples.forEach(element => {
             let li = document.createElement('li');
             li.appendChild(document.createTextNode(element));

                li.style.fontSize='24px';
                li.style.fontFamily= 'Roboto';
                li.style.fontStyle= 'normal';
                li.style.fontWeight= 'normal';
                li.style.fontSize= '24px';
                li.style.lineHeight='28px';
                li.style.letterSpacing='0.15em';
                li.style.padding='1';
                
             document.querySelector('ul').appendChild(li);
         });     
    })
 }

 fetchData()
 

 
    



