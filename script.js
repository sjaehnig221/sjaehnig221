down_arrow_1.onclick = function(event) {
  document.getElementById("information").scrollIntoView();
}

menu_icon.onclick = function(event) {
  if(document.getElementById('link_list').style.display != "block"){
    document.getElementById('link_list').style.display = "block";
  } else {
    document.getElementById('link_list').style.display = "none";
  }
}

linkedin_icon.onclick = function(event) {
  location.href = "https://www.linkedin.com/in/sam-jaehnig-3932b5195/";
}

twitter_icon.onclick = function(event) {
  location.href = "https://twitter.com/samjaehnig";
}

facebook_icon.onclick = function(event) {
  location.href = "https://www.facebook.com/profile.php?id=100010288356446";
}

email_icon.onclick = function(event) {
  location.href = "mailto:sjaehnig@umich.edu";
}

resume_icon.onclick = function(event) {
  location.href = "resume.pdf";
}

instagram_icon.onclick = function(event) {
  location.href = "https://www.instagram.com/sammmmy.j/";
}

back.onclick = function(event) {
  location.href = "index.html";
}
