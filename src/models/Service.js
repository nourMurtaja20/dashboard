class Service {
    id;
    serviceName;
    description;
    details;
    guidance;
    WhyChooseUs;
    Pricing;
    questions;
    isSave;
    constructor(serviceName, description, details, guidance, WhyChooseUs, Pricing) {
        this.serviceName = serviceName;
        this.description = description;
        this.details = details;
        this.guidance = guidance;
        this.WhyChooseUs = WhyChooseUs;
        this.Pricing = Pricing;
        // this.questions = [];
        // this.isSave = false;
    }
}
export default Service;