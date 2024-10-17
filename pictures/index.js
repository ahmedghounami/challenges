const images = document.querySelectorAll('.picture');
const displayedImage = document.querySelector('.displayed-image');
const button_left = document.querySelector('.prev');
const button_right = document.querySelector('.next');

update = () => {
    for(let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('selected')) {
            displayedImage.src = images[i].src;
        }
    }
}

make_in_center = (c) => {
    for(let i = 0; i < images.length; i++) {
        var tmp = images[i].src;
        if (i + c < 0)
        {
            images[i].src = images[images.length - 1].src;
            images[images.length - 1].src = tmp;
        }
        else if (i + c >= images.length)
        {
            images[i].src = images[0].src;
            images[0].src = tmp;
        }
        else
        {
            images[i].src = images[i + c].src;
            images[i + c].src = tmp;
        }
    }
}

prevImage = () => {
    for (let i = 0; i < images.length; i++) {
            let c = -1;
            make_in_center(-1);
            update();
    }
}

button_left.addEventListener('click', prevImage);



nextImage = () => {
    for (let i = 0; i < images.length; i++) {
            let c = 1;
            make_in_center(c);
            update();
    }
}

button_right.addEventListener('click', nextImage);

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        for (let j = 0; j < images.length; j++) {
            images[j].classList.remove('selected');
        }
        images[i].classList.add('selected');
        displayedImage.src = images[i].src;
    }
    );
}
