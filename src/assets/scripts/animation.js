// ノートを開く処理
export function OpenNote(img) {  
  const openPopupBtn = document.getElementById('noteImg');
  openPopupBtn.addEventListener('click',() => {
    
  })

  return(img);
  // prompt()
  
  // const test_div = document.getElementById("test_div");
  // console.log(test_div);
}

// homeから移動する時のheaderのアニメーション
const buttons = document.querySelectorAll('button');
const userMenu = document.getElementsByName('slideElement');

// function slideMenu () {
//   buttons.forEach(element => {
//     element.addEventListener('click', () => {
//       console.log('おされたよん！');
//     })
//   });
// }
buttons.forEach(element => {
  element.addEventListener('click', () => {
    console.log('おされたよん！');
    userMenu.classList.add('active');
  })
});