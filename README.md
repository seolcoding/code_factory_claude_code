# Code Factory Claude Code

Claude Code workflow experiment with a Next.js prototype in
[`nomad-korea/`](nomad-korea/) and repository workflow commands under
`.claude/commands/`.

The product continuation plan is [`plan.md`](plan.md); the source analysis is
[`nomads_com_analysis_report.md`](nomads_com_analysis_report.md). The plan's
checkboxes are historical proposals, so verify the current app before marking
a phase complete. App setup instructions live in
[`nomad-korea/README.md`](nomad-korea/README.md).

Continue development from `main`. The old `issue-1` branch pointed to the same
commit and was removed after its history was verified in `main`. macOS Finder
metadata is excluded through the existing `.gitignore`.

Before continuing a feature, compare the relevant routes with `plan.md`, then
run the app's `lint` and `build` scripts with dependencies from its lockfile.
The cleanup changed documentation and Finder metadata only; it did not verify
a running app, authentication, or deployment.
