# AI Customer Support Chatbot

## Overview
This project demonstrates the development of an AI-powered customer support chatbot using **Next.js** and the **OpenAI API**. The chatbot is designed to intelligently handle customer queries, provide support, and enhance user experience.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Levels of Implementation](#levels-of-implementation)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Level 1**: Basic chatbot with hardcoded responses.
- **Level 2**: Intelligent responses using OpenAI's generative AI models.
- **Level 3**: Web-app deployed on AWS EC2 servers.
- **Level 3.5**: Support for LLM-based responses through AWS Bedrock API.
- **Level 4**: Retrieval-Augmented Generation (RAG) for knowledge-based responses.
- **Level 4.5**: LLM orchestration pattern with router and task-specific models for better contextual understanding.

## Technologies
- **Next.js**: A React framework for server-side rendering and building modern web apps.
- **OpenAI API**: For accessing OpenAI’s generative AI models.
- **AWS EC2**: For cloud deployment.
- **AWS Bedrock API**: For integration with large language models (LLMs).
- **RAG (Retrieval-Augmented Generation)**: Enhances the chatbot by retrieving relevant data from a knowledge base.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- OpenAI API key
- AWS account with EC2 setup
- Basic knowledge of Next.js and server-side rendering

## Setup and Installation

1. **Clone the repository:**
   bash
   git clone https://github.com/yourusername/ai-customer-support-chatbot.git
   cd ai-customer-support-chatbot
   

2. **Install dependencies:**
  bash npm install


3. **Set up environment variables:**

   Create a `.env.local` file at the root of your project and add the following:
   bash
   OPENAI_API_KEY=your-openai-api-key
   AWS_ACCESS_KEY_ID=your-aws-access-key-id
   AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
   

4. **Run the development server:**
   bash
   npm run dev


   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

/ai-customer-support-chatbot
  ├── /components     # UI components
  ├── /pages          # Next.js pages
  ├── /api            # API routes for chatbot
  ├── /utils          # Utility functions and helpers
  ├── /public         # Static assets
  ├── package.json    # Node dependencies and scripts
  └── README.md       # Project documentation


## Usage
- Once the application is running, users can interact with the chatbot by asking questions and receiving AI-generated responses in real-time.
- The chatbot retrieves answers through OpenAI's API and intelligently handles requests based on implemented features.

## Deployment

1. **Deploy to AWS EC2:**
   - Create an EC2 instance through your AWS account.
   - Configure the instance for hosting a Node.js application.
   - Deploy your project to the instance and configure a reverse proxy for the Next.js app.

2. **Deployment on Vercel:**
   - Alternatively, the project can be deployed on Vercel for easy hosting and continuous integration.
   - Simply push the project to GitHub and connect the repository to Vercel.

## Levels of Implementation
This project follows a structured development plan:
1. **Level 1**: Create a chatbot with hardcoded responses for basic interactions.
2. **Level 2**: Leverage the OpenAI API to generate intelligent responses.
3. **Level 3**: Deploy the chatbot to AWS EC2.
4. **Level 3.5**: Respond using LLMs via AWS Bedrock API.
5. **Level 4**: Implement Retrieval-Augmented Generation (RAG) to generate responses based on external knowledge bases.
6. **Level 4.5**: Create a flexible orchestration pattern using task-specific LLMs.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.
