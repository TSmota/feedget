<p align="center">
  <img alt="Feedget Mockup" src=".github/mockup.png">
</p>

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/TSMota/feedget?color=%238257E5">
</p>

<p align="center">
  <a href="#-layout">Layout</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-getting-started">Getting started</a> •
  <a href="#-license">License</a>
</p>

## 🔖 Layout

You can view the project layout through the link below:

- [Feedback Widget - Figma](https://www.figma.com/community/file/1102912516166573468)

Remembering that you need to have a [Figma](http://figma.com/) account to access it.

## 🚀 Technologies

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Vitejs](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/package/npm)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli)

**Clone the project and access the folder**

```bash
git clone https://github.com/TSMota/feedget.git && cd feedget
```

**Follow the steps below**

### Server

```bash
# From the project root folder access the 'server' folder
$ cd server

# Install the dependencies
$ npm install

# Create a '.env' file based on '.env.example'

# Run the migrations
$ npx prisma migrate dev

# Start the server
$ npm run dev
```

### Web

**Make sure to have the server running**

```bash
# From the project root folder access the 'web' folder
$ cd web

# Install the dependencies
$ npm install

# Start the application
$ npm run dev
```

### Mobile

**Make sure to have the server running**

```bash
# From the project root folder access the 'mobile' folder
$ cd mobile

# Install the dependencies
$ npm install

# If you are going to emulate with android, run this command
$ npm run android

# If you are going to emulate with ios, run this command
$ npm run ios

# Or just start the bundle
$ npm run start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made by <a href="https://www.linkedin.com/in/thiago-mota-silva-707718160/">Thiago Mota</a>
</p>