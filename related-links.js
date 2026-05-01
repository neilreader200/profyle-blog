(function(){
  if (document.getElementById('p-related-links')) return;
  var path = location.pathname.replace(/\/+$/,'') || '/';
  var maps = {
    '/why-your-linkedin-photo-matters': {title: 'Take it further', links: [['/professional-headshots-uk/', 'The complete 2026 UK guide to professional headshots'],['/profyle-vs-headshotpro/', 'How Profyle compares to HeadshotPro for UK pros'],['/london-headshots/', 'Headshots for London-based professionals'],['/profyle-vs-photographer/', 'AI service or traditional photographer — when each wins']]},
    '/corporate-teams-professional-headshots': {title: 'Related reading', links: [['/professional-headshots-uk/', 'The complete UK guide — including team workflows'],['/profyle-vs-betterpic/', 'BetterPic compared on team rollouts and bulk pricing'],['/birmingham-headshots/', 'Birmingham professional headshots — Colmore Row + Brindleyplace'],['/manchester-headshots/', 'Manchester team headshots — Spinningfields and MediaCityUK']]},
    '/estate-agents-profile-photo-costing-listings': {title: 'Keep reading', links: [['/professional-headshots-uk/', 'The full UK headshot guide — estate agents covered'],['/profyle-vs-photographer/', 'When the studio session is and is not worth it'],['/london-headshots/', 'London estate agent headshots — Knight Frank to Foxtons'],['/profyle-vs-aragon/', 'Aragon AI compared — UK vs US for property professionals']]},
    '/nhs-professional-profile-photo': {title: 'Related guides', links: [['/professional-headshots-uk/', 'The complete UK headshot guide — NHS section'],['/edinburgh-headshots/', 'Edinburgh NHS and Royal College of Physicians headshots'],['/profyle-vs-secta-labs/', 'Secta Labs compared — premium tier vs Profyle for healthcare'],['/manchester-headshots/', 'Manchester NHS headshots — Greater Manchester trust pages']]},
    '/perfect-headshot-what-recruiters-look-for': {title: 'More on the recruiter eye', links: [['/professional-headshots-uk/', 'The full UK guide — recruiter-facing photos'],['/profyle-vs-headshotpro/', 'HeadshotPro vs Profyle for the candidate market'],['/london-headshots/', 'London headshots — what City recruiters expect'],['/profyle-vs-betterpic/', 'BetterPic vs Profyle on recruiter-facing styling']]},
    '/solicitors-barristers-professional-image': {title: 'Further reading for legal professionals', links: [['/professional-headshots-uk/', 'The complete UK headshot guide — solicitor section'],['/london-headshots/', 'London legal headshots — Magic Circle through to high street'],['/profyle-vs-photographer/', 'Studio photographer vs Profyle for partner-page photos'],['/edinburgh-headshots/', 'Edinburgh — the Faculty of Advocates and Scottish firms']]},
    '/teachers-academics-professional-profile': {title: 'Related guides for educators', links: [['/professional-headshots-uk/', 'The full UK headshot guide — teaching and academic context'],['/edinburgh-headshots/', 'Edinburgh — the universities and academic publishing'],['/profyle-vs-aragon/', 'Aragon AI compared — research-grade headshots'],['/profyle-vs-secta-labs/', 'Secta Labs vs Profyle — premium output for academic profiles']]},
    '/welcome': {title: 'Browse the guides', links: [['/professional-headshots-uk/', 'Start with the complete 2026 UK headshot guide'],['/profyle-vs-photographer/', 'AI vs a real photographer — when each wins'],['/london-headshots/', 'Professional headshots in London'],['/profyle-vs-headshotpro/', 'Profyle vs HeadshotPro — UK comparison']]}
  };
  var entry = maps[path];
  if (!entry) return;
  var section = document.createElement('section');
  section.id = 'p-related-links';
  section.style.cssText = 'margin: 56px 0 0; padding: 28px 32px; background: #f7f7f9; border-radius: 14px; font-size: .96rem;';
  section.innerHTML = '<h3 style="margin: 0 0 14px; font-size: 1rem; text-transform: uppercase; letter-spacing: .8px; color: #555;">' + entry.title + '</h3><ul style="list-style: none; padding: 0; margin: 0;">' + entry.links.map(function(link){return '<li style="margin-bottom: 10px;"><a style="color: #0066ff; text-decoration: none; font-weight: 500;" href="' + link[0] + '">→ ' + link[1] + '</a></li>';}).join('') + '</ul>';
  var footer = document.querySelector('footer');
  if (footer) footer.parentNode.insertBefore(section, footer); else document.body.appendChild(section);
})();
