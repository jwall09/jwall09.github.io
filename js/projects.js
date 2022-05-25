/*********************
Name: Jacob Wallace
Coding 07-09
Purpose: JavaScript for use on projects page
**********************/

let imageItems = [...document.querySelectorAll('.img-wrap')];
let titles = [...document.querySelectorAll('.h2')];

let options = {
    rootMargin: '0px',

    //targets top 20% of object theoretically coming into view before it is triggered
    threshold: .2
}

let setItemActive = (entries => {
    console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
    })
});

let observer = new IntersectionObserver(setItemActive, options);

imageItems.forEach((item, idx) => {
    item.children[0].style.backgroundImage = `url(./images/${idx+1}.png)`;
    idx % 2 == 0 ? item.style.left = '55%' : item.style.left = '5%';
    observer.observe(item)
})

titles.forEach((title, idx) =>{
    idx % 2 == 0 ? title.style.left = '45%' : title.style.left = '35%';
    observer.observe(title)
} )


