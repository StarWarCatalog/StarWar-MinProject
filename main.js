const url = 'https://swapi.dev/api/people/';
const ul = document.querySelector('ul');
let arr = [];

// const getData = () => {
//     fetch(url).
//         then(res => {
//             return res.json();
//         }).
//         then(data => {
//             data.results.map(item => {
//                 let properties = {
//                     name: item.name,
//                     mass: item.mass,
//                     height: item.height,
//                     gender: item.gender
//                 };
//                 arr.push(item.name)
//                 namesList();
//                 console.log(item.name)
//                 return item.name;
//             })
//         })
// }

// const namesList = () => {
//     getData().forEach(element => {
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(element));
//         ul.appendChild(li);
//         li.className = "characterList";
//     })
// }
// getData();

  function fetchData() {
      fetch(url).
          then(res => {
            return res.json();
          }).
          then(data => { 
            const peoples = data.results.map(function(item) {
             arr.push(item.name)
             return item.name;
         })   

         peoples.forEach(element => {
             let li = document.createElement('li');
             li.appendChild(document.createTextNode(element));
             ul.appendChild(li); 
             li.className = "characterList"; 
         });  
    })
 }

 fetchData()
    
 //#region  Details list
 function fetchDetails() {
     fetch(url).
         then(res => {
            return res.json();
         }).
         then(data => { 
            const peoples = data.results.map(item => {
                let properties = {
                    name: item.name,
                    mass: item.mass,
                    height: item.height,
                    gender: item.gender
            };
            return properties;
        })   

             let li = document.querySelectorAll('li');
             // console.log('person name is: ' + li[9].textContent)

        if (li.length !== 0) {
            for (let i = 0; i < li.length; i++) {
                // console.log('list of people '+ li[i].textContent)
                li[i].addEventListener('click', function() {
                    // console.log('clicked ' + li[i].textContent)
 
                    peoples.forEach(function(detailItem)  {    
                    // if (li[i].textContent == peoples.map(detailIem => {
                        console.log('detailed item found ' + detailIem.name)
                    return detailItem[1].name
                    //}))
                    
                    console.log('hej' + li[i].textContent);
                let p = document.querySelector('#personDetails');
    
                p.appendChild(document.createTextNode(detailItem.gender + ","));
                p.appendChild(document.createTextNode(detailItem.height + ","));
                p.appendChild(document.createTextNode(detailItem.mass));
         
                let details = document.querySelector('.details');
                details.appendChild(p);
                        
                    });
              });
            }
          }
        

    //    li.addEventListener('click',() => {
    //     peoples.forEach(detailItem => {
    //         if (arr[0] == detailItem.name) {
    //             console.log('hej');
    //         let p = document.querySelector('#personDetails');

    //         p.appendChild(document.createTextNode(detailItem.gender + ","));
    //         p.appendChild(document.createTextNode(detailItem.height + ","));
    //         p.appendChild(document.createTextNode(detailItem.mass));
     
    //         let details = document.querySelector('.details');
    //         details.appendChild(p);
    //         }
    //      });
    //    });
});
}
 //#endregion

 fetchDetails();

 
    



