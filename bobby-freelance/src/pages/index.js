import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
  const projectsDir = path.join(process.cwd(), 'Projects');
  const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      const projectPath = path.join(projectsDir, dirent.name);
      const images = fs.readdirSync(projectPath).filter(file => file.match(/\.(png|jpg|jpeg|gif)$/));
      const imagePath = images.length > 0 ? `/Projects/${dirent.name}/${images[0]}` : 'https://placehold.co/600x600';
      
      return {
        name: dirent.name,
        image: imagePath,
      };
    });

  return {
    props: { projectFolders },
  };
}


export default function Home({ projects = [] }) {
  return (
    <>
      <Head>
        <title>UX Design Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/cover.css" />
        <link rel="stylesheet" href="/styles/about.css" />
        <link rel="stylesheet" href="/styles/focus.css" />
        <link rel="stylesheet" href="/styles/gallery.css" />
        <link rel="stylesheet" href="/styles/projects.css" />
        <link rel="stylesheet" href="/styles/contact.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
      </Head>

      {/* Section 1: Cover */}
      <section id="full-page" className="full-page cover-section">
        <div className="container">
          <h1 className="name">Rio Sterling</h1>
          <h2 className="portfolio-title">UX Design Portfolio</h2>
          <div className="image-container">
            <img src="https://placehold.co/1200x600" alt="UX Design Portfolio Cover" />
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="full-page about-section">
        <div className="about-container">
          <img src="https://placehold.co/700x700" alt="Rio Sterling" />
          <div className="about-text">
            <p>
              <span className="highlight">Hi, I'm Rio!</span> I like making things accessible for the everyday user. I specialize in designing apps for tech companies and retail brands. In my free time, I run creative workshops for kids as a way to give back to the community.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Design Focuses */}
      <section id="design-focus" className="full-page design-focus-section">
        <h1>Design focuses</h1>
        <div className="focus-container">
          <div className="focus-card">
            <img src="https://placehold.co/600x400" alt="User Research" />
            <h2>User research</h2>
            <p>Further elaborate on the skill or offered service</p>
          </div>
          <div className="focus-card">
            <img src="https://placehold.co/600x400" alt="Interaction Design" />
            <h2>Interaction design</h2>
            <p>Further elaborate on the skill or offered service</p>
          </div>
          <div className="focus-card">
            <img src="https://placehold.co/600x400" alt="Visual Design" />
            <h2>Visual design</h2>
            <p>Further elaborate on the skill or offered service</p>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section id="gallery" className="full-page project-gallery-section">
        <div className="gallery-header">
          <h1>Project Gallery</h1>
          <div className="quote-container">
            <p className="quote">"My designs are all about user-friendliness and accessibility"</p>
          </div>
        </div>
        <div className="gallery-grid">
          {projects.map((project) => (
            <div key={project.name} className="gallery-item">
              <Link href={`/project/${project.name}`}>
                <Image src={project.image} alt={project.name} width={600} height={600} />
                <p>{project.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Project #1 */}
      <section id="project1" className="responsive-smaller full-page project-feature-section project-1">
        <p className="project-number">Project #1</p>
        <div className="project-feature-content">
          <h1>Simply Shopping UX Design</h1>
          <p className="project-description">Highlight significant details about the project.</p>
        </div>
        <div className="project-feature-image">
          <img src="https://placehold.co/600x600" alt="Simply Shopping UX Design" />
        </div>
      </section>

      {/* Section 6: Project #2 */}
      <section className="responsive-smaller full-page project-feature-section project-2">
        <p className="project-number">Project #2</p>
        <div className="project-feature-content">
          <h1>Agile Technology User Interface</h1>
          <p className="project-description">Highlight significant details about the project.</p>
        </div>
        <div className="project-feature-image">
          <img src="https://placehold.co/600x600" alt="Agile Technology User Interface" />
        </div>
      </section>

      {/* Section 7: Project #3 */}
      <section className="responsive-smaller full-page project-feature-section project-3">
        <p className="project-number">Project #3</p>
        <div className="project-feature-content">
          <h1>Crowd Zero Website</h1>
          <p className="project-description">Highlight significant details about the project.</p>
        </div>
        <div className="project-feature-image">
          <img src="https://placehold.co/600x600" alt="Crowd Zero Website" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="responsive-smaller full-page contact-section">
        <h1 id="footer" className="contact-heading">Let’s work together!</h1>
        <div className="contact-links">
          <div className="contact-item">
            <h3>Reddit</h3>
            <p>r/DesignedByMe</p>
          </div>
          <div className="contact-item">
            <h3>Instagram</h3>
            <p>r.designedbyme</p>
          </div>
          <div className="contact-item">
            <h3>Threads</h3>
            <p>r.designedbyme</p>
          </div>
        </div>
        <div className="contact-icons">
          <span className="icon">🌐</span>
          <span className="icon">📷</span>
        </div>
        <div className="back-to-top">
          <a href="#top">⬆ Back to top</a>
        </div>
      </section>
    </>
  );
}