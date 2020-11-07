/********************* 说你好 *****************************/
function welcome(){
    console.log("Welcome!!!!!!")
}

welcome()

/********************* 滚动到下一页 ****************************************/
function second_page(){
    window.scrollTo({top:(document.body.clientHeight),behavior:"smooth"})
}

/****************** 滚动跳页 ******************************/
//是否启用跳转
let enable_jump=true
let in_jumping=false
//节流变量
let last_known_scroll_position = 0;
let ticking = false;

function scroll_jump(scroll_pos) {
  // 根据滚动位置做的事
  if(scroll_pos<document.body.clientHeight&&enable_jump){
    second_page()
    enable_jump=false
    in_jumping=true
    //禁止1s滚动
    setTimeout(()=>{in_jumping=false},1000)
  }
  if(scroll_pos===0){
    enable_jump=true
  }
  //禁止1s滚动
  if(scroll_pos>document.body.clientHeight&&in_jumping){
    window.scrollTo({top:document.body.clientHeight})
    in_jumping-false
  }
}
//节流
window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      scroll_jump(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
