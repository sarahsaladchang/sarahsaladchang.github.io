(() => {
  const data = window.projectDetails?.[document.body.dataset.caseId];
  if (!data) return;

  const detail = document.getElementById('projectDetail');
  const topTags = document.getElementById('detailTopTags');
  const title = document.getElementById('casePageTitle');
  const intro = document.getElementById('casePageIntro');
  const chapterView = document.getElementById('caseChapterView');
  const websiteGallery = document.getElementById('websiteGallery');
  const announcementGallery = document.getElementById('announcementGallery');

  title.textContent = data.title;
  intro.textContent = data.intro1 || '';
  topTags.innerHTML = (data.tags || []).map(tag => `<span>${tag}</span>`).join('');
  detail.classList.add('active');
  detail.classList.toggle('case-chapter-layout', Boolean(data.chapters));
  detail.classList.toggle('case-website-layout', Boolean(data.images));

  const renderImageStory = () => data.imageStory ? `
    <section class="case-image-story" aria-label="Case image story">
      ${data.imageStory.map(item => `
        <article class="image-story-row">
          <div class="image-story-copy">
            <span>${item.eyebrow}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <ul>${(item.points || []).map(point => `<li>${point}</li>`).join('')}</ul>
          </div>
          <figure class="image-story-frame"><img src="/${item.src}" alt="${item.alt}"></figure>
        </article>
      `).join('')}
    </section>
  ` : '';

  const renderTechGroups = () => data.techGroups ? `
    <section class="tech-accordion-board" aria-label="Technical metrics and functional modules">
      <h3>${data.techGroupsTitle || 'Technical Metrics & Functional Modules'}</h3>
      <p>${data.techGroupsIntro || ''}</p>
      <div class="tech-accordion-grid">
        ${data.techGroups.map(group => `
          <details class="tech-detail" open>
            <summary>${group.title}</summary>
            ${group.intro ? `<p>${group.intro}</p>` : ''}
            <ul>${(group.items || []).map(item => `<li>${item}</li>`).join('')}</ul>
          </details>
        `).join('')}
      </div>
    </section>
  ` : '';

  if (data.chapters) {
    chapterView.classList.add('active');
    chapterView.innerHTML = `
      <div class="case-chapter-hero">
        <div class="case-chapter-title">
          <span>${data.category}</span>
          <h2>${data.title}</h2>
          <p>${data.intro1 || ''}</p>
          ${data.intro2 ? `<p>${data.intro2}</p>` : ''}
        </div>
        <div class="case-chapter-summary">
          <h3>${data.coreTitle || 'Core Message'}</h3>
          ${(data.coreMessages || []).map(message => `<p><strong>${message.title}</strong><br>${message.body}</p>`).join('')}
        </div>
      </div>
      ${data.problemApproach ? `
        <section class="problem-approach-board" aria-label="Problem and approach mapping">
          <h3>${data.problemApproachTitle || 'Problem → Approach'}</h3>
          <div class="problem-approach-grid">
            ${data.problemApproach.map(item => `
              <div class="problem-approach-row">
                <div class="problem-approach-card"><span>Problem / Challenge</span><h4>${item.problemTitle}</h4><p>${item.problem}</p></div>
                <div class="problem-approach-arrow">→</div>
                <div class="problem-approach-card"><span>Product / System Approach</span><h4>${item.approachTitle}</h4><p>${item.approach}</p></div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}
      ${data.imageStoryPosition === 'afterChapters' ? '' : renderImageStory()}
      <div class="chapter-grid">
        ${data.chapters.map(chapter => `
          <article class="chapter-card ${chapter.title === 'Skills Demonstrated' ? 'skills-card' : ''}">
            <header><h3>${chapter.title}</h3></header>
            <p>${chapter.summary}</p>
            <ul>${chapter.title === 'Skills Demonstrated'
              ? chapter.points.flatMap(point => point.replace(/\.$/, '').split(/,\s*/)).map(skill => `<li>#${skill.trim().replace(/\s+/g, '')}</li>`).join('')
              : chapter.points.map(point => `<li>${point}</li>`).join('')}</ul>
          </article>
        `).join('')}
      </div>
      ${data.imageStoryPosition === 'afterChapters' ? renderImageStory() : ''}
      ${renderTechGroups()}
    `;
  }

  if (data.announcementImages) {
    announcementGallery.classList.add('active');
    announcementGallery.innerHTML = `
      <div class="website-gallery-header">
        <h3>${data.announcementTitle || 'Announcement Flow'}</h3>
        <p>${data.announcementDescription || ''}</p>
      </div>
      <div class="website-grid">
        ${data.announcementImages.map((image, index) => `
          <figure class="browser-frame">
            <div class="browser-bar"><i></i><i></i><i></i><span>0${index + 1} / ${image.caption}</span></div>
            <img src="/${image.src}" alt="${image.alt}">
          </figure>
        `).join('')}
      </div>
    `;
  }

  if (data.images) {
    websiteGallery.classList.add('active');
    websiteGallery.innerHTML = `
      <div class="website-gallery-header">
        <h3>${data.galleryTitle || 'Screens'}</h3>
        <p>${data.galleryDescription || ''}</p>
      </div>
      <div class="website-grid">
        ${data.images.map((image, index) => `
          <figure class="browser-frame">
            <div class="browser-bar"><i></i><i></i><i></i><span>0${index + 1} / ${image.caption}</span></div>
            <img src="/${image.src}" alt="${image.alt}">
          </figure>
        `).join('')}
      </div>
    `;
  }
})();
