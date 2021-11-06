let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

btn.addEventListener('click', function(e) {
    let input = document.getElementById('userInput').value;
    e.preventDefault(); 
    if(input == 8) {
       window.onload = win_content();
    } else {
        window.onload = loose_content();
    }
}) 

function win_content() {
    const winStar = `<div class="rating">
    <img class="trophy_img" src="../Assets/trophy.svg">
    <img class="star_img yellow_star" src="../Assets/yellow_star.png">
    <img class="star_img" src="../Assets/blackstar.png">
    <img class="star_img" src="../Assets/blackstar.png">
    <img class="star_img" src="../Assets/blackstar.png">
    <img class="star_img" src="../Assets/blackstar.png">
    <input 
        class="rating1" 
        max="5" 
        type="text" 
        value="1">
    </div>
    <img class="win" src="../Assets/star.svg">
    <p class="win_text">Very Nice</p>`
    
    document.querySelector('#outputtext').innerHTML = winStar;
    
}

function loose_content() {
    const looseStar = `<img class="loose" src="../Assets/star1.svg">
    <p class="loose_text">Oops Try again</p>`
    
    document.querySelector('#outputtext').innerHTML = looseStar;
    
}