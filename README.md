# AUDSilva's Portfolio Website

A modern, responsive personal portfolio website showcasing skills in cybersecurity, programming, music production, and business ventures.

## Features

- Responsive design with dark theme
- Smooth scrolling and animations
- Interactive portfolio showcase
- Music player integration
- Contact form
- Mobile-friendly navigation

## Structure

```
my-portfolio-website/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── hero-bg.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   └── featured-track.mp3
└── README.md
```

## Setup

1. Clone or download this repository
2. Add your personal images to the `assets` directory:
   - Add a background image named `hero-bg.jpg`
   - Add project images named `project1.jpg`, `project2.jpg`, `project3.jpg`
   - Add your featured music track as `featured-track.mp3`
3. Update the content in `index.html` with your personal information
4. Modify the portfolio projects in `script.js`
5. Customize the styling in `styles.css` if desired

## Customization

### Adding Portfolio Projects

Edit the `portfolioProjects` array in `script.js`:

```javascript
const portfolioProjects = [
    {
        title: 'Your Project',
        description: 'Project description',
        image: 'assets/your-image.jpg',
        tags: ['Tag1', 'Tag2', 'Tag3']
    }
];
```

### Updating Social Links

Modify the social links in `index.html`:

```html
<div class="social-links">
    <a href="your-link" class="social-link"><i class="fab fa-github"></i></a>
    <!-- Add more social links -->
</div>
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome Icons
- Google Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
