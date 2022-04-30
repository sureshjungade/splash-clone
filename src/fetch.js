let searchimages = async (value,sorting,filter)=>{
    console.log(sorting,filter)
    try{
        console.log(sorting,filter)
        if(sorting=="" && filter==""){
            let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`)
            let data = await res.json()
            console.log(data)
            return data
        }
        else if(sorting==""){
            let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&orientation=${filter}&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`)
            let data = await res.json()
            console.log(data)
            return data
        }
        else if(filter==""){
            let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=${sorting}&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`)
            let data = await res.json()
            console.log(data)
            return data
        }
        
        else{
            let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=${sorting}&orientation=${filter}&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`)
            let data = await res.json()
            console.log(data)
            return data
        }
        
    }catch(err){
        console.log(err)
    }
}

let append = ((data,container)=>{
    
    data.forEach(({alt_description,urls:{small}})=>{
        let div = document.createElement("div");
        div.setAttribute("class","div")
        let img = document.createElement("img");
        let h3 = document.createElement("h3");

        img.src=small;
        h3.innerText=alt_description
        console.log(h3.innerText)
        div.append(img,h3)
        container.append(div)
    })
})
export {searchimages,append}