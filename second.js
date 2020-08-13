
var a= [0,1,1,0,0,0,1,1,0,0,1,1];
var sum=0;
var max=0;
function MaxConsec(){
for(var i=0;i<a.length;i++){
    if(a[i]==0){
        sum=0;
    }
    else{
        sum++;
        if(sum>max){
            max = sum;
        }
    }}
}
    console.log(a);
    console.log(sum);
    console.log(max);