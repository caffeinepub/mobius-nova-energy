import Map "mo:core/Map";
import Time "mo:core/Time";

module {
  type EnergySource = {
    #wind;
    #waterStream;
    #both;
  };

  type PropertyType = {
    #residential;
    #farmAgricultural;
    #commercial;
    #industrial;
    #remoteOffGrid;
    #other;
  };

  type InquiryType = {
    #investment;
    #partnership;
    #general;
  };

  type InvestmentRange = {
    #under10k;
    #range_10k_50k;
    #range_50k_250k;
    #over250k;
  };

  type PartnershipType = {
    #technology;
    #distribution;
    #research;
    #media;
    #other;
  };

  type TestSiteApplication = {
    id : Text;
    name : Text;
    email : Text;
    phone : ?Text;
    location : Text;
    propertyType : PropertyType;
    energySources : [EnergySource];
    message : Text;
    timestamp : Time.Time;
  };

  type InvestorInquiry = {
    id : Text;
    name : Text;
    email : Text;
    company : ?Text;
    investmentRange : InvestmentRange;
    message : Text;
    timestamp : Time.Time;
  };

  type PartnershipInquiry = {
    id : Text;
    name : Text;
    email : Text;
    organization : ?Text;
    partnershipType : PartnershipType;
    message : Text;
    timestamp : Time.Time;
  };

  type GeneralInquiry = {
    id : Text;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type OldActor = {};
  type NewActor = {
    testSiteApplications : Map.Map<Text, TestSiteApplication>;
    investorInquiries : Map.Map<Text, InvestorInquiry>;
    partnershipInquiries : Map.Map<Text, PartnershipInquiry>;
    generalInquiries : Map.Map<Text, GeneralInquiry>;
  };

  public func run(old : OldActor) : NewActor {
    {
      testSiteApplications = Map.empty<Text, TestSiteApplication>();
      investorInquiries = Map.empty<Text, InvestorInquiry>();
      partnershipInquiries = Map.empty<Text, PartnershipInquiry>();
      generalInquiries = Map.empty<Text, GeneralInquiry>();
    };
  };
};
