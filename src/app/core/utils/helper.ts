const perPage = 20;

const generateRange = (end:number)=>{
    var len = end - 1 + 1;
    var a = new Array(len);
    for (let i = 0; i < len; i++) a[i] = 1 + i;
    return a;
 }

 export const  generatePagenation = (total:number,offset:number) =>{
    const totalItems = total;

    var quotient = Math.floor(totalItems/perPage); 
    var remainder = totalItems % perPage;

    if(remainder > 0) quotient = quotient + 1
    
    const pagesArray = generateRange(quotient)
    if(offset === 1){
        offset = 0
    }else{
        offset = offset - 1; 
    }   
    
    const firstFiveItems = pagesArray.slice(offset, 5 + offset)
    const lastTwoItems = pagesArray.slice(-2)
    const dots = ['.....']
  
    var new_array =  [...firstFiveItems, ...dots, ...lastTwoItems]
    return new_array;
}   

export const generateOffset = (page:number): number =>{
    const newPageNumber = page -1;
    var offset = 0;

    for (let i = 0; i < newPageNumber; i++) offset = offset + perPage;
    return offset;
}