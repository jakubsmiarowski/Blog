export default (content, maxLength) => {
    if (content.length < 0) return 'Error';
    if (content.length <= maxLength) return content;
    return content.length.substr(0, content.lastIndexOf(' ', maxLength))  +  "...";
}

