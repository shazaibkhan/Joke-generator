const paragraph = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const btn_submit = document.getElementById("btn-submit");

function getRandomJokes(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response)=>  response.json())
    .then((data)=> {
        console.log(data.setup);

        paragraph.classList.add("fade");
        paragraph2.classList.add("fade");

        // Use setTimeout to ensure the removal of the class is completed before adding again
        setTimeout(() => {
            paragraph.innerText = ` ${data.setup} `;
            paragraph2.innerText = ` ${data.punchline} `;

            paragraph.classList.remove("fade");
            paragraph2.classList.remove("fade");
        

           
        }, 500); // small delay to allow class removal

       
      


       
    })
    .catch(()=> {
        console.log("error");
        alert("Some thing went wrong")

    })

}

btn_submit.addEventListener('click',(e)=>{
    getRandomJokes();
   
})




getRandomJokes();