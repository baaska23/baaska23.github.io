const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const xhr = new XMLHttpRequest();
xhr.open("GET","ikon.xml");
xhr.onload = function(){
    if(xhr.status===200){
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xhr.responseText,"text/xml");
        const items = xmlDoc.getElementsByTagName("item");
        console.log(items[0])
        const newsDetail = document.getElementById("newsDetail");
        for (let i = 0; i < items.length; i++) {
        const pubDate = items[i].getElementsByTagName("pubDate")[0]?.textContent;
        const itemId = new Date(pubDate).getTime();
        if(itemId.toString() === id){
            var description = items[i].getElementsByTagName("description")[0]?.textContent;;
            console.log(description);
            break;
        }
        
        }
        
        newsDetail.innerHTML= description;  
}else {
    newsDetail.textContent = "Энэ мэдээнд дэлгэрэнгүй мэдээлэл олдсонгүй!";
}  
        }
xhr.send();