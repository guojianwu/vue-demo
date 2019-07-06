<template>
    <div data-v-636e27eb="" class="mint-loadmore loadmore">
        <div class="mint-loadmore-content is-dropped" style="transform: translate3d(0px, 50px, 0px);">
            <div class="mint-loadmore-top">
                <div class="mint-loadmore-spinner mint-spinner-fading-circle circle-color-71" type="fading-circle" style="width: 20px; height: 20px;">
                    <div class="mint-spinner-fading-circle-circle is-circle2"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle3"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle4"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle5"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle6"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle7"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle8"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle9"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle10"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle11"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle12"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle13"></div>
                </div>
                <span class="mint-loadmore-text">加载中...</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style>

.mint-spinner-fading-circle {
    position: relative
}
.mint-spinner-fading-circle-circle {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute
}
.mint-spinner-fading-circle-circle::before {
    content: " ";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    border-radius: 100%;
    -webkit-animation: mint-fading-circle 1.2s infinite ease-in-out both;
            animation: mint-fading-circle 1.2s infinite ease-in-out both
}
.mint-spinner-fading-circle-circle.is-circle2 {
    -webkit-transform: rotate(30deg);
            transform: rotate(30deg)
}
.mint-spinner-fading-circle-circle.is-circle2::before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s
}
.mint-spinner-fading-circle-circle.is-circle3 {
    -webkit-transform: rotate(60deg);
            transform: rotate(60deg)
}
.mint-spinner-fading-circle-circle.is-circle3::before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s
}
.mint-spinner-fading-circle-circle.is-circle4 {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg)
}
.mint-spinner-fading-circle-circle.is-circle4::before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s
}
.mint-spinner-fading-circle-circle.is-circle5 {
    -webkit-transform: rotate(120deg);
            transform: rotate(120deg)
}
.mint-spinner-fading-circle-circle.is-circle5::before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s
}
.mint-spinner-fading-circle-circle.is-circle6 {
    -webkit-transform: rotate(150deg);
            transform: rotate(150deg)
}
.mint-spinner-fading-circle-circle.is-circle6::before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s
}
.mint-spinner-fading-circle-circle.is-circle7 {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg)
}
.mint-spinner-fading-circle-circle.is-circle7::before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s
}
.mint-spinner-fading-circle-circle.is-circle8 {
    -webkit-transform: rotate(210deg);
            transform: rotate(210deg)
}
.mint-spinner-fading-circle-circle.is-circle8::before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s
}
.mint-spinner-fading-circle-circle.is-circle9 {
    -webkit-transform: rotate(240deg);
            transform: rotate(240deg)
}
.mint-spinner-fading-circle-circle.is-circle9::before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s
}
.mint-spinner-fading-circle-circle.is-circle10 {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg)
}
.mint-spinner-fading-circle-circle.is-circle10::before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s
}
.mint-spinner-fading-circle-circle.is-circle11 {
    -webkit-transform: rotate(300deg);
            transform: rotate(300deg)
}
.mint-spinner-fading-circle-circle.is-circle11::before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s
}
.mint-spinner-fading-circle-circle.is-circle12 {
    -webkit-transform: rotate(330deg);
            transform: rotate(330deg)
}
.mint-spinner-fading-circle-circle.is-circle12::before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s
}
@-webkit-keyframes mint-fading-circle {
    0%, 39%, 100% {
        opacity: 0
    }
    40% {
        opacity: 1
    }
}
@keyframes mint-fading-circle {
    0%, 39%, 100% {
        opacity: 0
    }
    40% {
        opacity: 1
    }
}

.mint-loadmore {
    overflow: hidden
}
.mint-loadmore-content {}
.mint-loadmore-content.is-dropped {
    -webkit-transition: .2s;
    transition: .2s
}
.mint-loadmore-top, .mint-loadmore-bottom {
    text-align: center;
    height: 50px;
    line-height: 50px
}
.mint-loadmore-top {
    margin-top: -50px
}
.mint-loadmore-bottom {
    margin-bottom: -50px
}
.mint-loadmore-spinner {
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle
}
.mint-loadmore-text {
    vertical-align: middle
}

</style>