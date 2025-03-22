## About this project

This website is a website written in React with NextJS, it was created with the purpose of being simple and straightforward and its design is based on another project that can be found [here](https://github.com/ibelick/nim) so, thank you [Julien Thibeaut](https://github.com/ibelick) for the project.

Although its design is based on the project, it was created in a different way and with another idea in mind.

## Project structure

The structure of this project follows the standard of projects made with NextJs.

```sh
.
├── ./public
├── ./src
│   ├── ./src/app
│   │   ├── ./src/app/favicon.ico                   # Project Icon
│   │   ├── ./src/app/globals.css                   # Project style
│   │   ├── ./src/app/layout.tsx                    # Home layout
│   │   ├...
│   │   ├── ./src/app/page.client.tsx               # Home client page
│   │   └── ./src/app/page.tsx                      # Home server page
│   ├── ./src/components
│   │   ├── ./src/components/base                   # Shadcn components
│   │   ├── ./src/components/complex                # Built-in components
│   │   ├── ./src/components/motion-primitives      # Motion-primitives components
│   │   └── ./src/components/theme                  # theming
│   ├── ./src/constants
│   │   └── ./src/constants/motion.ts               # Motion component constants
│   ├── ./src/data
│   │   ├── ./src/data/data.ts                      # Static data
│   │   └── ./src/data/types.ts                     # Types for static data
│   ...
```

> If you are interested in using this project with your own data then it is important to understand the structure well!

## Build and start

As previously mentioned, this project is built on the Next framework, so the build and start commands are standard.

```bash
$ npm run dev   # Starts in developer mode
$ npm run lint  # Start lint check
$ npm run build # Builds the project
$ npm run start # Starts the project
```
