let displayStatus;
let soundSrc;
displayStatus = document.getElementById("status");
soundSrc = "./sound/demo.mp3";
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.addEventListener("fileload",playSound);
createjs.Sound.registerSound(soundSrc);

displayStatus.innerHTML = "等待资源加载....";
function playSound(e){
    soundInstance = createjs.Sound.play(e.src);
    displayStatus.innerHTML = "播放的资源是：" + e.src;
}