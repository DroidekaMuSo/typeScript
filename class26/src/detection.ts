function detectTypes(value:number|string){
    if(typeof value === "string"){
        value.toLowerCase()
    }else{
        return value + 3
    }


} 

function provideId(id:string | null){
    if(!id){
        console.log("Please, provide Id")
        return;
    }

    id.toLowerCase()
}



export{}