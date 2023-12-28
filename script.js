const URL ="https://restcountries.com/v3.1/all"
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr)
xhr.onreadystatechange = () =>{
    console.log(xhr.readyState)
}

xhr.onload = () =>{
     
     
    const object = JSON.parse(xhr.response)
    console.log(object)
    for(let ind of object){
        console.log(ind.flags.svg)
    }
}