function humanReadable (seconds) {

    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor(seconds/60 - (hours*60));
    const sec = seconds - (hours*3600) - (minutes*60);

    let res = [hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), sec.toString().padStart(2, '0')].join(':');

    return res;

    // return `${hours}:${minutes}:${sec}`;
}

console.log(humanReadable(0));