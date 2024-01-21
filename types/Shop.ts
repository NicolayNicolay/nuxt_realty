export default interface Shop {
  id: number;
  name: string;
  address: string;
  cityName: string;
  hasCourier: boolean;
  hasRepair: boolean;
  hasSotafix: boolean;
  stopSale: boolean;
  openingSoon: boolean;
  isDiagnosticAvailable: boolean;
  isSelfDeliveryAvailable: boolean;
  isCourierAvailable: boolean;
  mapPoint: string[];
  phones: string[];
  workTime: string;
  deliveryTimeFromAdditional: number;
}
