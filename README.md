<p align="center">
  <a href="" rel="noopener">
<img src="https://github.com/user-attachments/assets/926f0fbb-a9de-474b-916f-540fbae85985" width="200" height="200" alt="Team Unique Logo">


  </a>
</p>
<h3 align="center">Trend360</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> AI Power Automated Research and Trigger Finder.
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

IDEAL:
The ideal scenario is to have a seamless and automated process for gathering and analyzing data from diverse sources, providing marketers with actionable insights to create highly effective, user-centric advertisements. The tool would allow marketers to quickly identify user pain points, analyze competitor strategies, and craft data-driven hooks and CTAs, all within a unified, intuitive interface.

REALITY:
Currently, the process of researching and analyzing user pain points and competitor ads is highly manual, time-consuming, and fragmented. Marketers need to access multiple platforms such as Google, YouTube, Reddit, and Quora individually. Extracting and analyzing data from these platforms requires significant effort, often lacking cohesion and actionable outcomes.

CONSEQUENCES:
If this problem is not resolved, marketers will continue to face inefficiencies, leading to increased time and resource costs. This hinders the ability to create impactful ads quickly and stay competitive. Without proper insights, ad campaigns risk poor engagement, resulting in lost revenue opportunities and diminished ROI.

## 💡 Idea / Solution <a name = "idea"></a>

The proposed solution is ART Finder, a web application designed to automate and streamline the research phase of ad creation. It utilizes advanced data scraping, transcription, and AI-based analysis to provide marketers with actionable insights. Key features include:

Automated Research: Scrapes and analyzes data from platforms like Google, YouTube, Reddit, Quora, and app reviews.
Competitor Analysis: Examines competitor ads to identify high-performing hooks, CTAs, and strategies.
Actionable Insights: Generates recommendations for hooks, CTAs, and user-centric solutions.
Reference Dashboard: Embeds analyzed ads, clickable links, and visualized insights for validation.

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

Dependencies:

Assembly AI: For transcription of audio and video data.
Gemini AI and GPT-4o: For context analysis and generating actionable insights.
Selenium and BeautifulSoup: For web scraping competitor ads and content.
AstraDB: For scalable database management.
Langflow and FastAPI: For managing LLM pipelines and APIs.

Limitations:

Real-Time Data Access: The accuracy of scraped data depends on platform availability and access permissions, which may vary.
Scalability of Analysis: Handling extremely large datasets may require optimization for performance.
Regulatory Constraints: Adhering to data privacy laws like GDPR when scraping and storing data.
Scope of AI Models: Models may occasionally generate insights that require manual verification for accuracy.

## 🚀 Future Scope <a name = "future_scope"></a>

Enhance the system to include real-time ad performance tracking and dynamic updates.
Expand the scraping capabilities to support additional platforms and new data types.
Integrate predictive analytics to forecast ad campaign success based on historical trends.
Add multilingual support for global ad creation.

## 🏁 Getting Started <a name = "getting_started"></a>

Prerequisites

Node.js installed on your machine.
Python (v3.9 or higher) for backend services.
Database credentials for AstraDB setup.
Installing
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-repo/art-finder.git
cd art-finder
Install dependencies for frontend:

bash
Copy
Edit
cd frontend
npm install
Install dependencies for backend:

bash
Copy
Edit
cd backend
pip install -r requirements.txt
Start the frontend and backend servers:

bash
Copy
Edit
npm run dev  # For frontend
uvicorn main:app --reload  # For backend


## 🎈 Usage <a name="usage"></a>

Input a topic and brand guidelines in the dashboard.
Browse through the generated insights, hooks, CTAs, and trends.
Validate findings using embedded media and clickable links.
Download reports or share insights with your team.

## ⛏️ Built With <a name = "tech_stack"></a>

Next.js - Frontend Framework
Shadcn - UI Components
Tailwind CSS - Styling
AstraDB - Database
Langflow and FastAPI - Backend Pipelines and APIs
Assembly and Gemini AI - Transcription and Analysis Models

## ✍️ Authors <a name = "authors"></a>

@abhishek-03103 , @mayankmehta8 , @codewithdinesh , @sshalgar are the contributors for the project.
