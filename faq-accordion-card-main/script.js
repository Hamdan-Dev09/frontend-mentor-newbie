
let clickableDiv = document.querySelectorAll('.ques');
let quesContainer = document.querySelectorAll('.ques-container');
let answer = document.querySelectorAll('.answer');

 clickableDiv.forEach(el => {
    el.addEventListener('click', function(){
        console.log(el);
        if(el.parentElement.classList.contains("active")){
            el.parentElement.classList.toggle("active");
        }else{

            el.parentElement.classList.add("active");
        }
        
    })
    
});

function showRemove(){
    quesContainer.forEach(item => item.classList.remove('active'));
}