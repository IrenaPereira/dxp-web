# Deploying to DreamHost

The site is static (Astro → `dist/`). On every push to `main`, the GitHub
Actions workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)
builds it and `rsync`s the output to DreamHost over SSH.

## One-time setup

### 1. Enable SSH/SFTP on DreamHost
In the DreamHost panel: **Websites → Manage Websites → (your user) → Manage**,
ensure the user is a **Shell (SSH) user**. Note the **server hostname**
(e.g. `iad1-shared-xxxx.dreamhost.com`), the **username**, and the site's
**web directory** (e.g. `/home/USERNAME/digitalexperiments.com`).

> Keep the live site up: deploy to a **staging dir / subdomain** first (e.g.
> add `staging.digitalexperiments.com` as a fully-hosted domain and point
> `DREAMHOST_PATH` at `/home/USERNAME/staging.digitalexperiments.com`). Flip
> DNS for the apex domain only once you're happy.

### 2. Create a deploy SSH key (no passphrase)
On your machine:
```sh
ssh-keygen -t ed25519 -f ~/.ssh/dxp_deploy -C "github-actions-deploy" -N ""
```
Add the **public** key to DreamHost — paste `~/.ssh/dxp_deploy.pub` into the
user's SSH keys (panel) or append it to `~/.ssh/authorized_keys` on the server.

### 3. Add four GitHub repo secrets
**GitHub → repo → Settings → Secrets and variables → Actions → New secret:**

| Secret | Value |
|---|---|
| `DREAMHOST_SSH_KEY` | the **private** key — full contents of `~/.ssh/dxp_deploy` |
| `DREAMHOST_HOST` | server hostname, e.g. `iad1-shared-xxxx.dreamhost.com` |
| `DREAMHOST_USER` | your DreamHost shell username |
| `DREAMHOST_PATH` | web dir **with trailing slash**, e.g. `/home/USERNAME/staging.digitalexperiments.com/` |

### 4. Push
```sh
git push origin main
```
Watch it under the repo's **Actions** tab. Re-run anytime via **workflow_dispatch**.

## Notes
- `rsync --delete` mirrors `dist/` exactly (removes stale files); `.well-known/`
  is excluded so Let's Encrypt cert validation is never wiped.
- `public/.htaccess` ships in the build: forces HTTPS, sets a 404, and adds
  caching/compression.
- **DNS cutover is the last step** — point `digitalexperiments.com` at DreamHost
  only after the staging deploy looks right. The Squarespace site stays live
  until then.
