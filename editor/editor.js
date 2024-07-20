document.addEventListener('DOMContentLoaded', (event) => {
    // Get references to the button and container
    const button = document.getElementById('add-text-box-button');
    const container = document.getElementById('text-box-container');
    const submitButton = document.getElementById('generate-button');

    // Counter for unique ID (optional)
    let counter = 0;

    // Function to create and add a new text box
    function addTextBox() {
        counter++; // Increment counter for unique IDs

        // Create a new input element for the title
        const newTitle = document.createElement('input');
        newTitle.id = `title-box-${counter}`;
        newTitle.placeholder = `Title Box ${counter}`;
        newTitle.type = 'text';

        // Create a new textarea element for the content
        const newTextBox = document.createElement('textarea');
        newTextBox.id = `text-box-${counter}`;
        newTextBox.placeholder = `Text Box ${counter}`;

        // Append the new input and textarea to the container
        container.appendChild(newTitle);
        container.appendChild(newTextBox);
    }

    // Function to generate the combined HTML
    function generate() {
        // Get the value from the title box
        const title = document.getElementById('titlebox').value;

        // Get the value from the content box
        const content = document.getElementById('contentbox').value;

        // Create the initial HTML structure
        let combinedHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h1>${title}</h1>
    <p>${content}</p>
`;

        // Loop through all dynamically created text boxes and titles
        for (let i = 1; i <= counter; i++) {
            const titleBox = document.getElementById(`title-box-${i}`);
            const textBox = document.getElementById(`text-box-${i}`);
            if (titleBox && textBox) {
                combinedHTML += `
    <hr>
    <h2>${titleBox.value}</h2>
    <p>${textBox.value}</p>
`;
            }
        }

        // Close the HTML structure
        combinedHTML += `
</body>
</html>
`;

        // Create a blob from the combined HTML
        const blob = new Blob([combinedHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // Create a link to download the HTML file
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated.html';
        a.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
    }

    // Add event listener to the button
    button.addEventListener('click', addTextBox);
    submitButton.addEventListener('click', generate);
});
