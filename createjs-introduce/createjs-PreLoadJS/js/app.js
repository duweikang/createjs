let queue;
let $state;
let $progress;
let $progressbar;

queue = new createjs.LoadQueue();
$state = $("#state");
$progress = $("#progress");
$progressbar = $("#progressbar");

queue.on('complete',onComplete);
queue.on('error',onError);
queue.on('fileload',onFileLoad);
queue.on('fileprogress',onFileProgress);
queue.on('progress',onProgress);

queue.loadManifest([
    {
        id: 'one',
        src: 'http://upload.wikimedia.org/wikipedia/commons/a/a2/Polycyclic_Aromatic_Hydrocarbons_In_Space.jpg'
    },
    {
        id: 'two',
        src: 'http://static3.businessinsider.com/image/522746c56bb3f72e2a316155/photo-airbus-proves-its-huge-new-warplane-doesnt-need-a-paved-runway.jpg'
    },
    {
        id: 'three',
        src: 'http://upload.wikimedia.org/wikipedia/commons/c/cb/WA_-_Dry_Falls_-_Huge_Channel_v1.png'
    }
])

function onComplete(event) {
    console.log('Complete', event);
    $state.text($state.text() + '[All loaded]');
    $progressbar.addClass('complete');
}

function onError(event) {
    console.log('Error', event);
    $state.text($state.text() + '[' + event.item.id + ' errored] ');
}

function onFileLoad(event) {
    console.log('File loaded', event);
    $state.text($state.text() + '[' + event.item.id + ' loaded] ');
    var imgStr = '<div class="imgItem"> <img src="'+event.item.src+'"></div>';
    $(".imgBox").append(imgStr);
}

function onFileProgress(event) {
    console.log('File progress', event);
}

function onProgress(event) {
    var progress = Math.round(event.loaded * 100);
    console.log('General progress', Math.round(event.loaded) * 100, event);
    $progress.text(progress + '%');
    $progressbar.css({
        'width': progress + '%'
    });
}