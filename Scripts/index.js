document.addEventListener("DOMContentLoaded", function() {


let ProductHighlight1 = {
    category: "DRESSES",
    name: "Checked Stretch Dress",
    price: "$129.00",
    image: "images/checked-stretch-dress.jpg"
};

let ProductHighlight2 = {
    category: "BAGS",
    name: "Blue Hipster Backpack",
    price: "$69.00",
    image: "images/blue-hipster-backpack.jpg",
};

let ProductHighlight3 = {
    category: "DENIM",
    name: "Denim Overall Shorts",
    price: "$89.00",
    image: "images/demin-overall-shorts.jpg",
};

let ProductHighlight4 = {
    category: "DRESSES",
    name: "Pink Dotted Dress",
    price: "$99.00",
    image: "images/pink-dotted-dress.jpg",
};

let ProductHighlight5 = {
    category: "DRESSES",
    name: "Stretch Knit Dress",
    price: "$169.00",
    image: "images/stretch-knit-dress.jpg",
};

let ProductHighlight6 = {
    category: "SHIRTS",
    name: "Cotton Blue Shirt",
    price: "$89.00",
    image: "images/cotton-blue-shirt.jpg",
};

let ProductHighlight7 = {
    category: "SHIRTS",
    name: "Cotton Yellow T-Shirt",
    price: "$49.00",
    image: "images/cotton-yellow-tshirt.jpg",
};

let ProductHighlight8 = {
    category: "DRESSES",
    name: "Blue Silk Dress",
    price: "$199.00",
    image: "images/blue-silk-dress.jpg",
};

let imgs = document.querySelectorAll('.carousel-cell img');
let category = document.querySelectorAll('.carousel-cell .phCategory');
let price = document.querySelectorAll('.phPrice');
let name = document.querySelectorAll('.phName');
let email = document.getElementById('addEmail')
let allForms = document.getElementsByTagName("form");
let subForm = document.getElementById('subscribe');
let navLinks = document.querySelectorAll('.headerNavs a')

let allCategory =[ProductHighlight1.category, ProductHighlight2.category, ProductHighlight3.category, ProductHighlight4.category, 
                ProductHighlight5.category, ProductHighlight6.category, ProductHighlight7.category, ProductHighlight8.category];

let allName = [ProductHighlight1.name, ProductHighlight2.name, ProductHighlight3.name, ProductHighlight4.name, 
                ProductHighlight5.name, ProductHighlight6.name, ProductHighlight7.name, ProductHighlight8.name];

let allPrice = [ProductHighlight1.price, ProductHighlight2.price, ProductHighlight3.price, ProductHighlight4.price, 
                ProductHighlight5.price, ProductHighlight6.price, ProductHighlight7.price, ProductHighlight8.price];

let allImages =[ProductHighlight1.image, ProductHighlight2.image, ProductHighlight3.image, ProductHighlight4.image, 
                ProductHighlight5.image, ProductHighlight6.image, ProductHighlight7.image, ProductHighlight8.image];

for (let i = 0; i < imgs.length; i++) {
    
    /*                 THIS BROKE FLICKITY: so i've mnaully added the images in HTML                     */ 

    // imgs[i].src = allImages[i];
    
    // imgs[i].alt = allName[i];

    /*                                       */
    
    category[i].innerHTML = allCategory[i];
    
    price[i].innerHTML = allPrice[i];
    
    name[i].innerHTML = allName[i];
};

for (let i = 0; i < allForms.length; i++) {
    
    allForms[i].addEventListener('submit', function(event) {
        event.preventDefault();
          });
};

subForm.addEventListener('submit', function(test){
    let emailValue = email.value
    if (emailValue) {
        alert('Thank you for subscribing!')
    }
    else {
        alert('Please enter a valid email address')
    }
    allForms[0].reset();

});



});
