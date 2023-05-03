<div align="center">
<h1>✏️ Notes-App v1.0</h1>

A note taking app developed using node.js

Current version : 1.0
</div>

---

# Usage

After cloning the repository, run the following command in the directory with `package.json`
in it:

```bash
npm install
```

This command will install the necessary modules required to use the app.

The following functionalities are supported (you may run `node app.js --help`
to see in console):

- Adding a note

```bash
node app.js add --title="<title_name>" --body="<body>" 
```

- Removing a note

```bash
node app.js remove --title="<title_name>"
```

- Listing all notes

```bash
node app.js list
```

- Reading a note

```bash
node app.js read --title="<title_name>"
```

---
