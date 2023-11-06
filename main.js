windows.onload = () => {
  let input = documnet.querySelector("#input");
  input.oninput = function () {
    let value = this.value.trim();
    let list = document.querySelectorAll(".ul li");

    if (value != "") {
      list.forEach(elem=> {
        if(elem.innerText).search()
      })
    }
    console.log(this.value);
  };
};
