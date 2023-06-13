// Add an event listener to the document to handle dynamically added <p> elements
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      // Check if the clicked element is a <p> element
      if (event.target.tagName === 'P') {
        const paragraph = event.target;
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
    });
  });