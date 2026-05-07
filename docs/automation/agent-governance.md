# Agent Governance Runbook

This runbook explains how to enforce `config/agent-execution-policy.yaml` in automations for this site.

## Approval model

- Tier 0: autonomous and reversible operations only.
- Tier 1: human approval required from Dr. Jan or Chance.
- Tier 2: restricted actions requiring Dr. Jan and/or BHHS compliance.

## Required preflight for any mutation

1. Validate required input fields.
2. If required fields are missing, set state to `HOLD_UNKNOWN` and stop.
3. Generate idempotency key from action type + contact id + timestamp bucket.
4. Run duplicate check for contact mutations.
5. Create dry-run diff payload.
6. Route to approver if action is Tier 1 or Tier 2.

## Fair housing and compliance

- Run fair-housing audit before publishing content or sending client-facing communication.
- Do not auto-override warnings.
- Record explicit override reason and approver when warnings are overridden.

## Suggested workflow states

- `DRAFTED`
- `AUDITED`
- `READY_FOR_APPROVAL`
- `APPROVED`
- `EXECUTED`
- `BLOCKED_COMPLIANCE`
- `HOLD_UNKNOWN`
- `ROLLED_BACK`

## Logging requirements

Each action log entry should include:

- `action_id`
- `tier`
- `actor` (automation or human approver)
- `system`
- `target_record`
- `before_snapshot_hash`
- `after_snapshot_hash`
- `idempotency_key`
- `result`
- `rollback_reference` (if mutating)

## Daily operations

- Send daily digest with executed actions, blocked actions, pending approvals, and duplicate candidates.
- Review blocked compliance actions and unknown-field holds.
- Resolve source-of-truth conflicts with explicit owner decision before retrying.
