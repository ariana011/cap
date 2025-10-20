🌐 Website Screenshot Generator

A simple and interactive website screenshot generator built with React and the APIFlash
 API.
Users can input a website URL and customize attributes such as width, height, format, and whether to hide ads or cookie banners. The app then fetches and displays the generated screenshot — plus keeps a gallery of previous screenshots.


🚀 Features

✅ Generate screenshots from any website URL
✅ Customize image format (jpeg, png, webp)
✅ Hide ads and cookie banners from screenshots
✅ Choose screenshot width and height (in pixels)
✅ View your current query string in real time
✅ Keep a gallery of all screenshots taken during the session

🧠 How It Works

Enter a website URL (without https://) and your desired image attributes.

Click “Take that Pic! 🎞”

The app sends your inputs to the APIFlash Screenshot API.

A generated screenshot appears on the screen and is added to your gallery.

⚙️ Technologies Used

React.js – UI and component management

JavaScript (ES6+) – Core logic and API calls

APIFlash API – Generates the screenshots

CSS – Styling and layout

Documents/
└── cap/
    ├── src/
    │   ├── App.jsx            # Main logic + API call
    │   ├── components/
    │   │   ├── APIForm.jsx    # User form for inputs
    │   │   └── Gallery.jsx    # Screenshot gallery
    │   ├── index.css          # Global styles
    │   └── index.js           # Entry point
    ├── package.json
    └── README.md              # You are here 👋

👩🏽‍💻 About Me

Hi! I’m Ariana Garcia 👋
I’m a Cyber Security major who loves building creative projects and learning new tech things — this is one of them!

🪄 Extra Notes

This project was made for fun and learning purposes.
You can edit, remix, or build on it however you want!
