# Releasing

This project uses manual Semantic versioning and pnpm for publishing.

## Pre-release checklist

- [ ] `main` branch is clean and up to date
- [ ] All tests pass (`pnpm test`)
- [ ] Build succeeds (`pnpm build`)
- [ ] Public API changes reviewed
- [ ] Version bumped in `package.json`
- [ ] CHANGELOG.md updated


## Release steps

- [ ] Commit release changes
    `git commit -am "Release vX.Y.Z"`
- [ ] Create git tag
    `git tag vX.Y.Z`
- [ ] Push commits and tags
    `git push origin main --tags`
- [ ] Publis package
    `pnpm publish`

## Post-release

- [ ] Create GitHub release (copy changelog entry)
- [ ] Verify package on registry
- [ ] Announce release (if applicable)