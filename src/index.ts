type dummyJson = {
  message: string
};

/**
 * @return {dummyJson} Returns a dummy JSON.
 */
export default function getDummyJson(): dummyJson {
  return {
    message: 'Hello, World!'
  };
}
