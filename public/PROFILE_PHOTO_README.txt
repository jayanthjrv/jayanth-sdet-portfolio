PROFILE PHOTO
-------------
To add your own profile photo:
1. Add your photo to this folder as: profile.jpg
2. In src/main.jsx, find the <div className="photo-placeholder"> inside the hero visual.
3. Replace that div with:
   <div className="photo-placeholder photo-image">
     <img src="/profile.jpg" alt="Jayanth Sivaraju" />
   </div>
4. Add these CSS rules to src/styles.css:
   .photo-image { overflow: hidden; padding: 0; border-radius: 8px; }
   .photo-image img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }
   Keep the photo-caption below it. Adjust the height if needed.

A real personal photo was not included in the resume, so the current design uses a neutral placeholder rather than inventing your appearance.
