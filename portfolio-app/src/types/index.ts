export interface Experience {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    link: string;
}

export interface ContactInfo {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
}