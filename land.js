async function dispaly(){





let item=document.getElementsByClassName('items')[0]



 let serve = await fetch('./itemimage.json')
 let data= await serve.json()
console.log(serve,data)
 let string=''

for (let index = 0; index < data.length; index++) {
  string+=`
  <div class="item ">
    <div class="imgdiv">
        <img src='./images/${data[index].src}.jpg' alt="" srcset="" style ='width:100% ;' class="imleaf">
    </div>        
  
  
  <p class="product">${data[index].productname}</p>
  <p class="finename">${data[index].productdescription}</p>
  <button class="add">ADD TO CART</button>
        </div>
  `
}
item.innerHTML=string





let images=document.getElementsByTagName('img')

for (let index = 0; index < images.length; index++) {
    let image=document.getElementsByTagName('img')[index]
    console.log(image)
    let origin=image.src
   image.addEventListener("mouseover",()=>{
    
    let randnum=Math.floor(Math.random() * data.length)
image.src=`./images/${data[randnum].src}.jpg`
    })
    image.addEventListener("mouseout",()=>{
      console.log(image)
        image.src=origin
  
            })
}


let addbtns= document.getElementsByClassName('add')

for (let index = 0; index < addbtns.length; index++) {
    let addbtn=document.getElementsByClassName('add')[index]
    addbtn.addEventListener("mouseover",()=>{
      addbtn.style.opacity=0.3
    
    }
    )

    addbtn.addEventListener("mouseout",()=>{
        addbtn.style.opacity=0.9
      }
      )
}








}


dispaly()