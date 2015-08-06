function changehost(){
  var hosts = ["i33sc.sh.thehante.com"];
  var targethost = "i33sc1.sh.thehante.com";
  hosts.forEach(function(item){
    if(location.href.indexOf(item) >= 0){
      location.href = location.protocol + '//' + targethost + location.pathname + location.search;
    }
  });
}

changehost();