function slugify(str) {
    // convert title to lowercase
    str = str.toLowerCase()

    // replace spaces with -
    str = str.replace(/\s+/g, '-')

    // replace & with "-and-"
    str = str.replace(/&/g, '-and-')

    // output the result
    return str
}

export { slugify }
