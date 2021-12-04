function buttonHidden(){
    if(window.scrollY === 0){
        document.querySelector('.scrollButton').style.display = 'none';
    }else{
        document.querySelector('.scrollButton').style.display='block';

    }
}

function up(){
    window.scrollTo({
        top: 0,
        leftleft: 0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', buttonHidden)