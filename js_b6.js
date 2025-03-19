function check(event){
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    if(username == "huanrose@gmail.com" && password == "123456"){
        console.log(`dang nhap thanh cong`);
    }else{
        console.log(`dang nhap that bai`);
    }
}