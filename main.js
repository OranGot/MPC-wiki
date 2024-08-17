

function prepareCollapsible(){
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (!content){
        var content = this.parentNode.nextElementSibling;
      }
      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("active")
      } else {
        content.style.display = "block";
        this.classList.add("active")
      }
    });
  }
}

