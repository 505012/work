function get_pay(price,discount,shipping){
    let pay = price - (price * (discount/100)) + shipping;

    document.querySelector("#price").innerHTML = price;
    document.querySelector("#discount").innerHTML = discount;
    document.querySelector("#shipping").innerHTML = shipping;
    document.querySelector("#pay").innerHTML = pay;


}