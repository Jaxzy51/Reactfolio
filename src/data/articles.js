import React from "react";

function article_1() {
	return {
		date: "5 May 2025",
		title: "Security Isn't Just for Specialists: Why Every Developer Should Think Like a Hacker",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
  			.article-content {
   		 	display: flex;
    		flex-direction: column;
    		align-items: center;
  		}

  		.randImage {
    	align-self: center;
    	border-radius: 12px;
    	max-width: 90%;
    	margin-top: 2rem;
    	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  		}
		`,
		body: (
			<React.Fragment>
  <div className="article-content">
    <div className="paragraph">
      In today's tech industry, security is often treated as a specialized task — the domain of a select few engineers tucked away reviewing audit logs and hardening servers. But in reality, security should be a shared responsibility across every role in software development. Whether you're writing frontend code, querying a database, or simply handling user input, you're contributing to the broader cybersecurity landscape.
    </div>

    <div className="paragraph">
      I came to this realization while developing a full-stack web application for a client. At first, my focus was purely on crafting a clean UI, ensuring responsiveness, and optimizing performance. But once I reached the stage of implementing login authentication, input validation, and secure database access, I realized the stakes were higher — I wasn't just building features; I was building trust.
    </div>

    <div className="paragraph">
      That experience changed how I approached development. Security wasn't something to bolt on at the end — it became a daily practice. I began consistently sanitizing inputs, using token-based authentication, securing API routes, and integrating tools like SonarQube to proactively catch vulnerabilities. These weren’t just tasks to check off — they became part of a mindset shift in how I wrote and reviewed code.
    </div>

    <div className="paragraph">
      One of the most important changes developers can make is to stop thinking of security as someone else’s job. We must take ownership of the data we process, the user experiences we design, and the systems we build. When every team member views themselves as part of the security chain, the result isn’t just safer applications — it’s a stronger, more responsible team. Security isn’t just for specialists — it’s everyone’s responsibility.
    </div>

    <img
      src="https://www.shutterstock.com/image-photo/project-manager-computer-science-engineer-600nw-1798109056.jpg"
      alt="Security-themed illustration"
      className="randImage"
    />
  </div>
</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2 June 2025",
		title: "AI Can Code—So What Makes a Human Developer Valuable?",
		description:
			"AI can now write code—but what does that mean for the role of human developers? Explore how empathy, context, and creative thinking remain irreplaceable.",
		style: ``,
		keywords: [
			"AI coding",
			"human developers",
			"developer value",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Artificial intelligence can now write code, refactor methods, and even construct entire components in seconds. GitHub Copilot and ChatGPT are such tools that have transformed how developers work — increasing productivity, eliminating grunt work, and providing instant suggestions. But as someone who has worked on actual-world full-stack applications, I know from personal experience that writing code is not all that coding is about.
					</div>

					<div className="paragraph">
						A developer's true value comes in the way we comprehend context. AI can propose syntax and generate boilerplate, but is not aware of why a user is upset with a checkout process, how to weigh the tradeoff between performance and accessibility, or how to resist fuzzy product requirements. These are judgment calls — ones that need human empathy, product nuance, and communication skills.
					</div>

					<div className="paragraph">
						In my own work, I've utilized AI to automate activities such as writing form validation logic or investigating new ways of handling APIs. But the output of AI is always a rough draft. I've always needed to review edge cases, get it in sync with client requirements, and ensure it actually works in the user flow. It's a tool — not a substitute.
					</div>

					<div className="paragraph">
						Where humans excel is in ambiguity. We are able to pose questions to the AI that it didn’t know to. We are able to listen, learn, and infuse moral awareness into choices that affect living persons. Not only do human developers write code — we get to form the product experience, broker between teams, and feel a sense of ownership.
					</div>

					<div className="paragraph">
						Yes, sure, AI is powerful — but it never replaces creativity, intuition, and accountability. Being a great developer is not about how fast you can code — it’s about how well you can think. And neither can any AI automate.
					</div>
					
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
