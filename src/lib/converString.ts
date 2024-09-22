export default function stringToOnlyAlphabetic(text: string) {

    const newText = text.split(" ")
    switch (newText.length) {
        case 1:
            return newText[0]

        case 2:
            if (newText[1].match(/[a-zA-Z]/)) {
                return newText[0] + " " + newText[1]
            }
            return newText[0]
        case 3:
            if (newText[2].match(/[a-zA-Z]/)) {
                return newText[0] + " " + newText[1] + " " + newText[2];
            }
            return newText[0] + " " + newText[1]
        default:
            if (newText[3].match(/[a-zA-Z]/)) {
                return newText[0] + " " + newText[1] + " " + newText[2] + " " + newText[3];
            }
    }


}