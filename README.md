# FlatterMeNot\! 

### Get a Sassy Compliment \>⩊\<

Welcome to **FlatterMeNot\!**, the web app that specializes in **backhanded compliments** that'll make you question if you should feel good or insulted. It's the perfect way to get a little laugh and a little sass.

-----

### ✨ Features

  * **Multilingual Sassy Compliments**: Get a witty and sarcastic compliment in a variety of languages.
  * **Contribute Your Own Sass**: Have a great backhanded compliment? Submit it, and it might get added to the collection\!
  * **Share the Sass**: Easily share your favorite compliments on Twitter or copy them to your clipboard.
  * **Simple & Fun Interface**: A clean, easy-to-use design with a playful Kaomoji mascot.
  * **Persistence**: Your name and language preferences are saved locally for a personalized experience every time you visit.

-----

### 💻 Technologies Used

  * **HTML5, CSS3, JavaScript**: The core building blocks of the application.
  * **Supabase**: Used as the backend to store and manage user-submitted compliments.

-----

### 🚀 How to Run Locally

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/FlatterMeNot.git
    cd FlatterMeNot
    ```

2.  **Set up Supabase**:

      * Create a new project on [Supabase](https://supabase.io/).
      * Find your project URL and `anon` key in the project settings.
      * Create a table named `compliments` with the following columns:
          * `id`: `int8` (Primary Key, auto-increment)
          * `text`: `text`
          * `language`: `text`
          * `is_approved`: `boolean` (default to `false`)
      * Update the `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `script.js` with your own keys.

3.  **Start the development server**:

    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

-----
**IMPORTANT NOTES** <br><br>
Please know that:
*  AI translated everything, and I'm sorry if something is wrong. Please tell me and I'll be happy to fix it.
*  I did NOT make FlatterMeNot to offend anyone, it's just a playful web app for entertainment, nothing more, nothing less.

-----
### 📝 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----
<br>
Made with ❤️ and sarcasm by Rei.
