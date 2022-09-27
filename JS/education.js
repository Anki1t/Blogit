
const likebtn = document.querySelector(".like_btn");
const likeicon = document.querySelector("#icon");
const count = document.querySelector("#count");

let clicked = false;

likebtn.addEventListener("click", () => {
  if(!clicked) {
    clicked =true;
    likeicon.innerHTML = <i class = "fas fa-thumbs-up"></i>
    count.textContent++;
  }
  else{
    clicked = false;
    likeicon.innerHTML = <i class = "far fa-thumbs-up"></i>
    count.textContent--;
  }
});

var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});