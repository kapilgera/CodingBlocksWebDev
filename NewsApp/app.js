const Base_Url = 'https://gnews.io/api/v4/search?q=';
const key = '22e2ddfbdc826287486e0c6b8d69425f';
const result_sec=$('#container');

const current = new Date();
$("#cur").html(`<span id="date">${current}</span>`);

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


let value;
let country;
let lang;
$('form').submit(function(e){
    e.preventDefault();
    value= $('input').val();
    country=$('#country').val();
    lang=$('#lang').val();
    $('#container').empty();
    getNews(value);
});

const removeImage = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}


function getData(data){
    const articles = data.articles;
            for(let i=0;i<articles.length-1;i++){
                if(articles[i].image != null){
                    $('#container').append("<figure></figure>")
                    $('figure').addClass("product");
                    const image_url = articles[i].image; 
                    let pub = articles[i].publishedAt;
                    pub=pub.replaceAt(10, "  ");
                    pub=pub.replaceAt(18, "");
                    const title= articles[i].title;
                    const des = articles[i].description.substring(0,100)+"...";
                    const url = articles[i].url;
                    
                    $(`.product:nth-of-type(${i+1})`).html(`<img src='${image_url}'>`);
                    $(`.product:nth-of-type(${i+1})`).append(`<h3 class="pub">${pub}</h3>`);
                    $(`.product:nth-of-type(${i+1})`).append(`<p class="title">${title}</p>`);
                    $(`.product:nth-of-type(${i+1})`).append(`<p class="description">${des}</p>`);
                    $(`.product:nth-of-type(${i+1})>p:nth-of-type(2)`).append(`<a href="${url}">Read More</a>`);
                    
                }
            }
        
}

const getNews = (value) =>{
    if(country==="in" && lang==='en'){
        const final=`${Base_Url}${value}&token=${key}&country=in&lang=en`;
        console.log(final);
        fetch(final)
        .then((res)=>{
            return res.json();
        })
        .then(getData);
        
    }
    else if(country==="in" && lang==='hi'){
        const final=`${Base_Url}${value}&token=${key}&country=in&lang=hi`;
        console.log(final);
        fetch(final)
        .then((res)=>{
            return res.json();
        })
        .then(getData);
    }
    else if(lang==='en'){
        const final=`${Base_Url}${value}&token=${key}&lang=en`;
        console.log(final);
        fetch(final)
        .then((res)=>{
            return res.json();
        })
        .then(getData);
    }
    else if(lang==='hi'){
        const final=`${Base_Url}${value}&token=${key}&lang=hi`;
        console.log(final);
        fetch(final)
        .then((res)=>{
            return res.json();
        })
        .then(getData);
    }
    
}




const textWrapper1 = document.querySelector('.ml2');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });








