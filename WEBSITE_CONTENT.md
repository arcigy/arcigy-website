# Website Content and Requirements Specification

This document contains the complete content, functional requirements, and logical structure of the ArciGy website. Use this as a comprehensive guide to reconstruct the site.

---

## 1. Pages Content

### Index (Home)
**Meta:**
- Title: ArciGy — Business Process Automation | Efficiency Architects
- Description: ArciGy provides intelligent automation solutions to solve core business problems in sales, logistics, and operations. Diagnose your inefficiencies today.

**Hero Section:**
- **Title:** "Last step to business arc."
- **Subtitle:** "We identify and automate core business processes—from lead generation and quality control to logistics and internal operations—to unlock significant growth."
- **CTAs:** "Diagnose & Automate" (Primary), "Explore Solutions" (Secondary)

**Key Problems We Solve:**
1.  **Inefficient Lead Flow:** "Manual lead qualification creates bottlenecks and missed opportunities in your sales pipeline."
2.  **High Operational Costs:** "Repetitive manual tasks consume resources and prevent scaling without proportional cost increases."
3.  **Inconsistent Quality Control:** "Human error in quality checks leads to inconsistencies and customer dissatisfaction."

**Our Process (AI Flow):**
1.  **Audit:** "We map your processes and data flows to uncover bottlenecks."
2.  **Analysis:** "We quantify impact and design the optimal automation approach."
3.  **Implementation:** "We deploy smart systems and integrate across your stack."
4.  **Optimization:** "We monitor, tune and expand automations for compounding ROI."

**Automation Solutions:**
- **Process Audit & Optimization:** Comprehensive analysis of workflows.
- **Intelligent Lead Qualification & Management:** Automated scoring, routing, and nurturing.
- **Supply Chain & Logistics Automation:** Inventory, order processing, delivery coordination.
- **Automated Quality Assurance Checks:** Validation, testing, compliance monitoring.
- **Smart Assistant Integration:** Intelligent agents for customer/internal tasks.

**How It Works:**
1.  **Diagnose:** Analyze processes to identify inefficiencies.
2.  **Design:** Create custom automation tailored to needs.
3.  **Deploy:** Implement and monitor for optimal performance.

**Pricing Plans:**
1.  **Automation Essentials:** Basic sales/ops automation, Audit, Standard integration (max 2), Monthly reports, AI Audits.
2.  **Growth Architect (Most Popular):** Comprehensive automation, Logistics/Sales solution, Priority support, Custom integrations (up to 5), AI Websites/Funnels.
3.  **Enterprise Custom:** Full integration, Dedicated team (24/7), Advanced analytics/BI, Custom security, AI Employees.

**About Preview:** "We are automation architects dedicated to solving systemic business problems through intelligent automation..."

**Contact:** "Get Started Today" form requesting Forename, Surname, Company, Email, Phone, Project Summary.

---

### About Us
**Hero:** "About ArciGy" - "Automation Architects for Predictable Growth"

**Our Story:** Founded to unlock full potential through intelligent automation. We combine deep technical expertise with business acumen to solve core operational challenges.

**Our Mission:** "Automation for Predictable Growth. We believe that every business deserves to operate at peak efficiency."

**Our Values:**
- **Precision:** Meticulously designed solutions.
- **Scalability:** Systems that grow with the business.
- **Innovation:** Forefront of automation technology.
- **Partnership:** Success as an extension of the client's team.

**Our Team:**
- **Automation Architects:** Design/implement systems.
- **Process Engineers:** Analyze/optimize workflows.
- **Business Analysts:** Bridge business/technical gap.

**CTA:** "Join Our Team" - View Open Positions.

---

### Services
**Hero:** "Our Services" - "Comprehensive Business Automation Solutions"

**Categories:**
1.  **Sales & Marketing Automation:** Lead capture, scoring/qualification, routing, follow-up, tracking.
2.  **Operational Efficiency:** Audit, workflow redesign, task automation, integration, monitoring.
3.  **Supply Chain & Logistics:** Inventory monitoring, order processing, delivery tracking, supplier communication, reporting.

**CTA:** "Ready to Automate Your Business?" - Request Consultation.

---

### Pricing
**Hero:** "Pricing Plans" - "Choose the automation solution that fits your business needs"
(Content matches Index Pricing section)

---

### Contact
**Hero:** "Get Started Today" - "Let's discuss how automation can transform your business"
**Form:** Identical to Index contact form.

---

### Privacy Policy & Terms
Standard legal text covering Data Collection (Contact form, Chatbot, Booking), Usage Data, Data Sharing (Service Providers, Legal), Security (GDPR Compliance), User Rights, and standard Terms of Service including Acceptance, Use of Service, User Conduct, and Liability limitations.

---

## 2. Localization (Multi-language Support)

The site supports **English (EN)** and **Slovak (SK)**.
- **Mechanism:** `localStorage` stores preference ('en' or 'sk').
- **Implementation:** `script.js` contains a dictionary (`translations` object) with keys for every text element (nav, hero, services, pricing, etc.).
- **Auto-detection:** Defaults to 'en' but checks `localStorage`.
- **Dynamic Update:** Switching language updates text content instantly and notifies the Calendar widget to update its interface.

---

## 3. Functional Requirements

### A. Intelligent Chatbot ("Tony")
- **Interface:** Floating bubble (bottom-right). Expands to a chat window with header, message area, and input.
- **Behavior:**
    - Greeting message on open.
    - Sends user messages to a webhook: `https://n8n.srv1118451.hstgr.cloud/webhook/1bcefa53-eab4-4f14-92f9-7e9cb3bbbbee`
    - Payload: `{ message, conversationID, history }`
    - Generates/Persists `conversationID` in `sessionStorage`.
    - Stores `chatHistory` in `sessionStorage` to maintain context across page loads.
- **Calendar Integration:**
    - Listens for a JSON response with `"intention": "calendar"`.
    - Triggers `window.arcigyCalendar.open()` upon receiving this intention.

### B. Futuristic Calendar Widget ("Scheduler")
- **Interface:**
    - **Floating Modal:** Fixed size (800x500px), centered or bottom-right positioning.
    - **Minimized State:** Collapses to a "Scheduler" tab (200px wide) at the bottom right (next to chatbot).
    - **Layout:** Two columns - Left (Calendar Grid), Right (Time Slots & Confirmation).
- **Functionality:**
    - **Availability Fetching:** On open, POSTs to `https://n8n.srv1118451.hstgr.cloud/webhook/calendar-availability-check` to get booked slots.
    - **Slot Generation:**
        - **Working Days Only:** (Mon-Fri).
        - **Time Ranges (Bratislava Time):**
            - Morning: 09:00 - 11:00 (slots: 09:00, 09:30, 10:00, 10:30)
            - Afternoon: 14:00 - 16:00 (slots: 14:00, 14:30, 15:00, 15:30)
    - **Booking:**
        - User selects Date -> Time Slot.
        - **Mandatory Checkboxes:** Terms of Service, Privacy Policy.
        - **Confirmation:** POSTs to `https://n8n.srv1118451.hstgr.cloud/webhook/b9a79630-4e84-4482-ad9e-10e266161669` with `{ bookingTime: ISOString, conversationID }`.
- **Localization:** Updates month names, headers, and buttons based on the global language setting.

### C. Forms
- **Contact/Email Forms:**
    - Submit data (Name, Email, Phone, etc.) to specific webhooks.
    - Include `timezone` and `language` in the payload.
    - Validate GDPR consent checkbox.

### D. Visual Effects (Animations)
- **Intersection Observer:** Elements (cards, steps) fade/slide in (`.visible` class) when scrolled into view.
- **Parallax:** Mouse movement triggers subtle parallax on hero background shapes.
- **Intro Overlay:** One-time SVG logo animation sequence on first visit (sessionStorage `introShown`).

---

## 4. Prompt for Reconstruction

**Task:** Recreate the ArciGy website based on the content and functional specifications provided above.

**Requirements:**
1.  **Structure:** Create the HTML files (`index.html`, `about.html`, etc.) with the exact text content and hierarchy defined in Section 1.
2.  **Logic:**
    - Implement `script.js` to handle the Translation Engine (Section 2) and Form Submissions (Section 3C).
    - Implement `chatbot.js` to handle the AI chat interface, session management, and Webhook communication (Section 3A).
    - Implement `calendar.js` to create the self-contained, floating "Scheduler" widget with the specific availability logic, webhook integrations, and minimization state (Section 3B).
3.  **Styling & Theme:**
    - **Theme:** Futuristic, High-Tech, Business Automation.
    - **Visuals:** Use dark mode backgrounds, glassmorphism (blur effects), gradients, and neon accents.
    - **Responsiveness:** Ensure full mobile compatibility for the layout, chatbot, and calendar widget.
    - **Animations:** Replicate the smooth entry animations and hero effects.
4.  **Integration:**
    - Ensure the Chatbot can trigger the Calendar.
    - Ensure the Language Switcher updates the Calendar text immediately.
    - Ensure `conversationID` is shared between Chatbot and Calendar booking.

**Note:** You do not need to copy specific hex codes if you have your own design system, but the *functional* flow (Webhooks, Local Storage, Session Logic) MUST be preserved exactly as described to ensure backend compatibility.
