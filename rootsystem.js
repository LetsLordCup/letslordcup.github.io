if (getLoadCode() == "discord") {
    window.location.href = "https://discord.com/invite/ZShQsKXFKd";
}
else if (getLoadCode() == "twitch") {
    window.location.href = "https://twitch.com/letslordcup";
}
else if (getLoadCode() == "youtube") {
    window.location.href = "https://www.youtube.com/channel/UC4nSKXf5N_Xekb-zLwG1NXg";
}
else if (getLoadCode() == "mail") {
    window.location.href = "mailto://letslordcup@outlook.com";
}
else if (getLoadCode() == "beta") {
    // Sorry, I had to do it😒
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=DsJQqio6f-9WRWOV";
}
else if (getLoadCode() != "" && getLoadCode() != null) {
    console.log("Invaild Load Code! Couldn't find code " + getLoadCode())
    document.getElementById("error").innerHTML = "Invalid Load Code! Couldn't find code " + getLoadCode()
}

function getLoadCode() {
    root = window.location.href

    loadcode = root.split("?")[1]

    return loadcode

}