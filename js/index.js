/**
 * Created by Alvin on 2016/10/1.
 */

var personalRender = (function () {


    /*swiper*/
    function sw() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            lazyLoading: true,
            onSlideChangeEnd: function (swiper) {
                var slides = swiper.slides;
                var trueTotal = slides.length - 2;
                var lastNum = trueTotal + 1;
                var curIndex = swiper.activeIndex;
                [].forEach.call(slides, function (item, index) {
                    switch (index) {
                        case 0:
                            item.classList.remove('p' + trueTotal + 'Animate');
                            break;
                        case lastNum:
                            item.classList.remove('p' + 1 + 'Animate');
                            break;
                        default :
                            item.classList.remove('p' + index + 'Animate');
                            break;
                    }
                    if (curIndex == index) {
                        switch (curIndex) {
                            case 0:
                                item.classList.add('p' + trueTotal + 'Animate');
                                break;
                            case lastNum:
                                item.classList.add('p' + 1 + 'Animate');
                                break;
                            default :
                                item.classList.add('p' + curIndex + 'Animate');
                                break;
                        }
                    }
                });
            }
        });
    }

    return {
        init: function () {
            //music 处理：
            (function () {
                var oMusicBox = document.getElementById('music');
                var oAudio = oMusicBox.getElementsByTagName('audio')[0];
                window.setTimeout(function () {
                    oAudio.volume = .5;
                    oAudio.play();
                    oAudio.addEventListener('canplay', function () {
                        oMusicBox.style.display = 'block';
                        oMusicBox.className = 'music move';
                    }, false);

                }, 1000);
                oMusicBox.addEventListener('click', function () {
                    if (oAudio.paused) {
                        oAudio.play();
                        oMusicBox.className = 'music move';
                        return;
                    }
                    oAudio.pause();
                    oMusicBox.className = 'music';
                }, false)
            })();
            //swiper
            sw();
        }
    }
})();

personalRender.init();