const cats = document.querySelectorAll('.cat');

const categoryList = document.querySelector('.category-list');

for(let cat of cats){
    cat.addEventListener('mouseenter', ()=>{
        categoryList.classList.toggle('visible');
    })
    cat.addEventListener('mouseleave', () => {
        categoryList.classList.toggle('visible');
    })
}


