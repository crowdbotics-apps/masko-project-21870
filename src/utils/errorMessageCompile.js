
const ignoreKey = ["non_field_errors"];


export default function compileErrorMessage(error,data){
    var message = "";
    try{
        if(data!=null && typeof data === "string"){
            message += (data.length>25)?"Connection Error":data;
        }else if(data!=null){
            for (var prop in data) {

                if(!ignoreKey.includes(prop))
                    message += prop.toUpperCase()+": ";

                if(typeof data[prop] !== "object"){
                    message += compileFromArr(data,prop)
                }else{
                    for (var prop2 in data[prop]) {
                     message += compileFromArr(data[prop],prop2)   
                    }
                }
            }
        }
    }catch(error){
        var message = "Error \n"+error.message;
        console.log("Error Compilation ....");
    }finally{
        return message;
    }    

}


function compileFromArr(data,prop){
    var substr = "";
    if(Array.isArray(data[prop])){
        var substr = "";
        for(item in data[prop]){
            substr += data[prop][item]+",";
        }
        substr += "\n";
    }else if (data[prop]!=null){
        substr += data[prop]+"\n";
    }

    return substr;
}