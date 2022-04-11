const scrollBar = (padding, border) => {

  const contentBox = document.querySelector("#contents")
  const box = document.querySelector("#box")
  const scrollBarCover = document.querySelector("#scrollBarCover")
  const scrollBar = document.querySelector("#scrollBar")
  
  contentBox.addEventListener('scroll', () => {
    // A contentbox (내용이 들어가는 박스)의 전체 높이(스크롤 포함) - 박스의 높이 + border 값 2(1+1)
    let conBoxHeight = contentBox.scrollHeight - box.offsetHeight + padding + border  
    // console.log(conBoxHeight)

    // B 스크롤 top 적용하기 위해 스크롤 바를 감싼(scrollBarCover) 박스의 높이 - 스크롤바(scrollBar)의 높이
    // console.log(scrollBarCover.offsetHeight-scrollBar.offsetHeight)  
  
    console.log(scrollBar.offsetHeight)
    const conBoxST = conBoxHeight / ( scrollBarCover.offsetHeight - scrollBar.offsetHeight )  // A ÷ B
    
    // console.log(conBoxST);
    // console.log(contentBox.scrollTop/conBoxST) // 스크롤 위치와 스크롤 바의 높이값을 비율로 계산
    scrollBar.style.top = contentBox.scrollTop / conBoxST + "px"
  });
}

// padding = 40 // 박스의 padding-top + padding-bottom 값 입력 
// border = 2 // 박스의 border-top + border-bottm 값 입력 
scrollBar(40, 2)
