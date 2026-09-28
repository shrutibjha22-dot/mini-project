# SmartCLG for MGMCET Kamothe

A responsive college event management website for **MGM's College of Engineering & Technology (MGMCET), Kamothe, Navi Mumbai**. It includes separate Admin and Student experiences, a college profile, official contact details, campus facilities, an event calendar, registration tools, announcements, and analytics.

## Run locally

No installation is required.

```bash
python -m http.server 8765
```

Open <http://localhost:8765>.

You can also open `index.html` directly, although a local server is recommended.

## Public landing page

Visitors can explore the college, event categories, official event photography, campus updates, venues, and calendar before signing in. The public home page is designed to encourage discovery and portal sign-in.

## Portals

Admin and Student pages are protected with separate credential checks. The active login is stored only in the browser's `sessionStorage`; passwords are not saved.

### Demo credentials

- Administrator: `MGMCET-ADMIN` / `Admin@MGMCET2026`
- Student: `NC24CS018` / `Student@2026`

Use the credentials above to sign in. Change the `AUTH_ACCOUNTS` values in `app.js` before deployment.

### Admin portal

- Campus venue management with equipment, capacity, accessibility, and booking notes
- Event dashboard
- Event creation, editing, deletion, search, filtering, and grid/list views
- Complete event records covering audience, eligibility, entry, deadlines, certification, dress code, venue, organizer contact, agenda, and rules
- Student registration management
- Complete registration records ledger with event-wise totals, search, filters, attendance marking, print, individual record view, and CSV export
- CSV exports and `.ics` calendar export
- Event analytics
- Announcement publishing and archiving
- Workspace export and demo reset

### Student portal

- Campus event discovery
- One-click event registration and waitlists
- Student event passes and registration cancellation
- Saved events
- Personal event schedule
- Campus announcements
- Student profile and preferences

## College information

The profile page uses public information from the official MGMCET website, including:

- Institute code: **3175**
- Established: **1986**
- Address: Sector 18, Kamothe, Navi Mumbai, Maharashtra 410209
- University affiliation and AICTE approval
- NBA-accredited programmes listed by the institute
- Official phone numbers, email, telefax, map, and social links

Official sources:

- <https://mgmmumbai.ac.in/mgmcet/>
- <https://mgmmumbai.ac.in/mgmcet/about-us/institute>
- <https://mgmmumbai.ac.in/mgmcet/departments>
- <https://mgmmumbai.ac.in/mgmcet/campus-life>

## Event venues

The venue page only presents facilities or general campus spaces referenced by official college information. Event use, room allocation, equipment, safety clearance, and permissions must be confirmed with MGMCET before publication.

## Data and authentication

This project is a front-end prototype. Events, registrations, themes, and preferences are stored in the browser using `localStorage`; login state uses `sessionStorage`. The credential gate prevents normal in-app navigation between Admin and Student pages, but browser-only authentication is not a replacement for server security. A production deployment should connect these views to a secure backend, college SSO, server-verified password hashes, role-based authorization, and a database.
