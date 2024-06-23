## Setup Instructions

To save time on the day, try follow these steps to get yourself set up.
If you get stuck do not worry, you can try ask [ChatGPT](https://chatgpt.com/) for help or ask someone for help on the day!

1. [Download and install Git](#1-download-and-install-git)
2. [Download and install Node.js](#2-download-and-install-nodejs)
3. [Download and install a text editor](#3-download-and-install-a-text-editor)

## 1. Download and install Git
[Git](https://git-scm.com/) is a version control system that tracks changes in your code, allowing multiple people to collaborate and manage project versions efficiently.

### Mac instructions
Open the Mac terminal application and run the following commands (`# these are comments`).

```bash
# install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# install git
brew install git

# verify that git install correctly
git --version # should print `git version <version-number>`
```

### Windows 10/11 instructions
Visit https://gitforwindows.org/, click on download and follow the install instructions. Then open the Windows PowerShell application and run the following command (`# these are comments`).

```bash
# verify that git install correctly
git --version # should print `git version <version-number>`
```

### Other Instructions
Other ways to install Git are documented here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git.

## 2. Download and install Node.js
[Node.js](https://nodejs.org/en) is a runtime environment that lets you run JavaScript code outside of a web browser, typically on a server.

### Mac instructions
Open the Mac terminal application and run the following commands (`# these are comments`).

```bash
# download and install Node.js
brew install node@20

# verifies the right Node.js version is in the environment
node -v # should print `v20.15.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.7.0`
```

### Windows 10/11 Instructions
Open the Windows PowerShell application and run the following commands (`# these are comments`).

```powershell
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.15.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.7.0`
```

### Other Instructions
Other ways to install Node.js are documented here: https://nodejs.org/en/download/package-manager.

## 3. Download and install a text editor
There are many different text editors, the one you choose to use is down to personal preference, but the most popular text editor today is [Visual Studio Code](https://code.visualstudio.com/) so that is the one we recommend.

Visit the website to download and install VSCode here: https://code.visualstudio.com/download.

<hr style="margin-top: 32px">
<div style="display: flex; justify-content: center; margin-top: 16px; font-weight: bold; font-size: 16px">
  <span><a href="README.md">🏠 Home</a></span>
</div>
