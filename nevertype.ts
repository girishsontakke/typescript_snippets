function generateError(message: string, errorCode: number): never {
  throw { message: message, errorCode: errorCode };
}

generateError("error occured", 400);
