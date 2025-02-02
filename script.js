// Default Markdown text to load in the editor initially
const defaultMarkdown = `# Welcome to the Markdown Previewer!

## This is a subheading (H2)

Here is a link to [freeCodeCamp](https://www.freecodecamp.org)

Inline code: \`console.log('Hello World')\`

\`\`\`
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
  - Nested list item 1

> Blockquote: "This is a quote"

![Image](https://via.placeholder.com/150)

**Bold Text**`;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the editor with the default markdown content
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    editor.value = defaultMarkdown;  // Set the default text in the editor

    // Function to update the preview area as the user types
    function updatePreview() {
        // Convert markdown to HTML using Marked.js
        preview.innerHTML = marked(editor.value);
    }

    // Add event listener to update the preview in real-time
    editor.addEventListener('input', updatePreview);

    // Initialize preview with default content on page load
    updatePreview();
});
