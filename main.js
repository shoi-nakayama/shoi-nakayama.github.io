console.log("外部ファイルから読み込まれました！");

const card = document.querySelector('.work-card');

card.addEventListener('click',function(){
    window.location.href = './gamer-profile/index.html';
});