  
    let a;
    let date;
    let time;
    const options = { weekday: 'long',year: 'numeric',month:'long',day:'numeric'};
    setInterval(() => {
    a= new Date();
    date= a.toLocaleDateString(undefined,options); 
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('cal').innerHTML= time + "<br>" + date;
    }, 1000);