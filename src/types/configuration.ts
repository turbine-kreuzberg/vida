export interface IConfiguration {
  language: string;
  emergencyNumber: string;
  renderBadge?: boolean;
  widgetPosition?: string;
  institution: {
    name: string;
    phone: string;
    information: string;
    chat?: string | null;
  };
}
