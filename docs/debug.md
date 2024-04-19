---
sidebar_position: 4
---

# Debugging the toolkit

## Format

It is good practice to use `--format json` or `--format yaml` on all CLI commands as you will get far more content back, both when commands are successful and when errors occur. The default content type is plaintext and some API calls do not return full responses for that content type.

## Debug

When using the Toolkit commands if you want to see the REST call(s) that the Toolkit uses to carry out the tasks add `--debug` to the end of the command and the REST call will be shown in the output.
