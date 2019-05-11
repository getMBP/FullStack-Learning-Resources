
```javascript

function reverseArray(arr){

  for(let i =0 ,j =arr.length -1;i<arr.length ;i++){
    if(i>j){
      break ;
    }
    let temp ;
    temp = arr[i] ;
    arr[i] = arr[j] ;
    arr[j]  = temp;
    j-- ;

  }

}

```
