let mouseEvent = null

// document.addEventListener('selectstart', () => {
//   mouseEvent = document.addEventListener('mouseup', () => {
//     document.removeEventListener('mouseup', mouseEvent)
//     const {
//       anchorNode,
//       extentNode,
//       anchorOffset,
//       extentOffset
//     } = document.getSelection()
//     const from = Math.min(anchorOffset, extentOffset)
//     const to = Math.max(extentOffset, anchorOffset)
//     if (to - from > 0 && anchorNode === extentNode) {
//       const highlightedText = anchorNode.wholeText.slice(from, to)
//       anchorNode.parentElement.innerHTML = `<span>${text.slice(0, from)}</span>`
//         + `<span style="background: yellow">${highlightedText}</span>`
//         + `<span>${text.slice(to)}</span>`
//     }
//   })
// })

function replacePart(range, el, isStart, isEnd) {
    el.innerHTML =
      (isStart ? '<span>' + el.innerText.slice(0, range.startOffset) + '</span>' : '') +
      '<span style="background: yellow">' +
      el.innerText.slice(
        isStart ? range.startOffset : 0,
        isEnd ? range.endOffset : undefined
      ) +
      '</span>' +
      (isEnd ? '<span>' + el.innerText.slice(range.endOffset) + '</span>' : '')
}


document.addEventListener('selectstart', () => {
  mouseEvent = document.addEventListener('mouseup', () => {
    document.removeEventListener('mouseup', mouseEvent)
    const sel = document.getSelection()
    const { anchorOffset, extentOffset } = sel
    const range = sel.getRangeAt(0)
    const from = Math.min(anchorOffset, extentOffset)
    const to = Math.max(extentOffset, anchorOffset)

    if (to - from > 0) {
      const { startContainer, endContainer } = range
      const isHighlighted = startContainer.parentElement.style.background === 'yellow'
      if (isHighlighted) {
        startContainer.parentElement.outerHTML =
          startContainer.parentElement.innerText
      } else {
        const onlyMatch = startContainer === endContainer
  
        replacePart(range, startContainer.parentElement, true, onlyMatch)
        let lastNode = startContainer.parentElement
        while (lastNode.nextSibling && lastNode !== endContainer) {
          lastNode = lastNode.nextSibling
          replacePart(range, lastNode, false, false)
        }
        if (!onlyMatch) replacePart(range, endContainer.parentElement, false, true)
      }
    }
  })
})
