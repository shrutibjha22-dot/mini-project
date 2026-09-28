(() => {
  "use strict";
  const STORAGE_KEYS = {


    events: "smartclg.mgmcet.events.v3",
    registrations: "smartclg.mgmcet.registrations.v2",
    announcements: "smartclg.mgmcet.announcements.v2",
    notifications: "smartclg.mgmcet.notifications.v2",
    preferences: "smartclg.preferences.v1",
    theme: "smartclg.theme.v1",
    viewLayout: "smartclg.eventLayout.v1",
    role: "smartclg.role.v1",
    session: "smartclg.auth.session.v1",
    rememberedAdminId: "smartclg.auth.rememberedAdminId.v1",
    rememberedStudentId: "smartclg.auth.rememberedStudentId.v1",
    studentProfile: "smartclg.studentProfile.v1",
    savedEvents: "smartclg.savedEvents.v1",
    venues: "smartclg.mgmcet.venues.v1"
  };

  const ICONS = {
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    "calendar-days": '<rect x="3" y="4" width="18" height="17" rx="3"/><path d="M16 2v4M8 2v4M3 9h18M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-7"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8 13 21H7l-1.8-6"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.01A1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.01A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z"/>',
    sparkles: '<path d="m12 3-1.2 3.2L8 7.5l2.8 1.3L12 12l1.2-3.2L16 7.5l-2.8-1.3L12 3Z"/><path d="m5 13-.8 2.2L2 16l2.2.8L5 19l.8-2.2L8 16l-2.2-.8L5 13ZM19 14l-.6 1.4L17 16l1.4.6L19 18l.6-1.4L21 16l-1.4-.6L19 14Z"/>',
    more: '<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    moon: '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    ticket: '<path d="M2 9a3 3 0 0 0 0 6v3h20v-3a3 3 0 0 0 0-6V6H2v3Z"/><path d="M13 6v2M13 11v2M13 16v2"/>',
    "user-plus": '<path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8" cy="7" r="4"/><path d="M19 8v6M16 11h6"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
    "layout-grid": '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v5M14 11v5"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
    music: '<path d="M9 18V5l11-2v13M9 9l11-2"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
    "chevron-left": '<path d="m15 18-6-6 6-6"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
    "alert-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
    "rotate-ccw": '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    "external-link": '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    navigation: '<path d="m3 11 19-9-9 19-2-8-8-2Z"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/>',
    graduation: '<path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12.5V17c3 2.5 9 2.5 12 0v-4.5M22 10v6"/>',
    "qr-code": '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 20h2M20 14h1"/>',
    bookmark: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/>',
    "ticket-check": '<path d="M2 9a3 3 0 0 0 0 6v3h20v-3a3 3 0 0 0 0-6V6H2v3Z"/><path d="m9 15 2 2 4-4"/>',
    home: '<path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
    "badge-check": '<path d="M12 3 4 6v5c0 5.2 3.4 8.5 8 10 4.6-1.5 8-4.8 8-10V6l-8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M8.5 13 7 22l5-3 5 3-1.5-9"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
    "lock-keyhole": '<circle cx="12" cy="15" r="2"/><path d="M6 10V7a6 6 0 0 1 12 0v3M5 10h14v11H5z"/>',
    logout: '<path d="M10 17l5-5-5-5M15 12H3M15 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/>',
    "eye-off": '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 4.2A10.7 10.7 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.1 3.2M6.6 6.6C3.5 8.6 2 12 2 12s3 8 10 8a9.8 9.8 0 0 0 5.4-1.6"/>',
    "key-round": '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 8.8-8.8M15 8l2 2M17 6l2 2"/>',
    accessibility: '<circle cx="12" cy="4" r="2"/><path d="M5 8h14M12 6v7M8 21l4-8 4 8"/>',
    shirt: '<path d="m8 3-5 4 3 5 2-2v11h8V10l2 2 3-5-5-4a4 4 0 0 1-8 0Z"/>'
  };

  const COLOR_THEMES = {
    violet: {
      color: "#6c5ce7",
      soft: "#eeebff",
      gradient: "linear-gradient(135deg, #312c68 0%, #6554d5 55%, #9b8df1 100%)"
    },
    blue: {
      color: "#4388ed",
      soft: "#e9f2ff",
      gradient: "linear-gradient(135deg, #163d79 0%, #4388ed 58%, #77b9f4 100%)"
    },
    mint: {
      color: "#17b897",
      soft: "#e4f8f2",
      gradient: "linear-gradient(135deg, #12584d 0%, #19ad91 58%, #7edcc4 100%)"
    },
    orange: {
      color: "#e88b32",
      soft: "#fff0df",
      gradient: "linear-gradient(135deg, #794523 0%, #e58a35 58%, #f6c275 100%)"
    },
    pink: {
      color: "#df5d90",
      soft: "#ffe9f1",
      gradient: "linear-gradient(135deg, #702846 0%, #d85c8d 58%, #f2a3c2 100%)"
    },
    slate: {
      color: "#64748b",
      soft: "#eef1f5",
      gradient: "linear-gradient(135deg, #303746 0%, #64748b 58%, #a4afc0 100%)"
    }
  };

  const AVATAR_COLORS = ["avatar-purple", "avatar-mint", "avatar-orange", "avatar-pink", "avatar-blue", "avatar-slate"];
  const CATEGORIES = ["Technical", "Academic", "Sports", "Cultural", "Career", "Wellness", "Social"];
  const DEPARTMENTS = ["Computer Science", "Electronics", "Mechanical", "Civil", "Business", "Design", "Science", "Arts"];
  const VALID_VIEWS = [
    "dashboard",
    "student-home",
    "my-registrations",
    "events",
    "registrations",
    "records",
    "calendar",
    "analytics",
    "announcements",
    "profile",
    "venues",
    "contact",
    "settings",
    "login",
    "home"
  ];

  const AUTH_ACCOUNTS = {
    admin: {
      userId: "MGMCET-ADMIN",
      passwordHash: "be60dcdc4280782b7ebb30827ffb2a194da5de7657bff93da26464e1d5b89776",
      name: "Event Administrator",
      roleLabel: "Administrator",
      demoUserId: "MGMCET-ADMIN",
      demoPassword: "Admin@MGMCET2026"
    },
    student: {
      userId: "NC24CS018",
      passwordHash: "1539498fbe81480199a59b69016b755effe03927772bcd8f9e8ec3884e2e64ae",
      name: "Aarav Mehta",
      roleLabel: "Student",
      demoUserId: "NC24CS018",
      demoPassword: "Student@2026"
    }
  };

  const COLLEGE = {
    name: "MGM's College of Engineering & Technology",
    shortName: "MGMCET",
    established: "1986",
    instituteCode: "3175",
    address: "Plot No. 1 & 2, Sector 18, Kamothe, At Junction NH-4 and Sion–Panvel Expressway, Navi Mumbai, Maharashtra 410209",
    shortAddress: "Sector 18, Kamothe, Navi Mumbai, Maharashtra 410209",
    email: "director@mgmmumbai.ac.in",
    phones: ["(022) 27433403", "65138119"],
    telefax: "(022) 2742340",
    officialSite: "https://mgmmumbai.ac.in/mgmcet/",
    mapUrl: "https://www.google.com/maps/dir//MGM+College+of+Engineering+and+Technology,+Plot+No.+1,+2,+Sion+-+Panvel+Expressway,+Sector+18,+Kamothe,+Navi+Mumbai,+Maharashtra+410209/@19.0166593,73.049902,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7e9cc90bd80b7:0xdf4fc9424f9d7f73!2m2!1d73.1046578!2d19.0163873",
    vision: "To become one of the outstanding Engineering Institutes in India by providing a conducive and vibrant environment to achieve excellence in the field of technology.",
    mission: "To empower aspiring professional students to explore the world of technology and become proficient enough to reach the pinnacle of success in the competitive global economy."
  };

  const VENUES = [
    {
      id: "venue-library",
      name: "Central Library",
      icon: "book",
      type: "Academic",
      description: "A well-stocked academic space for discussion sessions, reading circles, research talks, and small student forums.",
      detail: "Working hours listed as 9:30 AM to 6:00 PM on working days",
      facilities: ["17,917 titles", "58,570 volumes", "IEEE publication section", "E-journal access", "Reprography", "Internet access"],
      accessibility: "Ask library staff for step-free access and accessible reading positions.",
      bookingNote: "Library and Student Affairs approval required; avoid examination hours.",
      capacityNote: "Capacity to be confirmed by the librarian.",
      color: "violet"
    },
    {
      id: "venue-sports",
      name: "Sports Ground",
      icon: "trophy",
      type: "Outdoor",
      description: "Inter-collegiate and intra-collegiate sports ground suitable for athletics, festivals, and team competitions.",
      detail: "Officially listed cricket, football, volleyball, table tennis, and carom facilities",
      facilities: ["Cricket field", "Football field", "Volleyball area", "Table tennis", "Carom", "Track and field events"],
      accessibility: "Open-ground accessibility should be checked for each event layout.",
      bookingNote: "Sports Council permission, weather check, and ground preparation approval required.",
      capacityNote: "Depends on the event format and safety plan.",
      color: "mint"
    },
    {
      id: "venue-labs",
      name: "Computer Laboratories",
      icon: "monitor",
      type: "Technical",
      description: "Department laboratories for coding sessions, technical workshops, product demonstrations, and career skills sessions.",
      detail: "Equipment and room access must be approved in advance",
      facilities: ["Department workstations", "Internet access", "Projector or display", "Faculty coordinator", "Lab safety rules"],
      accessibility: "Request an accessible workstation from the department coordinator.",
      bookingNote: "Concerned department and faculty coordinator must approve equipment and room access.",
      capacityNote: "Depends on the selected laboratory.",
      color: "blue"
    },
    {
      id: "venue-canteen",
      name: "Canteen Area",
      icon: "users",
      type: "Informal",
      description: "A casual campus meeting point suitable for club interactions, welcome meets, and informal networking.",
      detail: "Avoid peak meal hours and obtain venue approval",
      facilities: ["Seating area", "Refreshments", "Informal networking space"],
      accessibility: "Confirm accessible seating with campus support staff.",
      bookingNote: "Canteen manager and Student Affairs approval required; avoid service hours.",
      capacityNote: "Small-group capacity only until confirmed otherwise.",
      color: "orange"
    },
    {
      id: "venue-gardens",
      name: "Campus Gardens / Open Area",
      icon: "sparkles",
      type: "Outdoor",
      description: "The official college profile highlights the green campus, making open areas useful for awareness drives and cultural programming.",
      detail: "Best for cultural performances, walks, and awareness drives",
      facilities: ["Landscaped campus", "Outdoor stage points", "Seating arrangement", "Waste-management point"],
      accessibility: "Outdoor surface and pathway conditions must be checked.",
      bookingNote: "Weather, ground, sound, safety, and Student Affairs permissions are required.",
      capacityNote: "Depends on weather, layout, and safety clearance.",
      color: "pink"
    },
    {
      id: "venue-workshops",
      name: "Workshops & Project Spaces",
      icon: "settings",
      type: "Workshop",
      description: "Workshop and project-oriented spaces for maker sessions, engineering demonstrations, and student project reviews.",
      detail: "Faculty coordinator and safety clearance required",
      facilities: ["Workshop equipment", "Project work areas", "Demonstration space", "Safety briefing"],
      accessibility: "Safety induction and accessible equipment arrangement required.",
      bookingNote: "Faculty coordinator, equipment checklist, and safety clearance required.",
      capacityNote: "Depends on the workshop and equipment selected.",
      color: "slate"
    }
  ];

  const COLLEGE_PROGRAMS = [
    "Computer Engineering",
    "Computer Science & Engineering (AI & ML)",
    "Computer Science & Engineering (Data Science)",
    "Electronics & Telecommunication Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Automation & Robotics"
  ];

  const pad = (value) => String(value).padStart(2, "0");
  const toDateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const parseDateKey = (key) => {
    const [year, month, day] = String(key).split("-").map(Number);
    return new Date(year, month - 1, day, 12, 0, 0);
  };
  const dateFromOffset = (offset) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    return toDateKey(date);
  };
  const dateFromNow = (hours) => new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
  const formatNumber = (value) => new Intl.NumberFormat("en-US").format(Number(value) || 0);
  const percentage = (part, whole) => whole ? Math.min(100, Math.round((part / whole) * 100)) : 0;
  const uniqueId = (prefix = "id") => `${prefix}-${globalThis.crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
  const initials = (name) => String(name || "Guest")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  const pickAvatarColor = (value) => {
    const total = String(value || "").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return AVATAR_COLORS[total % AVATAR_COLORS.length];
  };
  const escapeHTML = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
  const icon = (name, className = "") => `<span class="${className}" aria-hidden="true">${ICONS[name] || ICONS.info}</span>`;

  function formatTime(time) {
    if (!time) return "TBA";
    const [hourPart, minute] = String(time).split(":");
    let hour = Number(hourPart);
    const suffix = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute || "00"} ${suffix}`;
  }

  function formatLongDate(dateKey) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(parseDateKey(dateKey));
  }

  function formatEventDate(dateKey, includeYear = false) {
    const date = parseDateKey(dateKey);
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (dateKey === toDateKey(today)) return "Today";
    if (dateKey === toDateKey(tomorrow)) return "Tomorrow";
    if (dateKey === toDateKey(yesterday)) return "Yesterday";
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      ...(includeYear ? { year: "numeric" } : {})
    }).format(date);
  }

  function formatMonth(date) {
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
  }

  function relativeTime(iso) {
    const diffMinutes = Math.round((new Date(iso).getTime() - Date.now()) / 60000);
    const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    if (Math.abs(diffMinutes) < 60) return formatter.format(diffMinutes, "minute");
    const diffHours = Math.round(diffMinutes / 60);
    if (Math.abs(diffHours) < 24) return formatter.format(diffHours, "hour");
    return formatter.format(Math.round(diffHours / 24), "day");
  }

  function safeLoad(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.warn(`Could not load ${key}`, error);
      return fallback;
    }
  }

  function safeSave(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Could not save ${key}`, error);
      return false;
    }
  }

  function safeSessionLoad(key, fallback) {
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.warn(`Could not load ${key}`, error);
      return fallback;
    }
  }

  function safeSessionSave(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Could not save ${key}`, error);
      return false;
    }
  }

  function safeSessionRemove(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.warn(`Could not clear ${key}`, error);
    }
  }

  function createDefaultEvents() {
    return [
      {
        id: "evt-innovate-ai",
        title: "Innovate AI: Build the Future",
        category: "Technical",
        date: dateFromOffset(3),
        time: "10:00",
        endTime: "16:00",
        venueId: "venue-labs",
        venue: "Computer Laboratories",
        organizer: "Computer Engineering Department",
        capacity: 180,
        registered: 142,
        color: "violet",
        image: "assets/mgmcet-technical-1.jpg",
        imageAlt: "MGMCET technical fest laser project",
        featured: true,
        description: "A day-long builder sprint for students to design responsible AI products, learn from industry mentors, and pitch bold ideas to a panel of judges.",
        tags: ["Artificial Intelligence", "Hackathon", "Mentorship"],
        agenda: [
          { time: "10:00 AM", text: "Welcome and problem briefing" },
          { time: "11:00 AM", text: "Mentor masterclass" },
          { time: "12:30 PM", text: "Building sprint" },
          { time: "03:30 PM", text: "Demo day and awards" }
        ]
      },
      {
        id: "evt-founders-table",
        title: "Founders' Roundtable",
        category: "Career",
        date: dateFromOffset(1),
        time: "14:00",
        endTime: "16:00",
        venueId: "venue-labs",
        venue: "Computer Laboratories",
        organizer: "Training & Placement Cell",
        capacity: 90,
        registered: 76,
        color: "blue",
        image: "assets/mgmcet-campus.jpg",
        imageAlt: "MGMCET industry interaction and seminar session",
        featured: false,
        description: "An intimate conversation with alumni founders about first customers, resilient teams, and the lessons that cannot be found in a textbook.",
        tags: ["Startups", "Alumni", "Leadership"],
        agenda: [
          { time: "02:00 PM", text: "Opening stories" },
          { time: "02:30 PM", text: "Founder panel" },
          { time: "03:30 PM", text: "Live audience Q&A" },
          { time: "04:00 PM", text: "Networking" }
        ]
      },
      {
        id: "evt-sports-day",
        title: "MGMCET Annual Sports Day",
        category: "Sports",
        date: dateFromOffset(8),
        time: "07:30",
        endTime: "18:00",
        venueId: "venue-sports",
        venue: "Sports Ground",
        organizer: "Sports Council",
        capacity: 420,
        registered: 285,
        color: "orange",
        image: "assets/mgmcet-sports-2.jpg",
        imageAlt: "MGMCET inter-college cricket sports event",
        featured: false,
        description: "A full day of inter-college football, athletics, basketball, badminton, and the traditional relay championship.",
        tags: ["Inter-college", "Athletics", "Teamwork"],
        agenda: [
          { time: "07:30 AM", text: "Registration and warm-up" },
          { time: "09:00 AM", text: "Opening ceremony" },
          { time: "10:00 AM", text: "Track and field events" },
          { time: "02:00 PM", text: "Team finals" }
        ]
      },
      {
        id: "evt-cultural-night",
        title: "Campus Cultural Night",
        category: "Cultural",
        date: dateFromOffset(12),
        time: "18:00",
        endTime: "22:00",
        venueId: "venue-gardens",
        venue: "Campus Gardens / Open Area",
        organizer: "Cultural Committee",
        capacity: 650,
        registered: 538,
        color: "pink",
        image: "assets/mgmcet-cultural-3.jpg",
        imageAlt: "MGMCET cultural festival group performance",
        featured: false,
        description: "An evening of music, dance, theatre, and student performances representing every culture on campus.",
        tags: ["Music", "Dance", "Theatre"],
        agenda: [
          { time: "06:00 PM", text: "Gates open" },
          { time: "06:30 PM", text: "Welcome performance" },
          { time: "07:00 PM", text: "Cultural showcase" },
          { time: "09:15 PM", text: "Headline concert" }
        ]
      },
      {
        id: "evt-research-symposium",
        title: "Student Research Symposium",
        category: "Academic",
        date: dateFromOffset(-6),
        time: "09:30",
        endTime: "16:30",
        venueId: "venue-library",
        venue: "Central Library",
        organizer: "Academic Council",
        capacity: 240,
        registered: 198,
        color: "mint",
        image: "assets/mgmcet-technical-3.jpg",
        imageAlt: "MGMCET technical project workshop",
        featured: false,
        description: "Poster sessions, research demonstrations, and interdisciplinary talks from undergraduate and postgraduate students.",
        tags: ["Research", "Posters", "Innovation"],
        agenda: [
          { time: "09:30 AM", text: "Research showcase opens" },
          { time: "11:00 AM", text: "Parallel paper sessions" },
          { time: "02:30 PM", text: "Industry research panel" }
        ]
      },
      {
        id: "evt-career-studio",
        title: "Portfolio Studio Day",
        category: "Career",
        date: dateFromOffset(19),
        time: "10:30",
        endTime: "15:30",
        venueId: "venue-labs",
        venue: "Computer Laboratories",
        organizer: "Training & Placement Cell",
        capacity: 150,
        registered: 63,
        color: "slate",
        image: "assets/mgmcet-technical-2.jpg",
        imageAlt: "MGMCET technical fest outdoor project activity",
        featured: false,
        description: "Portfolio reviews, mock interviews, LinkedIn coaching, and recruiter feedback for final-year students.",
        tags: ["Portfolio", "Interviews", "Placement"],
        agenda: [
          { time: "10:30 AM", text: "Portfolio clinic" },
          { time: "12:00 PM", text: "Mock interviews" },
          { time: "02:30 PM", text: "Recruiter feedback" }
        ]
      },
      {
        id: "evt-wellness-week",
        title: "Mindful Campus Week",
        category: "Wellness",
        date: dateFromOffset(26),
        time: "08:00",
        endTime: "12:00",
        venueId: "venue-gardens",
        venue: "Campus Gardens / Open Area",
        organizer: "Student Affairs Office",
        capacity: 120,
        registered: 37,
        color: "mint",
        image: "assets/mgmcet-sports-3.jpg",
        imageAlt: "MGMCET campus outdoor student activity",
        featured: false,
        description: "Guided meditation, mindful movement, nutrition workshops, and practical tools for sustainable student wellbeing.",
        tags: ["Wellbeing", "Meditation", "Health"],
        agenda: [
          { time: "08:00 AM", text: "Guided meditation" },
          { time: "09:00 AM", text: "Mindful movement" },
          { time: "10:30 AM", text: "Nutrition workshop" }
        ]
      }
    ];
  }

  function createDefaultRegistrations() {
    const rows = [
      ["Aarav Mehta", "aarav.mehta@example.edu", "NC24CS018", "Computer Science", "2024", "evt-innovate-ai", 1],
      ["Diya Shah", "diya.shah@example.edu", "NC24EC042", "Electronics", "2024", "evt-innovate-ai", 3],
      ["Kabir Singh", "kabir.singh@example.edu", "NC23ME007", "Mechanical", "2023", "evt-sports-day", 8],
      ["Mira Joshi", "mira.joshi@example.edu", "NC24BA031", "Business", "2024", "evt-founders-table", 27],
      ["Rohan Verma", "rohan.verma@example.edu", "NC22CS012", "Computer Science", "2022", "evt-research-symposium", 1],
      ["Ananya Iyer", "ananya.iyer@example.edu", "NC24DS014", "Design", "2024", "evt-career-studio", 5],
      ["Vivaan Rao", "vivaan.rao@example.edu", "NC23CE020", "Civil", "2023", "evt-sports-day", 15],
      ["Sara Khan", "sara.khan@example.edu", "NC24EC061", "Electronics", "2024", "evt-cultural-night", 2],
      ["Ishaan Patel", "ishaan.patel@example.edu", "NC24CS066", "Computer Science", "2024", "evt-innovate-ai", 22],
      ["Meera Nair", "meera.nair@example.edu", "NC24SC022", "Science", "2024", "evt-wellness-week", 1]
    ];
    return rows.map(([name, email, studentId, department, year, eventId, hoursAgo], index) => ({
      id: `reg-${index + 1}`,
      name,
      email,
      studentId,
      department,
      year,
      eventId,
      status: "Confirmed",
      registeredAt: dateFromNow(-hoursAgo)
    }));
  }

  function createDefaultAnnouncements() {
    return [
      {
        id: "ann-1",
        title: "Innovate AI venue update",
        message: "The hackathon has moved to Innovation Lab in Block A. Please bring your student ID and arrive 15 minutes early for check-in.",
        audience: "All registrants",
        eventId: "evt-innovate-ai",
        publishedAt: dateFromNow(-2),
        active: true
      },
      {
        id: "ann-2",
        title: "Cultural Night early-bird passes",
        message: "Early-bird passes are now live for the first 100 students. Collect your QR pass from the Cultural Committee desk.",
        audience: "Students",
        eventId: "evt-cultural-night",
        publishedAt: dateFromNow(-20),
        active: true
      },
      {
        id: "ann-3",
        title: "Sports Day volunteer briefing",
        message: "All registered volunteers must attend the briefing in Seminar Hall 1 before reporting to the ground.",
        audience: "Volunteers",
        eventId: "evt-sports-day",
        publishedAt: dateFromNow(-49),
        active: true
      },
      {
        id: "ann-4",
        title: "Research Symposium recap",
        message: "Thank you to everyone who joined the symposium. Presentation slides and the photo gallery are now available.",
        audience: "All students",
        eventId: "evt-research-symposium",
        publishedAt: dateFromNow(-120),
        active: false
      }
    ];
  }

  function createDefaultNotifications() {
    return [
      {
        id: "not-1",
        title: "Almost full",
        message: "Founders' Roundtable has 14 seats remaining.",
        type: "capacity",
        createdAt: dateFromNow(-0.2),
        read: false
      },
      {
        id: "not-2",
        title: "New registration",
        message: "Aarav Mehta registered for Innovate AI.",
        type: "registration",
        createdAt: dateFromNow(-1.5),
        read: false
      },
      {
        id: "not-3",
        title: "Announcement published",
        message: "The Innovate AI venue update is live.",
        type: "announcement",
        createdAt: dateFromNow(-3),
        read: true
      },
      {
        id: "not-4",
        title: "Schedule reminder",
        message: "Sports Day begins at 7:30 AM next week.",
        type: "calendar",
        createdAt: dateFromNow(-20),
        read: true
      }
    ];
  }

  function enrichEventData(events) {
    const audienceByCategory = {
      Technical: "MGMCET students in all departments",
      Academic: "Students and faculty of MGMCET",
      Sports: "MGMCET students and invited inter-collegiate teams",
      Cultural: "MGMCET students, staff, and invited guests",
      Career: "Final-year students and all student groups",
      Wellness: "MGMCET students and staff",
      Social: "MGMCET campus community"
    };
    const rulesByCategory = {
      Technical: ["Carry a valid student ID.", "Register before the published deadline.", "Follow laboratory safety instructions."],
      Academic: ["Carry a valid student ID.", "Respect the published academic schedule.", "Maintain discipline during research sessions."],
      Sports: ["Teams must submit a complete squad list.", "Arrive 30 minutes before the event.", "Follow the safety briefing on the ground."],
      Cultural: ["Participation is subject to college approval.", "Keep equipment within campus safety limits.", "Report stage calls 30 minutes early."],
      Career: ["Carry a valid student ID.", "Prepare questions for the speakers.", "Keep the session interactive and respectful."],
      Wellness: ["Wear comfortable clothing.", "Inform the organizer about health conditions.", "Follow the instructor's safety guidance."],
      Social: ["Carry a valid student ID.", "Follow campus conduct rules.", "Dispose of waste responsibly."]
    };
    return events.map((event, index) => ({
      audience: audienceByCategory[event.category] || "MGMCET campus community",
      eligibility: event.category === "Sports" ? "Open to eligible MGMCET students and approved external teams" : "Open to MGMCET students and staff unless stated otherwise",
      entryFee: "Free for MGMCET students",
      registrationDeadline: dateFromOffset(index % 2 === 0 ? 1 : 2),
      certificate: event.category === "Sports" ? "Participation certificate on verification" : "Certificate of participation for registered attendees",
      organizerContact: "Student Affairs Office · (022) 27433403",
      dressCode: event.category === "Sports" ? "Sports attire and sports shoes" : event.category === "Cultural" ? "Smart casual or performance costume" : "College-appropriate attire",
      rules: rulesByCategory[event.category] || ["Carry a valid student ID.", "Follow college instructions.", "Maintain campus discipline."],
      ...event
    }));
  }

  const defaultTheme = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const loadedPreferences = safeLoad(STORAGE_KEYS.preferences, {});
  const initialHash = location.hash.slice(1);
  const savedSession = safeSessionLoad(STORAGE_KEYS.session, null);
  const validSession = savedSession && ["admin", "student"].includes(savedSession.role) && savedSession.name;
  const initialRole = validSession ? savedSession.role : "public";
  const initialRequiredRole = requiredRoleForView(initialHash);
  const initialLoginRole = ["admin", "student"].includes(initialRequiredRole) ? initialRequiredRole : (initialHash === "login" ? "student" : "admin");
  const state = {
    role: initialRole,
    authenticated: Boolean(validSession),
    authUser: validSession ? savedSession : null,
    loginRole: initialLoginRole,
    pendingView: ["admin", "student"].includes(initialRequiredRole) ? initialHash : null,
    view: VALID_VIEWS.includes(initialHash) ? initialHash : (validSession ? (initialRole === "student" ? "student-home" : "dashboard") : "home"),
    studentProfile: safeLoad(STORAGE_KEYS.studentProfile, {
      name: "Aarav Mehta",
      email: "aarav.mehta@example.edu",
      studentId: "NC24CS018",
      department: "Computer Engineering",
      year: "Second Year",
      division: "SE-C"
    }),
    savedEvents: safeLoad(STORAGE_KEYS.savedEvents, []),
    venues: safeLoad(STORAGE_KEYS.venues, VENUES.map((venue) => ({ ...venue }))),
    events: enrichEventData(safeLoad(STORAGE_KEYS.events, createDefaultEvents())),
    registrations: safeLoad(STORAGE_KEYS.registrations, createDefaultRegistrations()),
    announcements: safeLoad(STORAGE_KEYS.announcements, createDefaultAnnouncements()),
    notifications: safeLoad(STORAGE_KEYS.notifications, createDefaultNotifications()),
    preferences: {
      institution: COLLEGE.name,
      coordinator: "Event Administrator",
      email: COLLEGE.email,
      timezone: "Asia/Kolkata",
      weeklyDigest: true,
      registrationAlerts: true,
      eventReminders: true,
      ...loadedPreferences
    },
    theme: safeLoad(STORAGE_KEYS.theme, defaultTheme),
    eventLayout: safeLoad(STORAGE_KEYS.viewLayout, "grid"),
    eventFilters: { search: "", category: "All", status: "All", sort: "date-asc" },
    registrationFilters: { search: "", event: "All" },
    recordFilters: { search: "", event: "All", status: "All", attendance: "All", sort: "newest" },
    calendarDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 12),
    lastFocusedElement: null
  };

  const mainContent = document.getElementById("mainContent");
  const modalRoot = document.getElementById("modalRoot");
  const drawerRoot = document.getElementById("drawerRoot");
  const toastRegion = document.getElementById("toastRegion");
  const sidebar = document.getElementById("sidebar");
  const sidebarScrim = document.getElementById("sidebarScrim");

  function getEventById(id) {
    return state.events.find((event) => event.id === id);
  }

  function getVenueById(id) {
    return state.venues.find((venue) => venue.id === id);
  }

  function getEventVenue(event) {
    return getVenueById(event?.venueId) || state.venues.find((venue) => venue.name === event?.venue);
  }

  function eventsForVenue(venueId) {
    return state.events.filter((event) => event.venueId === venueId);
  }

  function getTheme(event) {
    return COLOR_THEMES[event?.color] || COLOR_THEMES.violet;
  }

  function getEventStatus(event) {
    if (!event) return { key: "unknown", label: "Unknown" };
    if (event.cancelled) return { key: "cancelled", label: "Cancelled" };
    const today = toDateKey(new Date());
    if (event.date < today) return { key: "completed", label: "Completed" };
    if (event.date === today) return { key: "live", label: "Live today" };
    if (Number(event.registered) >= Number(event.capacity)) return { key: "full", label: "Full" };
    return { key: "upcoming", label: "Upcoming" };
  }

  function upcomingEvents(includeToday = true) {
    const today = toDateKey(new Date());
    return state.events
      .filter((event) => includeToday ? event.date >= today : event.date > today)
      .filter((event) => !event.cancelled)
      .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  }

  function studentOwnRegistration(eventId) {
    return state.registrations.find((registration) =>
      registration.studentId?.toLowerCase() === state.studentProfile.studentId?.toLowerCase() && registration.eventId === eventId
    );
  }

  function isStudentSaved(eventId) {
    return state.savedEvents.includes(eventId);
  }

  function requiredRoleForView(view) {
    if (["dashboard", "registrations", "records", "analytics"].includes(view)) return "admin";
    if (["student-home", "my-registrations"].includes(view)) return "student";
    if (view === "settings") return "authenticated";
    return null;
  }

  function canViewInRole(view) {
    const requiredRole = requiredRoleForView(view);
    if (requiredRole === "authenticated") return state.authenticated;
    if (requiredRole) return state.authenticated && state.role === requiredRole;
    if (state.role === "public") return ["home", "login", "events", "calendar", "announcements", "profile", "venues", "contact"].includes(view);
    if (state.role === "student") return ["login", "student-home", "my-registrations", "events", "calendar", "announcements", "profile", "venues", "contact", "settings"].includes(view);
    return ["login", "dashboard", "events", "registrations", "records", "calendar", "analytics", "announcements", "profile", "venues", "contact", "settings"].includes(view);
  }

  function eventStyle(event) {
    const theme = getTheme(event);
    return `--event-color:${theme.color};--event-soft:${theme.soft};--event-gradient:${theme.gradient};--event-ink:#fff;--event-image:url("${event?.image || ""}")`;
  }

  function categoryIcon(category) {
    return {
      Technical: "code",
      Academic: "book",
      Sports: "trophy",
      Cultural: "music",
      Career: "briefcase",
      Wellness: "heart",
      Social: "users"
    }[category] || "sparkles";
  }

  function hydrateStaticIcons() {
    document.querySelectorAll("[data-icon]").forEach((node) => {
      node.innerHTML = ICONS[node.dataset.icon] || ICONS.info;
    });
  }

  function pageHeader(eyebrow, title, subtitle, actions = "") {
    return `
      <div class="page-header">
        <div class="page-title-group">
          <span class="eyebrow">${escapeHTML(eyebrow)}</span>
          <h1>${escapeHTML(title)}</h1>
          <p>${escapeHTML(subtitle)}</p>
        </div>
        ${actions ? `<div class="page-actions">${actions}</div>` : ""}
      </div>`;
  }

  function metricCard(label, value, iconName, color, trend = "+12.4%") {
    return `
      <article class="metric-card metric-${color}">
        <div class="metric-top">
          <span class="metric-icon">${icon(iconName)}</span>
          <span class="metric-trend ${trend.startsWith("-") ? "down" : ""}">${trend.startsWith("-") ? "↓" : "↑"} ${escapeHTML(trend.replace(/^[+-]/, ""))}</span>
        </div>
        <strong class="metric-value">${escapeHTML(value)}</strong>
        <span class="metric-label">${escapeHTML(label)}</span>
      </article>`;
  }

  function attendeeStack(event, size = "card") {
    const names = state.registrations.filter((registration) => registration.eventId === event.id).map((registration) => registration.name);
    const samples = [...names, "Rhea Kapoor", "Dev Malik", "Nina Das"].slice(0, 3);
    const avatarClass = size === "detail" ? "" : "";
    return `
      <div class="${size === "detail" ? "attendee-stack" : "registration-count"}">
        ${samples.map((name) => `<span class="avatar ${pickAvatarColor(name)} ${avatarClass}" title="${escapeHTML(name)}">${escapeHTML(initials(name))}</span>`).join("")}
        <small>${formatNumber(event.registered)} registered</small>
      </div>`;
  }

  function eventCard(event, index = 0) {
    const status = getEventStatus(event);
    const theme = getTheme(event);
    const fill = percentage(event.registered, event.capacity);
    return `
      <article class="event-card" data-open-event="${escapeHTML(event.id)}" style="${eventStyle(event)};animation-delay:${Math.min(index * 45, 220)}ms" tabindex="0" role="button" aria-label="View ${escapeHTML(event.title)}">
        <div class="event-art ${event.image ? "has-photo" : ""}">
          ${event.image ? `<img class="event-photo" src="${escapeHTML(event.image)}" alt="${escapeHTML(event.imageAlt || event.title)}"><span class="event-photo-overlay"></span>` : ""}
          <span class="event-art-badge">${escapeHTML(event.category)}</span>
          ${state.role === "admin"
            ? `<button class="event-card-menu" type="button" data-edit-event="${escapeHTML(event.id)}" aria-label="Edit ${escapeHTML(event.title)}">${icon("more")}</button>`
            : state.role === "student" ? `<button class="event-card-menu" type="button" data-save-event="${escapeHTML(event.id)}" aria-label="${isStudentSaved(event.id) ? "Remove from saved events" : "Save event"}">${icon("bookmark")}</button>` : ""}
          <span class="art-icon">${icon(categoryIcon(event.category))}</span>
        </div>
        <div class="event-card-content">
          <div class="event-card-topline">
            <span class="category-label">${escapeHTML(event.category)}</span>
            <span class="status-pill status-${status.key}">${escapeHTML(status.label)}</span>
          </div>
          <h3>${escapeHTML(event.title)}</h3>
          <div class="event-meta">
            <span>${icon("calendar-days")} ${escapeHTML(formatEventDate(event.date))} · ${escapeHTML(formatTime(event.time))}</span>
            <span>${icon("map-pin")} ${escapeHTML(event.venue)}</span>
          </div>
          ${attendeeStack(event)}
          <div class="capacity-bar" title="${fill}% registered"><span style="width:${fill}%"></span></div>
        </div>
      </article>`;
  }

  function eventListRow(event) {
    const status = getEventStatus(event);
    return `
      <article class="event-list-row" data-open-event="${escapeHTML(event.id)}" style="${eventStyle(event)}" tabindex="0" role="button">
        <div class="list-art ${event.image ? "has-photo" : ""}" style="--list-image:url('${escapeHTML(event.image || "")}')"><span class="list-photo"></span>${icon(categoryIcon(event.category))}</div>
        <div class="list-title">
          <strong>${escapeHTML(event.title)}</strong>
          <small>${escapeHTML(event.category)} · ${escapeHTML(event.organizer)}</small>
        </div>
        <div class="list-cell"><span>${escapeHTML(formatEventDate(event.date))}</span><small>${escapeHTML(formatTime(event.time))}</small></div>
        <div class="list-cell"><span>${escapeHTML(event.venue)}</span><small>${escapeHTML(event.organizer)}</small></div>
        <div><span class="status-pill status-${status.key}">${escapeHTML(status.label)}</span><small>${formatNumber(event.registered)} / ${formatNumber(event.capacity)}</small></div>
        <span class="list-arrow">${icon("arrow-right")}</span>
      </article>`;
  }

  function filterEvents() {
    const query = state.eventFilters.search.trim().toLowerCase();
    const filtered = state.events.filter((event) => {
      const searchable = [event.title, event.category, event.venue, event.organizer, event.description, ...(event.tags || [])].join(" ").toLowerCase();
      const status = getEventStatus(event);
      const matchesQuery = !query || searchable.includes(query);
      const matchesCategory = state.eventFilters.category === "All" || event.category === state.eventFilters.category;
      const matchesStatus = state.eventFilters.status === "All" || status.key === state.eventFilters.status;
      return matchesQuery && matchesCategory && matchesStatus;
    });

    return filtered.sort((a, b) => {
      if (state.eventFilters.sort === "date-desc") return `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`);
      if (state.eventFilters.sort === "popular") return Number(b.registered) - Number(a.registered);
      if (state.eventFilters.sort === "capacity") return Number(b.capacity) - Number(a.capacity);
      return `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`);
    });
  }

  function eventResultsMarkup() {
    const events = filterEvents();
    if (!events.length) {
      return `
        <div class="empty-state">
          <span class="empty-state-icon">${icon("search")}</span>
          <h3>No matching events</h3>
          <p>Try changing your search or filters, or create a new event for your campus community.</p>
          <button class="primary-button" type="button" data-action="clear-event-filters">Clear filters</button>
        </div>`;
    }
    const className = state.eventLayout === "list" ? "event-list-view" : "event-grid";
    return `<div class="${className}">${events.map((event, index) => state.eventLayout === "list" ? eventListRow(event) : eventCard(event, index)).join("")}</div>`;
  }

  function eventResultSummary() {
    const count = filterEvents().length;
    return `<strong>${count}</strong> event${count === 1 ? "" : "s"} found`;
  }

  function renderDashboard() {
    const totalRegistrations = state.events.reduce((sum, event) => sum + Number(event.registered || 0), 0);
    const totalCapacity = state.events.reduce((sum, event) => sum + Number(event.capacity || 0), 0);
    const active = upcomingEvents().length;
    const averageFill = percentage(totalRegistrations, totalCapacity);
    const spotlight = upcomingEvents().find((event) => event.featured) || upcomingEvents()[0];
    const upcoming = upcomingEvents().slice(0, 3);
    const recent = [...state.registrations].sort((a, b) => new Date(b.registeredAt) - new Date(a.registeredAt)).slice(0, 5);
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

    return `
      ${pageHeader("Admin command center", `${greeting}, Administrator`, "Here is what is happening across MGMCET campus events today.", `
        <button class="secondary-button" type="button" data-view-link="calendar">${icon("calendar-days")} View calendar</button>
        <button class="primary-button" type="button" data-action="add-event">${icon("plus")} Create event</button>`)}

      <section class="metric-grid" aria-label="Event overview">
        ${metricCard("Active events", formatNumber(active), "calendar", "purple", "+8.2%")}
        ${metricCard("Total registrations", formatNumber(totalRegistrations), "users", "mint", "+16.8%")}
        ${metricCard("Average capacity filled", `${averageFill}%`, "chart", "orange", "+5.4%")}
        ${metricCard("Published announcements", formatNumber(state.announcements.filter((item) => item.active).length), "megaphone", "blue", "+2 this week")}
      </section>

      <section class="dashboard-main-grid">
        ${spotlight ? `
          <article class="card spotlight-card" style="${eventStyle(spotlight)}">
            <div class="spotlight-copy">
              <span class="light-label">Featured next event</span>
              <h2>${escapeHTML(spotlight.title)}</h2>
              <p>${escapeHTML(spotlight.description)}</p>
              <div class="spotlight-meta">
                <span>${icon("calendar-days")} ${escapeHTML(formatEventDate(spotlight.date))}, ${escapeHTML(formatTime(spotlight.time))}</span>
                <span>${icon("map-pin")} ${escapeHTML(spotlight.venue)}</span>
                <span>${icon("users")} ${formatNumber(spotlight.registered)} joined</span>
              </div>
              <button class="primary-button" type="button" data-open-event="${escapeHTML(spotlight.id)}">View event ${icon("arrow-right")}</button>
            </div>
            <div class="spotlight-visual" aria-hidden="true">
              <span class="event-monogram">${icon(categoryIcon(spotlight.category))}</span>
              <span class="float-chip"><span>${icon("check")}</span> Venue confirmed</span>
              <span class="float-chip"><span>${icon("users")}</span> ${formatNumber(spotlight.capacity - spotlight.registered)} spots left</span>
            </div>
          </article>` : renderNoUpcomingSpotlight()}
        <article class="card quick-actions-card">
          <div class="card-header">
            <div><h2>Quick actions</h2><p>Keep your event workflow moving</p></div>
            ${icon("zap")}
          </div>
          <div class="card-body">
            <div class="quick-actions-list">
              <button class="quick-action" type="button" data-action="add-event"><span class="quick-action-icon">${icon("plus")}</span><span class="quick-action-copy"><strong>Create new event</strong><small>Add schedule, venue and capacity</small></span><span>→</span></button>
              <button class="quick-action" type="button" data-action="register-general"><span class="quick-action-icon">${icon("user-plus")}</span><span class="quick-action-copy"><strong>Register attendee</strong><small>Add a student to an event</small></span><span>→</span></button>
              <button class="quick-action" type="button" data-action="new-announcement"><span class="quick-action-icon">${icon("megaphone")}</span><span class="quick-action-copy"><strong>Post announcement</strong><small>Send an update to your audience</small></span><span>→</span></button>
              <button class="quick-action" type="button" data-view-link="analytics"><span class="quick-action-icon">${icon("chart")}</span><span class="quick-action-copy"><strong>Review insights</strong><small>Explore attendance trends</small></span><span>→</span></button>
            </div>
          </div>
        </article>
      </section>

      <section class="dashboard-section">
        <div class="section-heading">
          <div><h2>Upcoming events</h2><p>Your next few campus experiences</p></div>
          <button class="text-button" type="button" data-view-link="events">View all ${icon("arrow-right")}</button>
        </div>
        <div class="event-grid dashboard-events">${upcoming.length ? upcoming.map((event, index) => eventCard(event, index)).join("") : renderCompactEmpty("No upcoming events", "Create an event to start planning.", "add-event")}</div>
      </section>

      <section class="dashboard-lower-grid">
        <article class="card">
          <div class="card-header"><div><h2>Recent registrations</h2><p>Students joining your events</p></div><button class="text-button" type="button" data-view-link="registrations">View all</button></div>
          <div class="card-body">
            <div class="recent-list">
              ${recent.length ? recent.map((registration) => {
                const event = getEventById(registration.eventId);
                return `<div class="recent-item"><span class="avatar ${pickAvatarColor(registration.name)}">${escapeHTML(initials(registration.name))}</span><span class="recent-copy"><strong>${escapeHTML(registration.name)}</strong><small>${escapeHTML(event?.title || "General registration")}</small></span><span class="recent-time">${escapeHTML(relativeTime(registration.registeredAt))}</span></div>`;
              }).join("") : `<p class="form-hint">No registrations yet.</p>`}
            </div>
          </div>
        </article>
        <article class="card">
          <div class="card-header"><div><h2>Coming up next</h2><p>Your next event timeline</p></div><button class="icon-button subtle" type="button" data-view-link="calendar" aria-label="Open calendar">${icon("arrow-up-right")}</button></div>
          <div class="card-body">
            <div class="timeline-list">
              ${upcoming.slice(0, 3).map((event, index) => `<div class="timeline-item"><span class="timeline-icon" style="--timeline-color:${getTheme(event).color}">${icon(categoryIcon(event.category))}</span><span class="timeline-copy"><strong>${escapeHTML(event.title)}</strong><span>${escapeHTML(formatEventDate(event.date))} · ${escapeHTML(formatTime(event.time))}</span></span></div>`).join("") || `<p class="form-hint">Your schedule is clear.</p>`}
            </div>
          </div>
        </article>
      </section>`;
  }

  function renderNoUpcomingSpotlight() {
    return `<article class="card empty-state" style="grid-column:1/-1;min-height:328px"><span class="empty-state-icon">${icon("calendar")}</span><h3>Your schedule is clear</h3><p>Create an event to see it featured here and start collecting registrations.</p><button class="primary-button" type="button" data-action="add-event">${icon("plus")} Create event</button></article>`;
  }

  function renderCompactEmpty(title, message, action) {
    return `<div class="empty-state" style="grid-column:1/-1;min-height:180px"><span class="empty-state-icon">${icon("calendar")}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(message)}</p><button class="primary-button" type="button" data-action="${escapeHTML(action)}">${icon("plus")} Create event</button></div>`;
  }

  function renderPublicHome() {
    const upcoming = upcomingEvents().slice(0, 3);
    const updates = state.announcements.filter((item) => item.active).slice(0, 2);
    const categoryCards = CATEGORIES.map((category) => ({ category, count: state.events.filter((event) => event.category === category).length })).filter((item) => item.count > 0);
    const totalRegistrations = state.events.reduce((sum, event) => sum + Number(event.registered || 0), 0);
    return `
      <section class="public-home-hero">
        <div class="public-home-copy">
          <span class="home-live-pill"><i></i> Live campus event platform</span>
          <h1>Your campus.<br>Your events.<br><em>One bright home.</em></h1>
          <p>Discover technical fests, cultural nights, sports, workshops, and student opportunities at MGM's College of Engineering & Technology, Kamothe.</p>
          <div class="public-hero-actions"><button class="primary-button" type="button" data-view-link="login" data-login-role="student">${icon("user-plus")} Explore as student</button><button class="hero-outline-button" type="button" data-view-link="login" data-login-role="admin">${icon("shield")} Admin login</button></div>
          <div class="public-hero-stats"><span><strong>${formatNumber(state.events.length)}</strong><small>Active events</small></span><span><strong>${formatNumber(totalRegistrations)}</strong><small>Registrations</small></span><span><strong>${COLLEGE.instituteCode}</strong><small>Institute code</small></span></div>
        </div>
        <div class="public-collage">
          <div class="collage-main"><img src="assets/mgmcet-technical-1.jpg" alt="MGMCET technical event"><span>${icon("code")} Technical Fest</span></div>
          <div class="collage-small sports"><img src="assets/mgmcet-sports-2.jpg" alt="MGMCET sports event"><span>Sports</span></div>
          <div class="collage-small culture"><img src="assets/mgmcet-cultural-3.jpg" alt="MGMCET cultural event"><span>Culture</span></div>
          <span class="collage-spark one">✦</span><span class="collage-spark two">●</span><span class="collage-spark three">✦</span>
        </div>
      </section>
      <div class="campus-marquee" aria-label="Event categories"><div><span>${icon("zap")} Technical</span><i>✦</i><span>${icon("music")} Cultural</span><i>✦</i><span>${icon("trophy")} Sports</span><i>✦</i><span>${icon("book")} Academic</span><i>✦</i><span>${icon("briefcase")} Career</span><i>✦</i><span>${icon("heart")} Wellness</span><i>✦</i><span>${icon("zap")} Technical</span><i>✦</i><span>${icon("music")} Cultural</span></div></div>

      <section class="home-section">
        <div class="section-heading"><div><span class="eyebrow">Don't miss these</span><h2>Happening at MGMCET</h2><p>Fresh experiences created by students and departments</p></div><button class="text-button" type="button" data-view-link="events">See all events ${icon("arrow-right")}</button></div>
        <div class="event-grid dashboard-events">${upcoming.map((event, index) => eventCard(event, index)).join("")}</div>
      </section>

      <section class="home-explore-grid">
        <article class="home-category-panel">
          <div class="section-heading"><div><span class="eyebrow">Find your thing</span><h2>Explore by category</h2></div></div>
          <div class="home-category-list">${categoryCards.map((item, index) => `<button type="button" data-view-link="events" style="--category-color:${getTheme({ color: Object.keys(COLOR_THEMES)[index % Object.keys(COLOR_THEMES).length] }).color};--category-soft:${getTheme({ color: Object.keys(COLOR_THEMES)[index % Object.keys(COLOR_THEMES).length] }).soft}"><span>${icon(categoryIcon(item.category))}</span><span><strong>${escapeHTML(item.category)}</strong><small>${item.count} event${item.count === 1 ? "" : "s"}</small></span>${icon("arrow-right")}</button>`).join("")}</div>
        </article>
        <article class="home-feature-panel">
          <div class="home-feature-badge">${icon("sparkles")} Built for campus life</div>
          <h2>One login. Two experiences.</h2>
          <p>Students get a colorful personal event feed, while administrators get a complete management workspace.</p>
          <div class="home-feature-rows"><div>${icon("ticket-check")} <span><strong>One-click registration</strong><small>Reserve your place and keep a digital pass.</small></span></div><div>${icon("calendar-days")} <span><strong>Live event calendar</strong><small>Never miss a deadline or campus activity.</small></span></div><div>${icon("map-pin")} <span><strong>Verified venues</strong><small>See facilities, facilities data, and booking notes.</small></span></div></div>
          <button class="primary-button" type="button" data-view-link="venues">Explore campus venues ${icon("arrow-right")}</button>
        </article>
      </section>

      <section class="home-section">
        <div class="section-heading"><div><span class="eyebrow">Latest from campus</span><h2>Campus updates</h2></div><button class="text-button" type="button" data-view-link="announcements">View all ${icon("arrow-right")}</button></div>
        <div class="home-update-grid">${updates.map((announcement) => `<article class="home-update-card"><span>${icon("megaphone")}</span><div><small>${escapeHTML(announcement.audience)} · ${escapeHTML(relativeTime(announcement.publishedAt))}</small><h3>${escapeHTML(announcement.title)}</h3><p>${escapeHTML(announcement.message)}</p></div></article>`).join("")}</div>
      </section>

      <section class="home-cta">
        <div><span class="home-cta-icon">${icon("graduation")}</span><div><span class="eyebrow">Your campus starts here</span><h2>Ready to find your next event?</h2><p>Sign in with your student ID to register, save events, and build your personal schedule.</p></div></div>
        <button class="primary-button" type="button" data-view-link="login" data-login-role="student">${icon("lock-keyhole")} Student sign in</button>
      </section>`;
  }

  function renderLoginPage() {
    const isAdmin = state.loginRole === "admin";
    return `
      <section class="login-page">
        <div class="login-visual-panel">
          <img src="assets/mgmcet-technical-1.jpg" alt="MGMCET technical event">
          <div class="login-visual-overlay"></div>
          <div class="login-visual-copy">
            <div class="login-brand"><img src="assets/mgmcet-emblem.png" alt="MGMCET emblem"><span><strong>SmartCLG</strong><small>MGMCET Kamothe</small></span></div>
            <span class="login-secure-chip">${icon("lock-keyhole")} Protected portal</span>
            <h2>One smart workspace.<br>Two secure experiences.</h2>
            <p>Manage campus operations as an administrator or discover and join events as a student.</p>
            <div class="login-security-row"><span>${icon("shield")} Role protected</span><span>${icon("key-round")} Credential access</span><span>${icon("users")} Student privacy</span></div>
          </div>
        </div>
        <div class="login-form-panel">
          <div class="login-form-wrap">
            <div class="login-mobile-brand"><img src="assets/mgmcet-emblem.png" alt="MGMCET emblem"><span><strong>SmartCLG</strong><small>MGMCET Event System</small></span></div>
            <div class="login-heading"><span class="eyebrow">Secure sign in</span><h1>${isAdmin ? "Administrator access" : "Student access"}</h1><p>Enter your assigned user ID and password to continue.</p></div>
            <div class="login-role-tabs" role="tablist" aria-label="Choose portal"><button type="button" class="${isAdmin ? "active" : ""}" data-login-role-tab="admin">${icon("shield")} Administrator</button><button type="button" class="${!isAdmin ? "active" : ""}" data-login-role-tab="student">${icon("graduation")} Student</button></div>
            <form id="loginForm" class="login-form">
              <div class="form-group"><label for="loginUserId">User ID</label><div class="login-input-wrap">${icon("users")}<input id="loginUserId" name="userId" placeholder="Enter your user ID" autocomplete="username" required></div></div>
              <div class="form-group"><label for="loginPassword">Password</label><div class="login-input-wrap">${icon("lock")}<input id="loginPassword" name="password" type="password" placeholder="Enter your password" autocomplete="current-password" minlength="8" required><button type="button" data-toggle-password aria-label="Show password">${icon("eye")}</button></div></div>
              <div class="login-form-options"><span class="credential-note">${icon("shield")} Credentials are verified for this portal only.</span><span>Contact your administrator if access is unavailable.</span></div>
              <p class="login-error" id="loginError" role="alert" hidden></p>
              <button class="primary-button login-submit" type="submit">${icon("lock-keyhole")} Sign in securely</button>
            </form>
            <button class="public-site-link" type="button" data-view-link="events">${icon("eye")} Continue to public events and college information</button>
          </div>
        </div>
      </section>`;
  }

  function bindLoginPage() {
    const form = document.getElementById("loginForm");
    if (!form) return;
    form.addEventListener("submit", authenticateLogin);
    document.querySelectorAll("[data-login-role-tab]").forEach((button) => button.addEventListener("click", () => {
      state.loginRole = button.dataset.loginRoleTab;
      renderCurrentView();
    }));
    document.querySelector("[data-toggle-password]")?.addEventListener("click", (event) => {
      const input = document.getElementById("loginPassword");
      const button = event.currentTarget;
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      button.innerHTML = icon(show ? "eye-off" : "eye");
      button.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  }

  async function hashLoginPassword(password) {
    if (globalThis.crypto?.subtle && globalThis.TextEncoder) {
      const bytes = new TextEncoder().encode(password);
      const digest = await crypto.subtle.digest("SHA-256", bytes);
      return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
    }
    return password;
  }

  async function authenticateLogin(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const errorBox = document.getElementById("loginError");
    if (!form.reportValidity()) return;
    const role = state.loginRole;
    const account = AUTH_ACCOUNTS[role];
    const userId = form.userId.value.trim().toUpperCase();
    const password = form.password.value;
    const submit = form.querySelector(".login-submit");
    submit.disabled = true;
    submit.innerHTML = `${icon("rotate-ccw")} Verifying access...`;
    const passwordHash = await hashLoginPassword(password);
    const validPassword = globalThis.crypto?.subtle ? passwordHash === account.passwordHash : password === account.demoPassword;
    const validUser = userId === account.userId.toUpperCase();
    submit.disabled = false;
    submit.innerHTML = `${icon("lock-keyhole")} Sign in securely`;
    if (!validUser || !validPassword) {
      errorBox.hidden = false;
      errorBox.innerHTML = `${icon("alert-circle")} The user ID or password is incorrect for the ${role} portal.`;
      form.password.select();
      return;
    }
    errorBox.hidden = true;
    state.authenticated = true;
    state.role = role;
    state.authUser = { role, name: account.name, signedInAt: new Date().toISOString() };
    safeSessionSave(STORAGE_KEYS.session, state.authUser);
    const destination = state.pendingView || (role === "admin" ? "dashboard" : "student-home");
    state.pendingView = null;
    navigate(destination);
    showToast("Login successful", `Welcome, ${account.name}. You are signed in as ${account.roleLabel}.`);
  }

  function beginLogin(role, pendingView = null) {
    const safeRole = role === "student" ? "student" : "admin";
    state.authenticated = false;
    state.authUser = null;
    state.role = "public";
    state.loginRole = safeRole;
    state.pendingView = pendingView;
    safeSessionRemove(STORAGE_KEYS.session);
    state.view = "login";
    if (location.hash !== "#login") setRouteHash("#login");
    renderCurrentView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function logoutPortal() {
    const roleLabel = state.role === "admin" ? "Administrator" : "Student";
    state.authenticated = false;
    state.authUser = null;
    state.role = "public";
    state.loginRole = "student";
    state.pendingView = null;
    safeSessionRemove(STORAGE_KEYS.session);
    closeModal();
    closeDrawer();
    navigate("login", true);
    showToast("Signed out", `${roleLabel} access has been closed.`, "info");
  }

  function renderStudentHome() {
    const ownRegistrations = state.registrations.filter((registration) => registration.studentId?.toLowerCase() === state.studentProfile.studentId?.toLowerCase());
    const registeredEventIds = new Set(ownRegistrations.map((registration) => registration.eventId));
    const nextRegistered = upcomingEvents().filter((event) => registeredEventIds.has(event.id));
    const recommended = upcomingEvents().filter((event) => !registeredEventIds.has(event.id)).slice(0, 3);
    const activeAnnouncements = state.announcements.filter((item) => item.active).slice(0, 2);
    const savedCount = state.savedEvents.filter((id) => getEventById(id)).length;

    return `
      ${pageHeader("Student portal", `Hello, ${state.studentProfile.name.split(" ")[0]}`, "Discover events, track your registrations, and stay connected to campus life.", `
        <button class="secondary-button" type="button" data-view-link="profile">${icon("book")} College profile</button>
        <button class="primary-button" type="button" data-view-link="events">${icon("search")} Discover events</button>`)}

      <section class="student-hero">
        <img src="assets/mgmcet-campus.jpg" alt="An MGMCET student seminar session">
        <div class="student-hero-overlay"></div>
        <div class="student-hero-copy">
          <span class="student-campus-pill">${icon("building")} MGMCET · Kamothe</span>
          <h2>Your campus experience,<br>all in one place.</h2>
          <p>Find technical fests, cultural programs, sports events, workshops, and student opportunities across MGMCET.</p>
          <div class="inline-actions"><button class="primary-button" type="button" data-view-link="events">Explore events ${icon("arrow-right")}</button><button class="hero-glass-button" type="button" data-view-link="calendar">${icon("calendar-days")} Open calendar</button></div>
        </div>
        <div class="student-id-card">
          <div class="student-id-top"><span class="avatar avatar-purple">${escapeHTML(initials(state.studentProfile.name))}</span><span><strong>${escapeHTML(state.studentProfile.name)}</strong><small>${escapeHTML(state.studentProfile.studentId)}</small></span><span class="verified-chip">${icon("badge-check")} Student</span></div>
          <div class="student-id-details"><span><small>Department</small><strong>${escapeHTML(state.studentProfile.department)}</strong></span><span><small>Year</small><strong>${escapeHTML(state.studentProfile.year)}</strong></span><span><small>Division</small><strong>${escapeHTML(state.studentProfile.division)}</strong></span></div>
          <button class="text-button" type="button" data-action="edit-student-profile">Edit demo profile ${icon("edit")}</button>
        </div>
      </section>

      <section class="student-stat-grid">
        <article class="student-stat"><span class="student-stat-icon purple">${icon("ticket-check")}</span><span><strong>${formatNumber(ownRegistrations.length)}</strong><small>Total registrations</small></span><em>View</em></article>
        <article class="student-stat"><span class="student-stat-icon mint">${icon("calendar")}</span><span><strong>${formatNumber(nextRegistered.length)}</strong><small>Upcoming events</small></span><em>View</em></article>
        <article class="student-stat"><span class="student-stat-icon orange">${icon("bookmark")}</span><span><strong>${formatNumber(savedCount)}</strong><small>Saved events</small></span><em>Browse</em></article>
      </section>

      <section class="student-content-grid">
        <div>
          <div class="section-heading"><div><h2>Your upcoming events</h2><p>Registrations that are still ahead</p></div><button class="text-button" type="button" data-view-link="my-registrations">My registrations ${icon("arrow-right")}</button></div>
          <div class="event-grid dashboard-events">${nextRegistered.length ? nextRegistered.slice(0, 2).map((event, index) => eventCard(event, index)).join("") : `<div class="empty-state compact-empty"><span class="empty-state-icon">${icon("calendar")}</span><h3>No upcoming registrations</h3><p>Explore events and reserve your place.</p><button class="primary-button" type="button" data-view-link="events">Browse events</button></div>`}</div>

          <div class="section-heading student-section-gap"><div><h2>Recommended for you</h2><p>Popular experiences you have not joined yet</p></div></div>
          <div class="event-grid dashboard-events">${recommended.map((event, index) => eventCard(event, index + 1)).join("")}</div>
        </div>
        <aside class="student-side-column">
          <article class="card student-agenda-card">
            <div class="card-header"><div><h2>Latest updates</h2><p>From event administrators</p></div><span data-icon="megaphone"></span></div>
            <div class="card-body"><div class="student-update-list">${activeAnnouncements.map((announcement) => `<button class="student-update" type="button" data-view-link="announcements"><span class="update-dot"></span><span><strong>${escapeHTML(announcement.title)}</strong><small>${escapeHTML(announcement.audience)} · ${escapeHTML(relativeTime(announcement.publishedAt))}</small></span>${icon("chevron-right")}</button>`).join("") || `<p class="form-hint">No new announcements.</p>`}</div></div>
          </article>
          <article class="card campus-help-card"><span class="campus-help-icon">${icon("map-pin")}</span><h3>New to the event system?</h3><p>Browse verified campus facilities and learn how venue permissions work before registering.</p><button class="secondary-button small-button" type="button" data-view-link="venues">Explore venues</button></article>
        </aside>
      </section>`;
  }

  function renderMyRegistrations() {
    const ownRegistrations = [...state.registrations]
      .filter((registration) => registration.studentId?.toLowerCase() === state.studentProfile.studentId?.toLowerCase())
      .sort((a, b) => new Date(b.registeredAt) - new Date(a.registeredAt));
    const upcoming = ownRegistrations.filter((registration) => getEventStatus(getEventById(registration.eventId)).key !== "completed");

    return `
      ${pageHeader("Student activity", "My registrations", "Keep all your event tickets, confirmations, and schedules in one place.", `<button class="primary-button" type="button" data-view-link="events">${icon("plus")} Find more events</button>`)}
      <section class="registration-summary">
        <div class="summary-card" style="--summary-color:var(--primary);--summary-soft:var(--primary-soft)"><span class="summary-icon">${icon("ticket-check")}</span><span class="summary-copy"><span>All registrations</span><strong>${formatNumber(ownRegistrations.length)}</strong></span></div>
        <div class="summary-card" style="--summary-color:var(--mint);--summary-soft:var(--mint-soft)"><span class="summary-icon">${icon("calendar")}</span><span class="summary-copy"><span>Upcoming</span><strong>${formatNumber(upcoming.length)}</strong></span></div>
        <div class="summary-card" style="--summary-color:var(--orange);--summary-soft:var(--orange-soft)"><span class="summary-icon">${icon("bookmark")}</span><span class="summary-copy"><span>Saved events</span><strong>${formatNumber(state.savedEvents.length)}</strong></span></div>
      </section>
      ${ownRegistrations.length ? `<section class="student-ticket-list">${ownRegistrations.map((registration) => {
        const event = getEventById(registration.eventId);
        if (!event) return "";
        const status = getEventStatus(event);
        return `<article class="student-ticket" style="${eventStyle(event)}">
          <div class="student-ticket-date"><span>${escapeHTML(new Intl.DateTimeFormat("en-US", { month: "short" }).format(parseDateKey(event.date)))}</span><strong>${parseDateKey(event.date).getDate()}</strong><small>${escapeHTML(new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(parseDateKey(event.date)))}</small></div>
          <div class="student-ticket-main"><div class="event-card-topline"><span class="category-label">${escapeHTML(event.category)}</span><span class="status-pill status-${registration.status === "Waitlist" ? "full" : status.key}">${escapeHTML(registration.status === "Waitlist" ? "Waitlist" : status.label)}</span></div><h3>${escapeHTML(event.title)}</h3><div class="event-meta"><span>${icon("clock")} ${escapeHTML(formatTime(event.time))} – ${escapeHTML(formatTime(event.endTime))}</span><span>${icon("map-pin")} ${escapeHTML(event.venue)}</span></div></div>
          <div class="student-ticket-qr"><span class="qr-pattern" aria-hidden="true">${icon("qr-code")}</span><small>Student pass<br><strong>Registered</strong></small></div>
          <div class="student-ticket-actions"><button class="secondary-button small-button" type="button" data-open-event="${escapeHTML(event.id)}">View details</button><button class="row-action" type="button" data-cancel-student-registration="${escapeHTML(registration.id)}" aria-label="Cancel registration">${icon("trash")}</button></div>
        </article>`;
      }).join("")}</section>` : `<div class="empty-state"><span class="empty-state-icon">${icon("ticket-check")}</span><h3>No registrations yet</h3><p>Browse upcoming MGMCET events and register with your student profile in one click.</p><button class="primary-button" type="button" data-view-link="events">Discover events</button></div>`}`;
  }

  function renderCollegeProfile() {
    return `
      ${pageHeader("Official college profile", COLLEGE.shortName, "Public information shown below is based on the institute's official website.", `<button class="secondary-button" type="button" data-action="open-official-site">${icon("external-link")} Official website</button>`)}
      <section class="college-profile-hero">
        <div class="college-profile-image"><img src="assets/mgmcet-campus.jpg" alt="MGMCET student seminar session"><div class="college-image-badge">${icon("badge-check")} Official public information</div></div>
        <div class="college-profile-copy">
          <img class="college-official-logo" src="assets/mgmcet-logo.png" alt="MGM's College of Engineering and Technology logo">
          <span class="eyebrow">Est. ${COLLEGE.established} · Institute Code ${COLLEGE.instituteCode}</span>
          <h2>${escapeHTML(COLLEGE.name)}</h2>
          <p>An engineering institution governed by Mahatma Gandhi Mission, combining value-based education, industry exposure, and modern technical infrastructure in Kamothe, Navi Mumbai.</p>
          <div class="profile-chip-row"><span>${icon("building")} University of Mumbai</span><span>${icon("shield")} AICTE Approved</span><span>${icon("badge-check")} NBA-accredited programmes</span></div>
          <div class="inline-actions"><button class="primary-button" type="button" data-view-link="contact">${icon("phone")} Contact college</button><button class="secondary-button" type="button" data-view-link="venues">${icon("map-pin")} Campus venues</button></div>
        </div>
      </section>

      <section class="college-facts-grid">
        <article><span class="fact-icon violet">${icon("calendar")}</span><strong>1986</strong><small>Institute established</small></article>
        <article><span class="fact-icon blue">${icon("badge-check")}</span><strong>3175</strong><small>DTE / Institute code</small></article>
        <article><span class="fact-icon mint">${icon("book")}</span><strong>NBA</strong><small>Selected programmes accredited</small></article>
        <article><span class="fact-icon orange">${icon("map-pin")}</span><strong>Kamothe</strong><small>Navi Mumbai, Maharashtra</small></article>
      </section>

      <section class="card campus-facilities-profile">
        <div class="card-header"><div><h2>Campus facilities</h2><p>Official resources available for academic, technical, cultural, sports, and student activities</p></div><button class="text-button" type="button" data-view-link="venues">View event venues ${icon("arrow-right")}</button></div>
        <div class="campus-facility-grid">${state.venues.map((venue) => `<button type="button" data-view-link="venues" style="--facility-color:${getTheme({ color: venue.color }).color};--facility-soft:${getTheme({ color: venue.color }).soft}"><span>${icon(venue.icon)}</span><span><strong>${escapeHTML(venue.name)}</strong><small>${escapeHTML(venue.type)} · ${escapeHTML(venue.detail || "Available with approval")}</small></span>${icon("arrow-right")}</button>`).join("")}</div>
        <div class="additional-facilities"><strong>Additional college resources</strong><div>${["Boys & Girls Hostel", "Campus Canteen", "Bus Service", "Parking Space", "Divyangjan Facilities", "Lush Green Campus", "Laboratories", "Workshops"].map((facility) => `<span>${icon("check-circle")} ${facility}</span>`).join("")}</div></div>
      </section>
      <section class="profile-content-grid">
        <article class="card profile-story-card"><div class="card-header"><div><h2>About the institute</h2><p>Technology education with industry exposure</p></div></div><div class="card-body"><p>MGMCET was established in 1986 under Mahatma Gandhi Mission. The official institute profile states that the college aims to provide value-based quality education by combining academics with exposure to industry, supported by modern infrastructure and academic resources.</p><p>The campus is located near Panvel at the junction of NH-4 and the Mumbai–Pune Expressway. Its programmes are approved by AICTE and affiliated to the University of Mumbai. The college also lists the library, laboratories, workshops, sports ground, hostel, canteen, transport, parking, and accessibility facilities among its campus resources.</p><a class="source-link" href="https://mgmmumbai.ac.in/mgmcet/about-us/institute" target="_blank" rel="noopener">${icon("external-link")} Read the official institute profile</a></div></article>
        <aside class="vision-mission-stack">
          <article class="card vision-card"><span class="vision-icon">${icon("sparkles")}</span><span class="eyebrow">Vision</span><p>“${escapeHTML(COLLEGE.vision)}”</p></article>
          <article class="card mission-card"><span class="vision-icon">${icon("navigation")}</span><span class="eyebrow">Mission</span><p>“${escapeHTML(COLLEGE.mission)}”</p></article>
        </aside>
      </section>

      <section class="card recognition-card">
        <div class="card-header"><div><h2>Affiliation & recognition</h2><p>Highlights published by the institute</p></div></div>
        <div class="recognition-grid">
          <article><span>${icon("shield")}</span><strong>AICTE</strong><p>Courses are approved by the All India Council for Technical Education.</p></article>
          <article><span>${icon("building")}</span><strong>University of Mumbai</strong><p>The institute is affiliated to the University of Mumbai.</p></article>
          <article><span>${icon("badge-check")}</span><strong>NBA</strong><p>Computer, Biomedical, Electronics &amp; Telecommunication, and Civil programmes are listed as NBA accredited.</p></article>
          <article><span>${icon("award")}</span><strong>ISO 9001:2000</strong><p>The official profile lists ISO 9001:2000 certification by RINA.</p></article>
        </div>
      </section>

      <section class="card programs-card">
        <div class="card-header"><div><h2>Undergraduate engineering programmes</h2><p>Programmes listed on the official MGMCET website</p></div><span class="status-pill status-upcoming">${COLLEGE_PROGRAMS.length} programmes</span></div>
        <div class="program-grid">${COLLEGE_PROGRAMS.map((program, index) => `<div class="program-item"><span>${pad(index + 1)}</span><strong>${escapeHTML(program)}</strong></div>`).join("")}</div>
      </section>
      <p class="information-note">Information verified from <a href="${COLLEGE.officialSite}" target="_blank" rel="noopener">mgmmumbai.ac.in/mgmcet</a>. Always confirm current academic intake, fees, admissions, and venue permissions through official college notices.</p>`;
  }

  function renderVenues() {
    const admin = state.role === "admin";
    return `
      ${pageHeader("Venue management", "Event venues", admin ? "Add, edit, and assign verified campus facilities to your events." : "Explore complete campus facilities, available features, booking notes, and related events.", admin ? `<button class="secondary-button" type="button" data-view-link="profile">${icon("building")} College facilities</button><button class="primary-button" type="button" data-action="add-venue">${icon("plus")} Add campus venue</button>` : `<button class="primary-button" type="button" data-action="request-venue">${icon("mail")} Request a venue</button>`)}
      <section class="venue-notice"><span>${icon("info")}</span><div><strong>Venue availability is subject to approval</strong><p>Facilities below are confirmed college resources. Room bookings, equipment, safety checks, and Student Affairs permission may still be required.</p></div><button class="text-button" type="button" data-view-link="contact">View contact details →</button></section>
      <section class="venue-grid">${state.venues.map((venue, index) => {
        const theme = getTheme({ color: venue.color });
        const venueEvents = eventsForVenue(venue.id);
        return `<article class="venue-card detailed" style="--venue-color:${theme.color};--venue-soft:${theme.soft};--venue-gradient:${theme.gradient};animation-delay:${index * 55}ms">
          <div class="venue-art"><span>${icon(venue.icon)}</span><i>${escapeHTML(venue.type)}</i>${admin ? `<div class="venue-admin-actions"><button type="button" data-edit-venue="${escapeHTML(venue.id)}" aria-label="Edit ${escapeHTML(venue.name)}">${icon("edit")}</button><button type="button" data-delete-venue="${escapeHTML(venue.id)}" aria-label="Delete ${escapeHTML(venue.name)}">${icon("trash")}</button></div>` : ""}</div>
          <div class="venue-card-body">
            <div class="venue-title-row"><h3>${escapeHTML(venue.name)}</h3><span class="venue-capacity">${formatNumber(venueEvents.length)} event${venueEvents.length === 1 ? "" : "s"}</span></div>
            <p>${escapeHTML(venue.description)}</p>
            <div class="venue-facility-list">${(venue.facilities || []).map((facility) => `<span>${icon("check")} ${escapeHTML(facility)}</span>`).join("")}</div>
            <div class="venue-info-list"><div>${icon("clock")} <span><strong>Capacity</strong><small>${escapeHTML(venue.capacityNote || "To be confirmed")}</small></span></div><div>${icon("accessibility")} <span><strong>Accessibility</strong><small>${escapeHTML(venue.accessibility || "Coordinate requirements with the venue owner.")}</small></span></div><div>${icon("shield")} <span><strong>Booking</strong><small>${escapeHTML(venue.bookingNote || "Approval required before publication.")}</small></span></div></div>
            ${venueEvents.length ? `<div class="venue-events"><strong>Events at this venue</strong>${venueEvents.map((event) => `<button type="button" data-open-event="${escapeHTML(event.id)}">${escapeHTML(event.title)} ${icon("arrow-right")}</button>`).join("")}</div>` : `<p class="venue-empty">No events are currently assigned to this venue.</p>`}
            <div class="venue-card-footer"><span class="approval-chip">${icon("badge-check")} Official campus facility</span>${admin ? `<button class="text-button" type="button" data-edit-venue="${escapeHTML(venue.id)}">Edit venue ${icon("edit")}</button>` : `<button class="text-button" type="button" data-action="request-venue" data-venue="${escapeHTML(venue.name)}">Request ${icon("arrow-right")}</button>`}</div>
          </div>
        </article>`;
      }).join("")}</section>
      ${admin ? `<div class="empty-state" style="min-height:150px;margin-bottom:16px"><span class="empty-state-icon">${icon("plus")}</span><h3>Add another campus facility</h3><p>Create a venue record with its equipment, capacity, accessibility, and booking requirements.</p><button class="primary-button" type="button" data-action="add-venue">${icon("plus")} Add campus venue</button></div>` : ""}
      <section class="card venue-guidelines"><div class="card-header"><div><h2>Booking checklist</h2><p>Plan a safe and smooth campus event</p></div></div><div class="guideline-grid"><div><span>1</span><strong>Choose the facility</strong><p>Match the format, audience size, and accessibility needs.</p></div><div><span>2</span><strong>Contact the college</strong><p>Use the official contact details to confirm the booking process.</p></div><div><span>3</span><strong>Complete approvals</strong><p>Obtain department, faculty, safety, or Student Affairs approval.</p></div><div><span>4</span><strong>Publish details</strong><p>Only add the confirmed venue to the student event listing.</p></div></div></section>`;
  }

  function openVenueModal(id = null) {
    if (state.role !== "admin") { beginLogin("admin"); return; }
    const venue = id ? getVenueById(id) : null;
    const facilityOptions = ["users", "book", "trophy", "monitor", "settings", "sparkles", "megaphone"];
    openModal(`
      <form id="venueForm">
        <div class="modal-header"><div><h2>${venue ? "Edit campus venue" : "Add campus venue"}</h2><p>Store complete facility information for event planning.</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
        <div class="modal-body"><div class="form-grid">
          <div class="form-group full"><label for="venueName">Venue name</label><div class="form-control"><input id="venueName" name="name" value="${escapeHTML(venue?.name || "")}" placeholder="e.g. Seminar Room" required></div></div>
          <div class="form-group"><label for="venueType">Venue type</label><div class="form-control"><select id="venueType" name="type">${["Academic", "Technical", "Outdoor", "Informal", "Workshop", "Sports", "Other"].map((type) => `<option ${venue?.type === type ? "selected" : ""}>${type}</option>`).join("")}</select></div></div>
          <div class="form-group"><label for="venueIcon">Facility icon</label><div class="form-control"><select id="venueIcon" name="icon">${facilityOptions.map((name) => `<option value="${name}" ${venue?.icon === name ? "selected" : ""}>${name}</option>`).join("")}</select></div></div>
          <div class="form-group full"><label for="venueDescription">Description</label><div class="form-control"><textarea id="venueDescription" name="description" required>${escapeHTML(venue?.description || "")}</textarea></div></div>
          <div class="form-group full"><label for="venueFacilities">Facilities / equipment</label><div class="form-control"><input id="venueFacilities" name="facilities" value="${escapeHTML((venue?.facilities || []).join(", "))}" placeholder="Projector, whiteboard, accessible seating"></div><span class="form-hint">Separate each facility with a comma.</span></div>
          <div class="form-group"><label for="venueCapacity">Capacity note</label><div class="form-control"><input id="venueCapacity" name="capacityNote" value="${escapeHTML(venue?.capacityNote || "To be confirmed by the venue owner")}"></div></div>
          <div class="form-group"><label for="venueBooking">Booking requirement</label><div class="form-control"><input id="venueBooking" name="bookingNote" value="${escapeHTML(venue?.bookingNote || "Student Affairs approval required")}"></div></div>
          <div class="form-group full"><label for="venueAccessibility">Accessibility information</label><div class="form-control"><input id="venueAccessibility" name="accessibility" value="${escapeHTML(venue?.accessibility || "Coordinate requirements with the venue owner")}"></div></div>
          <div class="form-group full"><span class="form-label">Card color</span><div class="color-options">${Object.entries(COLOR_THEMES).map(([name, theme]) => `<label class="color-option" style="--option-color:${theme.color}"><input type="radio" name="color" value="${name}" ${(venue?.color || "violet") === name ? "checked" : ""}><span></span></label>`).join("")}</div></div>
        </div></div>
        <div class="modal-footer"><button class="secondary-button" type="button" data-close-modal>Cancel</button><button class="primary-button" type="submit">${icon("check")} ${venue ? "Save venue" : "Add venue"}</button></div>
      </form>`);
    document.getElementById("venueForm").addEventListener("submit", (formEvent) => {
      formEvent.preventDefault();
      const form = formEvent.currentTarget;
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const payload = {
        id: venue?.id || uniqueId("venue"),
        name: data.get("name").trim(),
        type: data.get("type"),
        icon: data.get("icon"),
        description: data.get("description").trim(),
        facilities: data.get("facilities").split(",").map((item) => item.trim()).filter(Boolean),
        capacityNote: data.get("capacityNote").trim(),
        bookingNote: data.get("bookingNote").trim(),
        accessibility: data.get("accessibility").trim(),
        color: data.get("color"),
        detail: "Facility details maintained by the event administrator"
      };
      if (venue) state.venues = state.venues.map((item) => item.id === venue.id ? payload : item);
      else state.venues.push(payload);
      safeSave(STORAGE_KEYS.venues, state.venues);
      closeModal();
      renderCurrentView();
      showToast(venue ? "Venue updated" : "Venue added", `${payload.name} is now available in event planning.`);
    });
  }

  async function deleteVenue(id) {
    const venue = getVenueById(id);
    if (!venue) return;
    const linked = eventsForVenue(id).length;
    const confirmed = await showConfirm({ title: "Delete this campus venue?", message: linked ? `${venue.name} is assigned to ${linked} event(s). Deleting it will require those events to be updated.` : `${venue.name} will be removed from the venue catalogue.`, confirmText: "Delete venue" });
    if (!confirmed) return;
    state.venues = state.venues.filter((item) => item.id !== id);
    state.events = state.events.map((event) => event.venueId === id ? { ...event, venueId: null } : event);
    safeSave(STORAGE_KEYS.venues, state.venues);
    safeSave(STORAGE_KEYS.events, state.events);
    renderCurrentView();
    showToast("Venue deleted", `${venue.name} was removed. Linked events need a new venue.`, "info");
  }

  function renderContact() {
    return `
      ${pageHeader("Official contact", "Contact MGMCET", "Reach the college using the contact information published on its official website.", `<button class="secondary-button" type="button" data-action="open-official-site">${icon("external-link")} Official website</button>`)}
      <section class="contact-hero">
        <div class="contact-copy"><span class="contact-icon">${icon("map-pin")}</span><span class="eyebrow">Sector 18 · Kamothe</span><h2>${escapeHTML(COLLEGE.name)}</h2><p>${escapeHTML(COLLEGE.address)}</p><div class="inline-actions"><a class="primary-button" href="${COLLEGE.mapUrl}" target="_blank" rel="noopener">${icon("navigation")} Get directions</a><a class="secondary-button" href="https://mgmmumbai.ac.in/mgmcet/gallery" target="_blank" rel="noopener">${icon("grid")} Campus gallery</a></div></div>
        <div class="contact-map-card"><div class="map-grid-art"><span class="map-pin-large">${icon("map-pin")}</span><i></i><i></i><i></i><i></i></div><div><strong>MGMCET Campus</strong><small>Plot No. 1 & 2, Sector 18, Kamothe</small><a href="${COLLEGE.mapUrl}" target="_blank" rel="noopener">Open in Google Maps ${icon("external-link")}</a></div></div>
      </section>
      <section class="contact-grid">
        <article class="contact-card"><span class="contact-card-icon purple">${icon("mail")}</span><div><span>Email</span><a href="mailto:${COLLEGE.email}">${COLLEGE.email}</a><p>General official email published by the institute.</p></div></article>
        <article class="contact-card"><span class="contact-card-icon mint">${icon("phone")}</span><div><span>Phone</span>${COLLEGE.phones.map((phone) => `<a href="tel:${phone.replace(/[^+\d]/g, "")}">${escapeHTML(phone)}</a>`).join("")}<p>Contact the college office for academic or event-related enquiries.</p></div></article>
        <article class="contact-card"><span class="contact-card-icon orange">${icon("file")}</span><div><span>Telefax</span><a href="tel:${COLLEGE.telefax.replace(/[^+\d]/g, "")}">${escapeHTML(COLLEGE.telefax)}</a><p>Telefax number shown on the official college website.</p></div></article>
        <article class="contact-card"><span class="contact-card-icon blue">${icon("building")}</span><div><span>Institute code</span><strong class="contact-value">${COLLEGE.instituteCode}</strong><p>Use this code for official DTE and institute references.</p></div></article>
      </section>
      <section class="contact-links-grid">
        <article class="card official-link-card"><div class="card-header"><div><h2>Official online resources</h2><p>Continue to the institute website for current notices</p></div></div><div class="official-links"><a href="https://mgmmumbai.ac.in/mgmcet/" target="_blank" rel="noopener"><span>${icon("building")}</span><span><strong>College website</strong><small>Home, admissions, notices and departments</small></span>${icon("external-link")}</a><a href="https://mgmmumbai.ac.in/mgmcet/academics/academic-calender" target="_blank" rel="noopener"><span>${icon("calendar")}</span><span><strong>Academic calendar</strong><small>Official academic schedule and activities</small></span>${icon("external-link")}</a><a href="https://mgmmumbai.ac.in/mgmcet/gallery" target="_blank" rel="noopener"><span>${icon("grid")}</span><span><strong>Photo gallery</strong><small>Official campus and student activity gallery</small></span>${icon("external-link")}</a><a href="https://www.instagram.com/mgmcetofficials/" target="_blank" rel="noopener"><span>${icon("users")}</span><span><strong>Instagram</strong><small>@mgmcetofficials</small></span>${icon("external-link")}</a></div></article>
        <aside class="card contact-note-card"><span>${icon("info")}</span><h3>For events and venues</h3><p>SmartCLG is an event-management interface, not an official college admissions or contact system. For authoritative scheduling, venue booking, or student credentials, contact MGMCET through the channels above.</p></aside>
      </section>`;
  }

  function renderEventsPage() {
    const categories = [...new Set([...CATEGORIES, ...state.events.map((event) => event.category)])];
    const studentMode = state.role === "student";
    const publicMode = state.role === "public";
    return `
      ${pageHeader(studentMode ? "Student discovery" : publicMode ? "Public event listing" : "Event management", studentMode ? "Discover events" : publicMode ? "Campus events" : "All events", studentMode ? "Browse technical, cultural, sports, career, and wellness events across campus." : publicMode ? "Browse official MGMCET event categories. Sign in as a student to register." : "Plan, publish, and monitor every campus experience from one place.", studentMode
        ? `<button class="secondary-button" type="button" data-view-link="my-registrations">${icon("ticket-check")} My registrations</button><button class="primary-button" type="button" data-view-link="calendar">${icon("calendar-days")} Calendar</button>`
        : publicMode ? `<button class="secondary-button" type="button" data-view-link="profile">${icon("book")} MGMCET profile</button><button class="primary-button" type="button" data-view-link="login" data-login-role="student">${icon("lock-keyhole")} Student login</button>`
        : `<button class="secondary-button" type="button" data-action="export-events">${icon("download")} Export</button><button class="primary-button" type="button" data-action="add-event">${icon("plus")} Create event</button>`)}
      <div class="toolbar">
        <div class="toolbar-left">
          <label class="search-control" aria-label="Search events"><span data-icon="search"></span><input id="eventSearch" type="search" value="${escapeHTML(state.eventFilters.search)}" placeholder="Search title, venue, organizer..." autocomplete="off"></label>
        </div>
        <div class="toolbar-right">
          <div class="select-control"><select id="eventCategory" aria-label="Filter by category"><option value="All">All categories</option>${categories.map((category) => `<option value="${escapeHTML(category)}" ${state.eventFilters.category === category ? "selected" : ""}>${escapeHTML(category)}</option>`).join("")}</select></div>
          <div class="select-control"><select id="eventStatus" aria-label="Filter by status"><option value="All" ${state.eventFilters.status === "All" ? "selected" : ""}>All statuses</option><option value="upcoming" ${state.eventFilters.status === "upcoming" ? "selected" : ""}>Upcoming</option><option value="live" ${state.eventFilters.status === "live" ? "selected" : ""}>Today</option><option value="full" ${state.eventFilters.status === "full" ? "selected" : ""}>Full</option><option value="completed" ${state.eventFilters.status === "completed" ? "selected" : ""}>Completed</option></select></div>
          <div class="select-control"><select id="eventSort" aria-label="Sort events"><option value="date-asc" ${state.eventFilters.sort === "date-asc" ? "selected" : ""}>Date: soonest</option><option value="date-desc" ${state.eventFilters.sort === "date-desc" ? "selected" : ""}>Date: latest</option><option value="popular" ${state.eventFilters.sort === "popular" ? "selected" : ""}>Most popular</option><option value="capacity" ${state.eventFilters.sort === "capacity" ? "selected" : ""}>Largest capacity</option></select></div>
          <div class="view-toggle" aria-label="Change event view"><button type="button" class="${state.eventLayout === "grid" ? "active" : ""}" data-event-layout="grid" aria-label="Grid view">${icon("layout-grid")}</button><button type="button" class="${state.eventLayout === "list" ? "active" : ""}" data-event-layout="list" aria-label="List view">${icon("list")}</button></div>
        </div>
      </div>
      <div class="result-summary" id="eventResultSummary">${eventResultSummary()}</div>
      <section id="eventResults">${eventResultsMarkup()}</section>`;
  }

  function filteredRegistrations() {
    const query = state.registrationFilters.search.trim().toLowerCase();
    return [...state.registrations]
      .filter((registration) => {
        const event = getEventById(registration.eventId);
        const searchable = [registration.name, registration.email, registration.studentId, registration.department, event?.title].join(" ").toLowerCase();
        return (!query || searchable.includes(query)) && (state.registrationFilters.event === "All" || registration.eventId === state.registrationFilters.event);
      })
      .sort((a, b) => new Date(b.registeredAt) - new Date(a.registeredAt));
  }

  function registrationTableMarkup() {
    const registrations = filteredRegistrations();
    if (!registrations.length) {
      return `<div class="empty-state" style="min-height:260px;border:0"><span class="empty-state-icon">${icon("users")}</span><h3>No matching registrations</h3><p>Try a different search or register a new attendee.</p><button class="primary-button" type="button" data-action="register-general">${icon("user-plus")} Register attendee</button></div>`;
    }
    return `
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Student</th><th>Event</th><th>Student ID</th><th>Department</th><th>Registered</th><th>Status</th><th aria-label="Actions"></th></tr></thead>
          <tbody>
            ${registrations.map((registration) => {
              const event = getEventById(registration.eventId);
              const waitlist = registration.status === "Waitlist";
              return `<tr>
                <td><div class="student-cell"><span class="avatar ${pickAvatarColor(registration.name)}">${escapeHTML(initials(registration.name))}</span><span><strong>${escapeHTML(registration.name)}</strong><small>${escapeHTML(registration.email)}</small></span></div></td>
                <td><button class="text-button" type="button" data-open-event="${escapeHTML(registration.eventId)}" style="color:var(--text);font-size:10.5px">${escapeHTML(event?.title || "Unknown event")}</button></td>
                <td>${escapeHTML(registration.studentId)}</td>
                <td>${escapeHTML(registration.department)}</td>
                <td>${escapeHTML(formatLongDate(registration.registeredAt.slice(0, 10)))}</td>
                <td><span class="attendance-status ${waitlist ? "pending" : ""}">${waitlist ? "Waitlist" : "Confirmed"}</span></td>
                <td><button class="row-action" type="button" data-remove-registration="${escapeHTML(registration.id)}" aria-label="Remove ${escapeHTML(registration.name)}">${icon("trash")}</button></td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>`;
  }

  function renderRegistrations() {
    const confirmed = state.registrations.filter((registration) => registration.status !== "Waitlist").length;
    const waitlist = state.registrations.length - confirmed;
    const uniqueStudents = new Set(state.registrations.map((registration) => registration.studentId.toLowerCase())).size;
    const activeEvents = upcomingEvents().length || 1;
    const attendance = Math.min(99, Math.round(76 + uniqueStudents / Math.max(activeEvents * 12, 1)));
    return `
      ${pageHeader("Attendee management", "Registrations", "Track student sign-ups, manage capacity, and export attendance-ready data.", `
        <button class="secondary-button" type="button" data-action="export-registrations">${icon("download")} Export CSV</button>
        <button class="primary-button" type="button" data-action="register-general">${icon("user-plus")} Register attendee</button>`)}
      <section class="registration-summary">
        <div class="summary-card" style="--summary-color:var(--primary);--summary-soft:var(--primary-soft)"><span class="summary-icon">${icon("users")}</span><span class="summary-copy"><span>Total registrations</span><strong>${formatNumber(state.registrations.length)}</strong></span></div>
        <div class="summary-card" style="--summary-color:var(--mint);--summary-soft:var(--mint-soft)"><span class="summary-icon">${icon("check-circle")}</span><span class="summary-copy"><span>Confirmed seats</span><strong>${formatNumber(confirmed)}</strong></span></div>
        <div class="summary-card" style="--summary-color:var(--orange);--summary-soft:var(--orange-soft)"><span class="summary-icon">${icon("chart")}</span><span class="summary-copy"><span>Est. attendance</span><strong>${attendance}%</strong></span></div>
      </section>
      <div class="toolbar">
        <div class="toolbar-left"><label class="search-control" aria-label="Search registrations"><span data-icon="search"></span><input id="registrationSearch" type="search" value="${escapeHTML(state.registrationFilters.search)}" placeholder="Search student, email, ID or event..."></label></div>
        <div class="toolbar-right"><div class="select-control"><select id="registrationEvent" aria-label="Filter registrations by event"><option value="All">All events</option>${[...state.events].sort((a, b) => b.date.localeCompare(a.date)).map((event) => `<option value="${escapeHTML(event.id)}" ${state.registrationFilters.event === event.id ? "selected" : ""}>${escapeHTML(event.title)}</option>`).join("")}</select></div></div>
      </div>
      <div class="result-summary">${formatNumber(filteredRegistrations().length)} of ${formatNumber(state.registrations.length)} registrations${waitlist ? ` · ${formatNumber(waitlist)} on waitlist` : ""}</div>
      <section id="registrationResults">${registrationTableMarkup()}</section>`;
  }

  function filteredRecordData() {
    const query = state.recordFilters.search.trim().toLowerCase();
    const rows = state.registrations.filter((registration) => {
      const event = getEventById(registration.eventId);
      const searchable = [registration.name, registration.email, registration.studentId, registration.department, registration.year, registration.status, event?.title].join(" ").toLowerCase();
      const attendance = registration.attendance || "Not marked";
      return (!query || searchable.includes(query))
        && (state.recordFilters.event === "All" || registration.eventId === state.recordFilters.event)
        && (state.recordFilters.status === "All" || registration.status === state.recordFilters.status)
        && (state.recordFilters.attendance === "All" || attendance === state.recordFilters.attendance);
    });
    return rows.sort((a, b) => {
      if (state.recordFilters.sort === "oldest") return new Date(a.registeredAt) - new Date(b.registeredAt);
      if (state.recordFilters.sort === "name") return a.name.localeCompare(b.name);
      if (state.recordFilters.sort === "event") return (getEventById(a.eventId)?.title || "").localeCompare(getEventById(b.eventId)?.title || "");
      return new Date(b.registeredAt) - new Date(a.registeredAt);
    });
  }

  function registrationRecordNumber(registration) {
    const index = [...state.registrations].sort((a, b) => new Date(a.registeredAt) - new Date(b.registeredAt)).findIndex((item) => item.id === registration.id);
    return `REG-${String(index + 1).padStart(4, "0")}`;
  }

  function registrationRecordTable() {
    const records = filteredRecordData();
    if (!records.length) return `<div class="empty-state" style="min-height:250px;border:0"><span class="empty-state-icon">${icon("database")}</span><h3>No records found</h3><p>Try changing the search or record filters.</p><button class="primary-button" type="button" data-action="clear-record-filters">Clear filters</button></div>`;
    return `<div class="table-wrap registration-record-table-wrap"><table class="data-table registration-record-table"><thead><tr><th>Record</th><th>Student</th><th>Event</th><th>Department</th><th>Registration status</th><th>Attendance</th><th>Registered on</th><th aria-label="Actions"></th></tr></thead><tbody>${records.map((registration) => {
      const event = getEventById(registration.eventId);
      const attendance = registration.attendance || "Not marked";
      const present = attendance === "Present";
      return `<tr><td><strong class="record-number">${registrationRecordNumber(registration)}</strong></td><td><div class="student-cell"><span class="avatar ${pickAvatarColor(registration.name)}">${escapeHTML(initials(registration.name))}</span><span><strong>${escapeHTML(registration.name)}</strong><small>${escapeHTML(registration.studentId)} · ${escapeHTML(registration.year)}</small></span></div></td><td><button class="text-button" type="button" data-open-event="${escapeHTML(registration.eventId)}" style="color:var(--text);font-size:10.5px">${escapeHTML(event?.title || "Unknown event")}</button></td><td>${escapeHTML(registration.department)}</td><td><span class="attendance-status ${registration.status === "Waitlist" ? "pending" : ""}">${escapeHTML(registration.status)}</span></td><td><button class="attendance-mark ${present ? "present" : ""}" type="button" data-toggle-attendance="${escapeHTML(registration.id)}">${icon(present ? "check-circle" : "user-plus")} ${escapeHTML(attendance)}</button></td><td>${escapeHTML(formatLongDate(registration.registeredAt.slice(0, 10)))}<small class="table-time">${escapeHTML(new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(new Date(registration.registeredAt)))}</small></td><td><button class="row-action" type="button" data-view-registration="${escapeHTML(registration.id)}" aria-label="View ${escapeHTML(registration.name)} record">${icon("eye")}</button></td></tr>`;
    }).join("")}</tbody></table></div>`;
  }

  function renderRegistrationRecords() {
    const confirmed = state.registrations.filter((item) => item.status === "Confirmed").length;
    const waitlist = state.registrations.filter((item) => item.status === "Waitlist").length;
    const present = state.registrations.filter((item) => item.attendance === "Present").length;
    const uniqueStudents = new Set(state.registrations.map((item) => item.studentId.toLowerCase())).size;
    const eventSummary = [...state.events].map((event) => {
      const records = state.registrations.filter((item) => item.eventId === event.id);
      return { event, total: records.length, confirmed: records.filter((item) => item.status === "Confirmed").length, waitlist: records.filter((item) => item.status === "Waitlist").length };
    }).sort((a, b) => b.total - a.total);
    return `
      ${pageHeader("Administrator data", "Registration records", "A complete, downloadable record of every event registration and attendance mark.", `<button class="secondary-button" type="button" data-action="print-records">${icon("file")} Print</button><button class="primary-button" type="button" data-action="export-records">${icon("download")} Export all records</button>`)}
      <section class="registration-summary">
        <div class="summary-card" style="--summary-color:var(--primary);--summary-soft:var(--primary-soft)"><span class="summary-icon">${icon("database")}</span><span class="summary-copy"><span>Total records</span><strong>${formatNumber(state.registrations.length)}</strong></span></div>
        <div class="summary-card" style="--summary-color:var(--mint);--summary-soft:var(--mint-soft)"><span class="summary-icon">${icon("check-circle")}</span><span class="summary-copy"><span>Confirmed</span><strong>${formatNumber(confirmed)}</strong></span></div>
        <div class="summary-card" style="--summary-color:var(--orange);--summary-soft:var(--orange-soft)"><span class="summary-icon">${icon("users")}</span><span class="summary-copy"><span>Unique students</span><strong>${formatNumber(uniqueStudents)}</strong></span></div>
        <div class="summary-card" style="--summary-color:var(--blue);--summary-soft:var(--blue-soft)"><span class="summary-icon">${icon("badge-check")}</span><span class="summary-copy"><span>Attendance marked</span><strong>${formatNumber(present)}</strong></span></div>
      </section>
      <section class="card record-summary-events"><div class="card-header"><div><h2>Event-wise record summary</h2><p>Registration totals for every event</p></div>${waitlist ? `<span class="status-pill status-full">${waitlist} waitlisted</span>` : ""}</div><div class="record-event-grid">${eventSummary.map((item) => { const fill = percentage(item.confirmed, item.event.capacity); return `<button type="button" data-open-event="${escapeHTML(item.event.id)}" style="--event-color:${getTheme(item.event).color};--event-soft:${getTheme(item.event).soft}"><span class="record-event-icon">${icon(categoryIcon(item.event.category))}</span><span><strong>${escapeHTML(item.event.title)}</strong><small>${formatLongDate(item.event.date)}</small></span><span><strong>${item.total}</strong><small>${fill}% filled</small></span></button>`; }).join("")}</div></section>
      <div class="toolbar record-toolbar"><div class="toolbar-left"><label class="search-control" aria-label="Search registration records"><span data-icon="search"></span><input id="recordSearch" type="search" value="${escapeHTML(state.recordFilters.search)}" placeholder="Search record, student, ID, event or department..."></label></div><div class="toolbar-right">
        <div class="select-control"><select id="recordEvent" aria-label="Filter records by event"><option value="All">All events</option>${[...state.events].sort((a, b) => b.date.localeCompare(a.date)).map((event) => `<option value="${escapeHTML(event.id)}" ${state.recordFilters.event === event.id ? "selected" : ""}>${escapeHTML(event.title)}</option>`).join("")}</select></div>
        <div class="select-control"><select id="recordStatus" aria-label="Filter by registration status"><option value="All" ${state.recordFilters.status === "All" ? "selected" : ""}>All statuses</option><option value="Confirmed" ${state.recordFilters.status === "Confirmed" ? "selected" : ""}>Confirmed</option><option value="Waitlist" ${state.recordFilters.status === "Waitlist" ? "selected" : ""}>Waitlist</option></select></div>
        <div class="select-control"><select id="recordAttendance" aria-label="Filter by attendance"><option value="All" ${state.recordFilters.attendance === "All" ? "selected" : ""}>All attendance</option><option value="Not marked" ${state.recordFilters.attendance === "Not marked" ? "selected" : ""}>Not marked</option><option value="Present" ${state.recordFilters.attendance === "Present" ? "selected" : ""}>Present</option></select></div>
        <div class="select-control"><select id="recordSort" aria-label="Sort records"><option value="newest" ${state.recordFilters.sort === "newest" ? "selected" : ""}>Newest first</option><option value="oldest" ${state.recordFilters.sort === "oldest" ? "selected" : ""}>Oldest first</option><option value="name" ${state.recordFilters.sort === "name" ? "selected" : ""}>Student name</option><option value="event" ${state.recordFilters.sort === "event" ? "selected" : ""}>Event name</option></select></div>
      </div></div>
      <div class="result-summary" id="recordResultSummary">${formatNumber(filteredRecordData().length)} of ${formatNumber(state.registrations.length)} records shown</div>
      <section id="registrationRecordResults">${registrationRecordTable()}</section>`;
  }

  function calendarMarkup() {
    const date = state.calendarDate;
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1, 12);
    const startDate = new Date(year, month, 1 - firstDay.getDay(), 12);
    const today = toDateKey(new Date());
    const days = [];

    for (let index = 0; index < 42; index += 1) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + index);
      const key = toDateKey(day);
      const dayEvents = state.events.filter((event) => event.date === key);
      const outside = day.getMonth() !== month;
      days.push(`
        <div class="calendar-day ${outside ? "outside-month" : ""} ${key === today ? "today" : ""}">
          <span class="day-number">${day.getDate()}</span>
          <div class="calendar-events">
            ${dayEvents.slice(0, 2).map((event) => `<div class="calendar-event" style="--event-color:${getTheme(event).color}" data-open-event="${escapeHTML(event.id)}" title="${escapeHTML(event.title)}">${escapeHTML(event.title)}</div>`).join("")}
            ${dayEvents.length > 2 ? `<div class="calendar-event more">+${dayEvents.length - 2} more</div>` : ""}
          </div>
        </div>`);
    }

    const studentMode = state.role === "student";
    const publicMode = state.role === "public";
    return `
      ${pageHeader("Academic schedule", publicMode || studentMode ? "Campus event calendar" : "Event calendar", publicMode ? "Browse published campus event dates. Sign in as a student to manage your schedule." : studentMode ? "Plan your schedule and see all published campus events." : "See the complete campus calendar and spot scheduling conflicts instantly.", publicMode || studentMode
        ? `<button class="secondary-button" type="button" data-action="export-calendar">${icon("download")} Export .ics</button><button class="primary-button" type="button" data-view-link="events">${icon("search")} Discover events</button>`
        : `<button class="secondary-button" type="button" data-action="export-calendar">${icon("download")} Export .ics</button><button class="primary-button" type="button" data-action="add-event">${icon("plus")} Create event</button>`)}
      <section class="card calendar-card">
        <div class="calendar-toolbar">
          <div class="calendar-nav"><button class="icon-button" type="button" data-calendar-nav="prev" aria-label="Previous month">${icon("chevron-left")}</button><h2>${escapeHTML(formatMonth(date))}</h2><button class="icon-button" type="button" data-calendar-nav="next" aria-label="Next month">${icon("chevron-right")}</button></div>
          <button class="secondary-button small-button" type="button" data-calendar-nav="today">${icon("calendar")} Today</button>
        </div>
        <div class="calendar-grid">
          ${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<div class="calendar-weekday">${day}</div>`).join("")}
          ${days.join("")}
        </div>
        <div class="calendar-legend">${CATEGORIES.slice(0, 6).map((category) => { const event = state.events.find((item) => item.category === category); const color = event ? getTheme(event).color : Object.values(COLOR_THEMES)[CATEGORIES.indexOf(category) % Object.values(COLOR_THEMES).length].color; return `<span><i class="legend-dot" style="--legend-color:${color}"></i>${category}</span>`; }).join("")}</div>
      </section>`;
  }

  function buildLineChart() {
    const total = Math.max(state.events.reduce((sum, event) => sum + Number(event.registered || 0), 0), 12);
    const factors = [0.045, 0.07, 0.055, 0.11, 0.085, 0.14, 0.125];
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const values = factors.map((factor) => Math.max(2, Math.round(total * factor)));
    const width = 720;
    const height = 220;
    const padding = { left: 40, right: 16, top: 15, bottom: 30 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    const maxValue = Math.max(...values) * 1.15;
    const points = values.map((value, index) => ({
      x: padding.left + (chartWidth / (values.length - 1)) * index,
      y: padding.top + chartHeight - (value / maxValue) * chartHeight,
      value
    }));
    const linePath = points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
    const areaPath = `${linePath} L ${points.at(-1).x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;
    const gridLines = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
      const y = padding.top + chartHeight * ratio;
      const label = Math.round(maxValue * (1 - ratio));
      return `<line class="chart-grid-line" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}"/><text class="chart-axis-label" x="${padding.left - 10}" y="${y + 3}" text-anchor="end">${label}</text>`;
    }).join("");
    return `
      <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Registration activity over the last seven days">
        <defs><linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--primary)" stop-opacity="0.24"/><stop offset="1" stop-color="var(--primary)" stop-opacity="0"/></linearGradient></defs>
        ${gridLines}
        <path class="chart-area" d="${areaPath}"/>
        <path class="chart-line" d="${linePath}"/>
        ${points.map((point, index) => `<circle class="${index === points.length - 1 ? "chart-tooltip-dot" : "chart-point"}" cx="${point.x}" cy="${point.y}" r="${index === points.length - 1 ? 5 : 3.5}"/>`).join("")}
        ${labels.map((label, index) => `<text class="chart-axis-label" x="${points[index].x}" y="${height - 7}" text-anchor="middle">${label}</text>`).join("")}
      </svg>`;
  }

  function renderAnalytics() {
    const totalRegistrations = state.events.reduce((sum, event) => sum + Number(event.registered || 0), 0);
    const totalCapacity = state.events.reduce((sum, event) => sum + Number(event.capacity || 0), 0);
    const averageFill = percentage(totalRegistrations, totalCapacity);
    const categories = CATEGORIES.map((category) => ({
      category,
      count: state.events.filter((event) => event.category === category).reduce((sum, event) => sum + Number(event.registered || 0), 0)
    })).filter((item) => item.count > 0);
    const categoryTotal = categories.reduce((sum, item) => sum + item.count, 0) || 1;
    let cursor = 0;
    const gradientStops = categories.map((item, index) => {
      const start = cursor;
      cursor += (item.count / categoryTotal) * 100;
      return `${getCategoryFallbackColor(index, item.category)} ${start}% ${cursor}%`;
    });
    const topEvents = [...state.events].sort((a, b) => Number(b.registered) - Number(a.registered)).slice(0, 5);
    const maxRegistrations = Math.max(...topEvents.map((event) => Number(event.registered)), 1);
    const busiest = [...state.events].sort((a, b) => percentage(b.registered, b.capacity) - percentage(a.registered, a.capacity))[0];

    return `
      ${pageHeader("Performance intelligence", "Event insights", "Understand demand, improve attendance, and make better planning decisions.", `
        <button class="secondary-button" type="button" data-action="export-insights">${icon("download")} Export report</button>`)}
      <section class="metric-grid">
        ${metricCard("Managed events", formatNumber(state.events.length), "calendar", "purple", "+3 this term")}
        ${metricCard("Registrations captured", formatNumber(totalRegistrations), "users", "mint", "+16.8%")}
        ${metricCard("Average fill rate", `${averageFill}%`, "chart", "orange", "+5.4%")}
        ${metricCard("Announcement reach", "1.8K", "megaphone", "blue", "+22.4%")}
      </section>
      <section class="analytics-grid">
        <article class="card chart-card">
          <div class="card-header"><div><h2>Registration activity</h2><p>Sign-ups captured over the last 7 days</p></div><span class="status-pill status-upcoming">Live data</span></div>
          <div class="chart-wrap">${buildLineChart()}</div>
          <div class="chart-legend-row"><span><i class="legend-line"></i> Registrations</span><span>${icon("info")} Based on current event volume</span></div>
        </article>
        <article class="card donut-card">
          <div class="card-header"><div><h2>Audience mix</h2><p>Registrations by category</p></div></div>
          <div class="donut-body"><div class="donut-chart" style="background:conic-gradient(${gradientStops.length ? gradientStops.join(",") : "var(--border) 0 100%"})"><span class="donut-center"><strong>${formatNumber(totalRegistrations)}</strong><span>Total sign-ups</span></span></div></div>
          <div class="breakdown-list">${categories.slice(0, 5).map((item, index) => `<div class="breakdown-item"><i style="--breakdown-color:${getCategoryFallbackColor(index, item.category)}"></i><span>${escapeHTML(item.category)}</span><strong>${percentage(item.count, categoryTotal)}%</strong></div>`).join("")}</div>
        </article>
      </section>
      <section class="analytics-bottom-grid">
        <article class="card">
          <div class="card-header"><div><h2>Top-performing events</h2><p>Ranked by registrations</p></div></div>
          <div class="bar-chart">${topEvents.map((event) => `<div class="bar-row"><span class="bar-row-label" title="${escapeHTML(event.title)}">${escapeHTML(event.title)}</span><span class="bar-track"><span class="bar-fill" style="width:${percentage(event.registered, maxRegistrations)}%;--bar-color:${getTheme(event).color}"></span></span><strong>${formatNumber(event.registered)}</strong></div>`).join("")}</div>
        </article>
        <article class="card">
          <div class="card-header"><div><h2>Smart suggestions</h2><p>Opportunities from your current data</p></div>${icon("sparkles")}</div>
          <div class="insight-list">
            <div class="insight-item"><span class="insight-icon" style="--insight-color:var(--mint);--insight-soft:var(--mint-soft)">${icon("check-circle")}</span><span><strong>${escapeHTML(busiest?.title || "Your best event")} has strong demand</strong><p>It is ${percentage(busiest?.registered, busiest?.capacity) || 0}% full. Consider a repeat format next term.</p></span></div>
            <div class="insight-item"><span class="insight-icon" style="--insight-color:var(--orange);--insight-soft:var(--orange-soft)">${icon("zap")}</span><span><strong>Publish during peak hours</strong><p>Tuesday and Friday announcements perform best with your student audience.</p></span></div>
            <div class="insight-item"><span class="insight-icon" style="--insight-color:var(--blue);--insight-soft:var(--blue-soft)">${icon("users")}</span><span><strong>${formatNumber(totalCapacity - totalRegistrations)} seats remain</strong><p>Promote upcoming events with a targeted announcement to improve fill rate.</p></span></div>
          </div>
        </article>
      </section>`;
  }

  function getCategoryFallbackColor(index, category) {
    const event = state.events.find((item) => item.category === category);
    if (event) return getTheme(event).color;
    const colors = Object.values(COLOR_THEMES).map((theme) => theme.color);
    return colors[index % colors.length];
  }

  function renderAnnouncements() {
    const studentMode = state.role === "student";
    const publicMode = state.role === "public";
    const announcements = [...state.announcements]
      .filter((announcement) => state.role === "admin" || announcement.active)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    const headerActions = publicMode || studentMode
      ? `<button class="secondary-button" type="button" data-view-link="events">${icon("search")} Discover events</button>${publicMode ? `<button class="primary-button" type="button" data-view-link="login" data-login-role="student">${icon("lock-keyhole")} Student login</button>` : ""}`
      : `<button class="primary-button" type="button" data-action="new-announcement">${icon("megaphone")} New announcement</button>`;
    const adminToolbar = state.role === "admin" ? `<div class="toolbar"><div class="toolbar-left"><label class="search-control" aria-label="Search announcements"><span data-icon="search"></span><input type="search" placeholder="Search announcements..."></label></div><div class="toolbar-right"><div class="select-control"><select aria-label="Filter announcement status"><option>All announcements</option><option>Active</option><option>Archived</option></select></div></div></div>` : "";
    return `
      ${pageHeader("Campus communication", publicMode || studentMode ? "Campus updates" : "Announcements", publicMode || studentMode ? "Read important event updates published by college administrators." : "Keep students informed with clear, targeted event updates.", headerActions)}
      ${adminToolbar}
      <section class="announcement-grid">
        ${announcements.length ? announcements.map((announcement, index) => {
          const event = getEventById(announcement.eventId);
          const theme = event ? getTheme(event) : COLOR_THEMES.violet;
          return `<article class="announcement-card" style="--announcement-color:${theme.color};--announcement-soft:${theme.soft};animation:rise 400ms ${index * 45}ms ease both">
            <span class="announcement-icon">${icon(announcement.active ? "megaphone" : "check-circle")}</span>
            <h3>${escapeHTML(announcement.title)}</h3>
            <p>${escapeHTML(announcement.message)}</p>
            <div class="announcement-footer"><span class="announcement-state" style="${announcement.active ? "" : "color:var(--text-faint)"}">${announcement.active ? "Published" : "Archived"} · ${escapeHTML(relativeTime(announcement.publishedAt))}</span><span>${escapeHTML(announcement.audience)}</span></div>
            <div class="inline-actions" style="margin-top:13px">
              ${event ? `<button class="text-button" type="button" data-open-event="${escapeHTML(event.id)}">View event ${icon("arrow-right")}</button>` : ""}
              ${state.role === "admin" ? `<button class="row-action" style="margin-left:auto" type="button" data-toggle-announcement="${escapeHTML(announcement.id)}" aria-label="${announcement.active ? "Archive" : "Publish"} announcement">${icon(announcement.active ? "check" : "upload")}</button>` : ""}
            </div>
          </article>`;
        }).join("") : `<div class="empty-state" style="grid-column:1/-1"><span class="empty-state-icon">${icon("megaphone")}</span><h3>No announcements yet</h3><p>${publicMode || studentMode ? "New event updates from college administrators will appear here." : "Publish an update to keep your event audience informed."}</p>${publicMode || studentMode ? "" : `<button class="primary-button" type="button" data-action="new-announcement">Create announcement</button>`}</div>`}
      </section>`;
  }

  function renderStudentSettings() {
    const preferences = state.preferences;
    return `
      ${pageHeader("Student account", "Preferences", "Manage your student identity, reminders, and display preferences.", `<button class="primary-button" type="button" data-action="edit-student-profile">${icon("edit")} Edit student profile</button>`)}
      <section class="settings-layout">
        <nav class="card settings-nav" aria-label="Student settings sections"><button class="active" type="button">${icon("users")} Student profile</button><button type="button">${icon("bell")} Notifications</button><button type="button">${icon("monitor")} Appearance</button><button type="button">${icon("database")} Data</button></nav>
        <div>
          <article class="card settings-panel">
            <div class="settings-panel-header"><h2>Student identity</h2><p>Used when you register for an event in this demo.</p></div>
            <div class="profile-editor"><span class="avatar avatar-mint">${escapeHTML(initials(state.studentProfile.name))}</span><span><strong>${escapeHTML(state.studentProfile.name)}</strong><p>${escapeHTML(state.studentProfile.department)} · ${escapeHTML(state.studentProfile.year)}</p></span></div>
            <div class="form-grid">
              <div class="form-group"><label>College</label><div class="form-control readonly-field">${escapeHTML(COLLEGE.name)}</div></div>
              <div class="form-group"><label>Portal role</label><div class="form-control readonly-field">Student</div></div>
              <div class="form-group"><label>Academic year</label><div class="form-control readonly-field">${escapeHTML(state.studentProfile.year)}</div></div>
              <div class="form-group"><label>Division</label><div class="form-control readonly-field">${escapeHTML(state.studentProfile.division)}</div></div>
            </div>
            <div class="form-actions"><button class="secondary-button" type="button" data-action="edit-student-profile">Edit profile</button></div>
          </article>
          <article class="card settings-panel" style="margin-top:16px"><div class="settings-panel-header"><h2>Notifications</h2><p>Choose which event updates you want.</p></div><div class="preference-list">
            <div class="preference-row"><span class="preference-copy"><strong>Registration confirmations</strong><p>Updates when a registration succeeds or moves to a waitlist.</p></span><button class="toggle ${preferences.registrationAlerts ? "active" : ""}" type="button" data-toggle-preference="registrationAlerts" aria-pressed="${preferences.registrationAlerts}"></button></div>
            <div class="preference-row"><span class="preference-copy"><strong>Event reminders</strong><p>Reminders for events you have registered for.</p></span><button class="toggle ${preferences.eventReminders ? "active" : ""}" type="button" data-toggle-preference="eventReminders" aria-pressed="${preferences.eventReminders}"></button></div>
            <div class="preference-row"><span class="preference-copy"><strong>Weekly event digest</strong><p>A weekly summary of new campus opportunities.</p></span><button class="toggle ${preferences.weeklyDigest ? "active" : ""}" type="button" data-toggle-preference="weeklyDigest" aria-pressed="${preferences.weeklyDigest}"></button></div>
          </div></article>
          <article class="card settings-panel" style="margin-top:16px"><div class="settings-panel-header"><h2>Appearance</h2><p>Choose a comfortable theme for the student portal.</p></div><div class="preference-row" style="border-bottom:0"><span class="preference-copy"><strong>Color theme</strong><p>Saved automatically on this device.</p></span><button class="secondary-button small-button" type="button" data-action="toggle-theme">${icon(state.theme === "dark" ? "sun" : "moon")} ${state.theme === "dark" ? "Light mode" : "Dark mode"}</button></div></article>
        </div>
      </section>`;
  }

  function renderSettings() {
    const preferences = state.preferences;
    return `
      ${pageHeader("Workspace preferences", "Settings", "Personalize SmartCLG and manage your local event workspace.", `<button class="primary-button" type="button" data-action="save-settings-top">${icon("check")} Save changes</button>`)}
      <section class="settings-layout">
        <nav class="card settings-nav" aria-label="Settings sections">
          <button class="active" type="button">${icon("users")} General</button>
          <button type="button">${icon("bell")} Notifications</button>
          <button type="button">${icon("monitor")} Appearance</button>
          <button type="button">${icon("shield")} Privacy</button>
          <button type="button">${icon("database")} Data</button>
        </nav>
        <div>
          <form class="card settings-panel" id="settingsForm">
            <div class="settings-panel-header"><h2>Workspace profile</h2><p>These details appear across your event workspace.</p></div>
            <div class="profile-editor"><span class="avatar avatar-purple">AP</span><span><strong>${escapeHTML(preferences.coordinator)}</strong><p>Event Coordinator</p></span></div>
            <div class="form-grid">
              <div class="form-group"><label for="institutionName">Institution name</label><div class="form-control"><input id="institutionName" name="institution" value="${escapeHTML(COLLEGE.name)}" readonly></div></div>
              <div class="form-group"><label for="coordinatorName">Coordinator name</label><div class="form-control"><input id="coordinatorName" name="coordinator" value="${escapeHTML(preferences.coordinator)}" required></div></div>
              <div class="form-group"><label for="coordinatorEmail">Coordinator email</label><div class="form-control"><input id="coordinatorEmail" name="email" type="email" value="${escapeHTML(preferences.email)}" required></div></div>
              <div class="form-group"><label for="timezone">Timezone</label><div class="form-control"><select id="timezone" name="timezone">${["Asia/Kolkata", "UTC", "America/New_York", "Europe/London", "Australia/Sydney"].map((zone) => `<option value="${zone}" ${preferences.timezone === zone ? "selected" : ""}>${zone.replaceAll("_", " ")}</option>`).join("")}</select></div></div>
            </div>
            <div class="form-actions"><button class="secondary-button" type="button" data-action="reset-settings-form">Reset</button><button class="primary-button" type="submit">${icon("check")} Save profile</button></div>
          </form>

          <article class="card settings-panel" style="margin-top:16px">
            <div class="settings-panel-header"><h2>Notifications</h2><p>Choose which workspace updates you want to receive.</p></div>
            <div class="preference-list">
              <div class="preference-row"><span class="preference-copy"><strong>Registration alerts</strong><p>Get notified whenever a student joins an event.</p></span><button class="toggle ${preferences.registrationAlerts ? "active" : ""}" type="button" data-toggle-preference="registrationAlerts" aria-label="Toggle registration alerts" aria-pressed="${preferences.registrationAlerts}"></button></div>
              <div class="preference-row"><span class="preference-copy"><strong>Event reminders</strong><p>Receive reminders 24 hours before an event begins.</p></span><button class="toggle ${preferences.eventReminders ? "active" : ""}" type="button" data-toggle-preference="eventReminders" aria-label="Toggle event reminders" aria-pressed="${preferences.eventReminders}"></button></div>
              <div class="preference-row"><span class="preference-copy"><strong>Weekly digest</strong><p>A Monday summary of registrations, capacity, and announcements.</p></span><button class="toggle ${preferences.weeklyDigest ? "active" : ""}" type="button" data-toggle-preference="weeklyDigest" aria-label="Toggle weekly digest" aria-pressed="${preferences.weeklyDigest}"></button></div>
            </div>
          </article>

          <article class="card settings-panel" style="margin-top:16px">
            <div class="settings-panel-header"><h2>Appearance</h2><p>Switch between the light and dark workspace themes.</p></div>
            <div class="preference-row" style="border-bottom:0"><span class="preference-copy"><strong>Color theme</strong><p>Your selection is saved on this device.</p></span><button class="secondary-button small-button" type="button" data-action="toggle-theme">${icon(state.theme === "dark" ? "sun" : "moon")} ${state.theme === "dark" ? "Light mode" : "Dark mode"}</button></div>
          </article>

          <article class="card settings-panel" style="margin-top:16px">
            <div class="settings-panel-header"><h2>Workspace data</h2><p>Export or reset the data stored in this browser.</p></div>
            <div class="inline-actions" style="margin-top:18px"><button class="secondary-button" type="button" data-action="export-workspace">${icon("download")} Export workspace</button><button class="secondary-button" type="button" data-action="export-registrations">${icon("users")} Export attendees</button><button class="danger-button" type="button" data-action="reset-demo">${icon("rotate-ccw")} Reset demo data</button></div>
          </article>
        </div>
      </section>`;
  }

  function renderCurrentView() {
    if (!canViewInRole(state.view) && state.view !== "login") {
      const requiredRole = requiredRoleForView(state.view);
      if (["admin", "student"].includes(requiredRole)) {
        state.loginRole = requiredRole;
        state.pendingView = state.view;
        state.view = "login";
        setRouteHash("#login", true);
      } else {
        state.view = "login";
      }
    }
    const renderers = {
      home: renderPublicHome,
      login: renderLoginPage,
      dashboard: renderDashboard,
      "student-home": renderStudentHome,
      "my-registrations": renderMyRegistrations,
      events: renderEventsPage,
      registrations: renderRegistrations,
      records: renderRegistrationRecords,
      calendar: renderCalendarPage,
      analytics: renderAnalytics,
      announcements: renderAnnouncements,
      profile: renderCollegeProfile,
      venues: renderVenues,
      contact: renderContact,
      settings: state.role === "student" ? renderStudentSettings : renderSettings
    };
    const nextView = VALID_VIEWS.includes(state.view) ? state.view : "dashboard";
    mainContent.innerHTML = renderers[nextView]();
    document.title = `${pageTitle(nextView)} · ${COLLEGE.shortName} — SmartCLG`;
    updateNavigation();
    hydrateStaticIcons();
    if (nextView === "login") bindLoginPage();
  }

  function renderCalendarPage() {
    return calendarMarkup();
  }

  function pageTitle(view) {
    return {
      home: "Campus Events",
      login: "Secure Login",
      dashboard: "Admin Overview",
      "student-home": "Student Portal",
      "my-registrations": "My Registrations",
      events: "Events",
      registrations: "Registrations",
      records: "Registration Records",
      calendar: "Event Calendar",
      analytics: "Insights",
      announcements: "Announcements",
      profile: "College Profile",
      venues: "Event Venues",
      contact: "Contact",
      settings: "Settings"
    }[view] || "Overview";
  }

  function renderSidebarNavigation() {
    const nav = document.getElementById("dynamicNavigation");
    if (!nav) return;
    const commonCollegeNav = `<p class="nav-label nav-label-spaced">College information</p><a class="nav-item ${state.view === "profile" ? "active" : ""}" href="#profile" data-view="profile">${icon("book")}<span>College profile</span></a><a class="nav-item ${state.view === "venues" ? "active" : ""}" href="#venues" data-view="venues">${icon("map-pin")}<span>Event venues</span></a><a class="nav-item ${state.view === "contact" ? "active" : ""}" href="#contact" data-view="contact">${icon("phone")}<span>Contact</span></a>`;
    if (state.role === "public") {
      nav.innerHTML = `<p class="nav-label">Public website</p><a class="nav-item ${state.view === "home" ? "active" : ""}" href="#home" data-view="home">${icon("home")}<span>Campus home</span></a><a class="nav-item ${state.view === "login" ? "active" : ""}" href="#login" data-view="login" data-login-role="admin">${icon("lock-keyhole")}<span>Administrator login</span></a><a class="nav-item ${state.view === "login" ? "active" : ""}" href="#login" data-view="login" data-login-role="student">${icon("graduation")}<span>Student login</span></a><p class="nav-label nav-label-spaced">Campus events</p><a class="nav-item ${state.view === "events" ? "active" : ""}" href="#events" data-view="events">${icon("search")}<span>Events</span></a><a class="nav-item ${state.view === "calendar" ? "active" : ""}" href="#calendar" data-view="calendar">${icon("calendar-days")}<span>Event calendar</span></a><a class="nav-item ${state.view === "announcements" ? "active" : ""}" href="#announcements" data-view="announcements">${icon("megaphone")}<span>Updates</span><span class="nav-count soft" id="announcementNavCount">${formatNumber(state.announcements.filter((item) => item.active).length)}</span></a>${commonCollegeNav}`;
    } else if (state.role === "student") {
      nav.innerHTML = `<p class="nav-label">Student portal</p><a class="nav-item ${state.view === "student-home" ? "active" : ""}" href="#student-home" data-view="student-home">${icon("home")}<span>Student home</span></a><a class="nav-item ${state.view === "events" ? "active" : ""}" href="#events" data-view="events">${icon("search")}<span>Discover events</span></a><a class="nav-item ${state.view === "my-registrations" ? "active" : ""}" href="#my-registrations" data-view="my-registrations">${icon("ticket-check")}<span>My registrations</span></a><a class="nav-item ${state.view === "calendar" ? "active" : ""}" href="#calendar" data-view="calendar">${icon("calendar-days")}<span>Event calendar</span></a><a class="nav-item ${state.view === "announcements" ? "active" : ""}" href="#announcements" data-view="announcements">${icon("megaphone")}<span>Updates</span></a>${commonCollegeNav}<p class="nav-label nav-label-spaced">Account</p><a class="nav-item ${state.view === "settings" ? "active" : ""}" href="#settings" data-view="settings">${icon("settings")}<span>Preferences</span></a><button class="nav-item nav-button" type="button" data-action="logout">${icon("logout")}<span>Sign out</span></button>`;
    } else {
      nav.innerHTML = `<p class="nav-label">Admin workspace</p><a class="nav-item ${state.view === "dashboard" ? "active" : ""}" href="#dashboard" data-view="dashboard">${icon("grid")}<span>Admin overview</span></a><a class="nav-item ${state.view === "events" ? "active" : ""}" href="#events" data-view="events">${icon("calendar")}<span>Manage events</span><span class="nav-count" id="eventNavCount">${formatNumber(state.events.length)}</span></a><a class="nav-item ${state.view === "registrations" ? "active" : ""}" href="#registrations" data-view="registrations">${icon("users")}<span>Registrations</span></a><a class="nav-item ${state.view === "records" ? "active" : ""}" href="#records" data-view="records">${icon("database")}<span>Registration records</span></a><a class="nav-item ${state.view === "calendar" ? "active" : ""}" href="#calendar" data-view="calendar">${icon("calendar-days")}<span>Event calendar</span></a><a class="nav-item ${state.view === "analytics" ? "active" : ""}" href="#analytics" data-view="analytics">${icon("chart")}<span>Insights</span></a><a class="nav-item ${state.view === "announcements" ? "active" : ""}" href="#announcements" data-view="announcements">${icon("megaphone")}<span>Announcements</span></a>${commonCollegeNav}<p class="nav-label nav-label-spaced">Manage</p><a class="nav-item ${state.view === "settings" ? "active" : ""}" href="#settings" data-view="settings">${icon("settings")}<span>Settings</span></a><button class="nav-item nav-button" type="button" data-action="logout">${icon("logout")}<span>Sign out</span></button>`;
    }
  }

  function updateNavigation() {
    renderSidebarNavigation();
    const isStudent = state.role === "student";
    const isPublic = state.role === "public";
    const roleLabel = document.getElementById("roleLabel");
    const roleIcon = document.querySelector("#roleSwitcher .role-switcher-icon");
    const context = document.getElementById("campusContext");
    const profileName = document.getElementById("sidebarProfileName");
    const profileRole = document.getElementById("sidebarProfileRole");
    const sidebarAvatar = document.getElementById("sidebarAvatar");
    const topAvatar = document.getElementById("topAvatar");
    if (roleLabel) roleLabel.textContent = isPublic ? "Sign in" : isStudent ? "Student" : "Admin";
    if (roleIcon) roleIcon.innerHTML = isPublic ? ICONS["lock-keyhole"] : isStudent ? ICONS.graduation : ICONS.shield;
    if (context) context.textContent = isPublic ? "Public website" : isStudent ? "Student portal" : "Admin event workspace";
    if (profileName) profileName.textContent = isPublic ? "Guest access" : isStudent ? state.authUser?.name || state.studentProfile.name : state.authUser?.name || state.preferences.coordinator;
    if (profileRole) profileRole.textContent = isPublic ? "Sign in to continue" : isStudent ? "Student portal" : "MGMCET Administration";
    if (sidebarAvatar) {
      sidebarAvatar.textContent = isPublic ? "GU" : isStudent ? initials(state.authUser?.name || state.studentProfile.name) : initials(state.authUser?.name || state.preferences.coordinator || "Event Administrator");
      sidebarAvatar.classList.toggle("avatar-purple", !isStudent && !isPublic);
      sidebarAvatar.classList.toggle("avatar-mint", isStudent);
      sidebarAvatar.classList.toggle("avatar-slate", isPublic);
    }
    if (topAvatar) {
      topAvatar.textContent = isPublic ? "GU" : isStudent ? initials(state.authUser?.name || state.studentProfile.name) : initials(state.authUser?.name || state.preferences.coordinator || "Event Administrator");
      topAvatar.classList.toggle("avatar-purple", !isStudent && !isPublic);
      topAvatar.classList.toggle("avatar-mint", isStudent);
      topAvatar.classList.toggle("avatar-slate", isPublic);
      topAvatar.title = isPublic ? "Guest" : state.authUser?.name || "";
    }
    const unread = state.notifications.some((notification) => !notification.read);
    document.getElementById("notificationDot")?.classList.toggle("hidden", !unread || isPublic);
  }

  function updateThemeButton() {
    const button = document.getElementById("themeButton");
    if (!button) return;
    const iconNode = button.querySelector("[data-icon]");
    if (iconNode) {
      iconNode.dataset.icon = state.theme === "dark" ? "sun" : "moon";
      iconNode.innerHTML = ICONS[iconNode.dataset.icon];
    }
    button.setAttribute("aria-label", state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  function applyTheme() {
    document.body.dataset.theme = state.theme;
    document.documentElement.style.colorScheme = state.theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = state.theme === "dark" ? "#161620" : "#7a1530";
    updateThemeButton();
  }

  function setRouteHash(hash, replace = false) {
    try {
      if (replace) history.replaceState(null, "", hash);
      else history.pushState(null, "", hash);
    } catch (error) {
      // Some browsers block History API changes when the site is opened from file://.
      location.hash = hash;
    }
  }

  function navigate(view, updateHash = true) {
    if (!VALID_VIEWS.includes(view)) view = state.authenticated ? (state.role === "student" ? "student-home" : "dashboard") : "events";
    const requiredRole = requiredRoleForView(view);
    if (requiredRole === "authenticated" && !state.authenticated) {
      beginLogin("student");
      return;
    }
    if (["admin", "student"].includes(requiredRole) && state.role !== requiredRole) {
      beginLogin(requiredRole, view);
      return;
    }
    state.view = view;
    if (updateHash && location.hash !== `#${view}`) setRouteHash(`#${view}`);
    closeSidebar();
    renderCurrentView();
    closeDrawer();
    window.scrollTo({ top: 0, behavior: "smooth" });
    mainContent.focus({ preventScroll: true });
  }

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarScrim.classList.add("visible");
    document.body.classList.add("overlay-open");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarScrim.classList.remove("visible");
    if (modalRoot.hidden && drawerRoot.hidden) document.body.classList.remove("overlay-open");
  }

  function openEventDrawer(id) {
    const event = getEventById(id);
    if (!event) return;
    const status = getEventStatus(event);
    const theme = getTheme(event);
    const fill = percentage(event.registered, event.capacity);
    const spotsLeft = Math.max(Number(event.capacity) - Number(event.registered), 0);
    const studentMode = state.role === "student";
    const publicMode = state.role === "public";
    const ownRegistration = studentMode ? studentOwnRegistration(event.id) : null;
    const registrationClosed = status.key === "completed" || status.key === "cancelled";
    const saved = isStudentSaved(event.id);
    const venue = getEventVenue(event);
    const registerLabel = ownRegistration
      ? ownRegistration.status === "Waitlist" ? "On waitlist" : "Registered"
      : status.key === "full" ? "Join waitlist" : "Register now";
    closeModal();
    state.lastFocusedElement = document.activeElement;
    drawerRoot.hidden = false;
    document.body.classList.add("overlay-open");
    drawerRoot.innerHTML = `
      <aside class="drawer" style="${eventStyle(event)}" role="dialog" aria-modal="true" aria-label="${escapeHTML(event.title)} details">
        <div class="drawer-hero ${event.image ? "has-image" : ""}">${event.image ? `<img class="drawer-hero-photo" src="${escapeHTML(event.image)}" alt="${escapeHTML(event.imageAlt || event.title)}"><span class="drawer-hero-overlay"></span>` : ""}
          <button class="icon-button drawer-close" type="button" data-close-drawer aria-label="Close details">${icon("close")}</button>
          <div class="drawer-hero-content"><span class="category-label">${escapeHTML(event.category)} event</span><h2>${escapeHTML(event.title)}</h2><p>${escapeHTML(event.organizer)} · ${escapeHTML(formatLongDate(event.date))}</p></div>
        </div>
        <div class="drawer-body">
          <div class="drawer-actions">
            ${publicMode
              ? `<button class="primary-button" type="button" data-action="student-login">${icon("lock-keyhole")} Sign in to register</button>`
              : `<button class="primary-button" type="button" data-register-event="${escapeHTML(event.id)}" ${registrationClosed || (studentMode && ownRegistration) ? "disabled" : ""} style="opacity:${registrationClosed || (studentMode && ownRegistration) ? 0.6 : 1};cursor:${registrationClosed || (studentMode && ownRegistration) ? "not-allowed" : "pointer"}">${icon(ownRegistration ? "check" : status.key === "full" ? "users" : "user-plus")} ${registrationClosed ? "Registration closed" : registerLabel}</button>`}
            ${studentMode
              ? `<button class="secondary-button" type="button" data-save-event="${escapeHTML(event.id)}">${icon("bookmark")} ${saved ? "Saved" : "Save"}</button>`
              : publicMode ? "" : `<button class="secondary-button" type="button" data-edit-event="${escapeHTML(event.id)}">${icon("edit")} Edit</button><button class="icon-button" type="button" data-delete-event="${escapeHTML(event.id)}" aria-label="Delete event">${icon("trash")}</button>`}
          </div>
          <div class="detail-meta-grid">
            <div class="detail-meta-item">${icon("calendar-days")}<span><strong>${escapeHTML(formatEventDate(event.date))}</strong><small>${escapeHTML(formatLongDate(event.date))}</small></span></div>
            <div class="detail-meta-item">${icon("clock")}<span><strong>${escapeHTML(formatTime(event.time))} – ${escapeHTML(formatTime(event.endTime))}</strong><small>Event schedule</small></span></div>
            <div class="detail-meta-item">${icon("map-pin")}<span><strong>${escapeHTML(event.venue)}</strong><small>Venue</small></span></div>
            <div class="detail-meta-item">${icon("users")}<span><strong>${formatNumber(event.registered)} of ${formatNumber(event.capacity)}</strong><small>${formatNumber(spotsLeft)} spots remaining</small></span></div>
          </div>
          <div class="capacity-bar"><span style="width:${fill}%"></span></div>
          <section class="detail-section"><h3>Complete event information</h3><div class="event-data-grid">
            <div>${icon("users")}<span><strong>Audience</strong><small>${escapeHTML(event.audience || "MGMCET campus community")}</small></span></div>
            <div>${icon("badge-check")}<span><strong>Eligibility</strong><small>${escapeHTML(event.eligibility || "Open to the campus community")}</small></span></div>
            <div>${icon("ticket-check")}<span><strong>Entry</strong><small>${escapeHTML(event.entryFee || "Contact the organizer")}</small></span></div>
            <div>${icon("clock")}<span><strong>Registration deadline</strong><small>${event.registrationDeadline ? escapeHTML(formatLongDate(event.registrationDeadline)) : "Published with the event"}</small></span></div>
            <div>${icon("award")}<span><strong>Certification</strong><small>${escapeHTML(event.certificate || "Not applicable")}</small></span></div>
            <div>${icon("shirt")}<span><strong>Dress code</strong><small>${escapeHTML(event.dressCode || "College-appropriate attire")}</small></span></div>
            <div>${icon("phone")}<span><strong>Organizer contact</strong><small>${escapeHTML(event.organizerContact || COLLEGE.phones[0])}</small></span></div>
            <div>${icon("map-pin")}<span><strong>Venue type</strong><small>${escapeHTML(venue?.type || "Approval required")}</small></span></div>
          </div></section>
          <section class="detail-section"><h3>Venue information</h3><div class="drawer-venue-box"><strong>${escapeHTML(venue?.name || event.venue || "Venue to be confirmed")}</strong><p>${escapeHTML(venue?.description || "Venue details will be confirmed by the college.")}</p>${venue ? `<div class="drawer-venue-facts"><span>${icon("users")} ${escapeHTML(venue.capacityNote)}</span><span>${icon("shield")} ${escapeHTML(venue.bookingNote)}</span>${(venue.facilities || []).slice(0, 4).map((facility) => `<span>${icon("check")} ${escapeHTML(facility)}</span>`).join("")}</div>` : ""}</div></section>
          <section class="detail-section"><h3>Participation rules</h3><ul class="event-rules-list">${(event.rules || []).map((rule) => `<li>${icon("check-circle")} ${escapeHTML(rule)}</li>`).join("")}</ul></section>
          <section class="detail-section"><h3>About this event <span class="status-pill status-${status.key}">${escapeHTML(status.label)}</span></h3><p>${escapeHTML(event.description || "No description has been added for this event yet.")}</p></section>
          <section class="detail-section"><h3>Event schedule</h3><div class="agenda-list">${(event.agenda?.length ? event.agenda : [{ time: formatTime(event.time), text: "Event begins" }, { time: formatTime(event.endTime), text: "Event concludes" }]).map((item) => `<div class="agenda-item"><time>${escapeHTML(item.time)}</time><span>${escapeHTML(item.text)}</span></div>`).join("")}</div></section>
          <section class="detail-section"><h3>Attendees</h3>${attendeeStack(event, "detail")}</section>
          <section class="detail-section"><h3>Tags</h3><div class="inline-actions">${(event.tags || []).map((tag) => `<span class="status-pill status-upcoming">${escapeHTML(tag)}</span>`).join("")}</div></section>
        </div>
      </aside>`;
    window.setTimeout(() => drawerRoot.querySelector("[data-close-drawer]")?.focus(), 20);
  }

  function openNotificationsDrawer() {
    closeModal();
    state.lastFocusedElement = document.activeElement;
    drawerRoot.hidden = false;
    document.body.classList.add("overlay-open");
    const notifications = [...state.notifications].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    drawerRoot.innerHTML = `
      <aside class="drawer" role="dialog" aria-modal="true" aria-label="Notifications">
        <div class="drawer-header"><div><h2>Notifications</h2><p>${state.notifications.filter((item) => !item.read).length} unread update${state.notifications.filter((item) => !item.read).length === 1 ? "" : "s"}</p></div><button class="icon-button" type="button" data-close-drawer aria-label="Close notifications">${icon("close")}</button></div>
        <div class="card-body">
          <div class="inline-actions" style="justify-content:space-between;margin-bottom:12px"><strong style="font-size:11px">Recent activity</strong><button class="text-button" type="button" data-action="mark-all-read">Mark all as read</button></div>
          <div class="notification-list">
            ${notifications.length ? notifications.map((notification) => `<div class="notification-item ${notification.read ? "" : "unread"}" data-read-notification="${escapeHTML(notification.id)}"><span class="avatar ${notification.type === "registration" ? "avatar-mint" : notification.type === "announcement" ? "avatar-pink" : notification.type === "calendar" ? "avatar-blue" : "avatar-orange"}">${icon(notification.type === "registration" ? "user-plus" : notification.type === "announcement" ? "megaphone" : notification.type === "calendar" ? "calendar" : "users")}</span><span class="notification-copy"><strong>${escapeHTML(notification.title)}</strong><p>${escapeHTML(notification.message)}</p><time>${escapeHTML(relativeTime(notification.createdAt))}</time></span></div>`).join("") : `<div class="empty-state" style="min-height:250px;border:0"><span class="empty-state-icon">${icon("bell")}</span><h3>You're all caught up</h3><p>New event activity will appear here.</p></div>`}
          </div>
        </div>
      </aside>`;
    window.setTimeout(() => drawerRoot.querySelector("[data-close-drawer]")?.focus(), 20);
  }

  function closeDrawer() {
    if (drawerRoot.hidden) return;
    drawerRoot.hidden = true;
    drawerRoot.innerHTML = "";
    if (modalRoot.hidden) document.body.classList.remove("overlay-open");
    state.lastFocusedElement?.focus?.();
  }

  function openModal(content, small = false) {
    closeDrawer();
    state.lastFocusedElement = document.activeElement;
    modalRoot.hidden = false;
    document.body.classList.add("overlay-open");
    modalRoot.innerHTML = `<div class="modal ${small ? "small" : ""}" role="dialog" aria-modal="true">${content}</div>`;
    window.setTimeout(() => modalRoot.querySelector("input, select, textarea, button")?.focus(), 20);
  }

  function closeModal() {
    if (modalRoot.hidden) return;
    modalRoot.hidden = true;
    modalRoot.innerHTML = "";
    if (drawerRoot.hidden) document.body.classList.remove("overlay-open");
    state.lastFocusedElement?.focus?.();
  }

  function openEventModal(id = null) {
    if (state.role !== "admin") { beginLogin("admin"); return; }
    const event = id ? getEventById(id) : null;
    const dateValue = event?.date || dateFromOffset(7);
    openModal(`
      <form id="eventForm">
        <div class="modal-header"><div><h2>${event ? "Edit event" : "Create a new event"}</h2><p>${event ? "Update the event details and schedule." : "Add the essentials now—you can refine them anytime."}</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="form-group full"><label for="eventTitle">Event title</label><div class="form-control"><input id="eventTitle" name="title" value="${escapeHTML(event?.title || "")}" placeholder="e.g. Innovation and Design Fair" minlength="3" maxlength="70" required></div></div>
            <div class="form-group"><label for="eventCategoryField">Category</label><div class="form-control"><select id="eventCategoryField" name="category" required>${CATEGORIES.map((category) => `<option value="${category}" ${event?.category === category ? "selected" : ""}>${category}</option>`).join("")}</select></div></div>
            <div class="form-group"><label for="eventOrganizer">Organizer</label><div class="form-control"><input id="eventOrganizer" name="organizer" value="${escapeHTML(event?.organizer || "")}" placeholder="Club or department" maxlength="50" required></div></div>
            <div class="form-group"><label for="eventDate">Date</label><div class="form-control"><input id="eventDate" name="date" type="date" value="${escapeHTML(dateValue)}" min="${toDateKey(new Date())}" required></div></div>
            <div class="form-group"><label for="eventVenue">Campus event venue</label><div class="form-control"><select id="eventVenue" name="venueId" required><option value="" disabled>Select an approved campus venue</option>${state.venues.map((venue) => `<option value="${escapeHTML(venue.id)}" ${event?.venueId === venue.id ? "selected" : ""}>${escapeHTML(venue.name)} · ${escapeHTML(venue.type)}</option>`).join("")}<option value="custom" ${!event?.venueId ? "selected" : ""}>Other / to be confirmed</option></select></div><span class="form-hint">Venue details and booking requirements are stored in the Event Venues page.</span></div>
            <div class="form-group"><label for="eventTime">Starts at</label><div class="form-control"><input id="eventTime" name="time" type="time" value="${escapeHTML(event?.time || "10:00")}" required></div></div>
            <div class="form-group"><label for="eventEndTime">Ends at</label><div class="form-control"><input id="eventEndTime" name="endTime" type="time" value="${escapeHTML(event?.endTime || "16:00")}" required></div></div>
            <div class="form-group full"><label for="eventCapacity">Capacity</label><div class="form-control"><input id="eventCapacity" name="capacity" type="number" min="1" max="10000" value="${escapeHTML(event?.capacity || 100)}" required></div><span class="form-hint">Maximum number of confirmed attendees.</span></div>
            <div class="form-group full"><label for="eventDescription">Description</label><div class="form-control"><textarea id="eventDescription" name="description" placeholder="Tell students what to expect..." maxlength="500" required>${escapeHTML(event?.description || "")}</textarea></div></div>
            <div class="form-group full"><span class="form-label">Event color</span><div class="color-options">${Object.entries(COLOR_THEMES).map(([name, theme]) => `<label class="color-option" style="--option-color:${theme.color}"><input type="radio" name="color" value="${name}" ${(event?.color || "violet") === name ? "checked" : ""}><span></span></label>`).join("")}</div></div>
            <div class="form-group full"><div class="check-row"><input id="eventFeatured" name="featured" type="checkbox" ${event?.featured ? "checked" : ""}><label for="eventFeatured">Feature this event on the dashboard</label></div></div>
          </div>
        </div>
        <div class="modal-footer"><button class="secondary-button" type="button" data-close-modal>Cancel</button><button class="primary-button" type="submit">${icon("check")} ${event ? "Save changes" : "Create event"}</button></div>
      </form>`);

    const form = document.getElementById("eventForm");
    form.addEventListener("submit", (eventSubmit) => {
      eventSubmit.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (data.get("endTime") <= data.get("time")) {
        showToast("Check the schedule", "End time must be later than the start time.", "error");
        document.getElementById("eventEndTime").focus();
        return;
      }
      const payload = {
        id: event?.id || uniqueId("evt"),
        title: data.get("title").trim(),
        category: data.get("category"),
        date: data.get("date"),
        time: data.get("time"),
        endTime: data.get("endTime"),
        venueId: data.get("venueId") === "custom" ? null : data.get("venueId"),
        venue: getVenueById(data.get("venueId"))?.name || "To be confirmed",
        organizer: data.get("organizer").trim(),
        capacity: Number(data.get("capacity")),
        registered: event?.registered || 0,
        color: data.get("color"),
        featured: data.get("featured") === "on",
        description: data.get("description").trim(),
        tags: event?.tags || [data.get("category"), "Campus event"],
        agenda: event?.agenda || [
          { time: formatTime(data.get("time")), text: "Doors open and registration" },
          { time: data.get("time"), text: "Official event begins" },
          { time: data.get("endTime"), text: "Closing and networking" }
        ]
      };
      if (event) {
        state.events = state.events.map((item) => item.id === event.id ? payload : item);
      } else {
        state.events.push(payload);
        state.notifications.unshift({ id: uniqueId("not"), title: "Event created", message: `${payload.title} is ready for registrations.`, type: "announcement", createdAt: new Date().toISOString(), read: false });
      }
      safeSave(STORAGE_KEYS.events, state.events);
      safeSave(STORAGE_KEYS.notifications, state.notifications);
      closeModal();
      renderCurrentView();
      showToast(event ? "Event updated" : "Event created", `${payload.title} was saved successfully.`);
    });
  }

  function openRegistrationModal(preselectedId = null) {
    if (state.role !== "admin") { beginLogin("admin"); return; }
    const availableEvents = state.events.filter((event) => {
      const status = getEventStatus(event);
      return status.key === "upcoming" || status.key === "live" || status.key === "full";
    });
    if (!availableEvents.length) {
      showToast("No open events", "Create an upcoming event before registering attendees.", "error");
      return;
    }
    const selected = availableEvents.find((event) => event.id === preselectedId) || availableEvents[0];
    openModal(`
      <form id="registrationForm">
        <div class="modal-header"><div><h2>Register attendee</h2><p>Add a student to an upcoming campus event.</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="form-group full"><label for="registrationEvent">Event</label><div class="form-control"><select id="registrationEvent" name="eventId" required>${availableEvents.map((event) => `<option value="${escapeHTML(event.id)}" ${event.id === selected.id ? "selected" : ""}>${escapeHTML(event.title)} · ${escapeHTML(formatEventDate(event.date))}</option>`).join("")}</select></div><span class="form-hint" id="registrationCapacityHint">${registrationHint(selected)}</span></div>
            <div class="form-group"><label for="studentName">Full name</label><div class="form-control"><input id="studentName" name="name" placeholder="Student name" minlength="3" maxlength="60" required></div></div>
            <div class="form-group"><label for="studentEmail">College email</label><div class="form-control"><input id="studentEmail" name="email" type="email" placeholder="name@college.edu" maxlength="80" required></div></div>
            <div class="form-group"><label for="studentId">Student ID</label><div class="form-control"><input id="studentId" name="studentId" placeholder="NC24CS000" maxlength="20" required></div></div>
            <div class="form-group"><label for="studentYear">Year</label><div class="form-control"><select id="studentYear" name="year" required>${["2022", "2023", "2024", "2025", "2026", "Graduate"].map((year) => `<option>${year}</option>`).join("")}</select></div></div>
            <div class="form-group full"><label for="studentDepartment">Department</label><div class="form-control"><select id="studentDepartment" name="department" required>${DEPARTMENTS.map((department) => `<option>${department}</option>`).join("")}</select></div></div>
          </div>
        </div>
        <div class="modal-footer"><button class="secondary-button" type="button" data-close-modal>Cancel</button><button class="primary-button" type="submit" id="registrationSubmit">${icon(getEventStatus(selected).key === "full" ? "users" : "user-plus")} ${getEventStatus(selected).key === "full" ? "Join waitlist" : "Confirm registration"}</button></div>
      </form>`);

    const form = document.getElementById("registrationForm");
    const eventSelect = document.getElementById("registrationEvent");
    const hint = document.getElementById("registrationCapacityHint");
    const submit = document.getElementById("registrationSubmit");
    eventSelect.addEventListener("change", () => {
      const event = getEventById(eventSelect.value);
      const full = getEventStatus(event).key === "full";
      hint.textContent = registrationHint(event);
      submit.innerHTML = `${icon(full ? "users" : "user-plus")} ${full ? "Join waitlist" : "Confirm registration"}`;
    });
    form.addEventListener("submit", (submitEvent) => {
      submitEvent.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const event = getEventById(data.get("eventId"));
      const email = data.get("email").trim().toLowerCase();
      const duplicate = state.registrations.find((registration) => registration.eventId === event.id && registration.email.toLowerCase() === email);
      if (duplicate) {
        showToast("Already registered", `${duplicate.name} already has a registration for this event.`, "error");
        return;
      }
      const full = Number(event.registered) >= Number(event.capacity);
      const registration = {
        id: uniqueId("reg"),
        name: data.get("name").trim(),
        email,
        studentId: data.get("studentId").trim().toUpperCase(),
        department: data.get("department"),
        year: data.get("year"),
        eventId: event.id,
        status: full ? "Waitlist" : "Confirmed",
        registeredAt: new Date().toISOString()
      };
      if (!full) {
        event.registered = Number(event.registered || 0) + 1;
        safeSave(STORAGE_KEYS.events, state.events);
      }
      state.registrations.unshift(registration);
      state.notifications.unshift({ id: uniqueId("not"), title: full ? "Waitlist join" : "New registration", message: `${registration.name} ${full ? "joined the waitlist for" : "registered for"} ${event.title}.`, type: "registration", createdAt: new Date().toISOString(), read: false });
      safeSave(STORAGE_KEYS.registrations, state.registrations);
      safeSave(STORAGE_KEYS.notifications, state.notifications);
      closeModal();
      renderCurrentView();
      showToast(full ? "Added to waitlist" : "Registration confirmed", `${registration.name} was added to ${event.title}.`);
    });
  }

  function registrationHint(event) {
    const spots = Math.max(Number(event.capacity) - Number(event.registered), 0);
    return spots ? `${formatNumber(spots)} confirmed spots remaining.` : "This event is full. New attendees will join the waitlist.";
  }

  function openAnnouncementModal() {
    if (state.role !== "admin") { beginLogin("admin"); return; }
    const events = state.events.filter((event) => getEventStatus(event).key !== "completed");
    openModal(`
      <form id="announcementForm">
        <div class="modal-header"><div><h2>New announcement</h2><p>Publish a clear update to your event audience.</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="form-group full"><label for="announcementTitle">Headline</label><div class="form-control"><input id="announcementTitle" name="title" placeholder="e.g. Venue update for Innovate AI" minlength="3" maxlength="70" required></div></div>
            <div class="form-group full"><label for="announcementMessage">Message</label><div class="form-control"><textarea id="announcementMessage" name="message" placeholder="Write the update students should know..." maxlength="300" required></textarea></div></div>
            <div class="form-group"><label for="announcementAudience">Audience</label><div class="form-control"><select id="announcementAudience" name="audience"><option>All students</option><option>All registrants</option><option>Volunteers</option><option>Organizers only</option></select></div></div>
            <div class="form-group"><label for="announcementEvent">Related event</label><div class="form-control"><select id="announcementEvent" name="eventId"><option value="">General campus update</option>${events.map((event) => `<option value="${escapeHTML(event.id)}">${escapeHTML(event.title)}</option>`).join("")}</select></div></div>
          </div>
        </div>
        <div class="modal-footer"><button class="secondary-button" type="button" data-close-modal>Save draft</button><button class="primary-button" type="submit">${icon("send")} Publish announcement</button></div>
      </form>`);
    const form = document.getElementById("announcementForm");
    form.addEventListener("submit", (submitEvent) => {
      submitEvent.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const announcement = {
        id: uniqueId("ann"),
        title: data.get("title").trim(),
        message: data.get("message").trim(),
        audience: data.get("audience"),
        eventId: data.get("eventId") || null,
        publishedAt: new Date().toISOString(),
        active: true
      };
      state.announcements.unshift(announcement);
      state.notifications.unshift({ id: uniqueId("not"), title: "Announcement published", message: announcement.title, type: "announcement", createdAt: announcement.publishedAt, read: false });
      safeSave(STORAGE_KEYS.announcements, state.announcements);
      safeSave(STORAGE_KEYS.notifications, state.notifications);
      closeModal();
      renderCurrentView();
      showToast("Announcement published", `Your update is live for ${announcement.audience.toLowerCase()}.`);
    });
  }

  function showConfirm({ title, message, confirmText = "Confirm", danger = true }) {
    return new Promise((resolve) => {
      openModal(`
        <div class="confirm-copy"><span class="confirm-icon" style="--danger-color:${danger ? "var(--red)" : "var(--primary)"};--danger-soft:${danger ? "var(--red-soft)" : "var(--primary-soft)"}">${icon(danger ? "trash" : "info")}</span><span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(message)}</p></span></div>
        <div class="modal-footer"><button class="secondary-button" type="button" data-confirm-result="false">Cancel</button><button class="${danger ? "danger-button" : "primary-button"}" type="button" data-confirm-result="true">${escapeHTML(confirmText)}</button></div>`, true);
      modalRoot.querySelectorAll("[data-confirm-result]").forEach((button) => button.addEventListener("click", () => {
        const result = button.dataset.confirmResult === "true";
        closeModal();
        resolve(result);
      }));
      const observer = new MutationObserver(() => {
        if (modalRoot.hidden) {
          observer.disconnect();
          resolve(false);
        }
      });
      observer.observe(modalRoot, { attributes: true, attributeFilter: ["hidden"] });
    });
  }

  async function deleteEvent(id) {
    const event = getEventById(id);
    if (!event) return;
    const confirmed = await showConfirm({ title: "Delete this event?", message: `${event.title}, its registrations, and related announcements will be permanently removed from this workspace.`, confirmText: "Delete event" });
    if (!confirmed) return;
    state.events = state.events.filter((item) => item.id !== id);
    state.registrations = state.registrations.filter((item) => item.eventId !== id);
    state.announcements = state.announcements.filter((item) => item.eventId !== id);
    safeSave(STORAGE_KEYS.events, state.events);
    safeSave(STORAGE_KEYS.registrations, state.registrations);
    safeSave(STORAGE_KEYS.announcements, state.announcements);
    closeDrawer();
    renderCurrentView();
    showToast("Event deleted", `${event.title} was removed.`);
  }

  function showRoleSwitcher() {
    openModal(`
      <div class="modal-header"><div><h2>Choose your portal</h2><p>Switch between event administration and the student experience.</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
      <div class="modal-body">
        <div class="portal-choice-grid">
          <button class="portal-choice ${state.role === "admin" ? "selected" : ""}" type="button" data-switch-role-to="admin"><span class="portal-choice-icon admin">${icon("shield")}</span><span><strong>Admin portal</strong><small>Create events, manage registrations, publish announcements, and review insights.</small></span><i>${state.role === "admin" ? icon("check") : icon("arrow-right")}</i></button>
          <button class="portal-choice ${state.role === "student" ? "selected" : ""}" type="button" data-switch-role-to="student"><span class="portal-choice-icon student">${icon("graduation")}</span><span><strong>Student portal</strong><small>Discover events, register, save events, and manage your student schedule.</small></span><i>${state.role === "student" ? icon("check") : icon("arrow-right")}</i></button>
        </div>
        <p class="form-hint" style="margin-top:14px">Each portal requires its own user ID and password. Switching closes the current session.</p>
      </div>`, true);
  }

  function switchRole(role) {
    const targetRole = role === "student" ? "student" : "admin";
    closeModal();
    if (state.authenticated && state.role === targetRole) {
      navigate(targetRole === "student" ? "student-home" : "dashboard");
      return;
    }
    beginLogin(targetRole, targetRole === "student" ? "student-home" : "dashboard");
    showToast("Credentials required", `Enter the ${targetRole} user ID and password to continue.`, "info");
  }

  function registerStudentForEvent(eventId) {
    const event = getEventById(eventId);
    if (!event) return;
    const status = getEventStatus(event);
    if (status.key === "completed" || status.key === "cancelled") {
      showToast("Registration closed", "This event is no longer accepting registrations.", "error");
      return;
    }
    if (studentOwnRegistration(eventId)) {
      showToast("Already registered", `Your pass for ${event.title} is in My Registrations.`, "info");
      return;
    }
    const full = Number(event.registered) >= Number(event.capacity);
    const registration = {
      id: uniqueId("reg"),
      name: state.studentProfile.name,
      email: state.studentProfile.email,
      studentId: state.studentProfile.studentId,
      department: state.studentProfile.department,
      year: state.studentProfile.year,
      eventId,
      status: full ? "Waitlist" : "Confirmed",
      registeredAt: new Date().toISOString()
    };
    state.registrations.unshift(registration);
    if (!full) event.registered = Number(event.registered || 0) + 1;
    state.notifications.unshift({ id: uniqueId("not"), title: full ? "Waitlist join" : "Registration confirmed", message: `${event.title} ${full ? "waitlist" : "registration"} updated.`, type: "registration", createdAt: new Date().toISOString(), read: false });
    safeSave(STORAGE_KEYS.registrations, state.registrations);
    safeSave(STORAGE_KEYS.events, state.events);
    safeSave(STORAGE_KEYS.notifications, state.notifications);
    closeDrawer();
    renderCurrentView();
    showToast(full ? "Added to waitlist" : "You're registered", `${event.title} was added to your student pass.`);
  }

  function toggleSavedEvent(eventId) {
    const event = getEventById(eventId);
    if (!event) return;
    const wasSaved = state.savedEvents.includes(eventId);
    state.savedEvents = wasSaved ? state.savedEvents.filter((id) => id !== eventId) : [...state.savedEvents, eventId];
    safeSave(STORAGE_KEYS.savedEvents, state.savedEvents);
    if (drawerRoot.innerHTML.includes(`data-save-event="${eventId}"`)) openEventDrawer(eventId);
    else renderCurrentView();
    showToast(wasSaved ? "Removed from saved" : "Event saved", event.title, "info");
  }

  async function cancelStudentRegistration(registrationId) {
    const registration = state.registrations.find((item) => item.id === registrationId);
    if (!registration) return;
    const event = getEventById(registration.eventId);
    const confirmed = await showConfirm({ title: "Cancel this registration?", message: `Your pass for ${event?.title || "this event"} will be cancelled and any confirmed seat will be released.`, confirmText: "Cancel registration" });
    if (!confirmed) return;
    if (event && registration.status !== "Waitlist") event.registered = Math.max(0, Number(event.registered) - 1);
    state.registrations = state.registrations.filter((item) => item.id !== registrationId);
    safeSave(STORAGE_KEYS.events, state.events);
    safeSave(STORAGE_KEYS.registrations, state.registrations);
    renderCurrentView();
    showToast("Registration cancelled", `${event?.title || "The event"} has been removed from your passes.`, "info");
  }

  function editStudentProfile() {
    const profile = state.studentProfile;
    openModal(`
      <form id="studentProfileForm">
        <div class="modal-header"><div><h2>Student profile</h2><p>Update the demo identity used for campus event registrations.</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
        <div class="modal-body"><div class="form-grid">
          <div class="form-group full"><label for="studentProfileName">Full name</label><div class="form-control"><input id="studentProfileName" name="name" value="${escapeHTML(profile.name)}" required></div></div>
          <div class="form-group"><label for="studentProfileEmail">Email</label><div class="form-control"><input id="studentProfileEmail" name="email" type="email" value="${escapeHTML(profile.email)}" required></div></div>
          <div class="form-group"><label for="studentProfileId">Student ID</label><div class="form-control"><input id="studentProfileId" name="studentId" value="${escapeHTML(profile.studentId)}" required></div></div>
          <div class="form-group"><label for="studentProfileDepartment">Department</label><div class="form-control"><input id="studentProfileDepartment" name="department" value="${escapeHTML(profile.department)}" required></div></div>
          <div class="form-group"><label for="studentProfileYear">Year</label><div class="form-control"><select id="studentProfileYear" name="year">${["First Year", "Second Year", "Third Year", "Fourth Year", "Graduate"].map((year) => `<option ${profile.year === year ? "selected" : ""}>${year}</option>`).join("")}</select></div></div>
          <div class="form-group full"><label for="studentProfileDivision">Division</label><div class="form-control"><input id="studentProfileDivision" name="division" value="${escapeHTML(profile.division)}" placeholder="e.g. SE-C"></div></div>
        </div></div>
        <div class="modal-footer"><button class="secondary-button" type="button" data-close-modal>Cancel</button><button class="primary-button" type="submit">${icon("check")} Save profile</button></div>
      </form>`);
    document.getElementById("studentProfileForm").addEventListener("submit", (formEvent) => {
      formEvent.preventDefault();
      const form = formEvent.currentTarget;
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      state.studentProfile = {
        name: data.get("name").trim(),
        email: data.get("email").trim(),
        studentId: data.get("studentId").trim().toUpperCase(),
        department: data.get("department").trim(),
        year: data.get("year"),
        division: data.get("division").trim()
      };
      safeSave(STORAGE_KEYS.studentProfile, state.studentProfile);
      closeModal();
      renderCurrentView();
      showToast("Student profile updated", "Your event identity has been saved on this device.");
    });
  }

  function requestVenue(venue = "Campus venue") {
    const subject = encodeURIComponent(`Venue enquiry: ${venue}`);
    const body = encodeURIComponent(`Hello MGMCET Administration,\n\nI would like to request information about using ${venue} for a student event.\n\nEvent title:\nProposed date and time:\nExpected attendees:\nOrganizing department/club:\n\nPlease let me know the booking and approval process.\n\nThank you.`);
    window.location.href = `mailto:${COLLEGE.email}?subject=${subject}&body=${body}`;
    showToast("Email draft opened", `Send your venue enquiry to ${COLLEGE.email}.`, "info");
  }

  function showRegistrationRecord(id) {
    const registration = state.registrations.find((item) => item.id === id);
    if (!registration) return;
    const event = getEventById(registration.eventId);
    openModal(`
      <div class="modal-header"><div><h2>Registration record</h2><p>${registrationRecordNumber(registration)} · Complete student record</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
      <div class="modal-body"><div class="record-student-head"><span class="avatar ${pickAvatarColor(registration.name)}">${escapeHTML(initials(registration.name))}</span><div><strong>${escapeHTML(registration.name)}</strong><small>${escapeHTML(registration.studentId)} · ${escapeHTML(registration.year)}</small></div><span class="attendance-status ${registration.status === "Waitlist" ? "pending" : ""}">${escapeHTML(registration.status)}</span></div><div class="record-detail-grid">
        <div><small>Email</small><strong>${escapeHTML(registration.email)}</strong></div><div><small>Department</small><strong>${escapeHTML(registration.department)}</strong></div><div><small>Event</small><strong>${escapeHTML(event?.title || "Unknown event")}</strong></div><div><small>Event date</small><strong>${event ? escapeHTML(formatLongDate(event.date)) : "—"}</strong></div><div><small>Registered on</small><strong>${escapeHTML(new Date(registration.registeredAt).toLocaleString("en-IN"))}</strong></div><div><small>Attendance</small><strong>${escapeHTML(registration.attendance || "Not marked")}</strong></div></div></div>
      <div class="modal-footer"><button class="secondary-button" type="button" data-close-modal>Close</button><button class="primary-button" type="button" data-export-single-record="${escapeHTML(registration.id)}">${icon("download")} Export record</button></div>`, true);
  }

  function exportRegistrationRecords() {
    const records = filteredRecordData();
    if (!records.length) { showToast("No records to export", "Change the record filters and try again.", "error"); return; }
    const headers = ["Record ID", "Student Name", "Student ID", "Email", "Department", "Year", "Event", "Event Date", "Registration Status", "Attendance", "Registered At"];
    const rows = records.map((registration) => [registrationRecordNumber(registration), registration.name, registration.studentId, registration.email, registration.department, registration.year, getEventById(registration.eventId)?.title || "", getEventById(registration.eventId)?.date || "", registration.status, registration.attendance || "Not marked", registration.registeredAt]);
    const filename = `smartclg-registration-records-${toDateKey(new Date())}.csv`;
    downloadFile(filename, [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n"), "text/csv;charset=utf-8");
    showToast("Records exported", `${records.length} records saved to your browser's Downloads folder as ${filename}.`);
  }

  function printRegistrationRecords() {
    window.print();
  }

  function showToast(title, message, type = "success") {
    const toast = document.createElement("div");
    const colors = { success: "var(--mint)", error: "var(--red)", info: "var(--primary)" };
    toast.className = "toast";
    toast.style.setProperty("--toast-color", colors[type] || colors.success);
    toast.innerHTML = `<span class="toast-icon">${icon(type === "error" ? "alert-circle" : type === "info" ? "info" : "check-circle")}</span><span class="toast-copy"><strong>${escapeHTML(title)}</strong><p>${escapeHTML(message)}</p></span><button class="toast-close" type="button" aria-label="Dismiss notification">${icon("close")}</button>`;
    toastRegion.appendChild(toast);
    const remove = () => {
      toast.classList.add("removing");
      window.setTimeout(() => toast.remove(), 210);
    };
    toast.querySelector("button").addEventListener("click", remove);
    window.setTimeout(remove, 4500);
  }

  function downloadFile(filename, content, type = "text/plain;charset=utf-8") {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function csvCell(value) {
    return `"${String(value ?? "").replaceAll('"', '""')}"`;
  }

  function exportRegistrations() {
    if (!state.registrations.length) {
      showToast("Nothing to export", "There are no registrations in this workspace.", "error");
      return;
    }
    const headers = ["Student Name", "Email", "Student ID", "Department", "Year", "Event", "Status", "Registered At"];
    const rows = state.registrations.map((registration) => [
      registration.name,
      registration.email,
      registration.studentId,
      registration.department,
      registration.year,
      getEventById(registration.eventId)?.title || "Unknown event",
      registration.status,
      registration.registeredAt
    ]);
    downloadFile(`smartclg-registrations-${toDateKey(new Date())}.csv`, [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n"), "text/csv;charset=utf-8");
    showToast("Export ready", `${state.registrations.length} registrations were exported as CSV.`);
  }

  function exportEvents() {
    const headers = ["Title", "Category", "Date", "Start", "End", "Venue", "Organizer", "Capacity", "Registered", "Status"];
    const rows = state.events.map((event) => [event.title, event.category, event.date, event.time, event.endTime, event.venue, event.organizer, event.capacity, event.registered, getEventStatus(event).label]);
    downloadFile(`smartclg-events-${toDateKey(new Date())}.csv`, [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n"), "text/csv;charset=utf-8");
    showToast("Events exported", `${state.events.length} events were downloaded.`);
  }

  function exportCalendar() {
    const formatICSDate = (date, time) => `${date.replaceAll("-", "")}T${time.replace(":", "")}00`;
    const events = state.events.map((event) => [
      "BEGIN:VEVENT",
      `UID:${event.id}@smartclg.local`,
      `DTSTAMP:${new Date().toISOString().replaceAll("-", "").replaceAll(":", "").split(".")[0]}Z`,
      `DTSTART:${formatICSDate(event.date, event.time)}`,
      `DTEND:${formatICSDate(event.date, event.endTime)}`,
      `SUMMARY:${event.title}`,
      `LOCATION:${event.venue}`,
      `DESCRIPTION:${event.description.replaceAll("\n", " ")}`,
      "END:VEVENT"
    ].join("\r\n"));
    downloadFile("smartclg-events.ics", `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//SmartCLG//College Events//EN\r\n${events.join("\r\n")}\r\nEND:VCALENDAR`, "text/calendar;charset=utf-8");
    showToast("Calendar exported", "Your .ics file is ready to import.");
  }

  function exportWorkspace() {
    const payload = { exportedAt: new Date().toISOString(), app: "SmartCLG", version: 1, preferences: state.preferences, events: state.events, registrations: state.registrations, announcements: state.announcements, notifications: state.notifications };
    downloadFile(`smartclg-workspace-${toDateKey(new Date())}.json`, JSON.stringify(payload, null, 2), "application/json");
    showToast("Workspace exported", "A complete JSON backup was downloaded.");
  }

  function exportInsights() {
    const totalRegistrations = state.events.reduce((sum, event) => sum + Number(event.registered), 0);
    const report = [
      "SMARTCLG EVENT INSIGHTS",
      `Generated: ${new Date().toLocaleString()}`,
      "",
      `Managed events,${state.events.length}`,
      `Total registrations,${totalRegistrations}`,
      `Average fill rate,${percentage(totalRegistrations, state.events.reduce((sum, event) => sum + Number(event.capacity), 0))}%`,
      "",
      "Top events by registrations",
      ...[...state.events].sort((a, b) => b.registered - a.registered).slice(0, 5).map((event) => `${event.title},${event.registered},${percentage(event.registered, event.capacity)}%`)
    ].join("\n");
    downloadFile(`smartclg-insights-${toDateKey(new Date())}.csv`, report, "text/csv;charset=utf-8");
    showToast("Report exported", "Your event insights summary is ready.");
  }

  function resetDemoData() {
    state.events = createDefaultEvents();
    state.registrations = createDefaultRegistrations();
    state.announcements = createDefaultAnnouncements();
    state.notifications = createDefaultNotifications();
    state.eventFilters = { search: "", category: "All", status: "All", sort: "date-asc" };
    state.registrationFilters = { search: "", event: "All" };
    safeSave(STORAGE_KEYS.events, state.events);
    safeSave(STORAGE_KEYS.registrations, state.registrations);
    safeSave(STORAGE_KEYS.announcements, state.announcements);
    safeSave(STORAGE_KEYS.notifications, state.notifications);
    navigate("dashboard");
    showToast("Demo reset", "SmartCLG was restored to its original sample data.");
  }

  function updateRegistrationResults() {
    const results = document.getElementById("registrationResults");
    if (results) results.innerHTML = registrationTableMarkup();
  }

  function mainClickHandler(event) {
    const target = event.target;
    const specificAction = target.closest("[data-register-event], [data-save-event], [data-cancel-student-registration], [data-toggle-attendance], [data-view-registration], [data-export-single-record], [data-switch-role-to], [data-edit-venue], [data-delete-venue], [data-edit-event], [data-delete-event], [data-remove-registration], [data-toggle-announcement], [data-read-notification]");
    if (specificAction) {
      if (specificAction.dataset.switchRoleTo) {
        switchRole(specificAction.dataset.switchRoleTo);
      } else if (specificAction.dataset.exportSingleRecord) {
        const registration = state.registrations.find((item) => item.id === specificAction.dataset.exportSingleRecord);
        if (registration) {
          const event = getEventById(registration.eventId);
          const line = [registrationRecordNumber(registration), registration.name, registration.studentId, registration.email, registration.department, registration.year, event?.title || "", event?.date || "", registration.status, registration.attendance || "Not marked", registration.registeredAt].map(csvCell).join(",");
          const filename = `${registrationRecordNumber(registration)}.csv`;
          downloadFile(filename, `Record ID,Student Name,Student ID,Email,Department,Year,Event,Event Date,Registration Status,Attendance,Registered At\n${line}`, "text/csv;charset=utf-8");
          closeModal();
          showToast("Record exported", `${registration.name}'s record was saved to your browser's Downloads folder as ${filename}.`);
        }
      } else if (specificAction.dataset.toggleAttendance) {
        const registration = state.registrations.find((item) => item.id === specificAction.dataset.toggleAttendance);
        if (registration) {
          registration.attendance = registration.attendance === "Present" ? "Not marked" : "Present";
          safeSave(STORAGE_KEYS.registrations, state.registrations);
          document.getElementById("registrationRecordResults").innerHTML = registrationRecordTable();
          showToast(registration.attendance === "Present" ? "Attendance marked" : "Attendance cleared", `${registration.name} · ${registration.attendance}`);
        }
      } else if (specificAction.dataset.viewRegistration) {
        showRegistrationRecord(specificAction.dataset.viewRegistration);
      } else if (specificAction.dataset.editVenue) {
        openVenueModal(specificAction.dataset.editVenue);
      } else if (specificAction.dataset.deleteVenue) {
        deleteVenue(specificAction.dataset.deleteVenue);
      } else if (specificAction.dataset.saveEvent) {
        toggleSavedEvent(specificAction.dataset.saveEvent);
      } else if (specificAction.dataset.cancelStudentRegistration) {
        cancelStudentRegistration(specificAction.dataset.cancelStudentRegistration);
      } else if (specificAction.dataset.registerEvent) {
        closeDrawer();
        if (state.role === "student") registerStudentForEvent(specificAction.dataset.registerEvent);
        else if (state.role === "admin") openRegistrationModal(specificAction.dataset.registerEvent);
        else beginLogin("student");
      } else if (specificAction.dataset.editEvent) {
        closeDrawer();
        openEventModal(specificAction.dataset.editEvent);
      } else if (specificAction.dataset.deleteEvent) {
        deleteEvent(specificAction.dataset.deleteEvent);
      } else if (specificAction.dataset.removeRegistration) {
        const id = specificAction.dataset.removeRegistration;
        const registration = state.registrations.find((item) => item.id === id);
        if (registration) {
          showConfirm({ title: "Remove registration?", message: `${registration.name} will be removed from this event. Their confirmed seat will be released.`, confirmText: "Remove" }).then((confirmed) => {
            if (!confirmed) return;
            const event = getEventById(registration.eventId);
            if (event && registration.status !== "Waitlist") event.registered = Math.max(0, Number(event.registered) - 1);
            state.registrations = state.registrations.filter((item) => item.id !== id);
            safeSave(STORAGE_KEYS.events, state.events);
            safeSave(STORAGE_KEYS.registrations, state.registrations);
            renderCurrentView();
            showToast("Registration removed", `${registration.name}'s seat has been released.`);
          });
        }
      } else if (specificAction.dataset.toggleAnnouncement) {
        const id = specificAction.dataset.toggleAnnouncement;
        const announcement = state.announcements.find((item) => item.id === id);
        if (announcement) {
          announcement.active = !announcement.active;
          safeSave(STORAGE_KEYS.announcements, state.announcements);
          renderCurrentView();
          showToast(announcement.active ? "Announcement published" : "Announcement archived", announcement.title);
        }
      } else if (specificAction.dataset.readNotification) {
        const notification = state.notifications.find((item) => item.id === specificAction.dataset.readNotification);
        if (notification && !notification.read) {
          notification.read = true;
          safeSave(STORAGE_KEYS.notifications, state.notifications);
          openNotificationsDrawer();
          updateNavigation();
        }
      }
      return;
    }

    const viewLink = target.closest("[data-view-link]");
    if (viewLink) {
      if (viewLink.dataset.loginRole) state.loginRole = viewLink.dataset.loginRole;
      navigate(viewLink.dataset.viewLink);
      return;
    }

    const calendarNav = target.closest("[data-calendar-nav]");
    if (calendarNav) {
      const direction = calendarNav.dataset.calendarNav;
      if (direction === "prev") state.calendarDate = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth() - 1, 1, 12);
      if (direction === "next") state.calendarDate = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth() + 1, 1, 12);
      if (direction === "today") state.calendarDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1, 12);
      renderCurrentView();
      return;
    }

    const layoutButton = target.closest("[data-event-layout]");
    if (layoutButton) {
      state.eventLayout = layoutButton.dataset.eventLayout;
      safeSave(STORAGE_KEYS.viewLayout, state.eventLayout);
      renderCurrentView();
      return;
    }

    const openEvent = target.closest("[data-open-event]");
    if (openEvent) {
      openEventDrawer(openEvent.dataset.openEvent);
      return;
    }

    const preference = target.closest("[data-toggle-preference]");
    if (preference) {
      const key = preference.dataset.togglePreference;
      state.preferences[key] = !state.preferences[key];
      safeSave(STORAGE_KEYS.preferences, state.preferences);
      preference.classList.toggle("active", state.preferences[key]);
      preference.setAttribute("aria-pressed", String(state.preferences[key]));
      showToast("Preference updated", `${preference.getAttribute("aria-label")} is now ${state.preferences[key] ? "on" : "off"}.`, "info");
      return;
    }

    const action = target.closest("[data-action]");
    if (!action) return;
    const actions = {
      "add-event": () => openEventModal(),
      "add-venue": () => openVenueModal(),
      "register-general": () => openRegistrationModal(),
      "new-announcement": () => openAnnouncementModal(),
      "switch-role": showRoleSwitcher,
      "logout": logoutPortal,
      "student-login": () => beginLogin("student"),
      "edit-student-profile": editStudentProfile,
      "open-official-site": () => window.open(COLLEGE.officialSite, "_blank", "noopener,noreferrer"),
      "request-venue": () => requestVenue(action.dataset.venue || "a campus venue"),
      "clear-event-filters": () => {
        state.eventFilters = { search: "", category: "All", status: "All", sort: "date-asc" };
        renderCurrentView();
      },
      "mark-all-read": () => {
        state.notifications.forEach((notification) => { notification.read = true; });
        safeSave(STORAGE_KEYS.notifications, state.notifications);
        openNotificationsDrawer();
        updateNavigation();
      },
      "export-registrations": exportRegistrations,
      "export-records": exportRegistrationRecords,
      "print-records": printRegistrationRecords,
      "clear-record-filters": () => { state.recordFilters = { search: "", event: "All", status: "All", attendance: "All", sort: "newest" }; renderCurrentView(); },
      "export-events": exportEvents,
      "export-calendar": exportCalendar,
      "export-workspace": exportWorkspace,
      "export-insights": exportInsights,
      "toggle-theme": () => toggleTheme(),
      "learn-more": () => showFeatureModal(),
      "save-settings-top": () => document.getElementById("settingsForm")?.requestSubmit(),
      "reset-settings-form": () => {
        const form = document.getElementById("settingsForm");
        if (form) form.reset();
      },
      "reset-demo": async () => {
        const confirmed = await showConfirm({ title: "Reset all workspace data?", message: "Your custom events, registrations, and announcements will be replaced with the original sample data.", confirmText: "Reset workspace" });
        if (confirmed) resetDemoData();
      }
    };
    actions[action.dataset.action]?.();
  }

  function showFeatureModal() {
    openModal(`
      <div class="modal-header"><div><h2>Everything your campus needs</h2><p>One connected workflow from idea to impact.</p></div><button class="icon-button" type="button" data-close-modal aria-label="Close">${icon("close")}</button></div>
      <div class="modal-body">
        <div class="insight-list" style="padding:0">
          <div class="insight-item"><span class="insight-icon" style="--insight-color:var(--primary);--insight-soft:var(--primary-soft)">${icon("calendar")}</span><span><strong>Smart event planning</strong><p>Create schedules, venues, capacities, agendas, and featured events in minutes.</p></span></div>
          <div class="insight-item"><span class="insight-icon" style="--insight-color:var(--mint);--insight-soft:var(--mint-soft)">${icon("user-plus")}</span><span><strong>Effortless registration</strong><p>Track confirmed seats and waitlists, then export attendee-ready CSV data.</p></span></div>
          <div class="insight-item"><span class="insight-icon" style="--insight-color:var(--blue);--insight-soft:var(--blue-soft)">${icon("chart")}</span><span><strong>Actionable insights</strong><p>Understand category demand, event popularity, capacity, and registration trends.</p></span></div>
        </div>
      </div>
      <div class="modal-footer"><button class="primary-button" type="button" data-close-modal>Got it</button></div>`, true);
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    state.preferences.theme = state.theme;
    safeSave(STORAGE_KEYS.theme, state.theme);
    safeSave(STORAGE_KEYS.preferences, state.preferences);
    applyTheme();
    if (state.view === "settings") renderCurrentView();
  }

  function handleMainInput(event) {
    if (event.target.id === "eventSearch") {
      const cursor = event.target.selectionStart;
      state.eventFilters.search = event.target.value;
      const results = document.getElementById("eventResults");
      const summary = document.getElementById("eventResultSummary");
      if (results) results.innerHTML = eventResultsMarkup();
      if (summary) summary.innerHTML = eventResultSummary();
      event.target.setSelectionRange(cursor, cursor);
    }
    if (event.target.id === "registrationSearch") {
      const cursor = event.target.selectionStart;
      state.registrationFilters.search = event.target.value;
      updateRegistrationResults();
      event.target.setSelectionRange(cursor, cursor);
    }
    if (event.target.id === "recordSearch") {
      const cursor = event.target.selectionStart;
      state.recordFilters.search = event.target.value;
      document.getElementById("registrationRecordResults").innerHTML = registrationRecordTable();
      document.getElementById("recordResultSummary").textContent = `${formatNumber(filteredRecordData().length)} of ${formatNumber(state.registrations.length)} records shown`;
      event.target.setSelectionRange(cursor, cursor);
    }
  }

  function handleMainChange(event) {
    if (event.target.id === "eventCategory") {
      state.eventFilters.category = event.target.value;
      document.getElementById("eventResults").innerHTML = eventResultsMarkup();
      document.getElementById("eventResultSummary").innerHTML = eventResultSummary();
    }
    if (event.target.id === "eventStatus") {
      state.eventFilters.status = event.target.value;
      document.getElementById("eventResults").innerHTML = eventResultsMarkup();
      document.getElementById("eventResultSummary").innerHTML = eventResultSummary();
    }
    if (event.target.id === "eventSort") {
      state.eventFilters.sort = event.target.value;
      document.getElementById("eventResults").innerHTML = eventResultsMarkup();
    }
    if (event.target.id === "registrationEvent") {
      state.registrationFilters.event = event.target.value;
      updateRegistrationResults();
    }
    if (["recordEvent", "recordStatus", "recordAttendance", "recordSort"].includes(event.target.id)) {
      const key = event.target.id === "recordEvent" ? "event" : event.target.id === "recordStatus" ? "status" : event.target.id === "recordAttendance" ? "attendance" : "sort";
      state.recordFilters[key] = event.target.value;
      document.getElementById("registrationRecordResults").innerHTML = registrationRecordTable();
      document.getElementById("recordResultSummary").textContent = `${formatNumber(filteredRecordData().length)} of ${formatNumber(state.registrations.length)} records shown`;
    }
  }

  function handleGlobalSearch(event) {
    if (event.key !== "Enter") return;
    const query = event.currentTarget.value.trim();
    if (!query) return;
    const lowered = query.toLowerCase();
    const eventMatch = state.events.some((event) => [event.title, event.category, event.venue, event.organizer].join(" ").toLowerCase().includes(lowered));
    const registrationMatch = state.registrations.some((registration) => [registration.name, registration.email, registration.studentId].join(" ").toLowerCase().includes(lowered));
    if (!eventMatch && registrationMatch) {
      state.registrationFilters.search = query;
      navigate("registrations");
    } else {
      state.eventFilters.search = query;
      state.eventFilters.category = "All";
      state.eventFilters.status = "All";
      navigate("events");
    }
    event.currentTarget.blur();
  }

  function handleKeyboard(event) {
    const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName);
    if (event.key === "/" && !typing) {
      event.preventDefault();
      document.getElementById("globalSearch")?.focus();
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.getElementById("globalSearch")?.focus();
    }
    if (event.key === "Escape") {
      if (!modalRoot.hidden) closeModal();
      else if (!drawerRoot.hidden) closeDrawer();
      else closeSidebar();
    }
  }

  function saveSettings(form) {
    const data = new FormData(form);
    state.preferences.institution = data.get("institution").trim();
    state.preferences.coordinator = data.get("coordinator").trim();
    state.preferences.email = data.get("email").trim();
    state.preferences.timezone = data.get("timezone");
    safeSave(STORAGE_KEYS.preferences, state.preferences);
    const brandCampus = document.querySelector(".campus-copy strong");
    const coordinatorName = document.querySelector(".profile-copy strong");
    if (brandCampus) brandCampus.textContent = state.preferences.institution;
    if (coordinatorName) coordinatorName.textContent = state.preferences.coordinator;
    renderCurrentView();
    showToast("Settings saved", "Your workspace profile has been updated.");
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-view]")) {
      event.preventDefault();
      const link = event.target.closest("[data-view]");
      if (link.dataset.loginRole) state.loginRole = link.dataset.loginRole;
      const destination = link.dataset.view === "home" && state.authenticated ? (state.role === "admin" ? "dashboard" : "student-home") : link.dataset.view;
      navigate(destination);
      return;
    }
    if (event.target.closest("[data-close-modal]") || event.target === modalRoot) {
      closeModal();
      return;
    }
    if (event.target.closest("[data-close-drawer]") || event.target === drawerRoot) {
      closeDrawer();
      return;
    }
    if (modalRoot.contains(event.target) || drawerRoot.contains(event.target) || mainContent.contains(event.target) || event.target.closest(".topbar, .sidebar, .toast-region")) {
      mainClickHandler(event);
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "settingsForm") {
      event.preventDefault();
      saveSettings(event.target);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.matches("[data-open-event]") && !event.target.closest("button")) {
      openEventDrawer(event.target.dataset.openEvent);
    }
  });

  mainContent.addEventListener("input", handleMainInput);
  mainContent.addEventListener("change", handleMainChange);
  document.getElementById("globalSearch").addEventListener("keydown", handleGlobalSearch);
  document.getElementById("menuButton").addEventListener("click", openSidebar);
  document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
  sidebarScrim.addEventListener("click", closeSidebar);
  document.getElementById("themeButton").addEventListener("click", toggleTheme);
  document.getElementById("notificationButton").addEventListener("click", () => state.authenticated ? openNotificationsDrawer() : beginLogin("student"));
  window.addEventListener("hashchange", () => {
    const hashView = location.hash.slice(1);
    if (VALID_VIEWS.includes(hashView) && hashView !== state.view) navigate(hashView, false);
  });
  document.addEventListener("keydown", handleKeyboard);

  function initialize() {
    hydrateStaticIcons();
    applyTheme();
    document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(new Date());
    document.getElementById("footerYear").textContent = new Date().getFullYear();
    const campusName = document.querySelector(".campus-copy strong");
    const coordinatorName = document.querySelector(".profile-copy strong");
    if (campusName) campusName.textContent = state.preferences.institution;
    if (coordinatorName) coordinatorName.textContent = state.preferences.coordinator;
    renderCurrentView();
  }

  initialize();
})();
