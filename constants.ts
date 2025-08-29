
import type { SlideData } from './types';

export const presentationData: SlideData[] = [
  {
    slideNumber: 1,
    title: "A New Paradigm for Public Education",
    subtitle: "Merging Social Impact with Strategic Investment in the UAE",
    presenter: "Presented by Karem Hamdi, Visionary & Founder",
    keyContent: { type: 'custom', slideNumber: 1 }
  },
  {
    slideNumber: 2,
    title: "Redefining Excellence: Our Vision & The Human Behind It",
    keyContent: [
      "Goal: Establish a free, world-class 'luxury' primary school for Emirati students.",
      "Model: Pioneering Public-Private Partnership (PPP).",
      "Dual Purpose: Profound philanthropic community service & strategic, long-term investment.",
      "Alignment: 'We the UAE 2031' & Centennial 2071.",
      "The Visionary: Passion project of Karem Hamdi, driven by the belief that human insight must guide AI for rapid, beneficial progress. This is his foundational step towards a future where innovation serves humanity directly."
    ]
  },
  {
    slideNumber: 3,
    title: "The Hybrid Model: Private Efficiency, Public Benefit",
    keyContent: [
      "Leverages private sector management (build & operate).",
      "State-of-the-art facilities, cutting-edge technology, innovative pedagogy.",
      "Holistic, student-centric curriculum – at no cost to families.",
      "Benchmark: Highest international private school standards."
    ]
  },
  {
    slideNumber: 4,
    title: "Financial Stability: The Availability Payment Concession PPP",
    keyContent: [
      "Structure: Availability Payment Concession PPP (proven in UAE, federally supported).",
      "Risk Transfer: Financial, design, construction risks to private partner.",
      "Guaranteed Returns: Predictable, long-term (25-30 years) revenue stream from government.",
      "Enhanced by: Social enterprise/philanthropic foundation (CSR, donations for 'luxury' features).",
      "Precedent: UAE PPPs yield 12-20% ROI annually."
    ]
  },
  {
    slideNumber: 5,
    title: "National Mandate: Education for a Knowledge Economy",
    keyContent: [
      "UAE prioritizes education (16% federal spending).",
      "Focus on 21st-century skills: 'Education 2021,' New School Model (NSM).",
      "Key Example: Nationwide AI curriculum integration (KG-Grade 12).",
      "Government actively seeking private sector collaboration (Federal Decree-Law No. 12 of 2023 for PPPs).",
      "This project 'catches the train' of innovation, with human-guided AI at its core, ensuring UAE's leadership in future-ready education."
    ]
  },
  {
    slideNumber: 6,
    title: "Deconstructing 'Luxury': Beyond Traditional Education",
    keyContent: [
      "Infrastructure: State-of-the-art labs, theaters, Olympic pools, advanced sports facilities.",
      "Pedagogy: Diverse international curricula, low student-to-teacher ratios (11-12:1), personalized, project-based learning.",
      "Experiences: High-level extracurriculars (sailing, orchestra), unique collaborations (MIT, Juilliard).",
      "Tech Integration: 'iPad Schools' model, one-to-one devices, AI from KG, with a focus on human-guided learning."
    ]
  },
  {
    slideNumber: 7,
    title: "Our Distinctive Advantage: Bridging Public & Private Excellence",
    keyContent: {
      type: 'table',
      data: [
        { metric: "Fees", public: "Free", private: "Expensive", proposed: "Free" },
        { metric: "Curriculum", public: "National", private: "Int'l", proposed: "Hybrid: National + Global" },
        { metric: "Facilities", public: "Standard", private: "State-of-art", proposed: "World-class, Eco-friendly" },
        { metric: "Technology", public: "Growing Digital", private: "High-tech, 1:1", proposed: "1:1 Devices, AI, Human-Guided" },
        { metric: "Pedagogy", public: "Traditional", private: "Personalized", proposed: "Innovative, Student-centric" },
        { metric: "Student-Teacher Ratio", public: "~16:1", private: "~11-12:1", proposed: "Low & Personalized" },
        { metric: "Social Impact", public: "High Access", private: "Exclusive", proposed: "High Impact: Free Premium" },
      ]
    }
  },
  {
    slideNumber: 8,
    title: "A Sustainable Synergy: Social Service Meets Investment",
    keyContent: {
      type: 'venn',
      items: [
        { name: 'PPP Funds (Stability)', color: 'bg-sky-500' },
        { name: 'Philanthropy (Luxury)', color: 'bg-emerald-500' },
        { name: 'CSR Capital (Enhancement)', color: 'bg-amber-500' }
      ]
    }
  },
  {
    slideNumber: 9,
    title: "Action Plan: From Vision to Reality",
    keyContent: {
      type: 'timeline',
      data: [
        { phase: "01", title: "Target & Engage", description: "Select target Emirate (Abu Dhabi/Dubai), engage with ADEK/KHDA." },
        { phase: "02", title: "Unsolicited Proposal", description: "Submit detailed academic, operational, and financial plans." },
        { phase: "03", title: "Operational Excellence", description: "Recruit world-class teachers, integrate advanced, human-guided AI tech." }
      ]
    }
  },
  {
    slideNumber: 10,
    title: "Investing in the Future of the UAE: A Human-Guided Innovation",
    keyContent: [
      "Summary: Strategically sound, financially viable, aligns with national goals, high social impact.",
      "A Foundational Project: Where human creativity proactively guides technology for societal benefit.",
      "Call to Action: Partner with us to establish a globally recognized model for sustainable social-impact investment.",
      "Impact: Empower the next generation of Emirati leaders and demonstrate the power of human-led innovation."
    ]
  },
  {
    slideNumber: 11,
    title: "Thank You",
    subtitle: "Karem Hamdi\nVisionary & Founder\ncontact@visionary.uae\n+971 50 123 4567",
    keyContent: { type: 'custom', slideNumber: 11 }
  }
];
