let mouseEvent = null

document.addEventListener('selectstart', () => {
  mouseEvent = document.addEventListener('mouseup', () => {
    document.removeEventListener('mouseup', mouseEvent)
    const {
      anchorNode,
      extentNode,
      anchorOffset,
      extentOffset
    } = document.getSelection()
    const from = Math.min(anchorOffset, extentOffset)
    const to = Math.max(extentOffset, anchorOffset)
    if (to - from > 0 && anchorNode === extentNode) {
      const text = anchorNode.wholeText
      const highlightedText = anchorNode.wholeText.slice(anchorOffset, extentOffset)
      console.log(highlightedText, anchorOffset, extentOffset, anchorNode)
      anchorNode.parentElement.innerHTML = `<span>${text.slice(0, anchorOffset)}</span>`
        + `<span style="background: yellow">${highlightedText}</span>`
        + `<span>${text.slice(extentOffset)}</span>`
    }
  })
})
