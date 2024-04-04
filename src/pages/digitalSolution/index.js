import 'layui'
import '../../../public/base'
import Swiper from 'swiper'
import '../../style/general.scss'
import '../../../public/css/reset.css'
import '../../../public/css/layui.css'
import '../../../public/css/common.css'
import '../../../public/css/swiper-bundle.min.css'
import './index.scss'

// $(document).on('mousewheel DOMMouseScroll', function(e) {
//   var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
//         (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
//   if (delta > 0) {
//     // 向上滚
//     $('#header').stop(true, false).animate({ top: 0 }, 'normal', 'linear')
//     $('.content-body').stop(true, true).animate({ paddingTop: '98px' }, 'normal', 'linear')
//   } else if (delta < 0) {
//     // 向下滚
//     $('#header').stop(true, false).animate({ top: '-98px' }, 'normal', 'linear')
//     $('.content-body').stop(true, true).animate({ paddingTop: 0 }, 'normal', 'linear')
//   }
// })

// eslint-disable-next-line no-unused-vars
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loopAdditionalSlides: 2,
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 3,
  autoplay: true
})

