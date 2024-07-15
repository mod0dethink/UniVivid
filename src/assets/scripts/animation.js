// const favoriteImg = document.getElementById("favorite");
// function favoriteChange() {
//   favoriteImg.classList.toggle("star_on");
// }
const good = document.getElementById('goodBtn');
// いいね数管理
function goodCount(isGoodCount, isGoodState) {
  const count = isGoodCount;
  if(isGoodState) {
    count++
  } else {
    count--;
  }

  return (
    <p className='my-auto ml-1'>{count}</p>
  );
}