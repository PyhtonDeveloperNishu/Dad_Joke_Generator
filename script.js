let btn = document.querySelector(".btn");
let p1 = document.querySelector(".p1");


btn.addEventListener("click",async()=>{
    btn.innerText="Loading...";
    p1.innerText="Uploading..."
        try{
            const response = await fetch("https://icanhazdadjoke.com",{
                headers:{
                    Accept:"application/json",
                },
            });
            if(!response.ok){
                throw new Error("Failed to fetch joke");
            }
            const joke = await response.json();
            console.log(joke);
            setTimeout(()=>{
                p1.innerText=joke.joke;
                btn.innerText="Tell me a joke";
            },1000);
           
        }catch(error){
            console.error("Error fetching joke:",error);
            p1.innerText = "Oops! Failed to load a joke. Try again.";
            btn.innerText ='tell me a joke';
        } 
})

