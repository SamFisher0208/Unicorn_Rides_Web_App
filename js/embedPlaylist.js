document
  .getElementById("playlistForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const playlistUrl = document.getElementById("playlistUrl").value;
    updatePlaylistEmbed(playlistUrl);
  });

function updatePlaylistEmbed(playlistUrl) {
  const spotifyIframe = document.getElementById("spotifyIframe");
  const embeddedUrl = `https://open.spotify.com/embed/playlist/${getPlaylistIdFromUrl(
    playlistUrl
  )}?utm_source=generator`;
  spotifyIframe.src = embeddedUrl;
}

function getPlaylistIdFromUrl(url) {
  const match = url.match(/playlist\/(\w+)/);
  if (match) {
    return match[1];
  }
  return "";
}
