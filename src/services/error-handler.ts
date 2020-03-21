export const asyncErrorHandlerGenerator = (
  errorCallback: (e: Error) => void
) => async (callback: () => Promise<void>) => {
  try {
    await callback();
  } catch (e) {
    errorCallback(e);
  }
};
