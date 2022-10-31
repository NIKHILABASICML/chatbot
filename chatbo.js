function talk(){
    var know={
        "Hii":"Hello",
        "How are you":"Great",
        "Nice to meet you":"Mee too",
        "what,s happening ":"pretty good",
        "Bye":"see you later",
        "karthik":"podukunava??"
    };
    var user=document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML=user+"<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML=know[user]+"<br>";
    }
    else{
        document.getElementById('chatLog').innerHTML=" oops don't know about that";
    }
}