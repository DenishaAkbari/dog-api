let mainList = document.getElementById("list");
let img = document.getElementById("img");

const display = () =>{

    fetch("https://dog.ceo/api/breeds/list/all").then((res) => {
        
        return res.json(); 
        
    }).then((list) => {
        let count = 0;
        
        console.log("List",list.message);
        let listData = list.message;
        
        for (const key in listData) {
            
            
            if(listData[key].length == 0){
                
                mainList.innerHTML += `<li style="font-size: 16px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); background-color: white;color: black;padding: 20px 25px;cursor: pointer;margin: 10px 0px;"  onclick="return iamge('${key}')">${key}</li>`

            }else{
                let sublist =   `<ol>`;
                listData[key].forEach((element) => {

                    sublist += `<li>${element}</li>`
                })
                count++;
                const unnik = `${count}`
                sublist += `</ol>`;
                mainList.innerHTML += `
                    <div class="accordion-item mb-2">
                        <h2 class="accordion-header">
                        <button style ="padding: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" class="accordion-button collapsed" onclick="return iamge('${key}')" type="button" data-bs-toggle="collapse" data-bs-target="#${unnik}" aria-expanded="false" aria-controls="${unnik}">
                        ${key}
                        </button>
                        </h2>
                        <div id="${unnik}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">${sublist}</div>
                        </div>`
            }
        }

    }).catch((err) => {

        console.log(err);

    })
}

display();

const iamge = (breed) =>{
    

    fetch(`https://dog.ceo/api/breed/${breed}/images`).then((rec) => {


        return rec.json();

    }).then((list) => {

        console.log("data",list);

        let imges = list.message;

        img.innerHTML = "";

        imges.forEach(element => {
           img.innerHTML += `<div class="w-4 box"><div><img src="${element}"></div></div>`
        });

    }).catch((err) => {

        console.log(err);
    });
}