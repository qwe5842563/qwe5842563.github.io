var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//企鵝圖片轉換
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'penguin_1.png'){
        myImage.setAttribute('src','penguin_2.png');
    }else{
        myImage.setAttribute('src','penguin_1.png');
    }
}

//設定客製化的歡迎訊息

function setUserName(){
    /*prompt函式，有點像alert()，只是prompt()會要求使用者輸入一些資料並在
    使用者點選確認後，將內容儲存在一個變數裡面。*/
    let myName = prompt('Please enter your name');
    if(!myName || myName === null){
        setUserName();
    /*localStorage可以讓使用者先將一些資料儲存在瀏覽器中，有需要再取出使用。
    使用localStorage的setItem()函式來建立並且把資料儲存在'name'的變數裡
    在把包含著使用者名字的myName的值給他。*/
    }else{localStorage.setItem('name', myName);
    //將一個字串跟使用者的名字指定給標題的innerHTML
    myHeading.innerHTML = 'penguin is cute, ' + myName;
    }
}
    /*這邊使用!(邏輯非)來檢查name這個物件是否存在，
    如果沒有則執行setUserName()函式;*/
if(!localStorage.getItem('name')){
    setUserName();
    /*如果name有值則使用getItem來儲存name的值，
    並將innerHTML特性設定為一個字串加上使用者的名字。*/
}else{
    let StoredName = localStorage.getItem('name');
    myHeading.innerHTML = 'penguin is cute, ' + StoredName;
}
/*把以下的onclick事件處理器跟按鈕綁定，如此一來，每次點選按鈕
就會執行setUserName()，這將允許使用者透過此按鈕來重新設定名字*/
myButton.onclick = function(){
    setUserName();
}