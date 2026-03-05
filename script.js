window.onload = () => {
    const $ = id => document.getElementById(id);
    const go = url => location.href = url;
    document.querySelectorAll('.nav-button').forEach((b, i) => b.onclick = () => go(['index.html', 'facilities.html', 'packages.html', 'contact.html'][i]));
    document.querySelectorAll('.card-box').forEach((c, i) => c.onclick = () => go(['facilities.html', 'other-facilities.html', 'packages.html'][i]));

    if ($('go-to-other')) $('go-to-other').onclick = () => go('other-facilities.html');
    if ($('go-to-custom')) $('go-to-custom').onclick = () => go('custom-packages.html');
    if ($('go-to-contact')) $('go-to-contact').onclick = () => go('contact.html');
    
    const toggleMenu = () => { $('settings-sidebar').classList.toggle('active'); $('sidebar-overlay').classList.toggle('active'); };
    if ($('open-settings')) $('open-settings').onclick = toggleMenu;
    if ($('close-sidebar')) $('close-sidebar').onclick = toggleMenu;

    if ($('dark-mode-toggle')) {
        if (localStorage.theme === 'dark') { document.body.classList.add('dark-mode'); $('dark-mode-toggle').checked = true; }
        $('dark-mode-toggle').onchange = () => { 
            document.body.classList.toggle('dark-mode'); 
            localStorage.theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light'; 
        };
    }
    if ($('contact-form')) $('contact-form').onsubmit = e => { e.preventDefault(); alert("سوف نتواصل معك في اقرب وقت"); $('contact-form').reset(); };
};