import React from "react"
import BlogCard from "../components/BlogCard"

export default function Mega (){
    const posts = [
        {
            id: "1",
            title: "HTML Block of Webdevelopment",
            description: "Explore the of the HTML,An HTML block in web development refers to a container element that holds content on a webpage. It can be used to structure sections of a page, such as headings, paragraphs, images, or forms.",
            date: "2024-11-19",
            imageURL: "/images/html-block.jpeg",
        },
        {
            id: "2",
            title: "Machine Learning Basics",
            description: "Machine learning is a subset of artificial intelligence that enables systems to learn from data and improve over time without explicit programming. It involves algorithms that identify patterns, make predictions, and solve problems.",
            date: "2024-11-20",
            imageURL: "/images/learn-basic.jpeg",
        },
        {
            id: "3",
            title: "Deep Learning Explained",
            description: "Deep learning is a subset of machine learning that uses neural networks with many layers to analyze data. It excels tasks like image recognition, speech processing, natural language understanding, learning patterns through vast amounts of data.",
            date: "2024-11-21",
            imageURL: "/images/deep learn.jpeg",
        },
        {
            id: "4",
            title: "Natural Language processing",
            description: "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and human language. It enables machines to understand, interpret, facilitating tasks like translation, sentiment analysis, and chatbot development.",
            date: "2024-11-22",
            imageURL: "/images/proceesing.jpeg",
        },
        {
            id: "5",
            title: "AI in Healthcare",
            description: "AI in healthcare involves using machine learning algorithms and data analysis to improve patient care. It aids in diagnosing diseases, predicting outcomes, automating administrative tasks, ultimately enhancing efficiency, accuracy, and accessibility in the healthcare industry.",
            date: "2024-11-23",
            imageURL: "/images/ai-image.jpeg",
        },
        {
            id: "6",
            title: "Data Preprocessing Techniques",
            description: "Data preprocessing involves cleaning and transforming raw data for analysis. Key techniques include handling missing values, normalizing, encoding categorical variables, and removing outliers, ensuring data is structured and ready for machine learning models.",
            date: "2024-11-24",
            imageURL: "/images/data-porcessing.jpeg",
        },
        {
            id: "7",
            title: "Building your First Neural Network",
            description: "Follow a step by step guide to create a neural network involves defining layers, selecting an activation function, and training the model using labeled data. This process helps the network learn patterns to make predictions or classifications.",
            date: "2024-11-25",
            imageURL: "/images/first-network.jpeg",
        },
        {
            id: "8",
            title: "Ethics in AI",
            description: "Ethics in AI involves addressing challenges like bias, fairness, transparency, and accountability. It focuses on ensuring AI systems are designed and used responsibly, safeguarding privacy, promoting equality, and minimizing negative societal impacts while advancing technology.",
            date: "2024-11-26",
            imageURL: "/images/ethics-ai.jpeg",
        },
        {
            id: "9",
            title: "Web Development Trends in 2024",
            description: "Web development trends in 2024 include the rise of AI-powered websites, advanced web accessibility features, serverless architecture, progressive web apps (PWAs), enhanced user experiences through microinteractions, and the increasing use of 3D visuals and animations.",
            date: "2024-11-27",
            imageURL: "/images/trends-2024.jpeg",
        },
        {
            id: "10",
            title: "Introducing to Blockchain Technology",
            description: "Blockchain technology is a decentralized, secure system that records transactions across multiple computers. It ensures transparency, immutability, and trust without a central authority, making it ideal for cryptocurrencies, supply chains, and secure data sharing.",
            date: "2024-11-28",
            imageURL: "/images/blockchain.jpeg",
        },
        {
            id: "11",
            title: "The Future of Quantum Computing",
            description: "The future of quantum computing holds the potential to revolutionize industries by solving complex problems beyond classical computers' capabilities. It promises breakthroughs in fields like cryptography, drug discovery, AI, and optimization, transforming technology and innovation.",
            date: "2024-11-29",
            imageURL: "/images/quantum-computing.jpeg",
        },
        {
            id: "12",
            title: "Cybersecurity: New Features and Elements",
            description: "Cybersecurity is evolving with advanced features like AI-driven threat detection, zero-trust architecture, enhanced encryption, multi-factor authentication, and automated response systems, aiming to protect data, prevent breaches, and ensure privacy in digital environments.",
            date: "2024-11-30",
            imageURL: "/images/feature-element.jpeg",
        },
        {
            id: "13",
            title: "The Rise of Augmented Reality",
            description: "Augmented Reality (AR) is transforming industries by blending digital content with the real world. It enhances user experiences in gaming, education, retail, and healthcare, offering immersive interactions and improving productivity and creativity across various sectors.",
            date: "2024-12-01",
            imageURL: "/images/rise-ar.jpeg",
        },
        {
            id: "14",
            title: "Effective Communication in Remote Teams",
            description: "Effective communication in remote teams relies on clear tools, regular check-ins, and strong collaboration. Utilizing platforms for video calls, messaging, and file sharing ensures alignment, fosters trust, and boosts productivity in geographically dispersed teams.",
            date: "2024-12-02",
            imageURL: "/images/remote-teams.jpeg",
        },
        {
            id: "15",
            title: "Sustainable Tech Innovations",
            description: "Sustainable tech innovations focus on eco-friendly solutions, such as renewable energy, energy-efficient devices, and sustainable materials. These technologies aim to reduce environmental impact, promote green practices, and support a cleaner, more sustainable future for industries.",
            date: "2024-12-03",
            imageURL: "/images/sustainble.jpeg",
        },
    ]
    return(
        <div className="my-8">
            <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring the World of AI and Technology</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div className="fade-in" key={post.id}>
                        <div className="blog-card">
                            <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};