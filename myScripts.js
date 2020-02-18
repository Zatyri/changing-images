/*************************************
 Sliding images
 ****************************************/
(function slidingImages(){
    // change imageArray content to match your image names
    let imageArray = [
        "cat.jpg",
        "swan.jpg",
        "zebra.jpg"
    ];
    const IMAGESECTION = document.getElementById("slidingImages");
    insertImages(imageArray,IMAGESECTION);
    let pictureIndex = 1;
    setInterval(function(){
        let imgId = document.getElementById("headerImg" + pictureIndex);
        let prevImgId;
        if(pictureIndex != 0){
            prevImgId = document.getElementById("headerImg" + (pictureIndex - 1));
        }
        else {
            prevImgId = document.getElementById("headerImg" + (imageArray.length - 1));
        }
        imgId.style.opacity = "1";        
        prevImgId.style.opacity = "0";
        pictureIndex++;
        if(pictureIndex >= imageArray.length){
            pictureIndex = 0;
        }        
    },4000);

})();

// function for creating images in DOM
function insertImages(imageArray, section){
    imageArray.forEach((imgSrc, index) => {
        let newImage = document.createElement("IMG");
        newImage.setAttribute("src", ("../media/" + imgSrc)); // change to match your image folder
        if(index != 0){
            newImage.style.opacity = "0";
        }
        newImage.id = "headerImg" + index;       
        section.appendChild(newImage);
    });
}
/***************************************** */

/********************************************
 
 *********************************************/