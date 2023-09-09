function send(){
    var get_tag = document.querySelectorAll(".input-tags")

    for( let i = 0; i < get_tag.length; i++){
        if(get_tag[i].value == ""){
            alert("Nhập đầy đủ thông tin của bạn");
            return 0;
        }else{
            alert("Thông tin của bạn đã được gửi"); 
            return 0;
        }
    }
}