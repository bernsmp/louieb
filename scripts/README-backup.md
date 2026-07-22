# CMS Backups

Guards against losing CMS edits (a bad seed run, an accidental overwrite, or a
mistaken edit in `/cms`).

## What runs

`scripts/backup-cms.js` snapshots all CMS content from Supabase to a single
dated JSON file:

| Setting | Value |
|---|---|
| Output folder | `F:\website backup` |
| Filename | `cms-backup-YYYY-MM-DD.json` |
| Retention | Newest **3** snapshots; older ones are deleted automatically |
| Schedule | Windows task **"Website CMS Backup"**, daily at **4:00 AM** |

Tables captured: `site_content` (every page's content, including `ceoLanding`),
`faq_items`, `testimonials`, `blog_posts`, `services`, `process_steps`.

If the PC is off at 4:00 AM, the task is set to `StartWhenAvailable`, so it runs
shortly after the machine is next turned on rather than skipping that day.

The script aborts without writing if `site_content` comes back empty, so a
network/auth failure can never overwrite good snapshots with an empty one.

## Run one manually

```bash
node scripts/backup-cms.js
```

Optionally pass a different output folder: `node scripts/backup-cms.js "D:\somewhere"`

## Restore a section

Snapshots are plain JSON. To restore one section (e.g. `ceoLanding`) without
touching anything else:

```js
const fs = require('fs')
const { createClient } = require('@supabase/supabase-js')
const snap = JSON.parse(fs.readFileSync('F:/website backup/cms-backup-YYYY-MM-DD.json', 'utf8'))
const row = snap.tables.site_content.find((r) => r.section === 'ceoLanding')
// then upsert { section, content: row.content } into site_content
```

## Manage the schedule

```powershell
Get-ScheduledTaskInfo -TaskName "Website CMS Backup"   # last result (0 = OK) + next run
Start-ScheduledTask     -TaskName "Website CMS Backup" # run now
Unregister-ScheduledTask -TaskName "Website CMS Backup" -Confirm:$false  # remove
```
