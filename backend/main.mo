import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Migration "migration";
import MixinStorage "blob-storage/Mixin";

(with migration = Migration.run)
actor {
  include MixinStorage();

  public type EnergySource = {
    #wind;
    #waterStream;
    #both;
  };

  public type PropertyType = {
    #residential;
    #farmAgricultural;
    #commercial;
    #industrial;
    #remoteOffGrid;
    #other;
  };

  public type InquiryType = {
    #investment;
    #partnership;
    #general;
  };

  public type InvestmentRange = {
    #under10k;
    #range_10k_50k;
    #range_50k_250k;
    #over250k;
  };

  public type PartnershipType = {
    #technology;
    #distribution;
    #research;
    #media;
    #other;
  };

  public type TestSiteApplication = {
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

  public type InvestorInquiry = {
    id : Text;
    name : Text;
    email : Text;
    company : ?Text;
    investmentRange : InvestmentRange;
    message : Text;
    timestamp : Time.Time;
  };

  public type PartnershipInquiry = {
    id : Text;
    name : Text;
    email : Text;
    organization : ?Text;
    partnershipType : PartnershipType;
    message : Text;
    timestamp : Time.Time;
  };

  public type GeneralInquiry = {
    id : Text;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let testSiteApplications = Map.empty<Text, TestSiteApplication>();
  let investorInquiries = Map.empty<Text, InvestorInquiry>();
  let partnershipInquiries = Map.empty<Text, PartnershipInquiry>();
  let generalInquiries = Map.empty<Text, GeneralInquiry>();

  func generateId(prefix : Text) : Text {
    prefix # "_" # Time.now().toText();
  };

  public shared ({ caller }) func submitTestSiteApplication(name : Text, email : Text, phone : ?Text, location : Text, propertyType : PropertyType, energySources : [EnergySource], message : Text) : async Text {
    if (name == "" or email == "" or location == "") {
      Runtime.trap("Name, email, and location are required.");
    };

    let application : TestSiteApplication = {
      id = generateId("testsite");
      name;
      email;
      phone;
      location;
      propertyType;
      energySources;
      message;
      timestamp = Time.now();
    };

    testSiteApplications.add(application.id, application);
    application.id;
  };

  public shared ({ caller }) func submitInvestorInquiry(name : Text, email : Text, company : ?Text, investmentRange : InvestmentRange, message : Text) : async Text {
    if (name == "" or email == "") {
      Runtime.trap("Name and email are required.");
    };

    let inquiry : InvestorInquiry = {
      id = generateId("investor");
      name;
      email;
      company;
      investmentRange;
      message;
      timestamp = Time.now();
    };

    investorInquiries.add(inquiry.id, inquiry);
    inquiry.id;
  };

  public shared ({ caller }) func submitPartnershipInquiry(name : Text, email : Text, organization : ?Text, partnershipType : PartnershipType, message : Text) : async Text {
    if (name == "" or email == "") {
      Runtime.trap("Name and email are required.");
    };

    let inquiry : PartnershipInquiry = {
      id = generateId("partner");
      name;
      email;
      organization;
      partnershipType;
      message;
      timestamp = Time.now();
    };

    partnershipInquiries.add(inquiry.id, inquiry);
    inquiry.id;
  };

  public shared ({ caller }) func submitGeneralInquiry(name : Text, email : Text, message : Text) : async Text {
    if (name == "" or email == "") {
      Runtime.trap("Name and email are required.");
    };

    let inquiry : GeneralInquiry = {
      id = generateId("general");
      name;
      email;
      message;
      timestamp = Time.now();
    };

    generalInquiries.add(inquiry.id, inquiry);
    inquiry.id;
  };

  public query ({ caller }) func getTestSiteApplications() : async [TestSiteApplication] {
    testSiteApplications.values().toArray();
  };

  public query ({ caller }) func getInvestorInquiries() : async [InvestorInquiry] {
    investorInquiries.values().toArray();
  };

  public query ({ caller }) func getPartnershipInquiries() : async [PartnershipInquiry] {
    partnershipInquiries.values().toArray();
  };

  public query ({ caller }) func getGeneralInquiries() : async [GeneralInquiry] {
    generalInquiries.values().toArray();
  };

  public shared ({ caller }) func adminClearAllData() : async () {
    testSiteApplications.clear();
    investorInquiries.clear();
    partnershipInquiries.clear();
    generalInquiries.clear();
  };

  public shared ({ caller }) func adminDeleteEntry(entryType : Text, id : Text) : async Bool {
    switch (entryType) {
      case ("testsite") {
        if (testSiteApplications.containsKey(id)) {
          testSiteApplications.remove(id);
          true;
        } else { Runtime.trap("Test site application not found.") };
      };
      case ("investor") {
        if (investorInquiries.containsKey(id)) {
          investorInquiries.remove(id);
          true;
        } else { Runtime.trap("Investor inquiry not found.") };
      };
      case ("partner") {
        if (partnershipInquiries.containsKey(id)) {
          partnershipInquiries.remove(id);
          true;
        } else { Runtime.trap("Partnership inquiry not found.") };
      };
      case ("general") {
        if (generalInquiries.containsKey(id)) {
          generalInquiries.remove(id);
          true;
        } else { Runtime.trap("General inquiry not found.") };
      };
      case (_) {
        Runtime.trap("Unknown entry type");
      };
    };
  };

  public query ({ caller }) func getAllInquiries() : async {
    testSites : [TestSiteApplication];
    investors : [InvestorInquiry];
    partners : [PartnershipInquiry];
    general : [GeneralInquiry];
  } {
    {
      testSites = testSiteApplications.values().toArray();
      investors = investorInquiries.values().toArray();
      partners = partnershipInquiries.values().toArray();
      general = generalInquiries.values().toArray();
    };
  };
};
