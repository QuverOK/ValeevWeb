export function cutText(text, length) {
  let textArr = text.split(" ")
  if (textArr.length > length) {
    let removedText = textArr.splice(0, length)
    let lastWordArr = removedText[removedText.length - 1].split("")

    if (
      lastWordArr[lastWordArr.length - 1] === "." ||
      lastWordArr[lastWordArr.length - 1] === ","
    ) {
      lastWordArr[lastWordArr.length - 1] = ""
      removedText[removedText.length - 1] = lastWordArr.join("")
    }
    removedText[removedText.length - 1] += "..."

    return removedText.join(" ")
  }

  return text
}
