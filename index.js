document.getElementById("start-btn").addEventListener("click",function(){
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").textContent = data.activity
            document.body.classList.add("rainbow")
            document.getElementById("bot-title").textContent = " 🦾Have Some Fun Human! 🕺🏼"
        })
})