// Function to check and transform <p> elements into <h2> elements
function transformParagraphsToHeadings() {
    const paragraphs = document.querySelectorAll('#notesSection p');
  
    paragraphs.forEach((paragraph) => {
      const text = paragraph.textContent.trim();
  
      if (text.startsWith('---')) {
        const heading = document.createElement('h2');
        heading.textContent = text;
  
        paragraph.parentNode.replaceChild(heading, paragraph);
      }
    });
  }
  
  // Mutation observer to monitor changes in the notes section
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'P') {
            transformParagraphsToHeadings();
          }
        });
      }
    });
  });
  
  // Observe changes in the notes section
  const notesSection = document.getElementById('notesSection');
  observer.observe(notesSection, { childList: true, subtree: true });
  
  // Initial transformation of paragraphs to headings
  transformParagraphsToHeadings();