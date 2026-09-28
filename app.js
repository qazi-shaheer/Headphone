function showProduct(params) {
    document.getElementById("changeimage")
        .src = "image/image2.jpg";
}
function changemsg(params) {
    document.getElementById("changetext").innerHTML = "Thank you for your purchase! Your wireless headphones are ready to order."
}
function showWelcome(params) {
    let names = document.getElementById("names").value;
    document.getElementById("welcomecard").innerText = "Welcome ," + names + "!";
}