# Tsundoku Studio - Headless CMS

Tsundoku Studio is a custom-built headless CMS created with Sanity.io. It allows me (or any collaborator) to create structured content—such as blog articles, videos, or events—and deliver that content to my frontend website, Tsundoku Blog, via API.

![Screenshot 2025-02-23 at 17-14-59 We Just Released Tsundoku ! Tsundoku-studio](https://github.com/user-attachments/assets/2faf82d5-d562-4e31-920e-e99292d0e192)

---

## 🛠 Tech Stack

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

<img width="1050" alt="image" src="https://github.com/user-attachments/assets/20de25f0-0697-4e8c-86b7-52b6a9b08210" />

---

## 🧠 Challenges & Learning

- Understanding Sanity’s schema design, preview customization, and structure builder API  
- Querying nested block content with GROQ to allow for article body search indexing  
- Creating dynamic filters using GROQ projections, joins, and relational mapping  
- Optimizing studio UX for content creators (grouping, validation, live previews)  

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
