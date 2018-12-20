$(document).ready(function () {

    let videoSlider = new Swiper('.video-list-wrapper', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.video-btn.swiper-button-next',
            prevEl: '.video-btn.swiper-button-prev',
        },
        scrollbar: {
            el: '.video-scroll.swiper-scrollbar',
            draggable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    $('.video-item')
        .on('mouseover', function () {
            $(this).find('.video-item').get(0).play();
        })
        .on('mouseout', function () {
            $(this).find('.video-item').get(0).pause();
        });

    $('.play-video')
        .on('click', function () {
            let videoPath = $(this).data('video');

            $('.video__overlay').addClass('active')

            $('#player').videre({
                video: {
                    quality: [
                        {
                            label: '720p',
                            src: videoPath
                        },
                        {
                            label: '360p',
                            src: videoPath
                        },
                        {
                            label: '240p',
                            src: videoPath
                        }
                    ],
                    title: $(this).closest('.video-item').find('.video-item-caption').text()
                },
                dimensions: $(window).width()
            });
        });


    $('.video-close').on('click', function () {
        $('.video__overlay').removeClass('active');
        $('#player').empty().removeAttr('class');
    });
});