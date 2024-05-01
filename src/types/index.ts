// Home Page
export type FeaturedData = {
  publishedAt: string;
  title: string;
  source: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  slug: {
    current: string;
  }
};

export type LandingCardData = {
  cardTitle: string;
  cardBody: string;
  buttonText: string;
  image: string;
  link: string;
  instance?: unknown;
  toggleWebChat?: () => void;
};

// About Us
export type ProfileCardProps = {
  image: string;
  company: string;
  name: string;
  link: string;
};

export type CarousselProps = {
  image: string;
  title: string;
  name: string;
  link: string;
};

// Compliance Issues
export type CountrySelect = "rwanda" | "uganda" | "kenya";
export type CountryKey = {
  code: string;
  name: CountrySelect;
  flag: string;
};

export interface CountryInfo {
  description: string;
  tags: string[];
}

export interface DetailedComplianceIssuesChildren {
  id: number;
  icon: JSX.Element;
  title: string;
  country: Partial<Record<CountrySelect, CountryInfo>>;
}

export type DetailedComplianceIssuesData = {
  id: string;
  topic: string;
  altTopic: string;
  children: DetailedComplianceIssuesChildren[];
};

export type ComplianceIssuesData = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

// news
export type NewsData = {
  banner: string;
  title: string;
  id: number;
  subheading: string;
  body: string;
};

// case Studies
export type ExpandCardProps = {
  icon: JSX.Element;
  title: string;
  country: string;
  description: string;
  source: string;
};

export type BlogCardProps = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  body: {
    _type: string;
    _key: string;
    style: string;
    children: [];
    markDefs: [];
  }[];
  name: string;
  authorImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  // subheading?: string;
  source?: string;
};

export type BlogPostType = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  body?: {
    _type: string;
    _key: string;
    style: string;
    children: [];
    markDefs: [];
  }[];
  subheading?: string;
  source?: string;
};
