export class DomainSheet extends ActorSheet {
    get template() {
        return `modules/wfrp4e-domain-management/templates/domain.html`;
    }

    // Override the default options for the sheet
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wfrp4e", "sheet", "actor", "domain"],
            width: 600,
            height: 600,
        });
    }

    // Override the data preparation logic
    getData() {
        const data = super.getData();
        // Add any additional data you need for your sheet here
        return data;
    }
}