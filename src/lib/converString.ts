export default function stringToOnlyAlphabetic(text: string) {

    const newText = text.replace(/[^a-zA-Z0-9 ]/g, " ")

    return newText

}