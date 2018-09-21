var hasWindow = typeof window !== 'undefined';
var env = hasWindow ? window.devicePixelRatio || 1 : 1;
var srcReplace = /(\.[A-z]{3,4}\/?(\?.*)?)$/;

function obj2arr(obj) {
    return Array.prototype.slice.call(obj);
}

function strDiff(a, b) { // return difference of string 'a' from 'b'
    firstOccur = b.indexOf(a);
    if (firstOccur === -1) {
        return b;
    } else {
        if (firstOccur === 0) {
            diff = b.substring(a.length);
        } else {
            diff = b.substring(0, firstOccur);
            diff += b.substring(firstOccur + a.length);
        }
        return diff;
    }
}

function setSourceIfAvailable(image, retinaURL) {
    var testImage = document.createElement('img');

    testImage.addEventListener('load', function() {
        image.setAttribute('src', retinaURL);
    })

    testImage.setAttribute('src', retinaURL);
    image.processed = true;
}

function getImages() {
    var images = document.querySelectorAll('img'); // NodeList of images
    var imagesArray = obj2arr(images); // NodeList transformed to Array
    var filteredImagesArray = imagesArray.filter(x => x.src.match(srcReplace)[0] !== '.svg'); // Filtered svg

    return filteredImagesArray;
}

function getRetinaURL(url) {
    var ext = url.match(srcReplace)[0]
    var urlWithoutExt = strDiff(ext, url);
    var retinaURL = urlWithoutExt + '@2x' + ext;

    return retinaURL;
}

function retina(images) {
    if (env > 1) {
        images.forEach(function(image) {
            if( !image.processed ) {
                setSourceIfAvailable(image, getRetinaURL(image.src))
            }
        })
    }
}

if (hasWindow) {
    window.addEventListener('load', retina(getImages()))
}
