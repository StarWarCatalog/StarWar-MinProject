const url='https://swapi.dev/api/people/';
let arr= [];

//#region  Character list
  function fetchData(){
       fetch(url).then(  function(res){
         return res.json();
     }).then(function(data){ 
         const peoples= data.results.map(function(item){
             console.log(item.name);
             arr.push(item.name)
             return item.name;
         })   

       
         peoples.forEach(element => {
             let li = document.createElement('li');
             li.appendChild(document.createTextNode(element));

                li.style.fontSize='24px';
                li.style.fontFamily= 'Roboto';
                li.style.fontStyle= 'normal';
                li.style.fontWeight= 'normal';
                li.style.fontSize= '20px';
                li.style.lineHeight='20px';
                li.style.letterSpacing='0.15em';
                li.style.padding='0.5px';
            
                li.style.textAlign='center';
                li.style.marginLeft='30px';
                li.style.marginRight='60px';
                
             document.querySelector('ul').appendChild(li); 
         });  
    })
 }
 //#endregion

 fetchData()
    
 //#region  Details list
 function fetchDetails(){
   
    fetch(url).then(  function(res){
        return res.json();
    }).then(function(data){ 
        const peoples= data.results.map(function(item){
         
            let properties= {
                name: item.name,
                mass:item.mass,
                height:item.height,
                gender:item.gender
            };
            //console.log(properties);
            return properties;
        })   
        

      
      let li= document.querySelector('li');


       li.addEventListener('click',() => {
        peoples.forEach(detailItem => {
            if (arr[0] == detailItem.name) {
                console.log('hej');
            let p = document.querySelector('#personDetails');

            p.appendChild(document.createTextNode(detailItem.gender + ","));
            p.appendChild(document.createTextNode(detailItem.height + ","));
            p.appendChild(document.createTextNode(detailItem.mass));
     
            let details=document.querySelector('.details');
            details.appendChild(p);
            }
         });
       });
   
});
 }
 //#endregion

 fetchDetails();

 
    



