# AGENTS.md

Guidance for coding agents working in this repository.

## Project State

This is the website for Altrubyte, a website for a vibe coding non profit which runs workshops for schools and organizations to teach them vibe coding and its applications

## Design Principles

- Use the taste-skill and high-end-visual-design skills when designing a frontend

## Working Principles

- Always use context7 when installing packages or managing dependencies
- Use small, conventional commits, and do not add co-author trailers 
- Keep changes small and directly tied to the user's request.
- Prefer the existing project conventions once they exist.
- Do not introduce abstractions, tooling, dependencies, or configuration unless
  they are required for the current task.
- Surface uncertainty instead of guessing. Ask when the answer affects project
  structure, dependencies, public APIs, persistence, deployment, or irreversible
  changes.
- Do not rewrite unrelated files or clean up unrelated issues.
- Preserve user changes in the worktree. Never revert changes you did not make
  unless the user explicitly asks.


## Verification

Because no build or test system exists yet, verification is currently limited to
reviewing changed files and checking git status.

When a stack is added, update this section with exact commands, such as:

```sh
npm test
npm run lint
npm run build
```

Agents should run the smallest relevant verification command for their change.
If verification cannot be run, say why in the final response.
