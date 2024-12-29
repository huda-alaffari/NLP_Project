const axios = require("axios");
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";

const analyze = async (url, key) => {
    try {
        // Construct API URL
        const apiUrl = `${meaningCloud}?key=${key}&url=${url}&lang=en`;

        // Make API request
        const response = await axios.get(apiUrl);

        const { code, msg } = response.data.status;

        // Handle specific status codes
        if (code === "100") {
            return handleError(code, "Please, enter a valid URL.");
        } else if (code === "212") {
            return handleError(code, msg);
        }

        // Handle successful response
        return handleSuccess(response.data, code);
    } catch (error) {
        // Catch network or unexpected errors
        return handleError("500", "An error occurred while connecting to the API.");
    }
};

const handleError = (code, msg) => {
    return {
        code,
        msg,
    };
};

const handleSuccess = (data, code) => {
    // Destructure response data
    const { agreement, subjectivity, confidence, score_tag, irony } = data;

    return {
        sample: {
            agreement,
            subjectivity,
            confidence,
            score_tag,
            irony,
        },
        code,
    };
};

module.exports = { analyze };
