document.addEventListener('DOMContentLoaded', () => {
    const messages = document.getElementById('messages');
    const input = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', async () => {
        const userMessage = input.value.trim();
        if (!userMessage) return;

        // Display user message
        const userMsgElement = document.createElement('p');
        userMsgElement.textContent = `You: ${userMessage}`;
        messages.appendChild(userMsgElement);

        input.value = '';

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage })
            });

            if (!response.ok) {
                throw new Error('Failed to get a response from the server');
            }

            const data = await response.json();
            const aiReply = document.createElement('p');
            aiReply.textContent = `AI: ${data.reply}`;
            messages.appendChild(aiReply);
        } catch (error) {
            const errorElement = document.createElement('p');
            errorElement.textContent = `Error: ${error.message}`;
            messages.appendChild(errorElement);
        }
    });
});

