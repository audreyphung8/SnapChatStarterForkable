<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/audreyphung8/SnapChatStarterForkable">
    <img src="https://static.vecteezy.com/system/resources/previews/018/930/704/non_2x/snapchat-logo-snapchat-icon-transparent-free-png.png" alt="Logo" width="180" height="180">
  </a>

<h3 align="center">SnapChat Starter</h3>

  <p align="center">
    SnapChat Starter
    <br />
    <a href="https://github.com/audreyphung8/SnapChatStarterForkable"><strong>Explore this project»</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#license">License</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

SnapChat Starter is a mobile app built with React Native and Supabase. It features user authentication, image uploads to a public "Spotlight" feed, an interactive map view, and a clean interface powered by Expo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With 

- [![React Native][React.js]][React-url]
- [![Supabase][Supabase-shield]][Supabase-url]
- [![Expo][Expo-shield]][Expo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run this project locally, clone the repo and install the dependencies. This project uses React Native with Expo and Supabase for backend services.

### Prerequisites

- **Expo CLI**  
  Install Expo:
  ```bash
  npm install -g expo-cli
  ```
  [Get started here](https://docs.expo.dev/get-started/installation/)
- **Supabase Project**
  Create a free account at supabase.com, and set up:
  - Authentication (email/password)
  - Storage bucket named avatars
  - project URL and public key

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   cd SnapChatStarterForkable
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_url_here
   EXPO_PUBLIC_SUPABASE_KEY=your_key_here
4. Run the app
   ```
   npx expo start
   ```
6. (Optional) Reset the Git remote if you're forking this project:
   ```sh
   git remote set-url origin https://github.com/your-username/your-repo.git
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This project serves as a starting point for building a chat application using React Native and Supabase. Currently, it includes:

- User login and signup via Supabase Auth  
- Image uploads to "Spotlight" (stored in Supabase Storage)  
- Project structure and basic navigation  
- Components for real-time messaging and camera access

🚧 *Note: Real-time messaging and camera access are planned but not yet implemented.*
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

<!-- ## License -->

<!-- Distributed under the project_license. See `LICENSE.txt` for more information. -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Supabase-shield]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[Expo-shield]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/

<!-- ## Let's talk resources -->

<!-- 🌳 If you want to implement a table or bold text or even bullet point, use this [documentation](https://google.github.io/styleguide/docguide/style.html) to get the right syntax. Don't be afraid to look at other templates and pull the parts and types you like! Sharing is caring.        -->
