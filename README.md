# Aishwarya AK — Portfolio

A frontend-only React.js portfolio (dark navy + sky blue theme) with smooth
scroll animations. No backend, no database — just static files.

---

## 1. Run it on your computer

You need **Node.js** (https://nodejs.org — pick the LTS version).

```bash
npm install
npm start
```

It opens at http://localhost:3000

---

## 2. Change your profile picture (the round image)

The round picture in the first section comes from the **assets** folder.

1. Copy your image into `src/assets/` (for example `src/assets/my-photo.jpg`).
2. Open `src/data/data.js`.
3. At the very top, change only the file name in this line:

```js
import profileImage from "../assets/profile.svg";
//                                   ^^^^^^^^^^^ change this
```

becomes

```js
import profileImage from "../assets/my-photo.jpg";
```

Save — the picture is automatically cropped into the centered circle.

Tips:
- Use a **square** image (for example 800 x 800) so nothing important is cut.
- PNG, JPG, WEBP and SVG all work.
- The circle's background color (visible if your image has a transparent
  background) is `--photo-bg` in `src/index.css`.

---

## 3. Change text, skills, projects, etc.

Everything written on the site lives in **one file**: `src/data/data.js`.
Edit the text there and save — no other file needs to change.

## 4. Resume button

The "Download resume" button downloads `public/resume.pdf`.
To update your resume, replace that file with the new PDF and **keep the
same name** (`resume.pdf`).

---

## 5. Upload to GitHub and share the link

You will do this once. Afterwards, updating takes 3 commands (see step 5.8).

### 5.1 Install the tools (one time)
- **Git** — https://git-scm.com/downloads
- **Node.js** — https://nodejs.org (already needed above)
- A free **GitHub account** — https://github.com

Check they work:
```bash
git --version
node --version
```

### 5.2 Create an empty repository on GitHub
1. Log in to GitHub → click the **+** (top right) → **New repository**.
2. **Repository name:** `aishwarya-portfolio`
3. Choose **Public**.
4. Do **NOT** tick "Add a README", ".gitignore" or "license" (this project already has them).
5. Click **Create repository**.

> Your old site lives in a repository called `Portfolio`. Using a **new** name
> keeps the old site untouched. If you want the new site to replace the old one
> at the same link, delete or empty the old repository first and use the name
> `Portfolio` everywhere below.

### 5.3 Check the `homepage` line in `package.json`
Open `package.json` and make sure this line matches **your GitHub username and
repository name**:

```json
"homepage": "https://akaishwarya.github.io/aishwarya-portfolio",
```

Format: `https://<github-username>.github.io/<repository-name>`

If your username or repository name is different, change it here **and** in
step 5.4. A wrong value is the #1 reason for a blank page.

### 5.4 Push the code to GitHub
Open a terminal **inside the project folder** (the one containing `package.json`) and run:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/akaishwarya/aishwarya-portfolio.git
git push -u origin main
```

If GitHub asks you to log in, sign in through the browser window that opens
(GitHub no longer accepts your account password in the terminal; if asked for a
password, create a **Personal Access Token** at GitHub → Settings → Developer
settings → Personal access tokens, and paste it instead).

### 5.5 Publish the website
```bash
npm install
npm run deploy
```

This builds the site and uploads it to a branch called `gh-pages`.
Wait until the terminal prints **Published**.

### 5.6 Turn on GitHub Pages (one time)
1. Open your repository on GitHub → **Settings** → **Pages** (left menu).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose **gh-pages** and folder **/ (root)** → **Save**.
4. Wait 1–3 minutes and refresh the page. A message appears:
   **"Your site is live at …"**

### 5.7 Share your link
Your portfolio is now live at:

```
https://akaishwarya.github.io/aishwarya-portfolio/
```

Share this link anywhere — on your resume, LinkedIn, GitHub profile and in
job applications. Anyone can open it from any phone or computer.

### 5.8 Updating the site later
After you change anything (photo, text, resume):

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

The live site refreshes in about a minute. (`git push` saves your source code;
`npm run deploy` updates the live website.)

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Live site is a blank page | `homepage` in `package.json` does not match your username/repository name. Fix it, then run `npm run deploy` again. |
| `git push` says "repository not found" | The repository name or username in the `git remote add origin` URL is wrong. Fix with `git remote set-url origin <correct-url>`. |
| Image not showing | Check the file is inside `src/assets/` and the name in `src/data/data.js` matches exactly (capital letters and extension matter). |
| Old version still showing | Hard refresh: `Ctrl + Shift + R` (Windows) / `Cmd + Shift + R` (Mac). |
| "Download resume" does nothing | Make sure `public/resume.pdf` exists, then run `npm run deploy` again. |
| `npm` is not recognized | Install Node.js, then close and reopen the terminal. |

---

## Project structure

```
public/
  resume.pdf              Resume that the button downloads
src/
  assets/profile.svg      Profile image (replace / change the path)
  data/data.js            ALL text content + profile image path
  App.jsx                 Page layout
  index.css               Colors (theme), global styles, scroll animation CSS
  components/
    Reveal.jsx            Scroll-in animation wrapper
    Navbar / Hero / About / Skills / Experience /
    Projects / Education / Contact / Footer   (.jsx + .css each)
```
