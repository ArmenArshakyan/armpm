const paragraphs = document.getElementsByTagName('p');

// Iterate over the <p> elements
for (const paragraph of paragraphs) {
  // Get the text content of the paragraph
  const text = paragraph.textContent;

  // Check if the text starts with more than three dashes
  if (text.startsWith('---')) {
    // Create a new <h2> element
    const heading = document.createElement('h2');

    // Copy the content from the <p> element to the <h2> element
    heading.textContent = text;

    // Replace the <p> element with the new <h2> element
    paragraph.parentNode.replaceChild(heading, paragraph);
  }
}