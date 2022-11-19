import { Institution } from './Institution';
import { IConfiguration } from '../types/configuration';
import { IModule } from '../types/module';
import { markRaw } from 'vue';

export type HandPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export class Configuration {
  private forceOpen = false;

  static create(): Configuration {
    return new Configuration(
      'en',
      '112',
      'bottom-right',
      true,
      '#ffffff',
      new Institution(
        'dummy-institution',
        'dummy institution',
        'dummy number',
        'dummy info'
      )
    );
  }

  static createLegacy(data: IConfiguration): Configuration {
    console.warn(
      'You are using a deprecated snippet... Please checkout vida repository on github to get a more recent snippet: https://github.com/turbine-kreuzberg/vida/'
    );

    const position = data.widget.position;

    if (
      position !== 'bottom-left' &&
      position !== 'bottom-right' &&
      position !== 'top-right' &&
      position !== 'top-left'
    ) {
      throw new Error('Invalid widget position given.');
    }

    return new Configuration(
      data.language,
      data.emergencyNumber,
      position,
      data.widget.showHand,
      '#d9e34c',
      new Institution(
        data.institution.name,
        data.institution.name,
        data.institution.phone,
        data.institution.information,
        data.institution.chat
      )
    );
  }

  constructor(
    private language: string,
    private emergencyNumber: string,
    private handPosition: HandPosition,
    private handVisible: boolean,
    private handColor: string,
    private institution: Institution,
    private visible: boolean = false,
    private activeModule: IModule | null = null
  ) {}

  getLanguage(): string {
    return this.language;
  }

  setLanguage(language: string): this {
    this.language = language;
    return this;
  }

  getEmergencyNumber(): string {
    return this.emergencyNumber;
  }

  setEmergencyNumber(emergencyNumber: string): this {
    this.emergencyNumber = emergencyNumber;
    return this;
  }

  getHandPosition(): HandPosition {
    return this.handPosition;
  }

  setHandPosition(handPosition: string): this {
    if (
      handPosition !== 'bottom-left' &&
      handPosition !== 'bottom-right' &&
      handPosition !== 'top-right' &&
      handPosition !== 'top-left'
    ) {
      throw new Error('Invalid widget position given.');
    }

    this.handPosition = handPosition;
    return this;
  }

  getHandColor(): string {
    return this.handColor;
  }

  setHandColor(handColor: string): this {
    this.handColor = handColor;
    return this;
  }

  isHandVisible(): boolean {
    return this.handVisible;
  }

  setHandVisible(handVisible: boolean): this {
    this.handVisible = handVisible;
    return this;
  }

  getInstitution(): Institution {
    return this.institution;
  }

  setInstitution(institution: Institution): this {
    this.institution = institution;
    return this;
  }

  isVisible(): boolean {
    return this.visible;
  }

  open(): this {
    this.visible = true;
    return this;
  }

  close(): this {
    this.visible = false;
    return this;
  }

  hasActiveModule(): boolean {
    return !!this.activeModule;
  }

  getActiveModule(): IModule {
    if (!this.activeModule) {
      throw new Error('No active module available. Use hasActiveModule for checking.');
    }
    return this.activeModule;
  }

  setActiveModule(module: IModule | null): this {
    this.activeModule = module
      ? { component: markRaw(module.component), props: module.props }
      : null;
    return this;
  }

  isForceOpen(): boolean {
    return this.forceOpen;
  }

  setForceOpen(forceOpen: boolean): this {
    this.forceOpen = forceOpen;
    return this;
  }
}
