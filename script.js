let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            menu_items = data.menu_items;
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key;
                document.querySelector('#menu3').appendChild(opt);
            }
        }

    });

document.querySelector("#menu3").addEventListener("change",showdetails);

function showdetails(e){
    let index = e.target.value;

    if(menu_items != null){
        let x = menu_items[index];
        let pricesmall;

        if(x.price_small != null){
            pricesmall = x.price_small;

        }
        else{
            pricesmall = "Not available";
        }
        let descrp = x.description;
        if(descrp == ""){
            descrp = "Description not available";
        }
        document.querySelector("#Name").textContent = x.name;
        document.querySelector("#idee").textContent = x.id;
        document.querySelector("#shortName").textContent = x.short_name;
        document.querySelector("#description").textContent = descrp;
        document.querySelector("#priceSmall").textContent = pricesmall;
        document.querySelector("#priceLarge").textContent = x.price_large;
        document.getElementById("tabl").style.display = "block";
    }


}


});

