// Create a mutation observer instance
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      // Check if new nodes have been added
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(function(node) {
          // Check if the node is a <p> element
          if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'P') {
            const paragraph = node;
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
      }
    });
  });
  
  // Observe changes in the notes section
  const notesSection = document.getElementById('notesSection');
  observer.observe(notesSection, { childList: true, subtree: true });