export function useGeoLocation() {
  const geolocation = navigator.geolocation || null;

  let allowedHandler = (position: GeolocationPosition) => position;
  let disallowedHandler = (error: GeolocationPositionError) => error;

  const init = () => {
    geolocation?.getCurrentPosition(allowedHandler, disallowedHandler);
  };

  const onAllowed = (handler: (position: GeolocationPosition) => any) => {
    allowedHandler = handler;
  };
  const onDenied = (handler: (error: GeolocationPositionError) => any) => {
    disallowedHandler = handler;
  };

  return {
    init,
    onAllowed,
    onDenied
  };
}
