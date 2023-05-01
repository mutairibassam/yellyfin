let base_url = "http://localhost:3000"

function updateUrl() {
  const url = document.getElementById("video-id").value;
  if(url === "") {
    document.getElementById("result").innerHTML = "Empty? seriously!"; 
  } else {
    base_url = url
    document.getElementById("result").innerHTML = "url has been updated successfully!"; 
  }
}

function downloadVideo() {
  const videoId = document.getElementById("video-id").value;
  fetch(`${base_url}/download-video?videoId=${videoId}`)
    .then((response) => {
      if (response.ok) {
        document.getElementById("result").innerHTML = "Video downloaded successfully!"
      } else {
        document.getElementById("result").innerHTML ="Failed to download video."
      }
    })
    .catch((error) => {
      document.getElementById("result").innerHTML = error;
      console.error(error);
    });
    document.getElementById("video-id").value = ""
}

function downloadPlaylist() {
  const playlistId = document.getElementById("playlist-id").value;
  fetch(`${base_url}/download-playlist?playlistId=${playlistId}`)
    .then((response) => {
      if (response.ok) {
        document.getElementById("result").innerHTML = "Playlist downloaded successfully!"
      } else {
        document.getElementById("result").innerHTML ="Failed to download playlist."
      }    })
    .catch((error) => {
      document.getElementById("result").innerHTML = error
    });
    document.getElementById("playlist-id").value = ""
}

function downloadChannel() {
  const channelId = document.getElementById("channel-id").value;
  fetch(`${base_url}/download-channel?channelId=${channelId}`)
    .then((response) => {
      if (response.ok) {
        document.getElementById("result").innerHTML = "Channel downloaded successfully!"
      } else {
        document.getElementById("result").innerHTML ="Failed to download Channel."
      }    })
    .catch((error) => {
      document.getElementById("result").innerHTML = error
    });
    document.getElementById("channel-id").value = ""
}
