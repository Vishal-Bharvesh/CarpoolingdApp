//balance View
web3.eth.getBalance(hashcode).then(function(rvalue){
    rvalue=web3.utils.fromWei(rvalue,"Ether");
   $("#balance").html(rvalue + "ETH"); 

})