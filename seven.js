$(document).ready(function(){
    const Url:"https://www.example.com/api/get/1";

    $('.btn').click(function(){
        $.ajax({
            url:Url,
            type:"GET",
            success:function(result){
                console.log(result)

            },
            error:function(error){
                console.log(`error ${error}`)
            }
        })
    })

});