# Gemini Video Summarizer
Don't let your food get cold while trying to find the perfect video! 
Gemini Video Summarizer Chrome Extension is here to summarize your video and ensure it is not a clickbait!

## How to use
- Try to eat all the dots. 
- Avoid the ghosts.
- If you eat the power cookie(at corners), you can eat ghosts for a while.

## GIF Walkthrough
![PacmanWalk](https://github.com/espennoreng/haskell-pacman/assets/89808958/7b163ac6-6c20-494e-9966-15a4513171b8)

## Inspiration
I was inspired by Gemini's capabilities of summarizing long textual inputs and wanted to utilize where all the "IPad Kids" will benefit from it.

## What it does
**The Gemini Video Summarizer** Chrome extension takes the user's input YouTube URL, pulls the video transcript from `YouTubeTranscriptAPI`, feeds it into `Gemini` to provide a summary within 250 words, and checks its **clickbait score**.

## How I built it
We built a `Python` `Flask` app to communicate between our extension and `Gemini`. For user experience, we used `HTML`, `CSS`, and `JavaScript`.

## Challenges I ran into
As it was my first time building a Chrome extension, I struggled to turn a Flask app into a whole Chrome extension. It was also a little tricky to upload it to Chrome to test it due to some errors. 

## Accomplishments that I'm proud of
I am proud that it works! I am also proud of myself for utilizing and tapping into priceless technology that will soon impact so many lives.

## What I learned
I've learned how to communicate with Gemini's API, build a Chrome extension, and add animations in CSS. 

## What's next for Gemini Video Summarizer
Here are the future goals for Gemini Video Summarizer
- Get it published on the Chrome Web Store
- Add a feature to access the whole transcript
- Add a feature to access keynotes with corresponding timestamps in the video
- Improve user experience with feedback that comes from users
- Build a web app and mobile app version
- Be the best video summarizer in the market!

