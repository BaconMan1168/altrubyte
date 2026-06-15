import Image from "next/image";
import { MotionAnchor, Reveal } from "./components/reveal";

const hostWorkshopUrl = "#replace-with-host-workshop-google-form";
const joinWorkshopUrl = "#replace-with-join-workshop-google-form";

const workshopFormat = [
  "Free sessions",
  "Online by default",
  "45-90 minutes",
  "Beginner-friendly",
  "Hands-on demo",
];

const teachingPoints = [
  {
    title: "Build simple internal tools",
    body: "Turn spreadsheets, forms, and recurring admin tasks into small tools your team can actually use.",
  },
  {
    title: "Automate repetitive work",
    body: "Find the workflows that drain time, then prototype safer ways to handle the repeatable parts.",
  },
  {
    title: "Improve team operations",
    body: "Map a real nonprofit or student-org workflow before choosing where AI belongs.",
  },
  {
    title: "Use coding agents responsibly",
    body: "Learn prompting, review habits, privacy boundaries, and when a human should stay in control.",
  },
];

const projectExamples = [
  "Impact report builder",
  "Volunteer matching tool",
  "Donor follow-up assistant",
  "Shared inbox triage tool",
];

const workshopPaths = [
  {
    title: "AI-Assisted Building 101",
    bestFor: "Public sessions, schools, first-time groups, mixed experience levels",
    goal: "Teach core concepts and show what AI coding agents can do through a live demo.",
    output: "Participants understand the method and leave with one workflow idea or prompt.",
    length: "45, 60, or 90 min",
  },
  {
    title: "Workflow Mapping + Automation Strategy",
    bestFor: "Nonprofits, clubs, operational teams, staff groups",
    goal: "Identify repetitive workflows and decide what is worth automating.",
    output: "Prioritized workflow map plus recommended AI tool ideas.",
    length: "45, 60, or 90 min",
  },
  {
    title: "Focused Tool Demo / Use-Case Walkthrough",
    bestFor: "Organizations with one specific workflow, tool idea, or problem area",
    goal: "Walk through how that specific workflow could become a small AI-assisted tool.",
    output: "Shared prototype, build plan, or implementation direction for that use case.",
    length: "45, 60, or 90 min",
  },
  {
    title: "Hands-On Build Lab",
    bestFor: "Coding clubs, student groups, technical volunteers, teams that want practice",
    goal: "Participants use AI agents during the session to build or adapt a small tool.",
    output: "Individual or small-group prototype, prompt plan, or working draft.",
    length: "60 or 90 min recommended",
  },
];

const audiences = ["NGOs", "Nonprofits", "Schools", "Clubs", "Youth organizations"];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="grain" aria-hidden="true" />
      <Navigation />
      <Hero />
      <WorkshopFormat />
      <WhatWeTeach />
      <WorkshopPaths />
      <ProjectExamples />
      <WhoItsFor />
      <EarlyProof />
      <Contact />
    </main>
  );
}

function Navigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-4">
      <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-full border border-[color:var(--ring)] bg-[color:var(--bg)]/86 px-3 shadow-[0_18px_70px_var(--shadow)] backdrop-blur-xl sm:px-4">
        <a href="#" className="text-[15px] font-semibold tracking-[-0.02em]">
          Altrubyte
        </a>
        <div className="hidden items-center justify-center gap-7 text-sm text-[color:var(--muted)] lg:flex">
          <a className="transition hover:text-[color:var(--text)]" href="#format">
            Format
          </a>
          <a className="transition hover:text-[color:var(--text)]" href="#workshops">
            Workshops
          </a>
          <a className="transition hover:text-[color:var(--text)]" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-[color:var(--text)]" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex items-center justify-end gap-1 rounded-full bg-[color:var(--surface)]/64 p-1 shadow-[0_10px_28px_var(--shadow)]">
          <a
            href={joinWorkshopUrl}
            aria-label="Join a public workshop"
            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-[color:var(--muted)] transition duration-500 hover:text-[color:var(--text)] sm:inline-flex"
          >
            Public workshops
          </a>
          <a
            href={hostWorkshopUrl}
            aria-label="Request a workshop"
            className="center-fill-button rounded-full border border-[color:var(--ring)] px-4 py-2 text-sm font-semibold text-[color:var(--text)]"
          >
            Request workshop
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-10 px-4 pb-16 pt-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 lg:gap-14">
      <Reveal className="relative z-10">
        <p className="mb-5 inline-flex rounded-full border border-[color:var(--ring)] bg-[color:var(--surface)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
          Free AI-assisted coding workshops
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[color:var(--text)] md:text-6xl lg:text-7xl">
          Turn messy workflows into working tools.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
          Altrubyte helps mission-driven teams learn practical AI-assisted coding through live, hands-on workshops.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.4rem] bg-[color:var(--surface)]/68 p-2 shadow-[0_16px_60px_var(--shadow)]">
            <MotionAnchor
              href={hostWorkshopUrl}
              className="arrow-reveal-button group inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-full border border-transparent bg-[color:var(--accent)] px-6 text-sm font-bold text-white shadow-[0_18px_50px_var(--ring)]"
            >
              <span className="button-label">Request a workshop</span>
              <span className="arrow-chip grid h-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white/18">
                ↗
              </span>
            </MotionAnchor>
            <p className="px-3 pb-2 pt-4 text-sm leading-6 text-[color:var(--muted)]">
              For organizations, schools, nonprofits, clubs, and youth groups that want a session for their team or community.
            </p>
          </div>
          <div className="rounded-[1.4rem] bg-[color:var(--surface)]/68 p-2 shadow-[0_16px_60px_var(--shadow)]">
            <MotionAnchor
              href={joinWorkshopUrl}
              className="center-fill-button inline-flex h-16 w-full items-center justify-center rounded-full border border-[color:var(--ring)] bg-[color:var(--surface)]/76 px-5 text-sm font-bold text-[color:var(--text)]"
            >
              Join a public workshop
            </MotionAnchor>
            <p className="px-3 pb-2 pt-4 text-sm leading-6 text-[color:var(--muted)]">
              For individuals who want to hear when future public AI-assisted coding workshops open.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="relative">
        <div className="rounded-[2rem] border border-[color:var(--ring)] bg-[color:var(--surface)]/58 p-2 shadow-[0_34px_100px_var(--shadow)]">
          <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[color:var(--surface-muted)]">
            <Image
              src="/images/workshop-hero.png"
              alt="A small team learning AI-assisted coding around a laptop."
              width={1792}
              height={1024}
              priority
              className="aspect-[1.24/1] h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function WorkshopFormat() {
  return (
    <section id="format" className="px-4 py-20 md:px-8 md:py-28">
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] border border-[color:var(--ring)] bg-[color:var(--surface)]/72 p-5 shadow-[0_24px_90px_var(--shadow)] md:p-8">
        <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Low lift for your team.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--muted)]">
              Bring a workflow, a recurring task, or a general AI training goal. Altrubyte shapes the workshop around your group&apos;s needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 md:justify-end">
            {workshopFormat.map((item) => (
              <div
                key={item}
                className="min-h-28 rounded-[1.25rem] bg-[color:var(--surface-muted)] px-4 py-4 text-sm font-semibold leading-5 text-[color:var(--text)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function WhatWeTeach() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
          What your team learns
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
          The workshop focuses on practical judgment: learning core AI-assisted coding skills, building small, and reviewing AI-generated code safely.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-6">
        {teachingPoints.map((point, index) => (
          <Reveal
            key={point.title}
            delay={index * 0.04}
            className={[
              "rounded-[1.5rem] border border-[color:var(--ring)] p-6 shadow-[0_18px_70px_var(--shadow)]",
              index === 0 || index === 3
                ? "bg-[color:var(--accent-soft)] md:col-span-3"
                : "bg-[color:var(--surface)]/74 md:col-span-3",
            ].join(" ")}
          >
            <h3 className="text-xl font-semibold tracking-[-0.03em]">{point.title}</h3>
            <p className="mt-3 leading-7 text-[color:var(--muted)]">{point.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WorkshopPaths() {
  return (
    <section id="workshops" className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[color:var(--ring)] bg-[color:var(--surface)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
              Workshop paths
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Pick the AI workshop format around the work in front of you.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Altrubyte workshops help nonprofits, schools, clubs, and youth organizations
            learn AI-assisted coding, workflow automation, prompt design, and responsible
            coding-agent review through practical sessions.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
          {workshopPaths.map((path, index) => (
            <Reveal
              key={path.title}
              delay={index * 0.05}
              className={[
                "group",
                index % 2 === 0 ? "md:col-span-7" : "md:col-span-5",
              ].join(" ")}
            >
              <article className="h-full rounded-[2rem] border border-[color:var(--ring)] bg-[color:var(--surface)]/68 p-2 shadow-[0_24px_90px_var(--shadow)] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                <div className="grid h-full gap-5 rounded-[calc(2rem-0.5rem)] bg-[color:var(--surface-muted)] p-5 md:grid-cols-[auto_1fr] md:p-6">
                  <div className="flex md:block">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--text)] font-mono text-sm font-semibold text-[color:var(--surface)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <h3 className="max-w-xl text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                        {path.title}
                      </h3>
                      <span className="rounded-full border border-[color:var(--ring)] bg-[color:var(--surface)] px-3 py-2 text-xs font-semibold text-[color:var(--accent-strong)]">
                        {path.length}
                      </span>
                    </div>
                    <dl className="mt-8 grid gap-5 sm:grid-cols-3">
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--accent-strong)]">
                          Best for
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                          {path.bestFor}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--accent-strong)]">
                          Goal
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                          {path.goal}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--accent-strong)]">
                          Output
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                          {path.output}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="mt-6">
          <div className="rounded-[2rem] bg-[color:var(--text)] p-2 text-[color:var(--surface)] shadow-[0_24px_90px_var(--shadow)]">
            <div className="grid gap-5 rounded-[calc(2rem-0.5rem)] border border-white/10 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
              <p className="max-w-3xl text-base leading-7 text-[color:var(--surface-muted)]">
                Not sure which format fits? Request a workshop and choose
                <span className="font-semibold text-white"> Not sure / help me choose</span>.
                The session can be shaped around a training goal, a manual workflow, or one
                tool idea.
              </p>
              <MotionAnchor
                href={hostWorkshopUrl}
                className="arrow-reveal-button group inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[color:var(--accent)] px-6 text-sm font-bold text-white"
              >
                <span className="button-label">Request a workshop</span>
                <span className="arrow-chip grid h-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white/18">
                  ↗
                </span>
              </MotionAnchor>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectExamples() {
  return (
    <section id="projects" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Realistic workshop builds
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
            These are sample projects we can adapt to a partner organization&apos;s goals when a workflow-specific demo makes sense.
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {projectExamples.map((project, index) => (
            <Reveal
              key={project}
              delay={index * 0.05}
              className="group rounded-[1.5rem] border border-[color:var(--ring)] bg-[color:var(--surface)]/76 p-5 transition duration-700 hover:-translate-y-1 hover:bg-[color:var(--surface-muted)]"
            >
              <span className="font-mono text-xs text-[color:var(--accent-strong)]">
                Sample build
              </span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{project}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal className="rounded-[2rem] bg-[color:var(--text)] p-6 text-[color:var(--surface)] md:p-10">
        <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
          Built for teams doing useful work with limited time.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold"
            >
              {audience}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function EarlyProof() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <Reveal className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        <div className="rounded-[1.5rem] bg-[color:var(--surface)]/78 p-6 md:col-span-2">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Getting started without pretending to have scale.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Altrubyte is currently looking for early partner organizations and public workshop interest. The goal is to make each first session useful, specific, and easy to repeat.
          </p>
        </div>
        <div className="rounded-[1.5rem] bg-[color:var(--accent-soft)] p-6">
          <p className="font-mono text-sm text-[color:var(--accent-strong)]">
            Early partner fit
          </p>
          <p className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
            A team with one manual workflow, one training goal, or 45 minutes to learn.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 pb-10 pt-20 md:px-8 md:pb-14 md:pt-28">
      <Reveal className="mx-auto max-w-7xl rounded-[2rem] border border-[color:var(--ring)] bg-[color:var(--surface)]/80 p-6 shadow-[0_24px_90px_var(--shadow)] md:p-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Choose the right workshop path.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              Organizations can request a session for a team or community. Individuals can join the public workshop list.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[color:var(--surface-muted)] p-5">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">For organizations</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Request an AI workshop for your school, nonprofit, club, youth group, team, or community.
              </p>
              <MotionAnchor
                href={hostWorkshopUrl}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-bold text-white"
              >
                Request a workshop
              </MotionAnchor>
            </div>
            <div className="rounded-[1.5rem] bg-[color:var(--surface-muted)] p-5">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">For individuals</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Join the list to hear when future public AI-assisted coding workshops are open.
              </p>
              <MotionAnchor
                href={joinWorkshopUrl}
                className="center-fill-button mt-6 inline-flex w-full items-center justify-center rounded-full border border-[color:var(--ring)] bg-[color:var(--surface)] px-5 py-3 text-sm font-bold text-[color:var(--text)]"
              >
                Join a public workshop
              </MotionAnchor>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-[color:var(--ring)] pt-6 text-center text-sm text-[color:var(--muted)]">
          For any further inquiries, contact{" "}
          <a
            href="mailto:altrubyte@gmail.com"
            className="font-semibold text-[color:var(--text)] transition hover:text-[color:var(--accent-strong)]"
          >
            altrubyte@gmail.com
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
