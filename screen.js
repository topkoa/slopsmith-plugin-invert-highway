(function () {
    'use strict';

    const toggle = document.getElementById('invert-highway-toggle');
    if (!toggle) return;

    // Sync checkbox with current state
    toggle.checked = highway.getInverted();

    toggle.addEventListener('change', () => {
        highway.setInverted(toggle.checked);
    });
})();
