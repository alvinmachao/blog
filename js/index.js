/**
 * Created by Alvin on 2016/9/20.
 */
var indexRender = (function () {

    var content = document.getElementsByClassName('content')[0];
    var problem = document.getElementsByClassName('problem')[0];
    var ok = document.querySelector('.ok');
    var cancel = document.querySelector('.cancel');
    var p3Click = document.querySelector('#p3Click');

    var p8Content = '一个满怀梦想，满怀希望，打拼的在前端岗位上的我，依然保持着最初的激情，我一直认为无论是生活还是工作，都应该以最饱满的热情去迎接，生活中的我比较爱说话，喜欢交朋友，也喜欢运动，我本身就是个急性子的人，在工作中体现的就更加明显，有任务的话不喜欢拖到最后，尽可能的早些完成，留出足够的时间去做最终的完善。',
        p3Content = '如果您遇到了以上的这些情况,如果您正在寻找一名全栈工程师,那么巧了,同样我也正在寻求一份稳定长知识的工作.';
    p8Content = p8Content.split('');
    p3Content = p3Content.split('');
    //js打字
    function type(curE, arr, num) {
        var n = 0;
        var str1 = '';
        clearInterval(curE.temp);
        curE.temp = setInterval(function () {
            str1 += arr[n];
            curE.innerHTML = str1;
            n++;
            if (n == arr.length) {
                clearTimeout(curE.temp);
            }
        }, num);
    }


    /*swiper*/
    function sw() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
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
                            if (index == 8) {
                                content.innerHTML = "";
                            }
                            if (curIndex == 3) {
                                problem.innerHTML = '';
                            }
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

                                if (curIndex == 8) {
                                    clearInterval(window.timer1);
                                    window.timer1 = setTimeout(type(content, p8Content, 200), 1500);
                                }
                                if (curIndex == 3) {
                                    type(problem, p3Content, 200);
                                }
                                break;
                        }
                    }
                });
            }
        });
        ok.addEventListener('touchend', function () {
            mySwiper.slideNext();
        });
        cancel.addEventListener('touchend', function () {
            var a = mySwiper.activeIndex;
            var slides = mySwiper.slides;
            slides[a].classList.remove('p' + a + 'Animate');
            clearTimeout(cancel.time);
            cancel.time = setTimeout(function () {
                slides[a].classList.add('p' + a + 'Animate')
            }, 200);
            //mySwiper.slideTo(a);
        });
        p3Click.addEventListener('touchend', function () {
            mySwiper.slideNext();
        });
    }

    return {
        init: function () {
            //初始化宽度
            !function () {
                var desW = 320,
                    winW = document.documentElement.clientWidth,
                    oMain = document.querySelector('.main');
                if (winW > 640) {
                    oMain.style.width = 640 + 'px';
                    document.documentElement.style.fontSize = '200px';
                    return;
                }
                document.documentElement.style.fontSize = winW / desW * 100 + 'px';
            }();
           
            //执行swiper
            sw();

        }
    }
})();
indexRender.init();