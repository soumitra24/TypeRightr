// Note: If this file is used by your React frontend, you might need two versions
// or use a build tool that handles module differences.
// This version is specifically for the Node.js server (CommonJS).

const MultiPlayerParagraphs = [
    "sarah, a young entrepreneur, was browsing a thrift store when a wornout leatherbound notebook caught her eye. It was priced at a mere $5. Intrigued, she bought it and discovered pages filled with business ideas from the 1920s. Inspired, she adapted one idea to the modern market, launching a successful online vintage clothing store. That $5 notebook became the catalyst for a multimillion dollar business, proving that sometimes, the most valuable investments come in unexpected packages.",
    "quotation marks do exactly what their name suggests they quote! They enclose the exact words someone spoke or wrote, ensuring accuracy and attribution. Whether it's dialogue in a novel, a quote in a research paper, or a snippet of song lyrics, quotation marks give credit where it's due and add authenticity to your writing.",
    "a virtual assistant typically abbreviated to VA is generally selfemployed and provides professional administrative, technical, or creative assistance to clients remotely from a home office.",
    "the company you keep can significantly influence your self confidence, motivation, and overall well being. Choose to surround yourself with positive, encouraging individuals who believe in your dreams and support your aspirations. These people will lift you, challenge you to grow, and celebrate your victories with you. They will be your personal cheerleading squad, reminding you of your worth and potential even when you doubt yourself. Just as negative people can drain your energy, positive people can recharge your spirit and inspire you to reach new heights.",
    "In 1990, a Fortune 500 company launched a mentorship program aimed at developing the next generation of leaders. The program paired high-potential employees with experienced executives who provided guidance, support, and opportunities for growth. Over the next 30 years, the program produced a remarkable track record of success. 80% of mentees reported significant career advancement within 5 years of completing the program. Many went on to become senior leaders within the company, and some even rose to the C-suite. The mentorship program not only benefited individual employees but also had a positive impact on the company's culture and bottom line. The program fostered a sense of community and collaboration, improved employee engagement and retention, and contributed to a more diverse and inclusive leadership team. The company's investment in mentorship paid off in countless ways, demonstrating the long-term benefits of developing talent and fostering a culture of learning and growth.",
    "The way you perceive the world and yourself has a profound impact on your reality. Your thoughts are like seeds, and the ones you nurture will ultimately blossom into your life experiences. Train your mind to focus on the positive aspects of yourself, your accomplishments, and the possibilities that lie ahead. Practice gratitude daily, affirming your worth and visualizing your success. By cultivating a positive mental landscape, you'll attract more positivity, abundance, and opportunities into your life.",
    "In the hustle and bustle of daily life, it's easy to neglect our own well-being. But remember, you can't pour from an empty cup. Taking care of your physical and mental health is crucial for maintaining high self-confidence, motivation, and overall productivity. Make time for activities that nourish your mind, body, and spirit. Prioritize sleep, exercise, and a balanced diet. Engage in hobbies that bring you joy and relaxation. Remember, self-care isn't selfish; it's an investment in your long-term happiness and success."
];

// Function to get a random paragraph
const getRandomParagraph = () => {
    if (!MultiPlayerParagraphs || MultiPlayerParagraphs.length === 0) {
        return "Default paragraph if loading fails."; // Fallback
    }
    const randomIndex = Math.floor(Math.random() * MultiPlayerParagraphs.length);
    return MultiPlayerParagraphs[randomIndex];
};

// Export the function using module.exports for server.cjs
module.exports = { getRandomParagraph };

// If you ALSO need this for your React frontend (which uses ES Modules),
// you might keep the original export default OR use a different approach.
// For simplicity with the server, this module.exports is needed.
// export default Paragraphs; // Keep this commented out or remove for server usage