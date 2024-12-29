function doki(){
    const ddlc = document.getElementById('fanddlc');
    if (window.innerWidth < 680){
        ddlc.textContent = " - DDLC";
    } else {
        ddlc.textContent = " -  Doki-Doki literature club";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    doki();
    window.addEventListener('resize', doki);
});

console.log(`Current width: ${window.innerWidth}`);