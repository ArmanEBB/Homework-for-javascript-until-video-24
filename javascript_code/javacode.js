//practice 1
const alertwelcome=()=>{
    alert("Welcome to my site!")
    document.getElementById('hellotxt').innerHTML="<b>بلک فرایدی را از دست ندهید!</b>"
    document.getElementById('hellotxt').style.color='red'
    
}

//practice 2
const object_car=()=>{
    const car  = {
        name: "Ford Mustang",
        color: "red",
        license_plate: "223d67",
        production_year: "1967",
    }
    console.log(car)
    delete car.license_plate
    console.log(car)
}
//practice 3
const old_price=()=>{
    const product={
        name:"T-shirt",
        color:"white",
        prices:{
            new:"1200000",
            old:"4000000",
        }
    }
    
    document.getElementById('spantxt').innerText=product.prices.old
    document.getElementById("spantxt").style.color='red'
    document.getElementById("spantxt").style.textDecoration='line-through'
}
