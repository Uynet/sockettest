let xhr;
let cl = console.log;

const main = ()=>{
  const api_key = "vEr9LhrCRl1LxpS2h5LVUj4dC";
  const api_seclet = "cYgVWwqrZUASwdijrurcWx6tDreosP5xHddhPtphymGgaA7QkQ";
  const credential = btoa(api_key + ":" + api_seclet);//クレデンシャル
  const reqURL = "https://api.twitter.com/oauth2/token";

  xhr = new XMLHttpRequest();
  xhr.open("POST",reqURL,true);
  xhr.setRequestHeader("Authorization","Basic"+credential);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
  xhr.send("grant_type=client_credentials");
  xhr.onreadystatechange = ()=>{
  cl(xhr.readyState)
  cl(xhr.status)
  console.log(xhr.responseText);
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
}

onload = main()
