const asset = (name) => `${import.meta.env.BASE_URL}assets/case-study-workforce/${name}`;

export const workforceDispatchCaseStudy = {
  id: "workforce-dispatch",
  title: "Enterprise Mobile Workforce & Dispatch Platform",
  fullTitle: "Digitizing Enterprise Workforce Dispatch from Assignment to Closure",
  slides: [
    {
      chapter: "01 · Project Overview",
      title: "Replacing manual dispatch with a traceable digital workflow",
      body: "Dispatch operations relied on manual notifications and fragmented status updates. Without reliable transition tracking or audit controls, data errors accumulated and operational reports were delayed. The project digitized the full workflow across mobile and administrative experiences.",
      thumbnail: asset("thumbnails/thumb-01.webp"),
      images: [
        {
          src: asset("03-operational-dashboard.webp"),
          alt: "Operational dashboard for the enterprise workforce dispatch platform",
          label: "Operational dashboard",
        },
      ],
      facts: ["Enterprise platform", "Web + mobile", "Role-based workflow", "Data integration"],
      callout: "My role — Led As-Is / To-Be requirements analysis, cross-device permission and state-machine design, schema definition, Stored Procedure refactoring, and coordinated delivery across mobile, web, backend, database, QA, and business teams.",
    },
    {
      chapter: "02 · Goals",
      title: "Stabilize the critical workflow before extending the platform",
      body: "The first release focused on locking down the core state transitions and fail-safe validation rules. Once the critical path was stable, the same rules could support surrounding modules without creating inconsistent data or conflicting status updates.",
      thumbnail: asset("thumbnails/thumb-02.webp"),
      images: [
        {
          src: asset("10-platform-home.webp"),
          alt: "Enterprise platform home screen with workforce management modules",
          label: "Unified platform entry point",
        },
      ],
      insights: [
        ["01 · Dispatch", "Create the task, identify eligible personnel, and send the assignment."],
        ["02 · Receive", "Record acknowledgement, availability, and exception responses."],
        ["03 · Execute", "Track attendance, equipment, progress, and field updates."],
        ["04 · Close", "Validate completion, preserve an audit trail, and enable reporting."],
      ],
      callout: "Core workflow: Dispatch → Receive → Execute → Close",
    },
    {
      chapter: "03 · Requirements Analysis",
      title: "Turn complex roles and operating rules into modular requirements",
      body: "Stakeholder interviews and As-Is / To-Be analysis were used to map roles, permissions, notifications, exceptions, data dependencies, and external integrations. The analysis was then decomposed into modules, state rules, field definitions, and testable acceptance criteria.",
      thumbnail: asset("thumbnails/thumb-03.webp"),
      images: [
        {
          src: asset("02-requirements-mindmap.webp"),
          alt: "Mind map of user roles, permissions, and workforce system functions",
          label: "Figure 1 · Role and function analysis",
        },
        {
          src: asset("01-scope-overview.webp"),
          alt: "Modularized enterprise platform scope and integration overview",
          label: "Analysis result · Modularized platform scope",
        },
      ],
      facts: ["Roles + permissions", "State + exception rules", "Data dependencies", "Acceptance criteria"],
    },
    {
      chapter: "04 · User Flow",
      title: "Align dispatch administrators, team leaders, and field personnel",
      body: "The end-to-end swimlane mapped event creation, personnel search, notification, acknowledgement, check-in, task execution, field reporting, equipment return, closure, and post-event analysis. It clarified ownership and handoffs before development began.",
      thumbnail: asset("thumbnails/thumb-04.webp"),
      images: [
        {
          src: asset("11-user-flow.webp"),
          alt: "Cross-role swimlane workflow for disaster dispatch and field operations",
          label: "Figure 2 · Cross-role operational flow",
        },
      ],
      facts: ["Event setup", "Dispatch preparation", "Field execution", "Closure + analysis"],
    },
    {
      chapter: "05 · Wireframes / Prototype",
      title: "Design one coherent experience across desktop and mobile",
      body: "The prototype work established reusable UI patterns, validated the mobile response journey, and tested how maps, alerts, dashboards, and operational details would adapt across devices. This gave engineering teams a shared interaction reference before implementation.",
      thumbnail: asset("thumbnails/thumb-05.webp"),
      images: [
        {
          src: asset("05-design-system.webp"),
          alt: "Interface component library and interaction patterns",
          label: "Figure 3 · UI components and interaction patterns",
        },
        {
          src: asset("06-mobile-flow.webp"),
          alt: "Mobile workflow prototypes for notifications, response, reporting, and maps",
          label: "Figure 4 · Mobile workflow prototype",
        },
        {
          src: asset("08-responsive-prototype.webp"),
          alt: "Responsive dispatch platform shown on desktop, tablet, and mobile",
          label: "Figure 5 · Responsive system concept",
        },
      ],
      facts: ["Reusable components", "Mobile response flow", "Responsive layouts", "GIS + dashboard views"],
    },
    {
      chapter: "06 · Requirements Specification",
      title: "Translate workflow decisions into build-ready specifications",
      body: "The specification connected user scenarios to permission matrices, state transitions, schema and field mappings, API input/output behavior, Stored Procedure logic, validation rules, exception handling, and UAT acceptance criteria. Activity diagrams made create, edit, delete, and role-permission behavior explicit.",
      thumbnail: asset("thumbnails/thumb-06.webp"),
      images: [
        {
          src: asset("07-deployment-architecture.webp"),
          alt: "Deployment and data-integration architecture for the platform",
          label: "System and data architecture",
        },
        {
          src: asset("12-spec-project-function.webp"),
          alt: "Activity diagram for project function management",
          label: "Function-management activity specification",
        },
        {
          src: asset("13-spec-role-management.webp"),
          alt: "Activity diagram for role and permission management",
          label: "Role-management activity specification",
        },
      ],
      facts: ["RBAC matrix", "Schema + fields", "API behavior", "SQL logic", "UAT criteria"],
    },
    {
      chapter: "07 · Rollout / Impact",
      title: "Deliver a testable workflow at enterprise scale",
      body: "The platform converted a manual assignment process into a trackable, testable, and reportable operating workflow. Rollout included test-case preparation, regression testing, UAT, SOPs, training support, and operational handover across mobile and administrative modules.",
      thumbnail: asset("thumbnails/thumb-07.webp"),
      images: [
        {
          src: asset("09-dashboard-annotations.webp"),
          alt: "Annotated disaster dispatch dashboard with map, timeline, and status panels",
          label: "Operational dashboard and field reporting",
        },
        {
          src: asset("04-training-management.webp"),
          alt: "Administrative training course management interface",
          label: "Administrative module",
        },
        {
          src: asset("03-operational-dashboard.webp"),
          alt: "Workforce dispatch operations dashboard",
          label: "Live operational view",
        },
      ],
      insights: [
        ["8 major modules", "Requirements, integration, testing, and rollout across the verified functional scope."],
        ["50+ functional items", "Defined and validated across mobile and administrative workflows."],
        ["1M+ records", "Personnel, training, equipment, and task-related data processed or managed by the platform."],
        ["~10% faster", "Average reporting Stored Procedure execution time in controlled before/after tests, with regression and UAT validation."],
      ],
      callout: "Impact was measured through verified functional scope, data scale, and controlled SQL performance testing—not unverified user or delivery claims.",
    },
  ],
};
