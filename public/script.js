const socket = io("/");

const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;

var peer = new Peer(undefined, {
  path: "/peerjs",
  host: "/",
  port: "443",
});

let myVideoStream;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

    peer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      /* console.log("video", video); */
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    socket.on("user-connected", (userId) => {
      setTimeout(function () {
        connectToNewUser(userId, stream);
      }, 1000);
    });
    let text = $("input");

    $("html").keydown((e) => {
      if (e.which == 13 && text.val().length !== 0) {
        socket.emit("message", text.val());
        text.val("");
      }
    });

    socket.on("createMessage", (message) => {
      $(".messages").append(
        `<li class="message"><b>user</b><br/>${message}</li>`
      );
      scrollToBottom();
    });
  });

peer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

const connectToNewUser = (userId, stream) => {
  const call = peer.call(userId, stream);

  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideoStream(video, userVideoStream);
  });
};

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};

const scrollToBottom = () => {
  var d = $(".main_chat_window");
  d.scrollTop(d.prop("scrollHeight"));
};

//Mute our video
const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
};
const setMuteButton = () => {
  const html = `
    <i class="fas fa-microphone"></i>
    <span>Mute</span>
  `;
  document.querySelector(".main_mute_button").innerHTML = html;
};

const setUnmuteButton = () => {
  const html = `
    <i class="unmute fas fa-microphone-slash"></i>
    <span>Unmute</span>
  `;
  document.querySelector(".main_mute_button").innerHTML = html;
};

//Stop our video
const playStop = () => {
  /* console.log("object"); */
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo();
  } else {
    setStopVideo();
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
};

const setStopVideo = () => {
  const html = `
    <i class="fas fa-video"></i>
    <span>Stop Video</span>
  `;
  document.querySelector(".main__video_button").innerHTML = html;
};

const setPlayVideo = () => {
  const html = `
  <i class="stop fas fa-video-slash"></i>
    <span>Play Video</span>
  `;
  document.querySelector(".main__video_button").innerHTML = html;
};

//chat window toggle hide/unhide
/* $(document).delegate("#chat-btn", "click", function () {
  $(".main_left").toggleClass("active", 1000);
  $(".main_right").toggleClass("active", 1000);
}); */

//display room url
var roomUrl = window.location.href;
const html = `<h6>Room id: <span>${roomUrl}</span></h6>`;
document.querySelector(".room_url").innerHTML = html;

const copyText = document.querySelector(".room_url span");
copyText.onclick = function () {
  document.execCommand("copy");
};
copyText.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", copyText.textContent);
    alert("Room id copied!!!");
  }
});

//chat window toggle hide/unhide
function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
