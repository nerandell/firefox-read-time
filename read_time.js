const DEFAULT_READ_SPEED_WORDS_PER_MINUTE = 200;

function successCallback(result) {
    if (isNaN(parseInt(result.read_speed))) {
        renderReadTimeWidget(DEFAULT_READ_SPEED_WORDS_PER_MINUTE);
    } else {
        renderReadTimeWidget(result.read_speed);
    }
}

function failureCallback(error) {
    console.error("Error retrieving value. Using default value" + error);
}

// TODO: Render the widget correctly
function renderReadTimeWidget(wordsPerMinute) {
    let body = retrieveTrimmedBody();
    let read_speed = calculateReadSpeedInMinutes(
        getBodyLength(body), wordsPerMinute
    );
}

// TODO: Retrieve the body
function retrieveTrimmedBody() {
    return "Hello world"
}

function getBodyLength(body) {
    return body.trim().split(/\s+/).length;
}

function calculateReadSpeedInMinutes(bodyLength, wordsPerMinute) {
    return Math.ceil(bodyLength / wordsPerMinute)
}

try {
    browser.storage.local.get("read_speed")
        .then(successCallback, failureCallback);
} catch (error) {
    console.log(error);
}



