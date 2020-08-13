var obj={1:{"id":4, "name":"abc"},
    5:{"id":10, "name":"abc1"},
    3:{"id":5, "name":"abc2"},
   2:{ "id":6, "name":"abc3"}

}
 var arr=[];
 for(var i in obj){
     var o={};
     if(obj.hasOwnProperty(i)){
         o.id=obj[i].id;
        
        
        
         arr.push(o);
     }
     
     
 }
 arr.sort(function(a,b){
     a.id-b.id;

 });

 console.log(arr);