const slides = [
    {
        title: "From Prompt to Webpage",
        content: `
          <p><span class="emoji">🚀</span> Welcome to this comprehensive workshop!</p>
          <p>Today we'll explore how to create professional websites using AI tools - <strong>even with zero coding experience</strong>.</p>
          <p>By the end of this session, you'll understand web development concepts and have your own website live on the internet.</p>
          <div class="example-box">
            <p><strong>Today's Journey:</strong> We'll start with core concepts, explore web technologies, and end with a hands-on project.</p>
          </div>
        `
    },
    {
        title: "Workshop Objectives",
        content: `
          <p>By the end of this workshop, you will:</p>
          <ul>
            <li><span class="emoji">🧠</span> <strong>Understand web architecture</strong> - How the web actually works</li>
            <li><span class="emoji">🔤</span> <strong>Learn technical terminology</strong> - Speak the language of developers</li>
            <li><span class="emoji">🎯</span> <strong>Master AI prompting</strong> - Create effective prompts for better results</li>
            <li><span class="emoji">🚀</span> <strong>Build & deploy</strong> - Launch your own website on the web</li>
            <li><span class="emoji">📚</span> <strong>Gain independence</strong> - Create future projects on your own</li>
          </ul>
          <div class="example-box">
            <p><strong>Why This Matters:</strong> These skills are increasingly valuable in today's digital world, regardless of your profession.</p>
          </div>
        `
    },
    {
        title: "How the Web Works",
        content: `
          <p>Let's understand the foundation of the internet:</p>
          <div class="example-box">
            <p><strong>The Request-Response Cycle</strong></p>
            <ol>
              <li>You type a URL in your browser (e.g., google.com)</li>
              <li>Your browser sends a <strong>request</strong> to a server</li>
              <li>The server processes the request</li>
              <li>The server sends back a <strong>response</strong> (HTML, CSS, JS files)</li>
              <li>Your browser renders these files into a webpage</li>
            </ol>
          </div>
          <p>This happens in milliseconds, billions of times daily across the internet.</p>
          <p><strong>Key Concept:</strong> A website is essentially files (HTML, CSS, JS) that your browser knows how to display.</p>
        `
    },
    {
        title: "Website vs Web App",
        content: `
          <p>Understanding the distinction is essential:</p>
          <table>
            <tr>
              <th>Website</th>
              <th>Web App</th>
            </tr>
            <tr>
              <td>Primarily informational</td>
              <td>Primarily interactive</td>
            </tr>
            <tr>
              <td>Content rarely changes</td>
              <td>Content changes based on user input</td>
            </tr>
            <tr>
              <td>Limited user interaction</td>
              <td>Rich user interaction</td>
            </tr>
          </table>
          <p><strong>Examples of Websites:</strong> Blogs, company sites, portfolios</p>
          <p><strong>Examples of Web Apps:</strong></p>
          <ul>
            <li><span class="emoji">📝</span> <strong>Google Docs</strong> - Creates and edits documents</li>
            <li><span class="emoji">📧</span> <strong>Gmail</strong> - Manages email communication</li>
            <li><span class="emoji">🎵</span> <strong>Spotify Web</strong> - Streams music content</li>
            <li><span class="emoji">🛒</span> <strong>Amazon</strong> - Processes orders and payments</li>
          </ul>
          <p><span class="highlight">The line between websites and web apps has blurred over time.</span> Modern sites often combine elements of both.</p>
        `
    },
    {
        title: "Types of Web Applications",
        content: `
          <p>Web applications can be categorized based on how they're built and function:</p>
          <table>
            <tr>
              <th>Type</th>
              <th>How It Works</th>
              <th>Examples</th>
              <th>Best For</th>
            </tr>
            <tr>
              <td><strong>Static Web Apps</strong></td>
              <td>All content is pre-built and delivered as-is. No server processing at request time.</td>
              <td>Blogs, portfolios, documentation sites</td>
              <td>Content that doesn't change frequently</td>
            </tr>
            <tr>
              <td><strong>Dynamic Web Apps</strong></td>
              <td>Content is generated on-demand by a server based on user requests</td>
              <td>Social media, e-commerce, email</td>
              <td>Personalized content and user interactions</td>
            </tr>
            <tr>
              <td><strong>Single Page Apps (SPAs)</strong></td>
              <td>Loads once, then updates content without full page reloads</td>
              <td>Gmail, Facebook, Twitter</td>
              <td>Highly interactive experiences</td>
            </tr>
          </table>
          <p><strong>Important:</strong> Today we'll focus on <span class="highlight">Static Web Apps</span> - they're the perfect entry point into web development.</p>
        `
    },
    {
        title: "Static Web Apps in Detail",
        content: `
          <p><strong>What makes a web app "static"?</strong></p>
          <ul>
            <li>Files are pre-built and don't change between requests</li>
            <li>Same content is served to all users</li>
            <li>No server-side code execution needed when serving content</li>
          </ul>
          
          <p><strong>Advantages:</strong></p>
          <ul>
            <li><span class="emoji">🔒</span> <strong>More secure</strong> - Fewer attack vectors without server code</li>
            <li><span class="emoji">⚡</span> <strong>Extremely fast</strong> - Can be served from CDNs worldwide</li>
            <li><span class="emoji">💰</span> <strong>Cost-effective</strong> - Often free to host (Netlify, Vercel, GitHub Pages)</li>
            <li><span class="emoji">🧩</span> <strong>Simpler architecture</strong> - No databases or servers to maintain</li>
          </ul>
          
          <p><strong>Limitations:</strong></p>
          <ul>
            <li>Cannot store user data without external services</li>
            <li>No user authentication built-in (though can be added via services)</li>
            <li>Not ideal for content that changes frequently</li>
          </ul>
          
          <p><span class="highlight">Static doesn't mean non-interactive!</span> Modern static sites can be highly interactive using JavaScript and third-party services.</p>
        `
    },
    {
        title: "Core Web Technologies",
        content: `
          <p>Every website uses these three fundamental technologies:</p>
          
          <div class="example-box">
            <p><strong>HTML (HyperText Markup Language)</strong></p>
            <p>Defines the structure and content of web pages</p>
            <div class="code-example">
              &lt;!-- HTML example --&gt;<br>
              &lt;div class="profile"&gt;<br>
              &nbsp;&nbsp;&lt;h1&gt;Jane Doe&lt;/h1&gt;<br>
              &nbsp;&nbsp;&lt;img src="profile.jpg" alt="Profile photo"&gt;<br>
              &nbsp;&nbsp;&lt;p&gt;Web developer from San Francisco&lt;/p&gt;<br>
              &lt;/div&gt;
            </div>
          </div>
          
          <div class="example-box">
            <p><strong>CSS (Cascading Style Sheets)</strong></p>
            <p>Controls the visual appearance and layout</p>
            <div class="code-example">
              /* CSS example */<br>
              .profile {<br>
              &nbsp;&nbsp;text-align: center;<br>
              &nbsp;&nbsp;max-width: 600px;<br>
              &nbsp;&nbsp;margin: 0 auto;<br>
              }<br><br>
              
              h1 {<br>
              &nbsp;&nbsp;color: #3498db;<br>
              &nbsp;&nbsp;font-size: 32px;<br>
              }
            </div>
          </div>
          
          <div class="example-box">
            <p><strong>JavaScript</strong></p>
            <p>Adds interactivity and dynamic behavior</p>
            <div class="code-example">
              // JavaScript example<br>
              document.querySelector('.contact-button').addEventListener('click', () => {<br>
              &nbsp;&nbsp;// Show contact form when button is clicked<br>
              &nbsp;&nbsp;document.querySelector('.contact-form').style.display = 'block';<br>
              });
            </div>
          </div>
          
          <p><strong>Key point:</strong> These three technologies work together to create the complete user experience.</p>
        `
    },
    {
        title: "How AI is Transforming Web Development",
        content: `
          <p>AI tools are revolutionizing how websites are built:</p>
          
          <p><strong>Traditional Web Development:</strong></p>
          <ol>
            <li>Learn HTML, CSS, JavaScript (takes months/years)</li>
            <li>Write code from scratch</li>
            <li>Debug and fix issues</li>
            <li>Deploy after extensive testing</li>
          </ol>
          
          <p><strong>AI-Assisted Web Development:</strong></p>
          <ol>
            <li>Describe what you want (in natural language)</li>
            <li>AI generates the code</li>
            <li>Review and customize</li>
            <li>Deploy quickly</li>
          </ol>
          
          <p><strong>Popular AI Tools for Web Development:</strong></p>
          <ul>
            <li><strong>ChatGPT/Claude</strong> - Generate code, debug issues, explain concepts</li>
            <li><strong>GitHub Copilot</strong> - Code completion and suggestions</li>
            <li><strong>Cursor</strong> - AI-powered code editor</li>
            <li><strong>Wix ADI</strong> - Automated website building</li>
          </ul>
          
          <div class="example-box">
            <p><strong>Perspective:</strong> AI won't replace developers, but developers using AI will replace those who don't.</p>
          </div>
        `
    },
    {
        title: "Creating Effective AI Prompts",
        content: `
          <p>The quality of AI-generated code depends heavily on your prompts:</p>
          
          <div class="example-box">
            <p><strong>Poor Prompt:</strong></p>
            <p>"Make me a website."</p>
            <p><strong>Result:</strong> Generic, basic HTML with minimal features</p>
          </div>
          
          <div class="example-box">
            <p><strong>Better Prompt:</strong></p>
            <p>"Create a responsive portfolio website for a graphic designer. It should include a hero section, portfolio gallery with filtering, about section, and contact form. Use a modern minimalist design with primarily black and white colors with teal accents."</p>
            <p><strong>Result:</strong> Detailed, specific code tailored to your needs</p>
          </div>
          
          <p><strong>Key Elements of Effective Prompts:</strong></p>
          <ul>
            <li><span class="emoji">🎯</span> <strong>Be specific about purpose</strong> - What type of site? For whom?</li>
            <li><span class="emoji">📝</span> <strong>List required sections/features</strong> - What must be included?</li>
            <li><span class="emoji">🎨</span> <strong>Describe design preferences</strong> - Colors, style, layout</li>
            <li><span class="emoji">📱</span> <strong>Mention technical requirements</strong> - Responsive? Accessible?</li>
            <li><span class="emoji">🧩</span> <strong>Request file structure</strong> - Separate HTML/CSS/JS or combined?</li>
          </ul>
          
          <p><strong>Pro Tip:</strong> <span class="highlight">Iterate on your prompts</span> - Start general, then refine based on what the AI produces.</p>
        `
    },
    {
        title: "Live Demo",
        content: `
          <div class="center-content">
            <p>Now let's see AI web development in action!</p>
            
            <div class="example-box">
              <p><strong>Our Example Prompt:</strong></p>
              <p>"Create an interactive chess game website using HTML, CSS, and JavaScript. I need a modern, visually appealing chess board with drag-and-drop functionality for moving pieces. Include move validation, turn-based gameplay, check detection, and a clean UI showing whose turn it is. Use a dark theme with glowing effects and smooth animations. The game should be fully playable between two players on the same device."</p>
            </div>
            
            <p class="highlight">Watch as we generate a complete interactive chess game in minutes!</p>
            
            <div class="example-box">
              <p><strong>Steps We'll Follow:</strong></p>
              <ol>
                <li>Submit the prompt to an AI assistant</li>
                <li>Review the generated code (HTML structure, CSS styling, JS game logic)</li>
                <li>Save the files to our computer</li>
                <li>Open in a browser to see the result</li>
                <li>Test the gameplay (drag pieces, validate moves, play a few turns)</li>
              </ol>
            </div>
            
            <div class="example-box">
              <p><strong>Why This Example?</strong> A chess game demonstrates complex JavaScript logic, interactive UI, game state management, and visual feedback - perfect for showing AI's capability to create sophisticated applications!</p>
            </div>
          </div>
        `
    },
    {
        title: "Project Workflow",
        content: `
          <p>Let's break down the process of creating an AI-generated website:</p>
          
          <ol>
            <li>
              <strong>Define your website goal</strong>
              <ul>
                <li>Portfolio, business site, blog, landing page?</li>
                <li>Who is your audience?</li>
                <li>What actions should visitors take?</li>
              </ul>
            </li>
            <li>
              <strong>Create a detailed prompt</strong>
              <ul>
                <li>Apply the effective prompting techniques</li>
                <li>Include all requirements and preferences</li>
              </ul>
            </li>
            <li>
              <strong>Generate the code using AI</strong>
              <ul>
                <li>Request HTML, CSS, and JavaScript files</li>
                <li>Review the generated code</li>
              </ul>
            </li>
            <li>
              <strong>Save files to your computer</strong>
              <ul>
                <li>Create a folder for your project</li>
                <li>Save index.html, style.css, script.js</li>
                <li>Include any images or assets</li>
              </ul>
            </li>
            <li>
              <strong>Test locally</strong>
              <ul>
                <li>Open index.html in your browser</li>
                <li>Check functionality and appearance</li>
              </ul>
            </li>
            <li>
              <strong>Request revisions if needed</strong>
              <ul>
                <li>"The contact form doesn't work, can you fix it?"</li>
                <li>"Make the header sticky as users scroll"</li>
              </ul>
            </li>
          </ol>
          
          <div class="example-box">
            <p><strong>Remember:</strong> The AI is your collaborative partner. It can generate, explain, debug, and improve code based on your feedback.</p>
          </div>
        `
    },
    {
        title: "Deploying Your Website",
        content: `
          <p><strong>Netlify</strong> makes publishing websites incredibly simple and free:</p>
          
          <div class="example-box">
            <p><strong>What is Netlify?</strong></p>
            <p>A web hosting service that specializes in static website hosting with continuous deployment features.</p>
          </div>
          
          <p><strong>Steps to Deploy:</strong></p>
          <ol>
            <li>
              <strong>Prepare your files</strong>
              <ul>
                <li>Make sure all your files are in one folder</li>
                <li>The main HTML file should be named index.html</li>
                <li>All links between files should be relative (not absolute paths)</li>
              </ul>
            </li>
            <li>
              <strong>Go to Netlify</strong>
              <ul>
                <li>Visit <a href="https://app.netlify.com/drop" target="_blank">netlify.com/drop</a></li>
                <li>No account is required for basic deployment</li>
              </ul>
            </li>
            <li>
              <strong>Drag and drop your folder</strong>
              <ul>
                <li>The entire website folder from your computer</li>
                <li>Netlify will automatically upload and deploy your site</li>
              </ul>
            </li>
            <li>
              <strong>Get your live URL</strong>
              <ul>
                <li>Netlify provides a random URL (e.g., happy-einstein-123abc.netlify.app)</li>
                <li>Share this URL with anyone to view your site</li>
              </ul>
            </li>
          </ol>
          
          <p><strong>Advanced Options (optional):</strong></p>
          <ul>
            <li>Create a Netlify account to manage your deployments</li>
            <li>Connect a custom domain name (e.g., yourname.com)</li>
            <li>Set up form handling for contact forms</li>
            <li>Enable HTTPS for secure connections</li>
          </ul>
          
          <p class="highlight">Your website will be accessible worldwide, 24/7, completely free!</p>
        `
    },
    {
        title: "Beyond Static: Next Steps",
        content: `
          <p>Once you're comfortable with static websites, you can explore more advanced concepts:</p>
          
          <div class="example-box">
            <p><strong>Adding Interactivity:</strong></p>
            <ul>
              <li><strong>JavaScript libraries</strong> - jQuery, React, Vue</li>
              <li><strong>Animation libraries</strong> - GSAP, Anime.js</li>
              <li><strong>Interactive elements</strong> - Sliders, modals, scroll effects</li>
            </ul>
          </div>
          
          <div class="example-box">
            <p><strong>Third-Party Services:</strong></p>
            <ul>
              <li><strong>Formspree</strong> - Handle form submissions without a server</li>
              <li><strong>Disqus</strong> - Add comments to your site</li>
              <li><strong>Firebase</strong> - Add user authentication and databases</li>
              <li><strong>Stripe</strong> - Process payments</li>
            </ul>
          </div>
          
          <div class="example-box">
            <p><strong>Learning More:</strong></p>
            <ul>
              <li><strong>MDN Web Docs</strong> - Comprehensive web development reference</li>
              <li><strong>freeCodeCamp</strong> - Free, structured learning path</li>
              <li><strong>YouTube tutorials</strong> - Visual learning for specific topics</li>
            </ul>
          </div>
          
          <p><strong>Remember:</strong> <span class="highlight">The web is constantly evolving.</span> The skills you're learning today are foundational, but the tools and techniques will continue to improve.</p>
        `
    },
    {
        title: "Hands-On Project",
        content: `
          <p>Now it's your turn! Let's create a website together.</p>
          
          <div class="example-box">
            <p><strong>Project Brief:</strong></p>
            <p>Create a simple website that represents you or your interests. Here are some examples:</p>
            <ul>
              <li><strong>Personal Portfolio</strong> - Showcase your skills and experience</li>
              <li><strong>Business Landing Page</strong> - Promote a service or product</li>
              <li><strong>Hobby/Interest Site</strong> - Share your passion (photography, cooking, etc.)</li>
              <li><strong>Event Page</strong> - Promote an upcoming event or gathering</li>
              <li><strong>Simple Blog</strong> - Share your thoughts and ideas</li>
            </ul>
            <p>Your website should include 3-5 sections that make sense for your chosen type.</p>
          </div>
          
          <p><strong>Step 1:</strong> Decide what type of website you want to create</p>
          <p><strong>Step 2:</strong> Craft your prompt based on the techniques we've learned</p>
          <p><strong>Step 3:</strong> Generate the code using ChatGPT, Claude, or another AI tool</p>
          <p><strong>Step 4:</strong> Save the files and test locally</p>
          <p><strong>Step 5:</strong> Deploy to Netlify</p>
          
          <p>We'll have a short break, then I'll provide 1-on-1 assistance as you work on your projects.</p>
          
          <div class="example-box">
            <p><strong>Example Prompt Template:</strong></p>
            <p>"Create a [type of website] for [your purpose/audience]. I need an index.html, style.css, and script.js file. The website should have a responsive design and include sections for [list your desired sections]. Use a [describe your preferred style] design with [color preferences]. Include placeholder text that I can easily replace with my information."</p>
          </div>
        `
    },
    {
        title: "Wait, There's Something I Need to Tell You...",
        content: `
          <div class="center-content reveal-slide">
            <p>Before we wrap up, I have a little secret to share...</p>
            
            <div class="reveal-box" id="secretReveal">
              <p>This entire presentation you've been watching...</p>
              <p class="big-reveal">IS A WEB APP ITSELF!</p>
              <p>That's right! Everything you're seeing was built using the exact same technologies we just learned about:</p>
              <ul>
                <li>HTML for structure</li>
                <li>CSS for the futuristic styling</li>
                <li>JavaScript for the interactive slides</li>
              </ul>
              <p>No PowerPoint. No Keynote. Just web technology!</p>
            </div>
            
            <p>This presentation is a real-world example of what you can build after today's workshop.</p>
          </div>
        `
    },
    {
        title: "Recap & Resources",
        content: `
          <p><strong>What We've Covered:</strong></p>
          <ul>
            <li>Web architecture and how websites work</li>
            <li>Difference between websites and web apps</li>
            <li>Static vs. dynamic web applications</li>
            <li>Core web technologies: HTML, CSS, JavaScript</li>
            <li>Creating effective AI prompts</li>
            <li>Building and deploying static websites</li>
          </ul>
          
          <div class="example-box">
            <p><strong>⚠️ Important Security Warning:</strong></p>
            <p>When working with client-side applications:</p>
            <ul>
              <li>NEVER include API keys, passwords, or sensitive data in your code</li>
              <li>Remember that all JavaScript code is visible to users</li>
              <li>Be skeptical of AI-generated security solutions</li>
              <li>Use server-side processing for authentication and sensitive operations</li>
              <li>Validate user input both client-side AND server-side</li>
            </ul>
            <p>If you need these features, consider learning about backend development or using trusted third-party services.</p>
          </div>
          
          <p><strong>Recommended Resources:</strong></p>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a> - Web development reference</li>
            <li><a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a> - Free coding courses</li>
            <li><a href="https://www.netlify.com/blog/" target="_blank">Netlify Blog</a> - Hosting tips and tutorials</li>
            <li><a href="https://chat.openai.com/" target="_blank">ChatGPT</a> / <a href="https://claude.ai/" target="_blank">Claude</a> - AI assistants for coding help</li>
          </ul>
          
          <div class="example-box">
            <p><strong>Final Thoughts:</strong></p>
            <p>Web development is becoming increasingly accessible thanks to AI tools. You now have the foundation to create your own web presence without needing years of traditional coding education. Keep experimenting, learning, and building!</p>
          </div>
          
          <p><strong>Questions?</strong> Feel free to reach out anytime at tamir@versionbravo.com</p>
        `
    }
];

// DOM Elements
const slideContainer = document.getElementById('slideContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
const slideNav = document.getElementById('slideNav');
const progressBar = document.getElementById('progressBar');

// Current slide index
let currentSlide = 0;
const totalSlides = slides.length;

// Initialize presentation
function initPresentation() {
  // Create slides
  createSlides();
  
  // Create navigation dots
  createNavDots();
  
  // Set first slide as active
  showSlide(0);
  
  // Update progress bar
  updateProgressBar();
  
  // Add event listeners
  addEventListeners();
  
  // Add scroll indicator to slides with overflow content
  addScrollIndicators();
  
  // Add confetti effect to reveal slide
  initRevealEffects();
}

// Create slide elements
function createSlides() {
  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'slide';
    slideElement.id = `slide-${index}`;
    
    // Add special class for reveal slide
    if (slide.title === "Wait, There's Something I Need to Tell You...") {
      slideElement.classList.add('reveal-slide');
    }
    
    const slideInner = document.createElement('div');
    slideInner.className = 'slide-inner';
    
    slideInner.innerHTML = `
      <h2 class="slide-title">${slide.title}</h2>
      <div class="slide-content">${slide.content}</div>
    `;
    
    // Add scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<i>⬇️ Scroll for more</i>';
    slideElement.appendChild(scrollIndicator);
    
    slideElement.appendChild(slideInner);
    slideContainer.appendChild(slideElement);
  });
}

// Create navigation dots
function createNavDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'slide-dot';
    dot.dataset.slide = index;
    
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.dataset.slide));
    });
    
    slideNav.appendChild(dot);
  });
}

// Check if slide has overflow content and show/hide scroll indicator
function addScrollIndicators() {
  const slideInners = document.querySelectorAll('.slide-inner');
  const indicators = document.querySelectorAll('.scroll-indicator');
  
  slideInners.forEach((slideInner, index) => {
    const checkScroll = () => {
      const hasOverflow = slideInner.scrollHeight > slideInner.clientHeight;
      const scrolledToBottom = Math.ceil(slideInner.scrollTop + slideInner.clientHeight) >= slideInner.scrollHeight;
      
      if (hasOverflow && !scrolledToBottom && currentSlide === index) {
        indicators[index].classList.add('visible');
      } else {
        indicators[index].classList.remove('visible');
      }
    };
    
    // Check on slide change
    slideInner.addEventListener('scroll', checkScroll);
    
    // Set up a resize observer to check when size changes
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(slideInner);
  });
}

// Initialize special effects for the reveal slide
function initRevealEffects() {
  // Setup for confetti effect on reveal slide
  const secretReveal = document.getElementById('secretReveal');
  
  if (secretReveal) {
    secretReveal.addEventListener('click', () => {
      launchConfetti();
    });
  }
}

// Confetti animation
function launchConfetti() {
  const colors = ['#00f2fe', '#0BF488', '#ff2e63'];
  const confettiCount = 100;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = -20 + 'px';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.opacity = 1;
    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    document.body.appendChild(confetti);
    
    const animation = confetti.animate(
      [
        { transform: 'translate3d(0,0,0) rotate(0deg)', opacity: 1 },
        { transform: 'translate3d(' + (Math.random() * 300 - 150) + 'px,' + (Math.random() * 500 + 500) + 'px,0) rotate(' + Math.random() * 360 + 'deg)', opacity: 0 }
      ],
      {
        duration: Math.random() * 2000 + 2000,
        easing: 'cubic-bezier(0,.9,.57,1)',
        delay: Math.random() * 1000
      }
    );
    
    animation.onfinish = () => confetti.remove();
  }
}

// Show specific slide
function showSlide(index) {
  // Validate index
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  
  // Update current slide index
  currentSlide = index;
  
  // Hide all slides
  const allSlides = document.querySelectorAll('.slide');
  allSlides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Show current slide
  const currentSlideElement = document.getElementById(`slide-${currentSlide}`);
  currentSlideElement.classList.add('active');
  
  // Update counter text
  slideCounter.textContent = `${currentSlide + 1}/${totalSlides}`;
  
  // Update nav dots
  updateNavDots();
  
  // Update progress bar
  updateProgressBar();
  
  // Update button states
  updateButtonStates();
  
  // Check scroll indicators
  checkScrollIndicators();
}

// Check if current slide needs scroll indicator
function checkScrollIndicators() {
  const slideInners = document.querySelectorAll('.slide-inner');
  const indicators = document.querySelectorAll('.scroll-indicator');
  
  if (slideInners[currentSlide]) {
    const slideInner = slideInners[currentSlide];
    const hasOverflow = slideInner.scrollHeight > slideInner.clientHeight;
    const scrolledToBottom = Math.ceil(slideInner.scrollTop + slideInner.clientHeight) >= slideInner.scrollHeight;
    
    if (hasOverflow && !scrolledToBottom) {
      indicators[currentSlide].classList.add('visible');
    } else {
      indicators[currentSlide].classList.remove('visible');
    }
  }
}

// Update navigation dots
function updateNavDots() {
  const dots = document.querySelectorAll('.slide-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Update progress bar
function updateProgressBar() {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = `${progress}%`;
}

// Update button states
function updateButtonStates() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Add event listeners
function addEventListeners() {
  // Button navigation
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      showSlide(currentSlide + 1);
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
      showSlide(currentSlide + 1);
    } else if (e.key === 'Home') {
      showSlide(0);
    } else if (e.key === 'End') {
      showSlide(totalSlides - 1);
    }
  });
  
  // Swipe navigation for touch devices
  let touchStartX = 0;
  let touchEndX = 0;
  
  slideContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  slideContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold && currentSlide < totalSlides - 1) {
      // Swiped left - next slide
      showSlide(currentSlide + 1);
    } else if (touchEndX > touchStartX + swipeThreshold && currentSlide > 0) {
      // Swiped right - previous slide
      showSlide(currentSlide - 1);
    }
  }
  
  // Monitor slide content scrolling to update indicators
  document.querySelectorAll('.slide-inner').forEach((slideInner, index) => {
    slideInner.addEventListener('scroll', () => {
      if (currentSlide === index) {
        checkScrollIndicators();
      }
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPresentation);
