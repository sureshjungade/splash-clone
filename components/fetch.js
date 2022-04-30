let search = (e) =>{
    if(e.key==="Enter"){
        searchimages();
    }
}

document.getElementById("query").addEventListener("keydown",search);

let searchimages = async () =>{
    let value = document.getElementById("query").value
    try{
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`)
        let data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

export {}