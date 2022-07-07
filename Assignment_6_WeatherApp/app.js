const Base_Url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '2a208bf3bfba1c5a1696991c404b519c';
const temp = $("#temp");


let value;
$('form').submit(function(e){
    e.preventDefault();
    value= $('input').val();
    console.log(value);
    remove(article);
    getWeather(value);
    
});

// const final_url= `${Base_Url}${value}&appid=2a208bf3bfba1c5a1696991c404b519c`
const remove=(parent)=>{
    while(parent.firstChild){
        parent.firstChild.remove();
    }
}

const getWeather =(value)=>{
    fetch(`${Base_Url}${value}&appid=2a208bf3bfba1c5a1696991c404b519c&units=metric`)
    .then((res) => {
        return res.json();
    })
    .then((data)=>{
        // $("#temp").text(`${data.main.temp}`);
        console.log(data);
        console.log(data.weather[0].main);
        if(data.weather[0].main==='Clouds'){
            let cloud_img="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
            $('body').css('background-image','url(' + cloud_img + ')');
            $('body').css('background-size','cover')
        }
        if(data.weather[0].main==='Rain'){
            let cloud_img="https://images.unsplash.com/photo-1532928448850-d740ccdd9f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60";
            $('body').css('background-image','url(' + cloud_img + ')');
            $('body').css('background-size','cover')
        }
        if(data.weather[0].main==='Clear'){
            let cloud_img="https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
            $('body').css('background-image','url(' + cloud_img + ')');
            $('body').css('background-size','cover')
        }
        if(data.weather[0].main==='Haze'){
            let cloud_img="https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60";
            $('body').css('background-image','url(' + cloud_img + ')');
            $('body').css('background-size','cover')
        }
        $("#temp").html(`${data.main.temp}<span>&#176;</span>Cel`);
        $("#article").append(`<span><span>Min Temp :</span>${data.main.temp_min}<span>&#176;</span>Cel</span>`);
        $("#article").append(`<span><span>Max Temp :</span>${data.main.temp_max}<span>&#176;</span>Cel</span>`);
        $("#weather").text(`${data.weather[0].main}`);
        

        // $("#article").css("display","inline-block");
        // $("#article").css("justify-content","space-around");
        
    })
}

