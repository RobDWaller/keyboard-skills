---
name: create-spec-template
description: Create a spec template for the next iteration of spec-driven development.
---

## What I do

- Find the `specs` directory in the project you are working in.
- If there is not a `specs` directory create one.
- The `specs` directory should be a top-level directory within a service.
- E.g. `service/specs`.
- Inside the directory create a new Markdown file.
- The Markdown file should follow the filename format `YYYY-MM-DD-[spec-title].md`
- The spec title should be lowercase, hyphenated and based on the spec title provided.
- Inside the new spec document add the following:
  - The spec title.
  - A Scope section.
  - A Build Plan section.
  - The Build Plan must highlight that each step is committed individually.
- When using this skill only create the template, don't fill it out, that will happen in subsequent steps.

**Example Spec Template**

```
# Bootstrap My Service — Auth Improvements
 
## Scope

### Item 1

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1
```

## When to use me

When you are asked to create a new spec, spec template, spec file or spec doc for a project.
