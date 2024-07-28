export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Aadhar Card",
  "Passport",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/images/docMale1.jpeg",
    name: "Dr. Sunil Pathak",
    title: "Urologist",
    description:
      "An experienced urologist adept in minimally invasive surgeries and male reproductive health. Preferred timings: Wednesday and Friday, 2 PM - 5 PM.",
  },
  {
    image: "/images/docFem1.jpeg",
    name: "Dr. Leila Cameron",
    title: "Cardiologist",
    description:
      "A renowned cardiologist with over 15 years of experience, Dr. Cameron specializes in treating complex heart conditions. Preferred timings: Monday to Friday, 9 AM - 12 PM.",
  },
  {
    image: "/images/docMale2.jpeg",
    name: "Dr. Shekhar Sinha ",
    title: "ENT specialist",
    description:
      " A proficient ENT specialist treating disorders of the ear, nose, and throat. Preferred timings: Monday to Friday, 4 PM - 7 PM.",
  },
  {
    image: "/images/docMale3.jpeg",
    name: "Dr. Rohan Shetty ",
    title: "Psychiatrist",
    description:
      "A distinguished psychiatrist with expertise in mental health and wellness. Preferred timings: Tuesday and Thursday, 11 AM - 2 PM.",
  },
  {
    image: "/images/docFem2.jpeg",
    name: "Dr. Priya Nair",
    title: "Pediatrician",
    description:
      " An expert pediatrician known for her compassionate care and expertise in child health. Preferred timings: Monday, Wednesday, and Friday, 2 PM - 6 PM.",
  },
  {
    image: "/images/docMale4.jpeg",
    name: "Dr. Vivek Agnihotri",
    title: "Neurologist",
    description:
      "A seasoned neurologist specializing in the diagnosis and treatment of neurological disorders. Preferred timings: Monday to Friday, 10 AM - 1 PM.",
  },
  {
    image: "/images/docFem3.jpeg",
    name: "Dr. Shipa Dwivedi",
    title: "Orthopedic Surgeon",
    description:
      "An orthopedic surgeon with extensive experience in joint replacement and sports injuries. Preferred timings: Monday, Wednesday, and Friday, 11 AM - 3 PM.",
  },
  {
    image: "/images/docFem4.jpeg",
    name: "Dr. Sonali Singh",
    title: "Gynecologist",
    description:
      "A leading gynecologist focusing on women’s health, including prenatal and postnatal care. Preferred timings: Tuesday and Thursday, 10 AM - 1 PM.",
  },
  {
    image: "/images/docMale5.jpeg",
    name: "Dr. Prashant Dwivedi",
    title: "Gastroenterologist",
    description:
      " A highly respected gastroenterologist specializing in digestive system disorders and liver diseases. Preferred timings: Monday, Wednesday, and Friday, 8 AM - 11 AM.",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
