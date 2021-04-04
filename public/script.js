const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
console.log(videoGrid);
myVideo.muted=true;

let myVideoStream

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream=>{
myVideoStream =stream;
addVideostream(myVideo, stream);
})

const addVideostream = (video, stream)=>{
    video.srcObject =stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    })
    videoGrid.append(video);
}