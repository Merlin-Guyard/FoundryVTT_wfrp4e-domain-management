Hooks.on('renderActorSheet', function(sheet, html, data) {
    // Create a unique ID for the button
    const buttonId = `switch-to-domain-sheet-${sheet.actor.id}`;

    // Don't create a second button on re-renders
    if (!document.getElementById(buttonId)) {
        // Create the button
        const button = $(`<a id="${buttonId}" class="switch-to-domain-sheet-button">Switch to Domain Sheet</a>`);

        // When the button is clicked, switch to the DomainSheet
        button.on('click', function() {
            sheet.actor.setFlag('core', 'sheetClass', "wfrp4e-domain-management.DomainSheet");
            console.log(sheet.actor.getFlag('core', 'sheetClass'));
            sheet.render(true);
        });

        // Add the button to the actor's sheet
        html.find('.window-title').after(button);
    }
});