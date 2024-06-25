const page_loading = document.querySelector('#loading')
const page_start = document.querySelector('#loading_start')
const page_img = document.querySelector('#loading_img')
//操作可能にする
var none = function () {
  page_start.style.display = `none`
  page_loading.style.display = `none`
}
//初期画面フェードアウト
var start_animation = function () {
  page_start.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 2000,
    fill: 'forwards',
  })
}
var load_animation = function () {
  page_loading.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 1500,
    fill: 'forwards',
  })
}
var load_img = function () {
  page_img.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: 'forwards',
  })
}
window.addEventListener('load', () => {
  start_animation()
  setTimeout(load_img, 3000)
  setTimeout(load_animation, 5000)
  setTimeout(none, 6500)
})
