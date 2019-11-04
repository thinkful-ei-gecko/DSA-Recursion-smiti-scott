const countingSheep = function(n){
    if(n === 0){
        console.log('All sheep jumped over the fence');
        return;
    }
    console.log(n + ': Another sheep jumps over the fence')
    countingSheep(n-1);
    
}



countingSheep(3);