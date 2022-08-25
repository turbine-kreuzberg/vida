export interface IConfiguration {
  language: string;
  emergencyNumber: string;
  institution: {
    name: string;
    phone: string;
    information: string;
    chat?: string | null;
  };
}
