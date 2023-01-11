export class BadRequestHttpException {
  statusCode = 400;

  message: string[];

  error = 'Bad Request';
}
