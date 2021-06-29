//[5,4,2,1,1,5,9,0,7,4,2,1,6,0,9,7,4,3,2,8,7,4,3,2,8,4,2,3,1,2,6]
function times(arr){
    arr.sort((a,b)=>{return a-b})
    console.log(arr)
    var temp=arr[0];
    var count=1;
    for(var i=1;i<=arr.length+1;i++){
        if(temp==arr[i]){
            count++;
        }
        else{
            console.log(temp+':'+count)
            temp=arr[i];
            count=1
        }

    }
}

times([5,4,2,1,1,5,9,0,7,4,2,1,6,0,9,7,4,3,2,8,7,4,3,2,8,4,2,3,1,2,6])