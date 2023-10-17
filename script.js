var request = new XMLHttpRequest()

request.open('GET', 'http://159.223.51.203/api/bio', true)

request.onload = function () {
  var data = JSON.parse(this.response)
    document.getElementById("nama1").textContent = data[0].name;
    document.getElementById("iden1").textContent = data[0].id;
    document.getElementById("nama2").textContent = data[1].name;
    document.getElementById("iden2").textContent = data[1].id;
    document.getElementById("nama3").textContent = data[2].name;
    document.getElementById("iden3").textContent = data[2].id;
    document.getElementById("nama4").textContent = data[3].name;
    document.getElementById("iden4").textContent = data[3].id;
    document.getElementById("nama5").textContent = data[4].name;
    document.getElementById("iden5").textContent = data[4].id;
    document.getElementById("nama6").textContent = data[5].name;
    document.getElementById("iden6").textContent = data[5].id;
    document.getElementById("nama7").textContent = data[6].name;
    document.getElementById("iden7").textContent = data[6].id;
    document.getElementById("nama8").textContent = data[7].name;
    document.getElementById("iden8").textContent = data[7].id;
    document.getElementById("nama9").textContent = data[8].name;
    document.getElementById("iden9").textContent = data[8].id;
    document.getElementById("nama10").textContent = data[9].name;
    document.getElementById("iden10").textContent = data[9].id;
    document.getElementById("nama11").textContent = data[10].name;
    document.getElementById("iden11").textContent = data[10].id;
}

request.send()