// function photos(){
// const img = document.querySelectorAll('.img-select a');
// const imgBtn=[...img];
// let imgId=1;
// const img2 = document.querySelectorAll('.images a');
// const imgBtn2=[...img2];
// // let imgId2=1;

// imgBtn.forEach((imgItem)=>{
//     imgItem.addEventListener('click',(e)=>{
//         e.preventDefault();
//         imgId=imgItem.dataset.id;
//         slideImage();
//     })
// })
// imgBtn2.forEach((imgItem)=>{
//     imgItem.addEventListener('click',(e)=>{
//         e.preventDefault();
//         imgId=imgItem.dataset.id;
//         document.getElementById('overlay').classList.remove('active')
//         slideImage();
//     })
// })
// function slideImage(){
//     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
//     document.querySelector('.img-showcase').style.transform=`translateX(${-(imgId -1) * displayWidth}px)`;
// }
// window.addEventListener('resize',slideImage)



// // =============================================
// document.getElementById('openPopup').addEventListener('click',(e)=>{
//     document.getElementById('overlay').classList.add('active')
   
// })
// document.getElementById('closePopup').addEventListener('click',(e)=>{
//     document.getElementById('overlay').classList.remove('active')
   
// })
// }