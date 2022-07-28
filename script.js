const main = () => {
   
     let classElement = document.getElementById("grow-me");
     classElement.classList.add("big");
    
     let delClass = document.getElementById("shrink-me");
     delClass.classList.remove("big");

     let findList = document.getElementsByTagName("li");
     console.log(findList[0].innerText);
     console.log(findList[1].innerText);
     console.log(findList[2].innerText);

     

     const href = document.querySelector(".link");
     href.setAttribute("href", "https://www.example.com");
     href.innerText = "somwhere";

    document.getElementById("hide-me").style.display = "none";

    document.getElementById("show-me").style.display = "block";
   

    


}