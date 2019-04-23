class Carousel {
    constructor(elmnt) {
        const lftBtn = document.querySelector('.left-button');
        const rgtBtn = document.querySelector('.right-button');
        this.carouselImg = document.querySelectorAll('.carousel img[src]');
        lftBtn.addEventListener('click', () => this.moveImgLeft());
        rgtBtn.addEventListener('click', () => this.moveImgRight());
        // this.idxCurr = this.carouselImg[0];
        // this.idxCurr.style.display = 'block';
        this.index = 0;
    }
    moveImgLeft() {
        this.carouselImg.forEach(crslImg => crslImg.style.display = 'none');
        if(this.index > 0) {
            this.carouselImg[this.index].style.display = 'block';
            this.index = this.index - 1;
        } else {
            this.carouselImg[this.carouselImg.length - 1].style.display = 'block';
            this.index = this.carouselImg.length - 1;
        }
    }

    moveImgRight() {
        this.carouselImg.forEach(crslImg => crslImg.style.display = 'none');
        if(this.index < this.carouselImg.length) {
            this.carouselImg[this.index].style.display = 'block';
            this.index = this.index + 1;
        } else {
            this.carouselImg[0].style.display = 'block';
            this.index = 0;
        }
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
