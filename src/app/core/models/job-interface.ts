export interface JobInterface { 
    DOI: string;
    ISSN: Array<string>;
    URL: string;
    "alternative-id": Array<string>;
    author: Array<{given: string,family: string}>;
    "container-title": Array<string>;
    "content-domain": Object;
    created: {
        "date-time": string;
    };
    deposited: Object;
    indexed: Object;
    "is-referenced-by-count": number;
    "issn-type": Object;
    issue:string;
    issued: Object; 
    "journal-issue": Object;
    language: string;
    license: Array<any>;
    link: Array<Object>;
    member: string; 
    page: string;
    prefix: string;
    published: string; 
    "published-print": Object;
    publisher: string;
    reference: Array<{unstructured: string; author: string;}>;
    "reference-count": number;
    "references-count": number;
    score: number;
    "short-container-title": Array<string>;
    source: string;
    subject: Array<string>;
    title: Array<string>;
    type: string;
    volume: string;

}  

export interface APIResponse<T>{
    message: {
        items: Array<T>;
        "total-results":number;
    };
}

export interface JobProps{
    search?: string;
    offset: number;
}