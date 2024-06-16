const fileFormat = (url = "") => {
    const fileExtension = url.split('.').pop()

    if (fileExtension == 'mp4' || fileExtension == 'ogg' || fileExtension == 'webm') {
        return 'video'
    }
    if (fileExtension == 'mp3' || fileExtension == 'mav') {
        return 'audio'
    }
    if (fileExtension == 'png' || fileExtension == 'jpeg' || fileExtension == 'jpg' || fileExtension == 'gif')
        return 'image'
    return 'fle'
}

const transformImage = (url = "", width) => { }


export { fileFormat , transformImage}