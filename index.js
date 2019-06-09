// import './css/reset.scss';
// import './css/main.scss';
// import './index.html';
// import flatpickr from "flatpickr";


document.addEventListener('DOMContentLoaded', function(){
    var nav = document.getElementById('js-navMenu');
    document.getElementById('js-menuTrigger').addEventListener('click', function(e){
        e.preventDefault();
        this.classList.toggle('active');
        nav.classList.toggle('active');
        document.getElementsByTagName('body')[0].classList.toggle('is-menu-open');
    });
    for(var i = 0; i < document.getElementsByClassName('js-menuCloseTrigger').length; i++) {
        document.getElementsByClassName('js-menuCloseTrigger')[i].addEventListener('click', function(){
            document.getElementById('js-menuTrigger').classList.toggle('active');
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.getElementsByTagName('body')[0].classList.toggle('is-menu-open');
        });
    }
    var answer1 = document.getElementById('js-answer1');
    var answer2 = document.getElementById('js-answer2');
    var answer3 = document.getElementById('js-answer3');

    var toggleAnswer2 = document.getElementById('js-toggleAnswer2');
    var toggleAnswer3 = document.getElementById('js-toggleAnswer3');


    document.getElementById("js-toggleAnswer1").addEventListener('click', function(){
        document.getElementsByClassName('plus')[0].classList.toggle('active');
        answer1.classList.toggle('active')
        if (answer1.classList.contains('active')) {
            if (answer2.classList.contains('active')) {
                toggleAnswer2.style.transform = 'translateY(0%)';
                answer2.style.transform = 'translateY(0%)'       
                toggleAnswer3.style.transform = 'translateY(0%)';
                if (answer3.classList.contains('active')) {
                    answer3.style.transform = 'translateY(0%)';
                }else{
                    answer3.style.transform = 'translateY(-100%)';
                }   

            } else {
                toggleAnswer2.style.transform = 'translateY(0)';
                toggleAnswer3.style.transform = 'translateY(-100%)'; 
                answer2.style.transform = 'translateY(-100%)';
                if (answer3.classList.contains('active')) {
                    answer3.style.transform = 'translateY(-100%)';
                }else{
                    answer3.style.transform = 'translateY(-200%)';
                }   
            }
        } else {
            if (answer2.classList.contains('active')) {
                toggleAnswer2.style.transform = 'translateY(-100%)';
                answer2.style.transform = 'translateY(-100%)'       
                toggleAnswer3.style.transform = 'translateY(-100%)';
                if (answer3.classList.contains('active')) {
                    answer3.style.transform = 'translateY(-100%)';
                }else{
                    answer3.style.transform = 'translateY(-200%)';
                } 
            } else {
                toggleAnswer2.style.transform = 'translateY(-100%)';
                toggleAnswer3.style.transform = 'translateY(-200%)';
                if (answer3.classList.contains('active')) {
                    answer3.style.transform = 'translateY(-200%)';
                }else{
                    answer3.style.transform = 'translateY(-300%)';
                } 
            }
                   
        }
    })
    document.getElementById("js-toggleAnswer2").addEventListener('click', function(){
        document.getElementsByClassName('plus')[1].classList.toggle('active');
        document.getElementById('js-answer2').classList.toggle('active');
        console.log(document.querySelectorAll('#js-answer1.active').length)
        var answer2 = document.getElementById('js-answer2');
        var toggleAnswer2 = document.getElementById('js-toggleAnswer2');
        var toggleAnswer3 = document.getElementById('js-toggleAnswer3');
        switch(document.querySelectorAll('#js-answer1.active').length) {
            case 0:
                if (answer2.classList.contains('active')) {
                    answer2.style.transform = 'translateY(-100%)';
                    toggleAnswer3.style.transform = 'translateY(-100%)';
                    if (answer3.classList.contains('active')) {
                        answer3.style.transform = 'translateY(-100%)';
                    }else{
                        answer3.style.transform = 'translateY(-200%)';
                    }
                }else{
                    answer2.style.transform = 'translateY(-200%)';
                    toggleAnswer3.style.transform = 'translateY(-200%)';   
                    if (answer3.classList.contains('active')) {
                        answer3.style.transform = 'translateY(-200%)';
                    }else{
                        answer3.style.transform = 'translateY(-300%)';
                    }
                }
                break;
            case 1:
                if (answer2.classList.contains('active')) {
                    answer2.style.transform = 'translateY(0%)';
                    toggleAnswer3.style.transform = 'translateY(0%)'
                    if (answer3.classList.contains('active')) {
                        answer3.style.transform = 'translateY(0%)';
                    }else{
                        answer3.style.transform = 'translateY(-100%)';
                    }
    
                }else{
                    answer2.style.transform = 'translateY(-100%)';
                    toggleAnswer3.style.transform = 'translateY(-100%)' 
                    if (answer3.classList.contains('active')) {
                        answer3.style.transform = 'translateY(-100%)';
                    }else{
                        answer3.style.transform = 'translateY(-200%)';
                    }                
                }
                break;

        }
    })
    document.getElementById("js-toggleAnswer3").addEventListener('click', function(){
        document.getElementsByClassName('plus')[2].classList.toggle('active');
        document.getElementById('js-answer3').classList.toggle('active');
        console.log(document.querySelectorAll('#js-answer1.active, #js-answer2.active').length)
        switch(document.querySelectorAll('#js-answer1.active, #js-answer2.active').length) {
            case 0:
                if (answer3.classList.contains('active')) {
                    answer3.style.transform = 'translateY(-200%)';
                }else{
                    answer3.style.transform = 'translateY(-300%)';
                }
                break;
            case 1:
                if (answer3.classList.contains('active')) {
                    answer3.style.transform = 'translateY(-100%)';
                }else{
                    answer3.style.transform = 'translateY(-200%)';
                }                
                break;
            case 2:
                if (answer3.classList.contains('active')) {
                    answer3.style.transform = 'translateY(0%)';
                }else{
                    answer3.style.transform = 'translateY(-100%)';
                }   
                break;
        }
    })

});