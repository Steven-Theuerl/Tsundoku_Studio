# Tsundoku Studio - Headless CMS

Tsundoku Studio is a custom-built headless CMS created with Sanity.io. It allows me (or any collaborator) to create structured content—such as blog articles, videos, or events—and deliver that content to my frontend website, Tsundoku Blog, via API.

---

## 🖠 Tech Stack

- **CMS:** Sanity.io  
- **Language:** TypeScript  
- **Query Language:** GROQ  
- **UI Customization:** Sanity Studio (with Structure Builder)  
- **Data Delivery:** Content Lake via API  
- **Form Enhancements:** Custom Fields, Validation, Grouping  

---

## ⚙️ Setup / Installation

1. Install Sanity CLI globally:
   ```bash
   npm install -g sanity
   ```
2. Create a new Sanity project:
   ```bash
   sanity init --project tsundoku-studio
   ```
3. Copy in the custom schema files from this repo.  
4. Start the Studio locally:
   ```bash
   npm run dev
   ```
5. (Optional) Deploy with `sanity deploy` for live collaboration.

---

## ✨ Features

- Custom schema types for articles, videos, and events  
- Multiple BodyText and BodyImage blocks per article with optional captions  
- Image hotspot support for precise focal point control  
- Custom GROQ queries for filtering related articles dynamically  
- Full structure builder integration for filtered lists (e.g., Upcoming vs Past events)  
- Studio theming and UI grouping (Fieldsets + Groups) for optimal editing UX  

---

## 📸 Screenshots & GIFs

<img width="1694" alt="CMS hero " src="https://github.com/user-attachments/assets/f49ebf68-a1b9-4bd1-b5e4-b6abc32a4596" />

---

## 🧠 Challenges & Learning

- Understanding Sanity’s schema design, preview customization, and structure builder API  
- Querying nested block content with GROQ to allow for article body search indexing  
- Creating dynamic filters using GROQ projections, joins, and relational mapping  
- Optimizing studio UX for content creators (grouping, validation, live previews)  
- Fixing **preview content leaking into production**: Initially struggled with Sanity’s preview mode bleeding into non-preview routes. Solved by restructuring the logic to only enable draft mode for `/api/preview` routes and adding a cookie-based system to persist preview state safely. This prevented accidental draft data exposure and now guarantees that only `/api/preview` routes or explicit `?preview=true` query params can enable draft content.
- Rewrote Sanity preview flow and routing logic to ensure that both localhost and production (tsundoku.blog) enforce this behavior consistently.
- **Studio Preview Enhancement:** I added a preview window directly into the Sanity Studio UI for contributors. While I'm comfortable juggling multiple windows across three screens, I knew that might not be the case for everyone I invited to create content. This studio-side preview made it easier for less technical users to see their updates reflected in real-time—without needing to switch tabs or deploy anything. It helped reduce confusion, improved workflow speed, and made Tsundoku more usable for creative collaborators.

---

## 📈 Future Improvements

- Add additional document types like video posts, timelines, and project showcases  
- Expand role-based access control for multi-user teams  
- Integrate image CDN transformation presets for social sharing  

---

## ⚠️ Legal Notice

This is a public-facing portfolio repository intended for informational and showcase purposes only.  
All content, schema files, structure builder logic, and GROQ queries are original works by **Steven Theuerl**.

You are **NOT** permitted to:
- Copy, clone, modify, or reuse any part of this project.
- Use this CMS configuration or content model in your own product or service.
- Claim ownership or authorship of any part of this work.

Unauthorized use or imitation, in whole or in part, will be treated as intellectual property theft and may result in legal action.

If you're interested in collaboration or licensing, please contact me directly.

**© 2025 Steven Theuerl. All rights reserved.**
