class Template {
    id;
    name;
    conceptNote;
    scope;
    type;
    Reference;
    path;
    constructor(name, conceptNote, scope, type, Reference, path) {
        this.name = name;
        this.conceptNote = conceptNote;
        this.scope = scope;
        this.type = type;
        this.Reference = Reference;
        this.path = path;
    }
}
export default Template;