/**
 * @deprecated don't use as we have a dedicated model for configuration
 */
export interface IConfiguration {
  language: string;
  emergencyNumber: string;
  institution: {
    name: string;
    phone: string;
    information: string;
    chat?: string | null;
  };
  widget: {
    showHand: boolean;
    position: string;
  };
}
