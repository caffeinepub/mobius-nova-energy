import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TestSiteApplication {
    id: string;
    propertyType: PropertyType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    energySources: Array<EnergySource>;
    phone?: string;
    location: string;
}
export interface PartnershipInquiry {
    id: string;
    partnershipType: PartnershipType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    organization?: string;
}
export type Time = bigint;
export interface InvestorInquiry {
    id: string;
    name: string;
    email: string;
    company?: string;
    message: string;
    timestamp: Time;
    investmentRange: InvestmentRange;
}
export interface GeneralInquiry {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export enum EnergySource {
    both = "both",
    wind = "wind",
    waterStream = "waterStream"
}
export enum InvestmentRange {
    over250k = "over250k",
    range_10k_50k = "range_10k_50k",
    under10k = "under10k",
    range_50k_250k = "range_50k_250k"
}
export enum PartnershipType {
    media = "media",
    other = "other",
    research = "research",
    technology = "technology",
    distribution = "distribution"
}
export enum PropertyType {
    commercial = "commercial",
    other = "other",
    farmAgricultural = "farmAgricultural",
    residential = "residential",
    industrial = "industrial",
    remoteOffGrid = "remoteOffGrid"
}
export interface backendInterface {
    adminClearAllData(): Promise<void>;
    adminDeleteEntry(entryType: string, id: string): Promise<boolean>;
    getAllInquiries(): Promise<{
        investors: Array<InvestorInquiry>;
        testSites: Array<TestSiteApplication>;
        partners: Array<PartnershipInquiry>;
        general: Array<GeneralInquiry>;
    }>;
    getGeneralInquiries(): Promise<Array<GeneralInquiry>>;
    getInvestorInquiries(): Promise<Array<InvestorInquiry>>;
    getPartnershipInquiries(): Promise<Array<PartnershipInquiry>>;
    getTestSiteApplications(): Promise<Array<TestSiteApplication>>;
    submitGeneralInquiry(name: string, email: string, message: string): Promise<string>;
    submitInvestorInquiry(name: string, email: string, company: string | null, investmentRange: InvestmentRange, message: string): Promise<string>;
    submitPartnershipInquiry(name: string, email: string, organization: string | null, partnershipType: PartnershipType, message: string): Promise<string>;
    submitTestSiteApplication(name: string, email: string, phone: string | null, location: string, propertyType: PropertyType, energySources: Array<EnergySource>, message: string): Promise<string>;
}
